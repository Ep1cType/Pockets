import React from 'react';

import addData from '../../../assets/img/add-button.svg';

import s from './TransactionTable.module.scss';

const TransactionTable = () => {
  return (
    <div className={s.transactionTable}>
      <div className={s.header}>
        <span className={s.header__text}>ДАТА</span>
        <span className={s.header__text}>КАТЕГОРИЯ</span>
        <span className={s.header__text}>СУММА</span>
        <div className={s.button}>
          <img className={s.button__img} src={addData} alt="#" />
          <span className={s.button__text}>Add data</span>
        </div>
      </div>
      <ul className={s.transactionTable__list}></ul>
    </div>
  );
};

export default TransactionTable;
