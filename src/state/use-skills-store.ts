import create from 'zustand';

import { SkillCategory } from '../enums';
import { SkillCollection } from '../models';

type SkillsState = {
  frontendSkills: SkillCollection | undefined;
  backendSkills: SkillCollection | undefined;
  tools: SkillCollection | undefined;
  knowledge: SkillCollection | undefined;
  uiUxSkills: SkillCollection | undefined;
  setSkills: (skillsCollections: SkillCollection[]) => void;
};

export const useSkillsStore = create<SkillsState>((set) => ({
  frontendSkills: undefined,
  backendSkills: undefined,
  tools: undefined,
  knowledge: undefined,
  uiUxSkills: undefined,
  setSkills: (skillsCollections) =>
    set((state) => ({
      ...state,
      frontendSkills: getSkillCategory(
        skillsCollections,
        SkillCategory.Frontend
      ),
      backendSkills: getSkillCategory(skillsCollections, SkillCategory.Backend),
      tools: getSkillCategory(skillsCollections, SkillCategory.Tools),
      knowledge: getSkillCategory(skillsCollections, SkillCategory.Knowledge),
      uiUxSkills: getSkillCategory(skillsCollections, SkillCategory.UiUx),
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
