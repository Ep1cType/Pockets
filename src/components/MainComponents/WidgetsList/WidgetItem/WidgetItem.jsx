import React from 'react';

import closeWidget from '../../../../assets/img/closeWidget.svg';

import AwardIcon from './AwardIcon/AwardIcon';
import s from './WidgetItem.module.scss';

const WidgetItem = ({ handleDelete, id, limit, color, criterion, transactions_sum, validity, category_name }) => {
  return (
    <li className={s.widgetItem} style={{ backgroundColor: color }}>
      <button className={s.widgetItem__button} onClick={() => handleDelete(id)}>
        <img className={s.widgetItem__button_close} src={closeWidget} alt="#" />
      </button>
      <div className={s.widgetItem__left}>
        <div className={s.widgetItem__circle}>
          <AwardIcon fill={color} />
        </div>
        <div className={s.widgetItem__validity}>
          {validity === 'day' && <span>День</span>}
          {validity === 'week' && <span>Неделя</span>}
          {validity === 'month' && <span>Месяц</span>}
        </div>
      </div>
      <div className={s.widgetItem__right}>
        <div className={s.widgetItem__text}>
          Тратить на {category_name} {criterion === 'less' && <span>меньше</span>}
          {criterion === 'more' && <span>больше</span>} {limit} рублей
        </div>
        <div className={s.widgetItem__limit}>
          {Math.trunc(transactions_sum)}/{Math.trunc(limit)}
        </div>
      </div>
    </li>
  );
};

export default WidgetItem;
