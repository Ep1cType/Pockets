import React from 'react';

import s from './CategoriesTableSubheader.module.scss';

const CategoriesTableSubheader = () => {
  return (
    <div className={s.subheader}>
      <div className={s.subheader__expense}>Расходы</div>
      <div className={s.subheader__income}>Сумма</div>
    </div>
  );
};

export default CategoriesTableSubheader;
