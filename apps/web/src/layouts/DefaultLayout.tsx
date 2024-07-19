import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FC, PropsWithChildren } from 'react';

const DefaultLayout: FC<PropsWithChildren> = (props) => {
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

DefaultLayout.displayName = 'DefaultLayout';

export { DefaultLayout };
