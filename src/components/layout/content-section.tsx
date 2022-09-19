import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react';

import { useIntersection } from 'react-use';

import { Container } from '.';
import { useLayoutStore } from '../../state';

type ContentSectionProps = {
  title?: string;
  containerClassName?: string;
} & PropsWithChildren &
  Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'id'>;

export const ContentSection: FC<ContentSectionProps> = ({
  title,
  children,
  className,
  containerClassName,
  id,
}) => {
  const { setHeader } = useLayoutStore();
  const ref = useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(ref, { threshold: 0.6 });

  useEffect(() => {
    if (!!intersection?.isIntersecting) {
      setHeader(title ?? '');
    }
  }, [intersection]);

  return (
    <div
      className={`flex min-h-screen w-full flex-col pb-4 pt-16 tablet:pb-6 tablet:pt-24 desktop:pb-8 desktop:pt-32 ${className}`}
      ref={ref}
      id={id}
    >
      <Container
        className={`grid flex-1 grid-cols-1 items-center gap-12 tablet:gap-16 desktop:grid-cols-2 desktop:gap-24 ${containerClassName}`}
      >
        {children}
      </Container>
    </div>
  );
};
