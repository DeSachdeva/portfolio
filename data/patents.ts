export type Patent = {
  id: string
  title: string
  patentNumber: string
  description: string
  filedYear: string
  status: string
  link: string | null
  pdfPath: string | null
}

export const patents: Patent[] = [
  {
    id: 'cleaning-fluid',
    title: 'A Non-Toxic Cleaning Fluid Composition for Laboratory Glassware',
    patentNumber: 'IN202511035702A',
    description: 'Add a brief description of this patent — what it does, the problem it solves, and what makes it novel.',
    filedYear: '2025',
    status: 'Published',
    link: null, // official patent office link if available
    pdfPath: null, // '/patents/cleaning-fluid.pdf'
  },
  {
    id: 'law-enforcement',
    title: 'Law Enforcement Apprehension and Detection System',
    patentNumber: 'IN202511096108A',
    description: 'Add a brief description of this patent.',
    filedYear: '2025',
    status: 'Published',
    link: null,
    pdfPath: null,
  },
]