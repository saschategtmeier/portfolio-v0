import { FC, useEffect } from 'react';

import skills from './assets/json/skills.json';
import {
  BackendSkillsSection,
  ContentSection,
  FrontendSkillsSection,
  Header,
  HeroSection,
} from './components';
import { useSkillsStore } from './state';

export const App: FC = () => {
  const { setSkills } = useSkillsStore();

  useEffect(() => {
    setSkills(skills);
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <FrontendSkillsSection />
      <BackendSkillsSection />
    </>
  );
};
