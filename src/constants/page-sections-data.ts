import { PageSection, PageSectionData } from '../models';

export const PAGE_SECTIONS_DATA: Record<PageSection, PageSectionData> = {
  hero: { section: 'hero' },
  'about-me': { section: 'about-me', title: 'About Me' },
  frontend: {
    section: 'frontend',
    title: 'Frontend Skills',
    navTitle: 'Frontend',
  },
  backend: {
    section: 'backend',
    title: 'Backend Skills',
    navTitle: 'Backend',
  },
  'tools-and-knowledge': {
    section: 'tools-and-knowledge',
    title: 'Tools & Knowledge',
  },
};
