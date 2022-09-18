import { FC } from 'react';

import { Container } from '.';
import { useHeaderStore } from '../state';

export const Header: FC = () => {
  const { currentHeader } = useHeaderStore();

  return (
    <Container className='fixed top-8 left-1/2 flex -translate-x-1/2 justify-between'>
      <h1>{currentHeader}</h1>
      <div>nav</div>
      <div>logo</div>
    </Container>
  );
};
