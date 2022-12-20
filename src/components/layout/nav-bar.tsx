import { FC } from 'react';
import { NavLink } from '.';

export const NavBar: FC = () => {
  return (
    <div className="flex flex-col gap-4 py-2 px-0 text-right desktop:flex-row desktop:items-center desktop:gap-6 desktop:px-2 desktop:py-0">
      <NavLink to="#about-me">About Me</NavLink>
      <NavLink to="#frontend-skills">Frontend</NavLink>
      <NavLink to="#backend-skills">Backend</NavLink>
      <NavLink to="#tools-and-knowledge">Tools & Knowledge</NavLink>
      <button className="rounded bg-blue-500 px-2 font-semibold text-white shadow-lg">
        Contact Me
      </button>
    </div>
  );
};
