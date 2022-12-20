import { FC } from 'react';

import { ContentSection, SkillItemGrid } from '..';
import { useSkillsStore } from '../../state';

export const BackendSkillsSection: FC = () => {
  const { backendSkills } = useSkillsStore();

  return (
    <ContentSection id="backend-skills" title="Backend Skills">
      <SkillItemGrid
        skillCollection={backendSkills}
        className="desktop:col-start-2"
      />
    </ContentSection>
  );
};
