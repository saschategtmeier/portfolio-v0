import { FC } from 'react';
import { Container } from './container';

export const Header: FC = () => {
  return (
    <Container className='fixed top-8 left-1/2 flex -translate-x-1/2 justify-between'>
      <div>header</div>
      <div>nav</div>
      <div>logo</div>
    </Container>
  );
};
