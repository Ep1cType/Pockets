import cn from 'classnames';
import React from 'react';

import s from './Toggle.module.scss';

const Toggle = ({ categoryType, setCategoryType }) => {
  let expensesClass = cn(
    { [s.toggle__item]: true },
    { [s.toggle__item_left]: true },
    { [s.toggle__item_active]: categoryType === 'expense' }
  );
  let incomeClass = cn({ [s.toggle__item]: true }, { [s.toggle__item_active]: categoryType === 'income' });

  return (
    <div className={s.toggle}>
      <div className={expensesClass} onClick={() => setCategoryType('expense')}>
        Расходы
      </div>
      <div className={incomeClass} onClick={() => setCategoryType('income')}>
        Доходы
      </div>
    </div>
  );
};

export default Toggle;
