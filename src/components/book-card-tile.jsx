import bookImg from '../assets/img/book-image.png';

export function BookCardTile(props) {
  const ratingStyle = 'book-card-tile__info__rating'.concat(props.ratingBg);

  return (
    <div className='book-card-tile' data-test-id='card'>
      <div className="book-card-tile__info">
        <img className='book-card-tile__info__img' src={props.bookImg} alt='Book cover'/>
        <div className={ratingStyle} >
          {props.rating}
        </div>
        <div className='book-card-tile__info__title'>{props.title}</div>
        <div className='book-card-tile__info__author'>{props.author}, {props.year}</div>
      </div>
      <button className={props.buttonStyle} type='button'>{props.button}</button>
    </div>
  );
}

BookCardTile.defaultProps = {
  bookImg,
  ratingBg: '',
  rating: '',
  title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
  author: 'Адитья Бхаргава',
  year: '2019',
  button: 'Забронировать',
  buttonStyle: 'button button_active book-card__button',
};
