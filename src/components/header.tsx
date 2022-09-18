import { FC } from 'react';

import { Container } from '.';
import { useHeaderStore } from '../state';

export const Header: FC = () => {
  const { currentHeader } = useHeaderStore();

  return (
    <Container className='fixed top-4 left-1/2 z-50 -translate-x-1/2'>
      <div className='relative flex items-center justify-between'>
        <h1 className='h-10'>{currentHeader}</h1>
        <nav className='absolute left-1/2 flex -translate-x-1/2 gap-4'>
          <a href=''>Frontend</a>
          <a href=''>Backend</a>
        </nav>
        <div className='text-2xl font-bold'>Sascha Tegtmeier</div>
      </div>
    </Container>
  );
};
