import create from 'zustand';

import { SkillCategory } from '../enums';
import { SkillCollection } from '../models';

type SkillsState = {
  frontendSkills: SkillCollection | undefined;
  backendSkills: SkillCollection | undefined;
  toolsAndKnowledge: SkillCollection | undefined;
  setSkills: (skillsCollections: SkillCollection[]) => void;
};

export const useSkillsStore = create<SkillsState>((set) => ({
  frontendSkills: undefined,
  backendSkills: undefined,
  toolsAndKnowledge: undefined,
  setSkills: (skillsCollections) =>
    set((state) => ({
      ...state,
      frontendSkills: getSkillCategory(
        skillsCollections,
        SkillCategory.Frontend
      ),
      backendSkills: getSkillCategory(skillsCollections, SkillCategory.Backend),
      toolsAndKnowledge: getSkillCategory(
        skillsCollections,
        SkillCategory.ToolsAndKnowledge
      ),
    })),
}));

function getSkillCategory(
  collections: SkillCollection[],
  category: SkillCategory
): SkillCollection | undefined {
  const collection = collections.find(
    (collection) => collection.category === category
  );

  if (!collection) {
    return undefined;
  }

  collection.skills.sort((a, b) => b.level - a.level);

  return collection;
}
