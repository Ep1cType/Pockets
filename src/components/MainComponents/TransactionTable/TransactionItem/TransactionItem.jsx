import cn from 'classnames';
import React from 'react';

import deleteButton from '../../../../assets/img/deleteButton.svg';
import editButton from '../../../../assets/img/editButton.svg';

import s from './TransactionItem.module.scss';

const TransactionItem = ({ amount, data, categoryType, categoryName, id, deleteTransaction, openEditModal }) => {
  return (
    <li className={cn(s.transactionItem, { [s.transactionItem__status_ok]: categoryType === 'income' })}>
      <span className={cn(s.transactionItem__text, s.transactionItem__text_data)}>{data}</span>
      <span className={cn(s.transactionItem__text, s.transactionItem__text_category)}>{categoryName}</span>
      <span className={cn(s.transactionItem__text, s.transactionItem__text_sum)}>{amount}</span>
      <img
        className={cn(s.transactionItem__img, s.transactionItem__img_edit)}
        src={editButton}
        alt="#"
        onClick={() => openEditModal(id)}
      />
      <img
        className={cn(s.transactionItem__img, s.transactionItem__img_delete)}
        src={deleteButton}
        alt="#"
        onClick={() => deleteTransaction(id)}
      />
    </li>
  );
};

export default TransactionItem;
