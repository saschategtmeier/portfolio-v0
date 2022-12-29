import { FC, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';

import { NavLink } from '.';
import {
  PAGE_SECTIONS_DATA,
  PAGE_SECTIONS,
  ANIMATE_CLASSES,
} from '../../constants';
import { useLayoutStore } from '../../state';

export const NavBar: FC = () => {
  const navBarRef = useRef<HTMLDivElement>(null!);
  const { currentPageSection, setIsContactDialogOpen, setIsNavbarOpen } =
    useLayoutStore();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${ANIMATE_CLASSES.nav.item}`, {
        y: -16,
        opacity: 0,
        ease: 'power3.out',
        stagger: { from: 'start', amount: 0.35 },
      });
    }, navBarRef);

    return () => ctx.revert();
  }, []);

  const handleContactMeClick = () => {
    setIsContactDialogOpen(true);
    setIsNavbarOpen(false);
  };

  return (
    <div
      className="flex flex-col gap-4 py-2 px-0 text-right desktop:flex-row desktop:items-center desktop:gap-6 desktop:px-2 desktop:py-0"
      ref={navBarRef}
    >
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
        className={`rounded bg-blue-500 px-2 text-center font-semibold text-white shadow-lg hover:ring-2 hover:ring-black dark:hover:ring-white ${ANIMATE_CLASSES.nav.item}`}
        onClick={handleContactMeClick}
      >
        Contact Me
      </button>
    </div>
  );
};
