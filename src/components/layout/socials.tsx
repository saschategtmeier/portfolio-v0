import { FC } from 'react';
import { SocialsLink } from '.';

export const Socials: FC = () => (
  <div className='flex items-center gap-4 desktop:gap-6'>
    <SocialsLink
      name='GitHub'
      link='https://github.com/saschategtmeier'
      logoLightMode='/socials/github-light-mode.png'
      logoDarkMode='/socials/github-dark-mode.png'
    />
    <SocialsLink
      name='LinkedIn'
      link='https://www.linkedin.com/in/sascha-tegtmeier-49b95b17b'
      logoLightMode='/socials/linkedIn-light-mode.png'
      logoDarkMode='/socials/linkedIn-dark-mode.png'
    />
    <SocialsLink
      name='Xing'
      link='https://www.xing.com/profile/Sascha_Tegtmeier4'
      logoLightMode='/socials/xing-light-mode.png'
      logoDarkMode='/socials/xing-dark-mode.png'
    />
    <a
      className='text-sm hover:text-blue-500'
      href='mailto:hello@saschategtmeier.dev'
    >
      hello@saschategtmeier.dev
    </a>
  </div>
);
