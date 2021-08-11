import React from 'react';

import addButton from '../../../../assets/img/add-button.svg';

import s from './CategoriesTableHeader.module.scss';

const CategoriesTableHeader = ({ openModal }) => {
  return (
    <div className={s.header}>
      <span className={s.header__text}>Summary</span>
      <button className={s.button} onClick={openModal}>
        <img className={s.button__img} src={addButton} alt="#" />
        <span className={s.button__text}>Add category</span>
      </button>
    </div>
  );
};

export default CategoriesTableHeader;
