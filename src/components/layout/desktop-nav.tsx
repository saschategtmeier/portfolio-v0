import { FC } from 'react';
import { Initials, NavBar } from '.';

export const DesktopNav: FC = () => {
  return (
    <>
      <div className="absolute left-1/2 top-3 -translate-x-1/2 translate-y-1/2">
        <NavBar />
      </div>
      <Initials />
    </>
  );
};
