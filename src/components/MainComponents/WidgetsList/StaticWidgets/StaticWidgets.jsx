import cn from 'classnames';
import React from 'react';

import navVector from '../../../../assets/img/navVector.svg';

import s from './StaticWidgets.module.scss';

const StaticWidgets = ({ changePage, openModal }) => {
  return (
    <div className={s.staticWidgets}>
      <div className={s.plugWidget} />
      <div className={s.navigationWidget}>
        <button onClick={changePage} className={cn(s.navigationWidget__button, s.navigationWidget__button_nextWidgets)}>
          <img className={s.button__img} src={navVector} alt="#" />
        </button>
        <button className={cn(s.navigationWidget__button, s.navigationWidget__button_addWidget)} onClick={openModal}>
          <div className={s.button__text}>Add Widget</div>
        </button>
      </div>
    </div>
  );
};

export default StaticWidgets;
