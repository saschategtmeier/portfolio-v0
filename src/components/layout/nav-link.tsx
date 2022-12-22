import { FC, PropsWithChildren } from 'react';

import { To } from 'react-router';
import { HashLink } from 'react-router-hash-link';

import { useLayoutStore } from '../../state';

type NavLinkProps = {
  to: To;
  isActive: boolean;
} & PropsWithChildren;

export const NavLink: FC<NavLinkProps> = ({ to, isActive, children }) => {
  const { setIsNavbarOpen } = useLayoutStore();

  return (
    <HashLink
      to={to}
      smooth
      className={`hoverable ${isActive && 'rounded ring-2 ring-blue-500'}`}
      onClick={() => setIsNavbarOpen(false)}
    >
      {children}
    </HashLink>
  );
};
