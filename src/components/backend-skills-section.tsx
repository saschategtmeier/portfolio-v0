import { FC } from 'react';

import { ContentSection, SkillItemList } from '.';
import { useSkillsStore } from '../state';

export const BackendSkillsSection: FC = () => {
  const { backendSkills } = useSkillsStore();

  return (
    <ContentSection id='backend-skills' title='Backend Skills'>
      <SkillItemList skillCollection={backendSkills} />
    </ContentSection>
  );
};
