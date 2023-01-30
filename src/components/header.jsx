import { Link } from 'react-router-dom';

import avatar from '../assets/img/avatar.png';
import logo from '../assets/img/logo.png';

export const Header = () => (
  <div className='header content'>
    <div className='container'>
      <div className='header__logo'>
        <Link to='/'>
        <img width='165' src={logo} alt='Logo clevertec' />
        </Link>
      </div>
      <h1>Библиотека</h1>
      <div className='header__person'>
        <div className='header__person__name'>Привет, Иван!</div>
        <img width='58' src={avatar} alt='Logo clevertec' />
      </div>
    </div>
  </div>
);
