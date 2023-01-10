import { FC } from 'react';

type SocialsLinkProps = {
  name: string;
  link: string;
  logoLightMode: string;
  logoDarkMode: string;
};

export const SocialsLink: FC<SocialsLinkProps> = ({
  name,
  link,
  logoLightMode,
  logoDarkMode,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="hoverable w-12 py-2 desktop:w-14"
  >
    <img className="block dark:hidden" src={logoLightMode} alt={name} />
    <img className="hidden dark:block" src={logoDarkMode} alt={name} />
  </a>
);
