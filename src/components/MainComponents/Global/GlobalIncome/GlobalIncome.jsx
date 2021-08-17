import React from 'react';

import s from './GlobalIncome.module.scss';

const GlobalIncome = ({ incomeSum }) => {
  return (
    <div className={s.globalIncome}>
      <div className={s.globalIncome__text}>Доход</div>
      <div className={s.globalIncome__sum}>{incomeSum}</div>
    </div>
  );
};

export default GlobalIncome;
