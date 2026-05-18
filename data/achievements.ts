export type Achievement = {
  id: string
  title: string
  org: string
  year: string
  description: string
  certificatePath: string | null // e.g. '/certificates/best-paper.jpg'
}

export const achievements: Achievement[] = [
  {
    id: 'best-paper',
    title: 'Best Research Paper Awardee',
    org: 'Add organization name',
    year: '2024',
    description: 'Awarded for outstanding research contribution. Add more context here.',
    certificatePath: null, // '/certificates/best-paper.jpg'
  },
  {
    id: 'patent',
    title: 'Published Patentee',
    org: 'Indian Patent Office',
    year: '2025',
    description: 'Holder of two published patents in applied science and law enforcement technology.',
    certificatePath: null,
  },
  {
    id: 'inspire',
    title: 'State Runner-up, Inspire Awards 2021',
    org: 'Government of India',
    year: '2021',
    description: 'Recognised by the Government of India under the INSPIRE Awards scheme for innovation and scientific aptitude.',
    certificatePath: null, // '/certificates/inspire.jpg'
  },
  {
    id: 'olympiads',
    title: 'Distinction in International Olympiads and Hackathons',
    org: 'Various',
    year: '2021–2024',
    description: 'Achieved distinction across multiple international olympiads and competitive hackathons.',
    certificatePath: null,
  },
  {
    id: 'vp',
    title: 'Youngest Vice President — IKMG Ltd.',
    org: 'IKMG Ltd.',
    year: '2023',
    description: 'Appointed as Vice President at IKMG Ltd., making this one of the youngest appointments to the role.',
    certificatePath: null,
  },
]