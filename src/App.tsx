import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden bg-bg text-ink">
      <Hero />
      <ProjectsGrid />
      <Footer />
    </div>
  )
}
