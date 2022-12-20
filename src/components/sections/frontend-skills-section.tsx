import { FC } from 'react';

import { ContentSection, SkillItemGrid } from '..';
import { useSkillsStore } from '../../state';

export const FrontendSkillsSection: FC = () => {
  const { frontendSkills } = useSkillsStore();

  return (
    <ContentSection id="frontend-skills" title="Frontend Skills">
      <SkillItemGrid skillCollection={frontendSkills} />
    </ContentSection>
  );
};
