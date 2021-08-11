import React from 'react';

import s from './CategoriesTableModalContent.module.scss';
import Toggle from './Toggle/Toggle';

const CategoriesTableModalContent = ({ categoryType, setCategoryType, error, categoryValue, setCategoryValue }) => {
  return (
    <>
      <div className={s.modalContent__label}>Добавить данные</div>
      <Toggle categoryType={categoryType} setCategoryType={setCategoryType} />
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

export default CategoriesTableModalContent;
