import { LangProvider } from './context/LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Publications />
          <Teaching />
          <Projects />
          <Gallery />
          <Awards />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
