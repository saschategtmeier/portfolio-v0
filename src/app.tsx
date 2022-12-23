import { FC, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import skills from './skills.json';
import {
  AboutMeSection,
  BackendSkillsSection,
  FrontendSkillsSection,
  Header,
  HeroSection,
  ToolsAndKnowledgeSection,
} from './components';
import { useSkillsStore } from './state';

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
      <Toaster />
    </BrowserRouter>
  );
};
