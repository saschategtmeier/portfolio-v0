import { FC, HTMLAttributes, PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};
