import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BlocksOfBooks } from './blocks-books';

export function BooksSection() {
  const [activeView, setActiveView] = useState(0);

  return (
    <section className='books-section'>
      <section className='navigation'>
        <div className='navigation__search-filter'>
          <form className='button'>
            <i className='icon-search' />
            <input className='input' type='text' placeholder='Поиск книги или автора…' />
          </form>
          <button className='button button__filter' type='button'>
            <i className='icon-rating' />
            По рейтингу
          </button>
        </div>
        <div className='navigation__view'>
          <button
            onClick={() => setActiveView(0)}
            className={activeView === 0 ? 'button button__tile button_active' : 'button button__list'}
            type='button'
            data-test-id='button-menu-view-window'
          >
            <i className='icon-tile' />
          </button>
          <button
            onClick={() => setActiveView(1)}
            className={activeView === 1 ? 'button button__tile button_active' : 'button button__list'}
            type='button'
            data-test-id='button-menu-view-list'
          >
            <i className='icon-list' />
          </button>
        </div>
      </section>
      <Link to='/books/'>
      {
        activeView === 0 ? <BlocksOfBooks view='tile'/> : <BlocksOfBooks view='list'/>
      }
      </Link>
    </section>
  );
}
