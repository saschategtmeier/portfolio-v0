import gsap from 'gsap';
import { FC, useLayoutEffect, useRef } from 'react';

import { PAGE_SECTIONS_DATA } from '../../constants';
import { ContentSection } from '../layout';

export const AboutMeSection: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null!);
  const textContainerRef = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {y:-24})
      gsap.from(textContainerRef.current, {y:24} );
    }, textContainerRef)

    return () => ctx.revert();
  }, [])

  return (
    <ContentSection sectionData={PAGE_SECTIONS_DATA['about-me']}>
      <div className="col-span-2 flex flex-col items-center justify-center">
        <img
          src="images/avatar.jpeg"
          className="mb-20 aspect-square w-96 rounded-full drop-shadow"
          ref={imageRef}
        />
        <div className="flex max-w-[60rem] flex-col gap-8 text-center text-xl leading-relaxed" ref={textContainerRef}>
          <p>
            Already as a teenager I noticed that the world of IT fascinates me
            and that I would like to make this field my profession. Driven by a
            thirst for knowledge, I started using my free time as a schoolboy to
            teach myself areas of object-oriented programming languages and web
            development on my own.
          </p>
          <p>
            Even today, the desire for knowledge drives me to constantly explore
            further areas of IT and to realise them in projects. In doing so, I
            always aim to implement the products with the highest possible
            quality and care.
          </p>
        </div>
      </div>
    </ContentSection>
  );
};
