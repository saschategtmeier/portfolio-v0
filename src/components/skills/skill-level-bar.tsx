import { FC, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { SkillLevel } from '../../enums';

type SkillLevelBarProps = {
  level: SkillLevel;
};

export const SkillLevelBar: FC<SkillLevelBarProps> = ({ level }) => {
  const innerBarRef = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    gsap.fromTo(
      innerBarRef.current,
      {
        width: 0,
      },
      { width: `${((level + 1) / 5) * 100}%`, duration: 1, ease: 'expo' }
    );
  }, []);

  return (
    <div className="relative h-[1.4rem] rounded-full bg-slate-200/50 py-1 shadow backdrop-blur-sm tablet:h-[1.8rem] desktop:h-[2rem]">
      <div
        className={`absolute top-0 left-0 h-[1.4rem] rounded-full bg-gradient-to-r from-blue-500 to-blue-700 py-1 px-4 text-white tablet:h-[1.8rem] desktop:h-[2rem]`}
        ref={innerBarRef}
      ></div>
    </div>
  );
};
