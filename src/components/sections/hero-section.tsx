import { FC } from 'react';

import { ContentSection } from '..';

export const HeroSection: FC = () => {
  return (
    <ContentSection id='hero'>
      <div className='text-5xl font-bold desktop:text-7xl'>
        Hi! My name is Sascha and I am a fullstack software engineer currently
        based in Hannover, Germany.
      </div>
    </ContentSection>
  );
};
