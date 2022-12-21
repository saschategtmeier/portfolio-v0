import { FC, PropsWithChildren } from 'react';

import { To } from 'react-router';
import { HashLink } from 'react-router-hash-link';

import { useLayoutStore } from '../../state';

type NavLinkProps = {
  to: To;
} & PropsWithChildren;

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  const { setIsNavbarOpen } = useLayoutStore();

  return (
    <HashLink
      to={to}
      smooth
      className="rounded px-2 hover:ring-2 hover:ring-blue-500"
      onClick={() => setIsNavbarOpen(false)}
    >
      {children}
    </HashLink>
  );
};
