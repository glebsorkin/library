import { BooksSection } from '../../components/books-section';
import { Categories } from '../../components/categories';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import '../../scss/app.scss';

export const MainPage = () => (
  <div className='wrapper'>
    <Header />
    <main className='main content'>
      <Categories />
      <BooksSection /> 
    </main>
    <Footer />
  </div>
);