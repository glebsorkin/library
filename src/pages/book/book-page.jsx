import bookImg from '../../assets/img/book-page-image.png';
import rating from '../../assets/img/star.png';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Review } from '../../components/review';

import '../../scss/app.scss';

export const BookPage = (props) => {
  const detailInfoArray1 = [
    ['Издательство', 'Питер'],
    ['Год издания', '2019'],
    ['Страниц', '288'],
    ['Переплёт', 'Мягкая обложка'],
    ['Формат', '70х100'],
  ];
  const detailInfoArray2 = [
    ['Жанр', 'Компьютерная литература'],
    ['Вес', '370 г'],
    ['ISBN', '978-5-4461-0923-4'],
    ['Издатель', 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29'],
  ];
  const reviewFull =
    'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.';

  return (
    <div>
      <div className='wrapper'>
        <Header />
      </div>
      <div className='book-list-mini'>
        <div className='content'>
          <h2 className='container'>Бизнес книги / {props.title}</h2>
        </div>
      </div>
      <div className='wrapper'>
        <section className='book-page content'>
          <div className='container'>
            <div className='book-page__main-info'>
              <img className='book-page__main-info__img' src={bookImg} alt='Book cover' />
              <div className='book-page__main-info__title'>{props.title}</div>
              <div className='book-page__main-info__author'>
                {props.author}, {props.year}
              </div>
              <button className={props.buttonStyle} type='button'>
                {props.button}
              </button>
              <div className='book-page__main-info__about'>
                <h3 className='book-page__title'>О книге</h3>
                <p>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                  кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального
                  Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на
                  это свое время?
                </p>
                <p>
                  {' '}
                  Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                  алгоритмы — это веселое и увлекательное занятие.
                </p>
              </div>
            </div>
          </div>
          <div className='book-page__detail-info'>
            <h3 className='book-page__title'>Рейтинг</h3>
            <div className='book-page__detail-info__rating'>
              <img src={rating} alt='Rating' />
              {props.rating}
            </div>
            <h3 className='book-page__title'>Подробная информация</h3>
            <div className='book-page__detail-info__table'>
              <table className='table1'>
                <tbody>
                  {detailInfoArray1.map((elem) => (
                    <tr className='row' key={elem[0]}>
                      <td className='column_1' key={elem[0]}>
                        {elem[0]}
                      </td>
                      <td className='column_2' key={elem[1]}>
                        {elem[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className='table2'>
                <tbody>
                  {detailInfoArray2.map((elem) => (
                    <tr className='row' key={elem[0]}>
                      <td className='column_1' key={elem[0]}>
                        {elem[0]}
                      </td>
                      <td className='column_2' key={elem[1]}>
                        {elem[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className='book-page__title'>Отзывы</h3>
            <Review name='Иван Иванов' date='5 января 2019' review='' />
            <Review name='Николай Качков' date='20 июня 2018' review={reviewFull} />
            <Review name='Екатерина Беляева' date='18 февраля 2018' review='' />
            <button className='button button_active book-page__detail-info__button' type='button'>
              оценить книгу
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

BookPage.defaultProps = {
  bookImg,
  ratingBg: '',
  rating: 4.3,
  title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
  author: 'Адитья Бхаргава',
  year: '2019',
  button: 'Забронировать',
  buttonStyle: 'button button_active book-page__main-info__button',
};
