import { FC } from 'react';

import { HashLink } from 'react-router-hash-link';

import { PageSection } from '../../models';
import { useLayoutStore } from '../../state';

const initialsHash: PageSection = 'hero';

export const Initials: FC = () => {
  const { currentPageSection, setIsNavbarOpen } = useLayoutStore();

  return (
    <HashLink
      to={`#${initialsHash}`}
      className={`h-9 cursor-pointer rounded border-2 px-2 text-2xl font-bold tracking-wide hover:border-blue-500 ${
        currentPageSection?.section === initialsHash
          ? 'border-blue-500'
          : 'border-black dark:border-white'
      }`}
      smooth
      onClick={() => setIsNavbarOpen(false)}
    >
      ST
    </HashLink>
  );
};
