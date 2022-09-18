import { FC } from 'react';

import { ContentSection, SkillItemList } from '..';
import { useSkillsStore } from '../../state';

export const FrontendSkillsSection: FC = () => {
  const { frontendSkills } = useSkillsStore();

  return (
    <ContentSection id='frontend-skills' title='Frontend Skills'>
      <SkillItemList
        className='desktop:col-start-2'
        skillCollection={frontendSkills}
      />
    </ContentSection>
  );
};
