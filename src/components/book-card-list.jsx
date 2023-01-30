import bookImg from '../assets/img/book-image.png';

export function BookCardList(props) {
  const ratingStyle = 'book-card-list__info__rating'.concat(props.ratingBg);

  return (
    <div className='book-card-list' data-test-id='card'>
      <img className='book-card-list__img' src={props.bookImg} alt='Book cover' />
      <div className='book-card-list__info'>
        <div className='book-card-list__info__title-author'>
          <div className='book-card-list__info__title'>{props.title}</div>
          <div className='book-card-list__info__author'>
            {props.author}, {props.year}
          </div>
        </div>
        <div className='book-card-list__info__rating-button'>
          <div className={ratingStyle}>{props.rating}</div>
          <button className={props.buttonStyle} type='button'>
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
}

BookCardList.defaultProps = {
  bookImg,
  ratingBg: '',
  rating: '',
  title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
  author: 'Адитья Бхаргава',
  year: '2019',
  button: 'Забронировать',
  buttonStyle: 'button button_active book-card__button',
};
