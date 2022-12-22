import { FC } from 'react';

import { Container, DesktopNav, MobileNav } from '.';
import { useBreakpoint } from '../../hooks';
import { useLayoutStore } from '../../state';

export const Header: FC = () => {
  const { currentPageSection } = useLayoutStore();
  const currentBreakpoint = useBreakpoint();

  return (
    <div className="fixed top-0 z-50 w-full bg-gradient-to-b from-white/5 to-white/0 pt-4 pb-1 backdrop-blur-[1px] dark:from-black/5 dark:to-black/0">
      <Container>
        <div className="flex justify-between">
          <h1>{currentPageSection?.title ?? ''}</h1>
          {currentBreakpoint !== 'desktop' && <MobileNav />}
          {currentBreakpoint === 'desktop' && <DesktopNav />}
        </div>
      </Container>
    </div>
  );
};
