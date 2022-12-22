import { FC } from 'react';

import { ContentSection, SkillItemGrid } from '..';
import { PAGE_SECTIONS_DATA } from '../../constants';
import { useSkillsStore } from '../../state';

export const FrontendSkillsSection: FC = () => {
  const { frontendSkills } = useSkillsStore();

  return (
    <ContentSection sectionData={PAGE_SECTIONS_DATA['frontend']}>
      <SkillItemGrid skillCollection={frontendSkills} />
    </ContentSection>
  );
};
