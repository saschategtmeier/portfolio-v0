import { FC } from 'react';

import { HashLink } from 'react-router-hash-link';

import { getSectionUrlHash } from '../../constants';
import { useLayoutStore } from '../../state';

export const Initials: FC = () => {
  const { currentPageSection } = useLayoutStore();

  return (
    <HashLink
      to={getSectionUrlHash('hero')}
      className={`h-9 cursor-pointer rounded border-2 px-2 text-2xl font-bold tracking-wide hover:border-blue-500 ${
        currentPageSection?.section === 'hero' ? 'border-blue-500' : 'border-black dark:border-white'
      }`}
      smooth
    >
      ST
    </HashLink>
  );
};
