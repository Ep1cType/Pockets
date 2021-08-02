import React from 'react';

import logo from '../../../assets/img/project-logo.svg';

import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.logo}>
      <img className={s.logo__img} src={logo} alt="#" />
    </div>
  );
};

export default Logo;
