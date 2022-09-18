import { FC } from 'react';
import { ContentSection, Header } from './components';

export const App: FC = () => {
  return (
    <>
      <Header />
      <ContentSection>section one</ContentSection>
      <ContentSection>section two</ContentSection>
      <ContentSection>section three</ContentSection>
    </>
  );
};
