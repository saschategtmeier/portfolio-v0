import { FC } from 'react';
import { useLayoutStore } from '../../state';

export const Nav: FC = () => {
  const { setIsContactDialogOpen } = useLayoutStore();

  return (
    <div className='flex items-center gap-6'>
      <nav className='flex flex-wrap gap-4'>
        <a href=''>Frontend</a>
        <a href=''>Backend</a>
        <a href=''>Tools & Knowledge</a>
      </nav>
      <button
        className='rounded bg-blue-500 px-2 font-semibold text-white shadow-lg'
        onClick={() => setIsContactDialogOpen(true)}
      >
        Contact Me
      </button>
    </div>
  );
};
