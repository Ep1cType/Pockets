import cn from 'classnames';
import React from 'react';

import './CategoryItem.scss';

const CategoryItem = ({ name, category_type }) => {
  return (
    <li className="categoryItem">
      <div className="categoryItem__left">
        <span className={cn({ categoryItem__left_income: category_type === 'income' })}>{name}</span>
      </div>
      <div className="categoryItem__right"></div>
    </li>
  );
};

export default CategoryItem;
