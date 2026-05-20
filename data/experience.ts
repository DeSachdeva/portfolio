export type Experience = {
  id: string
  role: string
  company: string
  location: string
  duration: string
  current: boolean
  type: 'fulltime' | 'internship' | 'volunteer'
  points: string[]
}

export const experiences: Experience[] = [
  {
    id: 'ikmg-vp',
    role: 'Vice President — Delhi Chapter',
    company: 'IKMG Ltd.',
    location: 'New Delhi, India',
    duration: 'Oct 2023 — Present',
    current: true,
    type: 'fulltime',
    points: [
      'Leading coordination and execution of social, cultural, and community welfare initiatives across Delhi NCR and IKMG\'s global network.',
      'Organised food distribution drives across Delhi NCR and coordinated IKMG Radio broadcasts.',
      'Driving youth engagement programs and community service initiatives with cross-functional team collaboration.',
      'Youngest person to hold a Vice President role at IKMG Ltd.',
    ],
  },
  {
    id: 'ikmg-dev',
    role: 'Website Developer & Content Managing Intern',
    company: 'IKMG Learning Tree',
    location: 'Delhi, India',
    duration: 'Mar 2024 — Jul 2024',
    current: false,
    type: 'internship',
    points: [
      'Developed responsive web pages using HTML, CSS, and JavaScript for the IKMG Learning Tree digital platform.',
      'Implemented UI components and navigation structures; ensured consistent rendering across devices.',
      'Managed content integration workflows and optimised web page performance.',
      'Maintained coding standards and delivered quality solutions within project timelines.',
    ],
  },
  {
    id: 'shubhvivaah',
    role: 'Marketing & Operations Intern',
    company: 'shubbhvivaah.com',
    location: 'Delhi, India',
    duration: 'Nov 2023 — Jul 2024',
    current: false,
    type: 'internship',
    points: [
      'Executed digital marketing campaigns and handled customer support and query resolution.',
      'Conducted comprehensive website and mobile app testing across browsers and devices; documented bug reports.',
      'Analysed user feedback for product improvements and coordinated content updates.',
      'Supported community outreach programs and managed multiple operational responsibilities simultaneously.',
    ],
  },
]

export type Education = {
  degree: string
  field: string
  institution: string
  board: string
  location: string
  year: string
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    institution: 'Guru Gobind Singh Indraprastha University',
    board: '',
    location: 'Delhi, India',
    year: 'Expected 2028',
  },
  {
    degree: 'Senior Secondary Certificate (Class XII)',
    field: 'PCM',
    institution: '',
    board: 'Central Board of Secondary Examination',
    location: 'New Delhi, India',
    year: '2024',
  },
  {
    degree: 'High School Diploma (Class X)',
    field: '',
    institution: '',
    board: 'Central Board of Secondary Education',
    location: 'Kotdwara, India',
    year: '2022',
  },
]

export type Certification = {
  name: string
  issuer: string
  year: string
  credlyUrl: string | null
  certificatePath: string | null
}

export const certifications: Certification[] = [
  {
    name: 'Cisco CyberSecurity',
    issuer: 'Cisco',
    year: '2024',
    credlyUrl: null, // paste your Credly badge URL here
    certificatePath: null, // '/certificates/cisco-cybersecurity.jpg'
  },
  {
    name: 'Microsoft Azure AI Services',
    issuer: 'Microsoft',
    year: '2024',
    credlyUrl: 'https://www.credly.com/badges/70d7d697-846a-465a-8193-1f053a4258c5/accept', // paste your Credly badge URL here
    certificatePath: '/certificates/I2CSUpdate20250523-26-8m0qsq.pdf',
  },
]

export const languages = [
  { name: 'Hindi', level: 'First Language' },
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'Intermediate' },
  { name: 'Punjabi', level: 'Conversational' },
]