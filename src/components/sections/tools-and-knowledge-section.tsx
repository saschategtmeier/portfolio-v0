import { FC } from 'react';

import { ContentSection, SkillItemGrid } from '..';
import { useSkillsStore } from '../../state';

export const ToolsAndKnowledgeSection: FC = () => {
  const { toolsAndKnowledge } = useSkillsStore();

  return (
    <ContentSection id="tools-and-knowledge" title="Tools & Knowledge">
      <SkillItemGrid skillCollection={toolsAndKnowledge} useFullWidth={true} />
    </ContentSection>
  );
};
