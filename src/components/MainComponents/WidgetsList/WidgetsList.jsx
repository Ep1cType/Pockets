import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WidgetsService from '../../../services/WidgetsService';
import { addWidget, deleteWidget, setWidgetsList } from '../../../store/widgets/widgetsActions';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

import StaticWidgets from './StaticWidgets/StaticWidgets';
import WidgetItem from './WidgetItem/WidgetItem';
import WidgetModalContent from './WidgetModalContent/WidgetModalContent';
import s from './WidgetsList.module.scss';

const WidgetsList = () => {
  const dispatch = useDispatch();
  const widgetsList = useSelector((state) => state.widgetsPage.widgetList);

  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(null);
  const [currentWidgets, setCurrentWidgets] = useState(1);

  const [categoryValue, setCategoryValue] = useState('');
  const [validityValue, setValidityValue] = useState('');
  const [limitValue, setLimitValue] = useState('');
  const [criterionValue, setCriterionValue] = useState('more');

  const [colorValue, setColorValue] = useState('#E5E5E5');

  const lastWidgetIndex = currentWidgets * 4;
  const firstWidgetIndex = lastWidgetIndex - 4;
  const currentWidgetsList = widgetsList.slice(firstWidgetIndex, lastWidgetIndex);

  useEffect(() => {
    setIsLoading(true);
    WidgetsService.getWidgets()
      .then((response) => {
        dispatch(setWidgetsList(response.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
        setIsLoading(false);
      });
  }, [currentWidgets]);

  const changePage = () => {
    if (currentWidgets < Math.ceil(widgetsList.length / 4)) {
      setCurrentWidgets((prevState) => prevState + 1);
    }
  };

  const openModal = () => {
    setActive(true);
  };

  const closeModal = () => {
    setActive(false);
    setCriterionValue('more');
    setLimitValue('');
    setValidityValue('');
    setCategoryValue('');
    setColorValue('#E5E5E5');
  };

  const handleSubmit = () => {
    WidgetsService.createWidget(categoryValue, limitValue, validityValue, criterionValue, colorValue)
      .then((response) => {
        dispatch(addWidget(response.data));
      })
      .catch((err) => {
        setError(err.response.data);
      });
    setActive(false);
  };

  const handleDelete = (id) => {
    setIsLoading(true);
    WidgetsService.deleteWidget(id)
      .then((response) => {
        dispatch(deleteWidget(id));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div className={s.widgetsList}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={s.widgetsList}>
      <Modal active={active} buttonLabel="Добавить" handleSubmit={handleSubmit} closeModal={closeModal}>
        <WidgetModalContent
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          validityValue={validityValue}
          setValidityValue={setValidityValue}
          limitValue={limitValue}
          setLimitValue={setLimitValue}
          criterionValue={criterionValue}
          setCriterionValue={setCriterionValue}
          colorValue={colorValue}
          setColorValue={setColorValue}
        />
      </Modal>
      {currentWidgetsList.length >= 1 &&
        currentWidgetsList.map((el) => (
          <WidgetItem
            key={el.id}
            category_name={el.category.name}
            id={el.id}
            limit={el.limit}
            validity={el.validity}
            transactions_sum={el.transactions_sum}
            color={el.color}
            criterion={el.criterion}
            handleDelete={handleDelete}
          />
        ))}
      <StaticWidgets changePage={changePage} openModal={openModal} />
    </div>
  );
};

export default WidgetsList;
