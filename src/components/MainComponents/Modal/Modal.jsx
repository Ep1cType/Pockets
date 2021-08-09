import React from 'react';
import ReactDOM from 'react-dom';

import closeButton from '../../../assets/img/closeButton.svg';

import s from './Modal.module.scss';

const ModalWindow = ({ active, buttonLabel, handleSubmit, closeModal, children }) => {
  return ReactDOM.createPortal(
    <>
      {active && (
        <div className={s.modal}>
          <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
            <div className={s.modal__button}>
              <img onClick={closeModal} className={s.modal__button_close} src={closeButton} alt="#" />
            </div>
            {children}
            <button className={s.modal__button_ok} onClick={handleSubmit}>
              {buttonLabel}
            </button>
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal')
  );
};

export default ModalWindow;
