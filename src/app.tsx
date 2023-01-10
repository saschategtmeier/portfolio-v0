import { FC, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import skills from './skills.json';
import {
  AboutMeSection,
  BackendSkillsSection,
  ContactDialog,
  FrontendSkillsSection,
  Header,
  HeroSection,
  ToolsAndKnowledgeSection,
} from './components';
import { useSkillsStore } from './state';

gsap.registerPlugin(ScrollTrigger);

export const App: FC = () => {
  const { setSkills } = useSkillsStore();

  useEffect(() => {
    setSkills(skills);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <HeroSection />
        <AboutMeSection />
        <FrontendSkillsSection />
        <BackendSkillsSection />
        <ToolsAndKnowledgeSection />
      </main>
      <ContactDialog />
      <Toaster />
    </BrowserRouter>
  );
};
