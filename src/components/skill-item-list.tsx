import { FC, HTMLAttributes } from 'react';

import { SkillItem } from '.';
import { SkillCollection } from '../models';

type SkillItemListProps = {
  skillCollection?: SkillCollection;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

export const SkillItemList: FC<SkillItemListProps> = ({
  skillCollection,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {skillCollection?.skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
};
