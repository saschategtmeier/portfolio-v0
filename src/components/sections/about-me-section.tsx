import { FC } from 'react';
import { ContentSection } from '../layout';

export const AboutMeSection: FC = () => {
  return (
    <ContentSection id="about-me" title="About Me">
      <div className="col-span-2 flex flex-col items-center justify-center">
        <img
          src="images/avatar.jpeg"
          className="mb-20 aspect-square w-96 rounded-full"
        />
        <div className="flex max-w-[60rem] flex-col gap-8 text-center text-xl leading-relaxed">
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