import { FC, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

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
      <main className="h-screen snap-y snap-proximity overflow-y-scroll">
        <HeroSection />
        <AboutMeSection />
        <FrontendSkillsSection />
        <BackendSkillsSection />
        <ToolsAndKnowledgeSection />
      </main>
    </BrowserRouter>
  );
};
