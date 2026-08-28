import { useState } from 'react';
import Background from './components/Background.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Trust from './components/Trust.jsx';
import Services from './components/Services.jsx';
import Pipeline from './components/Pipeline.jsx';
import Operations from './components/Operations.jsx';
import AISection from './components/AISection.jsx';
import ThreatMap from './components/ThreatMap.jsx';
import Platform from './components/Platform.jsx';
import Why from './components/Why.jsx';
import Process from './components/Process.jsx';
import Industries from './components/Industries.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Resources from './components/Resources.jsx';
import Contact from './components/Contact.jsx';
import Careers from './components/Careers.jsx';
import Footer from './components/Footer.jsx';
import Impact from './components/Impact.jsx';
import ServiceModal from './components/ServiceModal.jsx';

const marqueeItems = [
  'WEB & APP VAPT', 'API SECURITY', 'NETWORK VAPT', 'DIGITAL FORENSICS',
  'THREAT HUNTING', 'THREAT INTELLIGENCE', 'MDR / SOC', '24/7 MONITORING',
];

export default function App() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <div className="marquee" aria-hidden="true">
          <span>{marqueeItems.join('　✦　')}　✦　{marqueeItems.join('　✦　')}</span>
        </div>
        <Trust />
        <Services onOpen={setModal} />
        <Pipeline />
        <Operations />
        <AISection />
        <ThreatMap />
        <Platform />
        <Why />
        <Impact />
        <Process />
        <Industries />
        <CaseStudies />
        <Resources />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <ServiceModal service={modal} onClose={() => setModal(null)} />
    </>
  );
}
