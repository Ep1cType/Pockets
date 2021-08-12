import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WidgetsService from '../../../services/WidgetsService';
import { setWidgetsList } from '../../../store/widgets/widgetsActions';

import StaticWidgets from './StaticWidgets/StaticWidgets';
import WidgetItem from './WidgetItem/WidgetItem';
import s from './WidgetsList.module.scss';

const WidgetsList = () => {
  const dispatch = useDispatch();
  const widgetsList = useSelector((state) => state.widgetsPage.widgetList);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentWidgets, setCurrentWidgets] = useState(1);

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
      });
  }, [currentWidgets]);

  const changePage = () => {
    if (currentWidgets < Math.ceil(widgetsList.length / 4)) {
      setCurrentWidgets((prevState) => prevState + 1);
    }
  };

  //TODO: Функция удаления виджета
  // const handleDelete = (id) => {
  //   WidgetsService.deleteWidget(id)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // };

  return (
    <div className={s.widgetsList}>
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
          />
        ))}
      <StaticWidgets changePage={changePage} />
    </div>
  );
};

export default WidgetsList;
