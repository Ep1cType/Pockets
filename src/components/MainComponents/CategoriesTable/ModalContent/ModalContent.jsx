import cn from 'classnames';
import React from 'react';

import './ModalContent.scss';

const ModalContent = ({ categoryType, setCategoryType, error, categoryValue, setCategoryValue }) => {
  let expensesClass = cn('modalContent__toggle_item', 'item_1', { categoryType: categoryType === 'expense' });
  let incomeClass = cn('modalContent__toggle_item', { categoryType: categoryType === 'income' });

  return (
    <>
      <div className="modalContent__label">Добавить данные</div>
      <div className="modalContent__toggle">
        <div className={expensesClass} onClick={() => setCategoryType('expense')}>
          Расходы
        </div>
        <div className={incomeClass} onClick={() => setCategoryType('income')}>
          Доходы
        </div>
      </div>
      {error?.name && <span className="modalContent__error">{error.name}</span>}
      <div className="modalContent__input">
        <input
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
