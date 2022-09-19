import { FC, useState } from 'react';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

import { Container, Nav } from '.';
import { useBreakpoint } from '../../hooks';
import { useLayoutStore } from '../../state';

const Initials: FC = () => <div className='text-2xl font-bold'>ST</div>;

export const Header: FC = () => {
  const { currentHeader } = useLayoutStore();
  const breakpoint = useBreakpoint();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <>
      <Container className='fixed top-4 left-1/2 z-50 -translate-x-1/2'>
        <div className='relative flex items-center justify-between'>
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
    </>
  );
};
