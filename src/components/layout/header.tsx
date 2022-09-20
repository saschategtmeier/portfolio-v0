import { FC, useState } from 'react';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

import { Container, Initials, Nav } from '.';
import { useBreakpoint } from '../../hooks';
import { useLayoutStore } from '../../state';

export const Header: FC = () => {
  const { currentHeader } = useLayoutStore();
  const breakpoint = useBreakpoint();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className='fixed top-0 z-50 w-full bg-gradient-to-b from-white/5 to-white/0 pt-4 pb-1 backdrop-blur-[1px]'>
      <Container>
        <div className='relative flex h-10 items-center justify-between'>
          <h1>{currentHeader}</h1>

          {breakpoint === 'desktop' && (
            <>
              <div className='absolute left-1/2 -translate-x-1/2'>
                <Nav />
              </div>
              <Initials />
            </>
          )}

          {(breakpoint === 'mobile' || breakpoint === 'tablet') && (
            <div className='flex items-center'>
              {navOpen && <Nav />}
              <EllipsisHorizontalIcon
                className='h-12 w-12 text-blue-500 drop-shadow-lg'
                onClick={() => setNavOpen(!navOpen)}
              />
              <Initials />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
