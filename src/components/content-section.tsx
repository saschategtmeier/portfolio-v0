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
  Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'id'>;

export const ContentSection: FC<ContentSectionProps> = ({
  title,
  children,
  className,
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
    <div className={`min-h-screen w-full pt-32 ${className}`} ref={ref} id={id}>
      <Container>{children}</Container>
    </div>
  );
};
