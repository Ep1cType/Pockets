import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './FormFooter.module.scss';

const FormFooter = ({ footerText, footerTextLink, route }) => {
  return (
    <div className={styles.form_footer}>
      <span>{footerText}</span>
      <NavLink className={styles.link} to={route}>
        {footerTextLink}
      </NavLink>
    </div>
  );
};

export default FormFooter;
