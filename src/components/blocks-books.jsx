import { books } from './constants/books-array';
import { BookCardList } from './book-card-list';
import { BookCardTile } from './book-card-tile';

export const BlocksOfBooks = ({ view }) => {
  const BookCard = view === 'tile' ? BookCardTile : BookCardList;

  return (
    <div className={'books-section__container books-section__'.concat(view)}>
      {books.map((elem) => (
        <BookCard {...elem} />
      ))}
    </div>
  );
};
