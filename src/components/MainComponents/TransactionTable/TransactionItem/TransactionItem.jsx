import cn from 'classnames';
import React from 'react';

import deleteButton from '../../../../assets/img/deleteButton.svg';
import editButton from '../../../../assets/img/editButton.svg';

import s from './TransactionItem.module.scss';

const TransactionItem = ({ amount, data, categoryType, categoryName }) => {
  return (
    <li className={cn({ [s.transactionItem]: true }, { [s.transactionItem__status_ok]: categoryType === 'income' })}>
      <span className={cn({ [s.transactionItem__text]: true }, { [s.transactionItem__text_data]: true })}>{data}</span>
      <span className={cn({ [s.transactionItem__text]: true }, { [s.transactionItem__text_category]: true })}>
        {categoryName}
      </span>
      <span className={cn({ [s.transactionItem__text]: true }, { [s.transactionItem__text_sum]: true })}>{amount}</span>
      <img
        className={cn({ [s.transactionItem__img]: true }, { [s.transactionItem__img_edit]: true })}
        src={editButton}
        alt="#"
      />
      <img
        className={cn({ [s.transactionItem__img]: true }, { [s.transactionItem__img_delete]: true })}
        src={deleteButton}
        alt="#"
      />
    </li>
  );
};

export default TransactionItem;
