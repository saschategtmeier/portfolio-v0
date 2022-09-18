import { FC } from 'react';

type SkillTagProps = {
  tag: string;
};

export const SkillTag: FC<SkillTagProps> = ({ tag }) => {
  return (
    <span className='rounded-md bg-slate-200 px-2 py-1 text-sm shadow-sm'>
      {tag}
    </span>
  );
};
