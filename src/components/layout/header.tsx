import { FC } from 'react';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

import { Container } from '.';
import { useHeaderStore } from '../../state';

export const Header: FC = () => {
  const { currentHeader } = useHeaderStore();

  return (
    <Container className='fixed top-4 left-1/2 z-50 -translate-x-1/2'>
      <div className='relative flex items-center justify-between'>
        <h1>{currentHeader}</h1>
        <div className='absolute left-1/2 -translate-x-1/2'>
          <EllipsisHorizontalIcon className='h-12 w-12' />
          <nav className='hidden gap-4 desktop:flex'>
            <a href=''>Frontend</a>
            <a href=''>Backend</a>
            <a href=''>Tools & Knowledge</a>
          </nav>
        </div>
        <div className='text-2xl font-bold'>ST</div>
      </div>
    </Container>
  );
};
