// Centralized content for the Student Aid Support Group LLC website.
// Keeping copy here makes future updates simple and prevents the JSX
// from filling up with hard-coded text.

export const brand = {
  name: 'Student Aid Support Group LLC',
  tagline: 'Supporting Students • Empowering Futures',
  phoneDisplay: '213-261-0646',
  phoneHref: 'tel:2132610646',
  email: 'help@studentaidsupport.us',
  emailHref: 'mailto:help@studentaidsupport.us',
  address: '5551 Hollywood Blvd, Los Angeles, CA 90028',
  hours: 'Monday–Friday, 8:00 AM–9:00 PM CST',
  ogImage: '/image_assets/Student_Aid_Logo.png', // Default OG image for social sharing
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

// ---------- Home page ----------

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

// ---------- Page titles ----------

export const pageTitles: Record<string, string> = {
  '/': 'Student Aid Support Group LLC | Student Loan Guidance',
  '/about': 'About | Student Aid Support Group LLC',
  '/student-support-services': 'Student Support Services | Student Aid Support Group LLC',
  '/groundwork-services': 'Groundwork Services | Student Aid Support Group LLC',
  '/contact': 'Contact | Student Aid Support Group LLC',
  '/privacy-policy': 'Privacy Policy | Student Aid Support Group LLC',
  '/terms-of-service': 'Terms of Service | Student Aid Support Group LLC',
}

// ---------- Meta descriptions (one per route, including 404) ----------

export const pageDescriptions: Record<string, string> = {
  '/': 'Student Aid Support Group LLC provides clear student loan guidance and document support for borrowers seeking organized information about their options.',
  '/about':
    'Learn about Student Aid Support Group LLC — a private consulting company offering student loan guidance, document support, and clear next-step explanations.',
  '/student-support-services':
    'Practical guidance and document support for borrowers trying to better understand their federal student loan options.',
  '/groundwork-services':
    'Begin with an organized review of your information so you can better understand your possible next steps.',
  '/contact':
    'Contact Student Aid Support Group LLC for student loan guidance and document support. Phone, email, and a secure contact form.',
  '/privacy-policy':
    'Privacy policy placeholder for Student Aid Support Group LLC. Final version pending legal review.',
  '/terms-of-service':
    'Terms of service placeholder for Student Aid Support Group LLC. Final version pending legal review.',
}

// ---------- About page ----------

export const about = {
  hero: {
    heading: 'About Student Aid Support Group LLC',
    text: 'Supporting students and families with clearer information, organized guidance, and practical document support.',
  },
  main: {
    heading: 'Guidance Built Around Clarity',
    text: 'Student Aid Support Group LLC is a private consulting company focused on helping people better understand student loan-related information and organize the paperwork connected to their next steps.',
  },
  values: {
    heading: 'What We Value',
    items: [
      {
        title: 'Clarity',
        text: 'We explain information in plain language so clients can make better-informed decisions.',
      },
      {
        title: 'Organization',
        text: 'We help clients understand what information and documents may be needed.',
      },
      {
        title: 'Transparency',
        text: 'We clearly explain the difference between public programs and private assistance.',
      },
      {
        title: 'Respect',
        text: 'We listen carefully and provide support without pressure.',
      },
    ],
  },
  process: {
    heading: 'How We Support You',
    description:
      'A four-step approach designed to make your experience organized and easy to follow.',
    steps: [
      { number: '01', title: 'Listen to your questions', description: 'We begin by listening so we understand what you are trying to learn.' },
      { number: '02', title: 'Review the information you provide', description: 'We go over what you share and identify the areas that may deserve further review.' },
      { number: '03', title: 'Explain possible paths and next steps', description: 'We walk you through what each option could mean for your situation.' },
      { number: '04', title: 'Help you stay organized', description: 'We help you keep documents and questions in order so next steps are easier to manage.' },
    ],
  },
  disclaimer:
    'Eligibility depends on applicable federal requirements. Results are not guaranteed. Student Aid Support Group LLC is a private consulting company and is not a government agency, lender, loan servicer, or debt settlement company.',
}

// ---------- Student Support Services page ----------

export const studentSupport = {
  hero: {
    title: 'Student Support Services',
    text: 'Practical guidance and document support for people trying to better understand their student loan options.',
  },
  whatWeHelpWith: {
    heading: 'What We Help With',
    items: [
      {
        title: 'Information Review',
        text: 'Organize the basic information needed to understand your situation.',
      },
      {
        title: 'Program Understanding',
        text: 'Learn about repayment and forgiveness-related programs that may be relevant to your circumstances.',
      },
      {
        title: 'Document Preparation Support',
        text: 'Get help organizing information and preparing paperwork for your review.',
      },
      {
        title: 'Ongoing Guidance',
        text: 'Receive support as questions arise and next steps become clearer.',
      },
    ],
  },
  approach: {
    heading: 'Our Four-Step Approach',
    steps: [
      { number: '01', title: 'Eligibility Information Review', description: 'We review the information you share so we can discuss what may apply.' },
      { number: '02', title: 'Program Information', description: 'We explain the programs that may be worth exploring further.' },
      { number: '03', title: 'Document Organization', description: 'We help you put paperwork and questions in order for your own review.' },
      { number: '04', title: 'Continued Support', description: 'We stay available as new questions come up along the way.' },
    ],
  },
  audience: {
    heading: 'Who May Benefit',
    items: [
      'People with federal student loans.',
      'Graduates who feel overwhelmed by loan-related paperwork.',
      'Teachers, nurses, healthcare workers, and public-service employees seeking clearer information.',
      'Borrowers who want help organizing their questions and documents.',
    ],
  },
  important: {
    heading: 'Important to Know',
    items: [
      'Federal programs may be available to apply for directly through official government resources.',
      'Private assistance is optional.',
      'Results and eligibility are not guaranteed.',
      'Accurate information is important.',
      'Student Aid Support Group LLC is not a government agency, lender, servicer, debt settlement company, law firm, or tax adviser.',
    ],
  },
}

// ---------- Groundwork Services page ----------

export const groundwork = {
  hero: {
    heading: 'Start With Clarity. Build With Confidence.',
    text: 'Begin with an organized review of the information needed to understand your possible next steps.',
  },
  whatIs: {
    heading: 'What Is Groundwork?',
    text: 'Groundwork is an initial information and organization process. It helps create a clearer picture of the information you provide, the questions you have, and the possible paths that may deserve further review.',
    note: 'Groundwork does not guarantee eligibility or forgiveness. Final determinations are made by the relevant federal programs.',
  },
  benefits: {
    heading: 'Why Start With Groundwork',
    items: [
      { title: 'Organized Information', text: 'Bring your information together in a clear, structured way.' },
      { title: 'Clearer Questions', text: 'Identify the right questions to ask before you move forward.' },
      { title: 'Plain-Language Explanations', text: 'Understand terms and options without confusing jargon.' },
      { title: 'Better Next-Step Preparation', text: 'Set yourself up to make better-informed decisions about what to do next.' },
    ],
  },
  howItWorks: {
    heading: 'How It Works',
    steps: [
      { number: '01', title: 'Share basic information', description: 'Tell us enough about your situation for us to begin an organized review.' },
      { number: '02', title: 'Review the information provided', description: 'We look over what you have shared and identify the areas that may deserve further review.' },
      { number: '03', title: 'Discuss possible areas for further review', description: 'We talk through what the information suggests and what paths may be worth exploring.' },
      { number: '04', title: 'Decide whether you want to continue', description: 'There is no obligation to continue after the initial discussion.' },
    ],
    noObligation: 'There is no obligation to continue after the initial discussion.',
  },
  cta: {
    heading: 'Ready to Start With Clarity?',
    text: 'Begin with an organized review of your information. We will help you understand what may be worth looking into next.',
    buttonLabel: 'Contact Us',
    href: '/contact',
  },
}

// ---------- Contact page ----------

export const contact = {
  hero: {
    heading: "We're Here to Help",
    text: 'Have questions about student loan guidance or document support? Send us a message and tell us what you would like help understanding.',
  },
  details: {
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
  },
  form: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone (optional)',
    message: 'What can we help you with?',
    consent:
      'I understand that submitting this form does not create a client relationship and that Student Aid Support Group LLC is a private consulting company, not a government agency or law firm.',
    submit: 'Submit Message',
    sending: 'Sending…',
    sensitiveWarning:
      'Please do not include Social Security numbers, account passwords, federal account credentials, or other highly sensitive information.',
    readyNotice:
      'Thank you for your message. We will respond as soon as possible.',
    errors: {
      firstNameRequired: 'Please enter your first name.',
      firstNameLength: 'First name must be between 2 and 50 characters.',
      lastNameRequired: 'Please enter your last name.',
      lastNameLength: 'Last name must be between 2 and 50 characters.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      emailLength: 'Email must be at most 254 characters.',
      phoneLength: 'Phone number must be at most 25 characters.',
      messageRequired: 'Please enter a message.',
      messageLength: 'Your message must be between 10 and 1,000 characters.',
      consentRequired:
        'Please confirm that you understand this form is not for highly sensitive information.',
      formSummary: 'Please review the highlighted fields below and try again.',
    },
  },
  notFoundCta: {
    returnHome: 'Return Home',
    contact: 'Contact Us',
  },
}

