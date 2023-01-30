import { useState } from 'react';
import { Link } from 'react-router-dom';

import { categories } from './constants/categories-array';

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activePart, setActivePart] = useState(0);
  const onClickCategory = (index) => {
    setActiveCategory(index);
    setActivePart(0)
  };

  return (
    <nav className='categories'>
      <button type='button' onClick={() => setActivePart(0)} className={activePart === 0 ? 'title active' : 'title'}>
        Витрина книг
      </button>
      <ul>
        {categories.map((item, index) => (
          <li key={item[0]}>
            <button
              type='button'
              onClick={() => onClickCategory(index)}
              className={activeCategory === index && activePart === 0 ? 'active' : ''}
            >
              {item[0]}
              <span>{item[1]}</span>
            </button>
          </li>
        ))}
      </ul>
      <Link to='/terms'>
        <button type='button' onClick={() => setActivePart(1)} className={activePart === 1 ? 'active' : ''}>
          Правила пользования
        </button>
      </Link>
      <Link to='/contract'>
        <button type='button' onClick={() => setActivePart(2)} className={activePart === 2 ? 'active' : ''}>
          Договор оферты
        </button>
      </Link>
    </nav>
  );
};
