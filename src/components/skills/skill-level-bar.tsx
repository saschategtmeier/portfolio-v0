import { FC, useEffect, useState } from 'react';
import { SkillLevel } from '../../enums';

type SkillLevelBarProps = {
  level: SkillLevel;
};

export const SkillLevelBar: FC<SkillLevelBarProps> = ({ level }) => {
  const [barWidth, setBarWidth] = useState<string>('');

  useEffect(() => {
    switch (level) {
      case SkillLevel.Novice:
        setBarWidth('w-1/5');
        break;
      case SkillLevel.AdvancedBeginner:
        setBarWidth('w-2/5');
        break;
      case SkillLevel.Competent:
        setBarWidth('w-3/5');
        break;
      case SkillLevel.Proficient:
        setBarWidth('w-4/5');
        break;
      case SkillLevel.Expert:
        setBarWidth('w-full');
        break;
      default:
        setBarWidth('w-1/5');
        break;
    }
  }, []);

  return (
    <div className='relative h-[1.4rem] rounded-full bg-slate-200/50 py-1 shadow backdrop-blur-sm tablet:h-[1.8rem] desktop:h-[2rem]'>
      <div
        className={`absolute top-0 left-0 h-[1.4rem] rounded-full bg-gradient-to-r from-blue-500 to-blue-700 py-1 px-4 text-white tablet:h-[1.8rem] desktop:h-[2rem] ${barWidth}`}
      ></div>
    </div>
  );
};
