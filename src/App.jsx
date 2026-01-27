import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import About from './components/About';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-text">
      <Navbar />
      <main className="flex flex-col gap-0">
        <HomeHero />
        <About />
        <Countdown />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
