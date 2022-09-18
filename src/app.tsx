import { FC } from 'react';

export const App: FC = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-tr from-sky-700 via-blue-600 to-purple-600'>
      <div className='container mx-auto flex flex-col items-center text-center'>
        <h1 className='drop-sahdow text-5xl font-bold leading-loose tracking-wider text-gray-100'>
          Sascha Tegtmeier
        </h1>
        <h2 className='text-3xl font-semibold text-purple-300'>
          Fullstack Software Developer
        </h2>
      </div>
    </div>
  );
};
