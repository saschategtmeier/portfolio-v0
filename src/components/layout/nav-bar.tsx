import { FC } from 'react';

import { NavLink } from '.';
import { PAGE_SECTIONS_DATA, PAGE_SECTIONS } from '../../constants';
import { useLayoutStore } from '../../state';

export const NavBar: FC = () => {
  const { currentPageSection, setIsContactDialogOpen, setIsNavbarOpen } =
    useLayoutStore();

  const handleContactMeClick = () => {
    setIsContactDialogOpen(true);
    setIsNavbarOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 py-2 px-0 text-right desktop:flex-row desktop:items-center desktop:gap-6 desktop:px-2 desktop:py-0">
      {PAGE_SECTIONS.map((sectionKey) => {
        if (sectionKey === 'hero') {
          return;
        }
        const { title, navTitle } = PAGE_SECTIONS_DATA[sectionKey];

        return (
          <NavLink
            key={sectionKey}
            to={`#${sectionKey}`}
            isActive={sectionKey === currentPageSection?.section}
          >
            {navTitle ?? title}
          </NavLink>
        );
      })}

      <button
        className="rounded bg-blue-500 px-2 text-center font-semibold text-white shadow-lg hover:ring-2 hover:ring-black dark:hover:ring-white"
        onClick={handleContactMeClick}
      >
        Contact Me
      </button>
    </div>
  );
};