// ---------- Legal placeholders ----------

export const privacyPolicy = {
  heading: 'Privacy Policy',
  notice:
    'Draft placeholder — this page must be replaced with legally reviewed policy text before launch.',
  sections: [
    {
      heading: 'Information We May Receive',
      text: 'This is placeholder copy describing the kinds of information a user may share through our forms or communications. The final policy will list exactly what is collected and why. Legal review is required before launch.',
    },
    {
      heading: 'How Information May Be Used',
      text: 'Placeholder copy describing how information may be used to respond to inquiries, provide guidance, and improve services. The final version will reflect actual practices after legal review.',
    },
    {
      heading: 'Data Security',
      text: 'Placeholder copy describing reasonable safeguards and the limits of any security measures. The final policy will be reviewed by qualified counsel.',
    },
    {
      heading: 'Service Providers',
      text: 'Placeholder copy describing any third-party vendors that may process information on our behalf (for example, hosting or email services). The final policy will list actual providers.',
    },
    {
      heading: 'Your Choices',
      text: 'Placeholder copy describing how a user can request access, correction, or deletion of their information, subject to applicable law. The final version will reflect actual procedures.',
    },
    {
      heading: 'Policy Updates',
      text: 'Placeholder copy explaining that this policy may be updated and how changes will be communicated. The final version will reflect actual practice.',
    },
    {
      heading: 'Contact Information',
      text: 'Placeholder copy directing questions about this policy to our contact details below.',
    },
  ],
}

