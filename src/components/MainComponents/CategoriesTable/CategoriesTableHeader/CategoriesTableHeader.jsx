import React from 'react';

import addButton from '../../../../assets/img/add-button.svg';

import s from './CategoriesTableHeader.module.scss';

const CategoriesTableHeader = ({ openModal }) => {
  return (
    <div className={s.header}>
      <span className={s.header__text}>Summary</span>
      <div className={s.header__button}>
        <img onClick={openModal} src={addButton} alt="#" />
        <span>Add category</span>
      </div>
    </div>
  );
};

export default CategoriesTableHeader;
