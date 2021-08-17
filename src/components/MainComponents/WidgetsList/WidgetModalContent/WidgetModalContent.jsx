import cn from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

import editButton from '../../../../assets/img/editButton.svg';

import ColorPalette from './ColorPalette/ColorPalette';
import s from './WidgetModalContent.module.scss';

const WidgetModalContent = ({
  categoryValue,
  setCategoryValue,
  validityValue,
  setValidityValue,
  limitValue,
  setLimitValue,
  criterionValue,
  setCriterionValue,
  colorValue,
  setColorValue,
}) => {
  const categoryList = useSelector((state) => state.categoriesPage.categoriesList);
  const filteredCategoryList = categoryList.filter((el) => el.category_type === 'expense');

  return (
    <>
      <div className={s.WidgetModalContent}>
        <div className={s.WidgetModalContent__headerInput}>
          <input className={s.WidgetModalContent__headerInput_name} type="text" placeholder="Имя виджета" />
          <img src={editButton} alt="#" />
        </div>
        <div className={s.WidgetModalContent__paramsInputs}>
          <select
            className={cn(s.WidgetModalContent__select, s.WidgetModalContent__select_category)}
            placeholder="Категория"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            <option className={s.WidgetModalContent__option} value="">
              Категория
            </option>
            {filteredCategoryList.map((el) => (
              <option className={s.WidgetModalContent__option} value={el.id} key={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          <input
            className={cn(s.WidgetModalContent__input, s.WidgetModalContent__input_limit)}
            type="number"
            placeholder="Лимит"
            value={limitValue}
            onChange={(e) => setLimitValue(e.target.value)}
          />
          <select
            className={cn(s.WidgetModalContent__select, s.WidgetModalContent__select_validity)}
            value={validityValue}
            onChange={(e) => setValidityValue(e.target.value)}
          >
            <option value="">Срок</option>
            <option value="day">День</option>
            <option value="week">Неделя</option>
            <option value="month">Месяц</option>
          </select>
        </div>
        <div className={s.WidgetModalContent__toggles}>
          <div
            className={cn(s.WidgetModalContent__toggle, s.WidgetModalContent__toggle_more, {
              [s.WidgetModalContent__toggle_active]: criterionValue === 'more',
            })}
            onClick={() => setCriterionValue('more')}
          >
            Больше
          </div>
          <div
            className={cn(s.WidgetModalContent__toggle, s.WidgetModalContent__toggle_less, {
              [s.WidgetModalContent__toggle_active]: criterionValue === 'less',
            })}
            onClick={() => setCriterionValue('less')}
          >
            Меньше
          </div>
        </div>
      </div>
      <ColorPalette colorValue={colorValue} setColorValue={setColorValue} />
    </>
  );
};

export default WidgetModalContent;
