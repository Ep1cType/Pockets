import cn from 'classnames';
import React from 'react';

import s from './TransactionTableModalEditContent.module.scss';

const TransactionTableModalEditContent = ({
  error,
  dateValue,
  setDateValue,
  categoryValue,
  setCategoryValue,
  amountValue,
  setAmountValue,
}) => {
  return (
    <>
      <div className={s.editModalContent__label}>Изменить данные</div>
      {error?.transaction_date && <span className={s.editModalContent__error}>{error.transaction_date}</span>}
      {error?.category && <span className={s.editModalContent__error}>{error.category}</span>}
      {error?.amount && <span className={s.editModalContent__error}>{error.amount}</span>}
      {error?.name && <span className={s.editModalContent__error}>{error.name}</span>}
      <div className={s.editModalContentInputs}>
        <input
          className={cn(s.editModalContentInputs__input, s.editModalContentInputs__input_date)}
          placeholder="Дата"
          type="text"
          onFocus={(e) => (e.currentTarget.type = 'date')}
          onBlur={(e) => (e.currentTarget.type = 'text')}
          onChange={(e) => setDateValue(e.target.value)}
          value={dateValue}
        />
        <input
          className={cn(s.editModalContentInputs__input, s.editModalContentInputs__input_category)}
          type="text"
          placeholder="Категория"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
        />
        <input
          className={cn(s.editModalContentInputs__input, s.editModalContentInputs__input_amount)}
          type="number"
          placeholder="Сумма"
          value={amountValue}
          onChange={(e) => setAmountValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default TransactionTableModalEditContent;
