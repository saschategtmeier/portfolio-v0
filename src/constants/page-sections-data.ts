import { PageSection, PageSectionData } from '../models';

export const PAGE_SECTIONS_DATA: Record<PageSection, PageSectionData> = {
  hero: { section: 'hero', urlHash: '#' },
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

export function getSectionUrlHash(sectionKey: PageSection): string {
  const { section, urlHash } = PAGE_SECTIONS_DATA[sectionKey];

  return urlHash ?? `#${section}`;
}
