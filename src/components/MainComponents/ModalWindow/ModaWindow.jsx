import React from 'react';

import closeButton from '../../../assets/img/closeButton.svg';
import './ModalWindow.scss';

const ModalWindow = ({ active, buttonLabel, handleSubmit, closeModal, children }) => {
  return (
    <>
      {active && (
        <div className="modalWindow">
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img onClick={closeModal} className="modalContent__close" src={closeButton} alt="#" />
            {children}
            <button className="modalContent__button" onClick={handleSubmit}>
              {buttonLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWindow;
