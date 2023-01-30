import avatar from '../assets/img/small-avatar.png';
import rating from '../assets/img/star.png';

export const Review = (props) => (
  <div className='book-page__detail-info__review'>
    <div className='book-page__detail-info__review__user-date'>
      <img className='book-page__detail-info__review__avatar' src={avatar} alt='Avatar' />
      <div className='book-page__detail-info__review__user-name'>{props.name}</div>
      <div className='book-page__detail-info__review__date'>{props.date}</div>
    </div>
    <img className='book-page__detail-info__review__rating' src={rating} alt='Rating' />
    <p>{props.review}</p>
  </div>
);
