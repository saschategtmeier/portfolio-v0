import { FC } from 'react';

import { NavLink } from './nav-link';
import { useLayoutStore } from '../../state';

export const Nav: FC = () => {
  const { setIsContactDialogOpen, isNavbarOpen } = useLayoutStore();

  return (
    <nav className='flex flex-col items-center gap-6 desktop:flex-row'>
      <NavLink to='#about-me'>About Me</NavLink>
      <NavLink to='#frontend-skills'>Frontend</NavLink>
      <NavLink to='#backend-skills'>Backend</NavLink>
      <NavLink to='#tools-and-knowledge'>Tools & Knowledge</NavLink>
      <button
        className='rounded bg-blue-500 px-2 font-semibold text-white shadow-lg'
        onClick={() => setIsContactDialogOpen(true)}
      >
        Contact Me
      </button>
    </nav>
  );
};
