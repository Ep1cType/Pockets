import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesService from '../../../services/CaregoriesService';
import { setCategoriesList } from '../../../store/categories/categoriesActions';
import ModalWindow from '../ModalWindow/ModaWindow';

import s from './CategoriesTable.module.scss';
import CategoriesTableHeader from './CategoriesTableHeader/CategoriesTableHeader';
import CategoriesTableSubheader from './CategoriesTableSubheader/CategoriesTableSubheader';
import CategoryItem from './CategoryItem/CategoryItem';
import ModalContent from './ModalContent/ModalContent';

const CategoriesTable = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.categoriesPage.categoriesList);

  const [categoryValue, setCategoryValue] = useState('');
  const [active, setActive] = useState(false);
  const [categoryType, setCategoryType] = useState('expense');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    CategoriesService.getCategories()
      .then((response) => {
        dispatch(setCategoriesList(response.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        setIsLoading(false);
      });
  }, []);

  const openModal = () => {
    setActive(true);
  };

  const closeModal = () => {
    setActive(false);
    setCategoryValue('');
    setError(null);
  };

  const handleSubmit = () => {
    setError(null);
    CategoriesService.setCategory(categoryValue, categoryType)
      .then((response) => {
        dispatch(setCategoriesList(response.data));
        CategoriesService.getCategories()
          .then((response) => {
            dispatch(setCategoriesList(response.data));
            setActive(false);
            setCategoryValue('');
          })
          .catch((err) => {
            setError(err.response.data);
          });
      })
      .catch((err) => {
        setError(err.response.data);
      });
    setCategoryValue('');
  };

  if (isLoading) {
    return <span>LOADING...</span>;
  }

  return (
    <div className={s.categoriesTable}>
      <ModalWindow
        handleSubmit={handleSubmit}
        active={active}
        setActive={setActive}
        closeModal={closeModal}
        buttonLabel="Добавить"
      >
        <ModalContent
          categoryType={categoryType}
          setCategoryType={setCategoryType}
          error={error}
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
        />
      </ModalWindow>
      <CategoriesTableHeader openModal={openModal} />
      <CategoriesTableSubheader />
      <ul className={s.categoriesList}>
        {categoriesList.length > 1 &&
          categoriesList.map((el) => <CategoryItem key={el.id} name={el.name} category_type={el.category_type} />)}
      </ul>
      <div className={s.categoriesFooter}></div>
    </div>
  );
};

export default CategoriesTable;
