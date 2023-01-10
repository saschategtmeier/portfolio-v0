import { FC } from 'react';

import { ContentSection, SkillItemGrid, Socials } from '..';
import { PAGE_SECTIONS_DATA } from '../../constants';
import { useSkillsStore } from '../../state';

export const ToolsAndKnowledgeSection: FC = () => {
  const { toolsAndKnowledge } = useSkillsStore();

  return (
    <>
      <ContentSection sectionData={PAGE_SECTIONS_DATA['tools-and-knowledge']}>
        <SkillItemGrid
          skillCollection={toolsAndKnowledge}
          useFullWidth={true}
        />
        <Socials className="self-end" />
      </ContentSection>
    </>
  );
};
