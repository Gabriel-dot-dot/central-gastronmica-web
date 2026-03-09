import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Dishes from './components/Dishes'
import Reviews from './components/Reviews'
import Location from './components/Location'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[hsl(20,40%,4%)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Dishes />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
