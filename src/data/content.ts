// Centralized content for the Student Aid Support Group LLC homepage.
// Keeping copy here makes future updates simple and prevents the JSX
// from filling up with hard-coded text.

export const brand = {
  name: 'Student Aid Support Group LLC',
  tagline: 'Supporting Students • Empowering Futures',
  phoneDisplay: '213-261-0646',
  phoneHref: 'tel:2132610646',
  email: 'studentaidsupportgroupllc@gmail.com',
  emailHref: 'mailto:studentaidsupportgroupllc@gmail.com',
  address: '5551 Hollywood Blvd, Los Angeles, CA 90028',
}

export const topBar = {
  text: 'Student Loan Guidance & Document Support',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Student Support Services', href: '/student-support-services' },
  { label: 'Groundwork Services', href: '/groundwork-services' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  eyebrow: brand.tagline,
  heading: 'Student Loan Guidance & Document Support',
  description:
    'Clear guidance and document support to help students and families better understand their federal student loan options.',
  primaryCta: { label: 'Book a Consultation', href: '/contact' },
  secondaryCta: { label: 'Learn How We Help', href: '/student-support-services' },
}

export const trustItems = [
  {
    title: 'Clear, Step-by-Step Guidance',
    description:
      'A simple process designed to help you understand each step without confusing jargon.',
  },
  {
    title: 'Personalized Support',
    description:
      'Your situation is reviewed individually so the next step fits your specific circumstances.',
  },
  {
    title: 'Serving Borrowers Nationwide',
    description:
      'We work with students and families across the United States from our Los Angeles office.',
  },
]

export const services = {
  heading: 'How We Can Help',
  description:
    'Practical support for students and families looking to better understand their federal student loan options.',
  items: [
    {
      icon: 'guide',
      title: 'Student Loan Guidance',
      description:
        'Understand your options and the steps that may apply to your situation.',
      href: '/student-support-services',
      linkLabel: 'Learn More',
    },
    {
      icon: 'document',
      title: 'Document Support',
      description:
        'Get organized assistance with forms, information, and required paperwork.',
      href: '/student-support-services',
      linkLabel: 'Learn More',
    },
    {
      icon: 'review',
      title: 'Groundwork Review',
      description:
        'Start with a clear review of your situation and possible next steps.',
      href: '/groundwork-services',
      linkLabel: 'Learn More',
    },
  ],
}

export const process = {
  heading: 'A Clearer Path Forward',
  description:
    'A simple, four-step approach so you always know what is happening and what comes next.',
  steps: [
    {
      number: '01',
      title: 'Share Your Information',
      description:
        'Tell us about your situation so we can understand what needs to be reviewed.',
    },
    {
      number: '02',
      title: 'Review Your Situation',
      description:
        'We look over the details you provide and identify the options that may apply.',
    },
    {
      number: '03',
      title: 'Understand Your Options',
      description:
        'We explain what each option means in plain language so you can decide what is right for you.',
    },
    {
      number: '04',
      title: 'Move Forward With Confidence',
      description:
        'You choose how to proceed with a clearer picture of your situation and the steps ahead.',
    },
  ],
}

export const cta = {
  heading: 'Questions About Your Student Loan Options?',
  description:
    'Tell us what you need help understanding. Our team can explain the next step in plain language.',
  buttonLabel: 'Contact Student Aid Support Group',
  href: '/contact',
}

export const footer = {
  description: brand.tagline,
  disclaimer:
    'Student Aid Support Group LLC is a private consulting company. We are not a lender, loan servicer, debt settlement company, or government agency. We do not provide legal, financial, or tax advice. Program availability and eligibility depend on applicable federal requirements. Results are not guaranteed.',
  devNote: 'Frontend prototype. Forms and backend features are not connected yet.',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Student Support Services', href: '/student-support-services' },
    { label: 'Groundwork Services', href: '/groundwork-services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
}
