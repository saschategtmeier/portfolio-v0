import { FC } from 'react';

import { ContentSection, SkillItemList } from '.';
import { useSkillsStore } from '../state';

export const FrontendSkillsSection: FC = () => {
  const { frontendSkills } = useSkillsStore();

  return (
    <ContentSection
      id='frontend-skills'
      title='Frontend Skills'
      className='bg-yellow-200'
    >
      <SkillItemList skillCollection={frontendSkills} />
    </ContentSection>
  );
};
