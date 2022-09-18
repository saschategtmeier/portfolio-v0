import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { Container } from '.';

type ContentSectionProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export const ContentSection: FC<ContentSectionProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`min-h-screen w-full pt-32 ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};
