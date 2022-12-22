import { FC, HTMLAttributes } from 'react';
import { SocialsLink } from '.';

type SocialsProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

export const Socials: FC<SocialsProps> = ({ className }) => (
  <div className={`flex items-center gap-2 desktop:gap-4 ${className}`}>
    <SocialsLink
      name="GitHub"
      link="https://github.com/saschategtmeier"
      logoLightMode="images/socials/github-light-mode.png"
      logoDarkMode="images/socials/github-dark-mode.png"
    />
    <SocialsLink
      name="LinkedIn"
      link="https://www.linkedin.com/in/sascha-tegtmeier-49b95b17b"
      logoLightMode="images/socials/linkedIn-light-mode.png"
      logoDarkMode="images/socials/linkedIn-dark-mode.png"
    />
    <SocialsLink
      name="Xing"
      link="https://www.xing.com/profile/Sascha_Tegtmeier4"
      logoLightMode="images/socials/xing-light-mode.png"
      logoDarkMode="images/socials/xing-dark-mode.png"
    />
    <a
      className="hoverable py-1 text-sm"
      href="mailto:hello@saschategtmeier.dev"
    >
      hello@saschategtmeier.dev
    </a>
  </div>
);
