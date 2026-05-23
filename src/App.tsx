import Nav from './components/Nav.tsx'
import Hero from './components/Hero.tsx'
import Features from './components/Features.tsx'
import ThemeShowcase from './components/ThemeShowcase.tsx'
import HowItWorks from './components/HowItWorks.tsx'
import Install from './components/Install.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <ThemeShowcase />
        <HowItWorks />
        <Install />
      </main>
      <Footer />
    </>
  )
}
