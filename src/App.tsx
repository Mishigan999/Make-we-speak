import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import Languages from './sections/Languages';
import Instructors from './sections/Instructors';
import SpecialEducation from './sections/SpecialEducation';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Languages />
        <Instructors />
        <SpecialEducation />
        <Statistics />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
