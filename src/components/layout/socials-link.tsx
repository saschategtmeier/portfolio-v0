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
    target='_blank'
    rel='noopener noreferrer'
    className='w-8 desktop:w-10'
  >
    <img className='block dark:hidden' src={logoLightMode} alt={name} />
    <img className='hidden dark:block' src={logoDarkMode} alt={name} />
  </a>
);
