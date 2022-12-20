import { FC, HTMLAttributes } from 'react';

import { SkillCollection } from '../../models';
import { SkillItem } from './skill-item';

type SkillItemGridProps = {
  skillCollection?: SkillCollection;
  useFullWidth?: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

export const SkillItemGrid: FC<SkillItemGridProps> = ({
  skillCollection,
  useFullWidth = false,
  className,
}) => {
  const colSpan = useFullWidth
    ? 'col-span-2 grid-cols-1 desktop:grid-cols-2'
    : 'col-span-1 grid-cols-1';

  return (
    <div
      className={`grid gap-6 tablet:gap-8 desktop:gap-10 ${className} ${colSpan}`}
    >
      {skillCollection?.skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
};
