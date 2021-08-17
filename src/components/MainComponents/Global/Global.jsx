import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import s from './Global.module.scss';
import GlobalExpense from './GlobalExpense/GlobalExpense';
import GlobalIncome from './GlobalIncome/GlobalIncome';

const Global = () => {
  const categoriesList = useSelector((state) => state.categoriesPage.categoriesList);
  const incomesList = categoriesList.filter((el) => el.category_type === 'income');
  const expensesList = categoriesList.filter((el) => el.category_type === 'expense');
  const incomeSum = incomesList.reduce((totalSum, category) => totalSum + Math.ceil(category.transactions_sum), 0);
  const expenseSum = expensesList.reduce((totalSum, category) => totalSum + Math.ceil(category.transactions_sum), 0);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('ru', { month: 'long' });

  const [coolText, setCoolText] = useState('');

  useEffect(() => {
    if (incomeSum > expenseSum) {
      setCoolText('Молодец !');
    } else if (incomeSum < expenseSum) {
      setCoolText('Трать меньше !');
    } else if (incomeSum === expenseSum) {
      setCoolText('Perfect !');
    }
  }, [incomeSum]);

  return (
    <div className={s.global}>
      <div className={s.global__label}>Global</div>
      <div className={s.global__content}>
        <div className={s.global__title}>
          {currentMonth} {currentYear}
        </div>
        <GlobalIncome incomeSum={incomeSum} />
        <GlobalExpense expenseSum={expenseSum} />
        <div className={s.coolest}>
          <span className={s.coolest__text}>{coolText}</span>
        </div>
      </div>
    </div>
  );
};

export default Global;
