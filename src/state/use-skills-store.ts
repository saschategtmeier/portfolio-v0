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
      frontendSkills: findSkillCategory(
        skillsCollections,
        SkillCategory.Frontend
      ),
      backendSkills: findSkillCategory(
        skillsCollections,
        SkillCategory.Backend
      ),
      tools: findSkillCategory(skillsCollections, SkillCategory.Tools),
      knowledge: findSkillCategory(skillsCollections, SkillCategory.Knowledge),
      uiUxSkills: findSkillCategory(skillsCollections, SkillCategory.UiUx),
    })),
}));

function findSkillCategory(
  collections: SkillCollection[],
  category: SkillCategory
): SkillCollection | undefined {
  return collections.find((collection) => collection.category === category);
}
