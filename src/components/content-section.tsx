import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react';

import { useIntersection } from 'react-use';

import { Container } from '.';
import { useHeaderStore } from '../state';

type ContentSectionProps = { title?: string } & PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

export const ContentSection: FC<ContentSectionProps> = ({
  title,
  children,
  className,
}) => {
  const { setHeader } = useHeaderStore();
  const ref = useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(ref, { threshold: 0.8 });

  useEffect(() => {
    if (title && !!intersection?.isIntersecting) {
      setHeader(title);
    }
  }, [intersection]);

  return (
    <div className={`min-h-screen w-full pt-32 ${className}`} ref={ref}>
      <Container>{children}</Container>
    </div>
  );
};
