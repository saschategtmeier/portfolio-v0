import { FC, HTMLAttributes } from 'react';

type SkillTagProps = {
  tag: string;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

export const SkillTag: FC<SkillTagProps> = ({ tag, className }) => {
  return (
    <span
      className={`rounded-full bg-slate-300/50 px-2 py-1 text-xs shadow-sm backdrop-blur-sm dark:bg-slate-100/50 desktop:text-sm ${className}`}
    >
      {tag}
    </span>
  );
};
