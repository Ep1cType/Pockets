import cn from 'classnames';
import React from 'react';

import s from './ModalContent.module.scss';

const ModalContent = ({ categoryType, setCategoryType, error, categoryValue, setCategoryValue }) => {
  let expensesClass = cn(
    { [`${s.toggle__item}`]: true },
    { [`${s.toggle__item_left}`]: true },
    { [`${s.toggle__item_active}`]: categoryType === 'expense' }
  );
  let incomeClass = cn({ [`${s.toggle__item}`]: true }, { [`${s.toggle__item_active}`]: categoryType === 'income' });

  return (
    <>
      <div className={s.modalContent__label}>Добавить данные</div>
      <div className={s.toggle}>
        <div className={expensesClass} onClick={() => setCategoryType('expense')}>
          Расходы
        </div>
        <div className={incomeClass} onClick={() => setCategoryType('income')}>
          Доходы
        </div>
      </div>
      {error?.name && <span className={s.modalContent__error}>{error.name}</span>}
      <div className={s.modalContent__input}>
        <input
          className={s.input}
          type="text"
          placeholder="Категория"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default ModalContent;