export const termsOfService = {
  heading: 'Terms of Service',
  notice:
    'Draft placeholder — this page must be replaced with legally reviewed terms before launch.',
  sections: [
    {
      heading: 'Description of Services',
      text: 'Placeholder copy describing the consulting and document-support services offered. The final version will reflect actual service scope after attorney review.',
    },
    {
      heading: 'Private Company Disclosure',
      text: 'Placeholder copy disclosing that Student Aid Support Group LLC is a private consulting company and is not a government agency, lender, servicer, debt settlement company, law firm, or tax adviser.',
    },
    {
      heading: 'No Legal, Financial, or Tax Advice',
      text: 'Placeholder copy stating that the information provided does not constitute legal, financial, or tax advice and that users should consult qualified professionals for those matters.',
    },
    {
      heading: 'User Responsibilities',
      text: 'Placeholder copy describing the user’s responsibility to provide accurate information and to make independent decisions.',
    },
    {
      heading: 'No Guaranteed Results',
      text: 'Placeholder copy stating that program availability and eligibility depend on applicable federal requirements and that results are not guaranteed.',
    },
    {
      heading: 'Fees and Refunds',
      text: 'Placeholder copy describing fee structures and any refund terms. The final version will reflect actual billing practices.',
    },
    {
      heading: 'Limitation of Liability',
      text: 'Placeholder copy describing limits on liability to the extent permitted by law. The final version will be drafted with attorney input.',
    },
    {
      heading: 'Contact Information',
      text: 'Placeholder copy directing questions about these terms to our contact details below.',
    },
  ],
}

// ---------- Not Found ----------

export const notFound = {
  heading: 'Page Not Found',
  text: 'The page you are looking for does not exist or may have moved.',
  returnHome: 'Return Home',
  contact: 'Contact Us',
  homeHref: '/',
  contactHref: '/contact',
}
