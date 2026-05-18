export type Paper = {
  id: string
  title: string
  abstract: string
  publishedIn: string
  year: string
  link: string | null
  pdfPath: string | null
}

export const papers: Paper[] = [
  {
    id: 'financial-fraud',
    title: 'Breaking the Silence: Addressing Legal Unawareness in Financial Fraud and Mitigating Justice through Education, Policy Reform, and AI-driven Solutions',
    abstract: 'This research examines how legal illiteracy in India contributes to the underreporting of financial fraud and consumer rights violations. Through analysis of legal frameworks, academic studies, and public reports, the study identifies barriers such as procedural complexity, limited legal education, and fear of repercussions. Findings suggest that a significant percentage of offences remain unreported due to lack of awareness. The paper proposes solutions including legal awareness initiatives, simplified reporting systems, and AI-powered legal assistance tools.',
    publishedIn: 'Add journal / conference name',
    year: '2024',
    pdfPath: 'papers/Abs.pdf', // e.g. '/papers/financial-fraud.pdf'
    link: 'https://doi.org/10.36106/gjra/1402840', // e.g. 'https://doi.org/'
  },
  {
    id: 'digital-decentralization',
    title: 'DIGITAL DECENTRALIZATION: Re-Imagining Cooperative Climate Federalism Through Technology & Governance',
    abstract: 'Add your abstract here.',
    publishedIn: 'Add journal / conference name',
    year: '2024',
    link: null,
    pdfPath: null,
  },
  {
    id: 'biomass-cofiring',
    title: 'The Environmental Viability to Biomass Co-Firing Operations at Coal-Fired Power Plants in India: A Challenge',
    abstract: 'Add your abstract here.',
    publishedIn: 'Add journal / conference name',
    year: '2024',
    link: null,
    pdfPath: null,
  },
  {
    id: 'human-animal',
    title: 'From Conflict Control to Coexistence: Rethinking Preventive Governance in Human–Animal Interactions',
    abstract: 'Add your abstract here.',
    publishedIn: 'Add journal / conference name',
    year: '2024',
    link: null,
    pdfPath: null,
  },
  {
    id: 'digital-evidence',
    title: 'From Proof to Probability: Reassessing the Evidentiary Value of Digital Evidence in the Age of Intelligent Manipulation',
    abstract: 'Add your abstract here.',
    publishedIn: 'Add journal / conference name',
    year: '2024',
    link: null,
    pdfPath: null,
  },
  {
    id: 'ai-access-justice',
    title: 'Artificial Intelligence, Digital Platforms and Access to Justice in India',
    abstract: 'Add your abstract here.',
    publishedIn: 'Add journal / conference name',
    year: '2024',
    link: null,
    pdfPath: null,
  },
  {
    id: 'microbial-fuel',
    title: 'Microbial Fuel Cells: A Sustainable Approach for the Waste Water Treatment and Energy Generation Processes',
    abstract: 'Add your abstract here.',
    publishedIn: 'Add journal / conference name',
    year: '2024',
    link: null,
    pdfPath: null,
  },
]