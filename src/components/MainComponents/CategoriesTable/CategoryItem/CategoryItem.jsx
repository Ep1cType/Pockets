import cn from 'classnames';
import React from 'react';

import styles from './CategoryItem.module.scss';

const CategoryItem = ({ name, category_type }) => {
  return (
    <li className={styles.categoryItem}>
      <div className={styles.categoryItem__left}>
        <span className={cn({ [styles.categoryItem__left_income]: category_type === 'income' })}>{name}</span>
      </div>
      <div className={styles.categoryItem__right}></div>
    </li>
  );
};

export default CategoryItem;
