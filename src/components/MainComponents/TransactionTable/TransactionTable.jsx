import React from 'react';

import addData from '../../../assets/img/add-button.svg';

import s from './TransactionTable.module.scss';

const TransactionTable = () => {
  return (
    <div className={s.transactionTable}>
      <div className={s.transactionTable__header}>
        <span>ДАТА</span>
        <span>КАТЕГОРИЯ</span>
        <span>СУММА</span>
        <div className={s.transactionTable__button}>
          <img src={addData} alt="#" />
          <span>Add data</span>
        </div>
      </div>
      <ul className={s.transactionTable__list}></ul>
    </div>
  );
};

export default TransactionTable;
