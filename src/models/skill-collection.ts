import { Skill } from '.';
import { SkillCategory } from '../enums';

export type SkillCollection = {
  category: SkillCategory;
  skills: Skill[];
};
