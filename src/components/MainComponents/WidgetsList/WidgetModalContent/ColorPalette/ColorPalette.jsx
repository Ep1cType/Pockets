import cn from 'classnames';
import React from 'react';

import s from './ColorPalette.module.scss';

const ColorPalette = ({ colorValue, setColorValue }) => {
  const colors = ['#E5F5FF', '#E4F6E8', '#FFF0E9', '#F7F4FF', '#FFE5E5', '#E4E8F6', '#FCE9FF', '#EDEDED'];

  const changeColor = (color) => {
    setColorValue(color);
  };

  return (
    <div className={s.colorPalette}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => changeColor(color)}
          className={cn(s.colorPalette__color, { [s.colorPalette__color_selected]: color === colorValue })}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
