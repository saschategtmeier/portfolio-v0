import { FC, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';

import { ContentSection } from '..';
import { PAGE_SECTIONS_DATA } from '../../constants';

const LearnMorePrompt: FC = () => {
  const scrollWheelRef = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    gsap.fromTo(
      scrollWheelRef.current,
      { y: 0, opacity: 1, scale: 1 },
      {
        y: 16,
        opacity: 0.75,
        scale: 0.95,
        ease: 'power3.out',
        repeat: -1,
        duration: 1.25,
      }
    );
  }, []);

  return (
    <div className="col-span-2 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-12 justify-center rounded-2xl border-4 border-slate-200">
          <div
            className="mt-1 h-3 w-3 rounded-full bg-blue-500"
            ref={scrollWheelRef}
          ></div>
        </div>
        <div className="text-slate-200">scroll to learn more</div>
      </div>
    </div>
  );
};

export const HeroSection: FC = () => {
  return (
    <ContentSection
      sectionData={PAGE_SECTIONS_DATA['hero']}
      shouldCenterItems={false}
    >
      <div className="col-span-2 my-24 max-w-[1200px] justify-self-center text-5xl font-bold tracking-wide drop-shadow desktop:text-[5rem] desktop:leading-normal">
        <span>Hi!</span>
        <br />
        My name is <span className="text-blue-500">Sascha</span> and I am a{' '}
        <span className="text-blue-500">fullstack software developer</span>{' '}
        currently based in Hannover, Germany.
      </div>

      <LearnMorePrompt />
    </ContentSection>
  );
};
