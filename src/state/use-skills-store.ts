import create from 'zustand';

import { SkillCategory } from '../enums';
import { SkillCollection } from '../models';

type SkillsState = {
  frontendSkills: SkillCollection | undefined;
  backendSkills: SkillCollection | undefined;
  setSkills: (skillsCollections: SkillCollection[]) => void;
};

export const useSkillsStore = create<SkillsState>((set) => ({
  frontendSkills: undefined,
  backendSkills: undefined,
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
    })),
}));

function findSkillCategory(
  collections: SkillCollection[],
  category: SkillCategory
): SkillCollection | undefined {
  return collections.find((collection) => collection.category === category);
}
