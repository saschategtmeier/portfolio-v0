import { FC } from 'react';
import { ContentSection } from './content-section';

export const HeroSection: FC = () => {
  return (
    <ContentSection id='hero'>
      <div className=' text-7xl font-bold'>
        Hi! My name is Sascha and I am a fullstack software engineer currently
        based in Hannover, Germany.
      </div>
    </ContentSection>
  );
};
