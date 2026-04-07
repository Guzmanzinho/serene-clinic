import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Treatments from './components/Treatments';
import MedicalTeam from './components/MedicalTeam';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg overflow-x-hidden selection:bg-primary-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <MedicalTeam />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
