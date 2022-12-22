import { FC } from 'react';

import { ContentSection } from '..';
import { PAGE_SECTIONS_DATA } from '../../constants';

const HeroText: FC = () => {
  return (
    <div className="col-span-2 text-center text-5xl font-bold desktop:text-7xl desktop:leading-normal">
      Hi! My name is Sascha and I am a fullstack software engineer currently
      based in Hannover, Germany.
    </div>
  );
};

export const HeroSection: FC = () => {
  return (
    <ContentSection sectionData={PAGE_SECTIONS_DATA['hero']}>
      <HeroText />
    </ContentSection>
  );
};
