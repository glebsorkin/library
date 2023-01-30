import { Categories } from './categories';
import { Documents } from './documents';
import { Footer } from './footer';
import { Header } from './header';

import '../scss/app.scss';

export const Terms = ({ name }) => (
  <div className='wrapper'>
    <Header />
    <main className='main content'>
      <Categories />
      <Documents name = { name }/>
    </main>
    <Footer />
  </div>
);
