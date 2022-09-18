import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react';

import { useIntersection } from 'react-use';

import { Container } from '.';
import { useHeaderStore } from '../../state';

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
  const { setHeader } = useHeaderStore();
  const ref = useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(ref, { threshold: 0.8 });

  useEffect(() => {
    if (!!intersection?.isIntersecting) {
      setHeader(title ?? '');
    }
  }, [intersection]);

  return (
    <div
      className={`flex min-h-screen w-full flex-col pt-32 pb-8 ${className}`}
      ref={ref}
      id={id}
    >
      <Container
        className={`grid flex-1 grid-cols-2 items-center gap-32 ${containerClassName}`}
      >
        {children}
      </Container>
    </div>
  );
};
