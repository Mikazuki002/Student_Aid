import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'

// Field validation rules — must match ContactForm.tsx
const RULES = {
  firstName: { min: 2, max: 50 },
  lastName: { min: 2, max: 50 },
  email: { max: 254 },
  phone: { max: 25 },
  message: { min: 10, max: 1000 },
}

// RFC-5322-lite email pattern — matches client-side validation
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactPayload {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  consent: boolean
  honeypot?: string // Anti-bot field
}

interface ValidationError {
  field: string
  message: string
}

/**
 * Server-side validation — mirrors ContactForm.tsx rules exactly
 */
function validatePayload(payload: ContactPayload): ValidationError[] {
  const errors: ValidationError[] = []
  
  const firstName = payload.firstName?.trim() || ''
  const lastName = payload.lastName?.trim() || ''
  const email = payload.email?.trim() || ''
  const phone = payload.phone?.trim() || ''
  const message = payload.message?.trim() || ''

  // First name
  if (!firstName) {
    errors.push({ field: 'firstName', message: 'First name is required' })
  } else if (firstName.length < RULES.firstName.min || firstName.length > RULES.firstName.max) {
    errors.push({ field: 'firstName', message: `First name must be between ${RULES.firstName.min}-${RULES.firstName.max} characters` })
  }

  // Last name
  if (!lastName) {
    errors.push({ field: 'lastName', message: 'Last name is required' })
  } else if (lastName.length < RULES.lastName.min || lastName.length > RULES.lastName.max) {
    errors.push({ field: 'lastName', message: `Last name must be between ${RULES.lastName.min}-${RULES.lastName.max} characters` })
  }

  // Email
  if (!email) {
    errors.push({ field: 'email', message: 'Email is required' })
  } else if (email.length > RULES.email.max) {
    errors.push({ field: 'email', message: `Email must not exceed ${RULES.email.max} characters` })
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.push({ field: 'email', message: 'Email format is invalid' })
  }

  // Phone (optional, but has max length)
  if (phone.length > RULES.phone.max) {
    errors.push({ field: 'phone', message: `Phone must not exceed ${RULES.phone.max} characters` })
  }

  // Message
  if (!message) {
    errors.push({ field: 'message', message: 'Message is required' })
  } else if (message.length < RULES.message.min || message.length > RULES.message.max) {
    errors.push({ field: 'message', message: `Message must be between ${RULES.message.min}-${RULES.message.max} characters` })
  }

  // Consent
  if (!payload.consent) {
    errors.push({ field: 'consent', message: 'Consent is required' })
  }

  return errors
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    })
  }

  // CORS headers for production
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  try {
    const payload: ContactPayload = req.body

    // Honeypot check — if filled, silently reject (fake success to fool bots)
    if (payload.honeypot && payload.honeypot.trim() !== '') {
      console.log('[HONEYPOT] Bot detected, silently rejecting')
      return res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message. We will be in touch soon.' 
      })
    }

    // Server-side validation
    const validationErrors = validatePayload(payload)
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'Validation failed',
        errors: validationErrors 
      })
    }

    // Initialize Supabase client with service_role key (server-side only)
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('[CONFIG ERROR] Missing Supabase environment variables')
      return res.status(500).json({ 
        success: false, 
        error: 'Server configuration error' 
      })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert lead into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          first_name: payload.firstName.trim(),
          last_name: payload.lastName.trim(),
          email: payload.email.trim().toLowerCase(),
          phone: payload.phone.trim() || null,
          message: payload.message.trim(),
          consent: payload.consent,
        },
      ])
      .select()

    if (error) {
      console.error('[SUPABASE ERROR]', error)
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to save your message. Please try again.' 
      })
    }

    console.log('[SUCCESS] Lead saved:', data?.[0]?.id)

    // Send email notification via Resend (additive, don't fail if this fails)
    try {
      const resendApiKey = process.env.RESEND_API_KEY
      if (resendApiKey) {
        const resend = new Resend(resendApiKey)
        
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'studentaidsupportgroupllc@gmail.com',
          subject: `New contact form submission — ${payload.firstName.trim()} ${payload.lastName.trim()}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${payload.firstName.trim()} ${payload.lastName.trim()}</p>
            <p><strong>Email:</strong> ${payload.email.trim()}</p>
            <p><strong>Phone:</strong> ${payload.phone.trim() || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${payload.message.trim().replace(/\n/g, '<br>')}</p>
          `,
        })
        
        console.log('[EMAIL] Notification sent successfully')
      } else {
        console.warn('[EMAIL] RESEND_API_KEY not configured, skipping notification')
      }
    } catch (emailError) {
      // Email failure should not block successful lead submission
      console.error('[EMAIL ERROR] Failed to send notification:', emailError)
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. We will be in touch soon.' 
    })

  } catch (err) {
    console.error('[UNEXPECTED ERROR]', err)
    return res.status(500).json({ 
      success: false, 
      error: 'An unexpected error occurred. Please try again.' 
    })
  }
}
