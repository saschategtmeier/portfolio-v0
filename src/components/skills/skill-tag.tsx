import { FC } from 'react';

type SkillTagProps = {
  tag: string;
};

export const SkillTag: FC<SkillTagProps> = ({ tag }) => {
  return (
    <span className='rounded-full bg-slate-100/50 px-2 py-1 text-xs shadow-sm backdrop-blur-sm desktop:text-sm'>
      {tag}
    </span>
  );
};
