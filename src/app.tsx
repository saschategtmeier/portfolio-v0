import { FC, useEffect } from 'react';

import skills from './skills.json';
import {
  BackendSkillsSection,
  Footer,
  FrontendSkillsSection,
  Header,
  HeroSection,
  ToolsAndKnowledgeSection,
} from './components';
import { useSkillsStore } from './state';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';

export const App: FC = () => {
  const { setSkills } = useSkillsStore();

  useEffect(() => {
    setSkills(skills);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <HeroSection />
      <FrontendSkillsSection />
      <BackendSkillsSection />
      <ToolsAndKnowledgeSection />
      <Footer />
    </BrowserRouter>
  );
};
