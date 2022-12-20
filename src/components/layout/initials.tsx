import { FC } from 'react';
import { HashLink } from 'react-router-hash-link';

export const Initials: FC = () => {
  return (
    <HashLink
      to="#"
      className="h-9 cursor-pointer rounded border-2 border-black px-2 text-2xl font-bold tracking-wide dark:border-white"
      smooth
    >
      ST
    </HashLink>
  );
};
