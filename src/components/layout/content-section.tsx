import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react';

import { useNavigate } from 'react-router';
import { useIntersection } from 'react-use';

import { Container } from '.';
import { PageSectionData } from '../../models';
import { useLayoutStore } from '../../state';

type ContentSectionProps = {
  sectionData: PageSectionData;
  containerClassName?: string;
} & PropsWithChildren &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

export const ContentSection: FC<ContentSectionProps> = ({
  sectionData,
  children,
  className,
  containerClassName,
}) => {
  const { setCurrentPageSection } = useLayoutStore();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(ref, { threshold: 0.3 });

  useEffect(() => {
    if (!!intersection?.isIntersecting) {
      setCurrentPageSection(sectionData);
      navigate(`#${sectionData.section}`);
    }
  }, [intersection]);

  return (
    <section
      className={`flex min-h-screen w-full snap-start flex-col pb-4 pt-16 tablet:pb-6 tablet:pt-24 desktop:pb-8 desktop:pt-32 ${
        className ?? ''
      }`}
      ref={ref}
      id={sectionData.section}
    >
      <Container
        className={`grid flex-1 grid-cols-1 items-center gap-12 tablet:gap-16 desktop:grid-cols-2 desktop:gap-24 ${
          containerClassName ?? ''
        }`}
      >
        {children}
      </Container>
    </section>
  );
};
