import { FC } from 'react';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

import { useLayoutStore } from '../../state';
import { Initials, NavBar } from '.';

export const MobileNav: FC = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useLayoutStore();

  return (
    <div>
      <div className="flex items-center justify-end gap-2">
        <button onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          <EllipsisHorizontalIcon className="block h-12 w-12 text-blue-500 drop-shadow-lg" />
        </button>
        <Initials />
      </div>
      {isNavbarOpen && <NavBar />}
    </div>
  );
};
