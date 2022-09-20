import { FC } from 'react';
import { useLayoutStore } from '../../state';
import { HashLink } from 'react-router-hash-link';

export const Nav: FC = () => {
  const { setIsContactDialogOpen } = useLayoutStore();

  return (
    <div className='flex items-center gap-6'>
      <nav className='flex flex-wrap gap-4'>
        <HashLink to='#frontend-skills' smooth>
          Frontend
        </HashLink>
        <HashLink to='#backend-skills' smooth>
          Backend
        </HashLink>
        <HashLink to='#tools-and-knowledge' smooth>
          Tools & Knowledge
        </HashLink>
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
