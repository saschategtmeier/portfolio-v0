import { FC, HTMLAttributes } from 'react';

import { SkillItem } from '.';
import { SkillCollection } from '../../models';

type SkillItemListProps = {
  skillCollection?: SkillCollection;
  title?: string;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

export const SkillItemList: FC<SkillItemListProps> = ({
  skillCollection,
  title,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div className='text-xl font-bold'>{title}</div>
      {skillCollection?.skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
};
