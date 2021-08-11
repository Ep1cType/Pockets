import cn from 'classnames';
import React from 'react';

import Toggle from '../../CategoriesTable/CategoriesTableModalContent/Toggle/Toggle';

import s from './TransactionTableModalContent.module.scss';

const TransactionTableModalContent = ({
  categoryType,
  setCategoryType,
  error,
  categoryValue,
  setCategoryValue,
  setDateValue,
  dateValue,
  amountValue,
  setAmountValue,
}) => {
  return (
    <>
      <div className={s.TransactionTableModalContent__label}>Добавить данные</div>
      <Toggle categoryType={categoryType} setCategoryType={setCategoryType} />
      {error?.transaction_date && (
        <span className={s.TransactionTableModalContent__error}>{error.transaction_date}</span>
      )}
      {error?.category && <span className={s.TransactionTableModalContent__error}>{error.category}</span>}
      {error?.amount && <span className={s.TransactionTableModalContent__error}>{error.amount}</span>}
      <div className={s.modalContentInputs}>
        <input
          className={cn(s.modalContentInputs__input, s.modalContentInputs__input_date)}
          placeholder="Дата"
          type="text"
          onFocus={(e) => (e.currentTarget.type = 'date')}
          onBlur={(e) => (e.currentTarget.type = 'text')}
          onChange={(e) => setDateValue(e.target.value)}
          value={dateValue}
        />
        <input
          className={cn(s.modalContentInputs__input, s.modalContentInputs__input_category)}
          type="text"
          placeholder="Категория"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
        />
        <input
          className={cn(s.modalContentInputs__input, s.modalContentInputs__input_amount)}
          type="number"
          placeholder="Сумма"
          value={amountValue}
          onChange={(e) => setAmountValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default TransactionTableModalContent;
