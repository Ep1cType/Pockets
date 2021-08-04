import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './FormFooter.module.scss';

const FormFooter = ({ footerText, footerTextLink, route }) => {
  return (
    <div className={s.formFooter}>
      <span className={s.formFooter__text}>{footerText}</span>
      <NavLink className={s.formFooter__link} to={route}>
        {footerTextLink}
      </NavLink>
    </div>
  );
};

export default FormFooter;
