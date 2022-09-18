import { FC } from 'react';
import { ContentSection, Header } from './components';

export const App: FC = () => {
  return (
    <>
      <Header />
      <ContentSection title='Section One'>section one</ContentSection>
      <ContentSection title='Section Two'>section two</ContentSection>
      <ContentSection title='Section Three'>section three</ContentSection>
    </>
  );
};
