import { FC } from 'react';

import { ContentSection, SkillItemList } from '.';
import { useSkillsStore } from '../state';

export const ToolsAndKnowledgeSection: FC = () => {
  const { tools, knowledge } = useSkillsStore();

  return (
    <ContentSection id='tools-and-knowledge' title='Tools & Knowledge'>
      <SkillItemList skillCollection={tools} title='Tools' />
      <SkillItemList skillCollection={knowledge} title='Knowledge' />
    </ContentSection>
  );
};
