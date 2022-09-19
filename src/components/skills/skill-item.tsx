import { FC } from 'react';

import { SkillLevelBar, SkillTag } from '.';
import { Skill } from '../../models';

type SkillItemProps = {
  skill: Skill;
};

export const SkillItem: FC<SkillItemProps> = ({
  skill: { name, level, tags },
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-4 tablet:gap-6'>
        <h3 className='drop-shadow-sm'>{name}</h3>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <SkillTag key={index} tag={tag} />
          ))}
        </div>
      </div>

      <SkillLevelBar level={level} />
    </div>
  );
};
