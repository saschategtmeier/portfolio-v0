import { FC } from 'react';

import { ContentSection, SkillItemGrid } from '..';
import { PAGE_SECTIONS_DATA } from '../../constants';
import { useSkillsStore } from '../../state';

export const BackendSkillsSection: FC = () => {
  const { backendSkills } = useSkillsStore();

  return (
    <ContentSection sectionData={PAGE_SECTIONS_DATA['backend']}>
      <SkillItemGrid
        skillCollection={backendSkills}
        className="desktop:col-start-2"
      />
    </ContentSection>
  );
};
