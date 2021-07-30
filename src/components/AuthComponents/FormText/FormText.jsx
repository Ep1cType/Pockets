import React from 'react';

import s from './FormText.module.scss';

const FormText = ({ title, subtitle }) => {
  return (
    <div className={s.form_text}>
      <div className={`${s.form_text}  ${s.title}`}>
        <span>{title}</span>
      </div>
      <div className={`${s.form_text}  ${s.subtitle}`}>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default FormText;
