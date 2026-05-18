import Navbar from '@/components/Navbar'
import Projects from '@/sections/Projects'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Projects />
      </main>
    </>
  )
}