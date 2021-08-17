import React from 'react';

import s from './GlobalExpense.module.scss';

const GlobalExpense = ({ expenseSum }) => {
  return (
    <div className={s.globalExpense}>
      <div className={s.globalExpense__text}>Расход</div>
      <div className={s.globalExpense__sum}>{expenseSum}</div>
    </div>
  );
};

export default GlobalExpense;
