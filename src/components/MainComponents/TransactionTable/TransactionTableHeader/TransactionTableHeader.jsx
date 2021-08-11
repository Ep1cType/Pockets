import React from 'react';

import addData from '../../../../assets/img/add-button.svg';

import s from './TransactionTableHeader.module.scss';

const TransactionTableHeader = ({ openModal }) => {
  return (
    <div className={s.TransactionTableHeader}>
      <span className={s.TransactionTableHeader__text}>ДАТА</span>
      <span className={s.TransactionTableHeader__text}>КАТЕГОРИЯ</span>
      <span className={s.TransactionTableHeader__text}>СУММА</span>
      <div className={s.button} onClick={openModal}>
        <img className={s.button__img} src={addData} alt="#" />
        <span className={s.button__text}>Add data</span>
      </div>
    </div>
  );
};

export default TransactionTableHeader;
