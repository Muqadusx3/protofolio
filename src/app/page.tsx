import Certifications from '@/components/certifications';
import Contact from '@/components/contacts';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/projects';
import Skills from '@/components/Skill';
import { Certificate } from 'crypto';

export default function HomePage() {
  return (
    <main className=" min-h-screen">
      <Hero/>
  <Experience/>
  <Skills/>
  <Projects/>
  <Certifications/>
  <Contact/>
    </main>
  );
}
