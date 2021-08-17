import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesService from '../../../services/CaregoriesService';
import { setCategoriesList } from '../../../store/categories/categoriesActions';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

import s from './CategoriesTable.module.scss';
import CategoriesTableHeader from './CategoriesTableHeader/CategoriesTableHeader';
import CategoriesTableModalContent from './CategoriesTableModalContent/CategoriesTableModalContent';
import CategoriesTableSubheader from './CategoriesTableSubheader/CategoriesTableSubheader';
import CategoryItem from './CategoryItem/CategoryItem';

const CategoriesTable = ({ startDate, choiceOption, endDate, fetching }) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.categoriesPage.categoriesList);

  const [categoryValue, setCategoryValue] = useState('');
  const [active, setActive] = useState(false);
  const [categoryType, setCategoryType] = useState('expense');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fetching) {
      setIsLoading(true);
      CategoriesService.getCategoriesSum(startDate, endDate)
        .then((response) => {
          dispatch(setCategoriesList(response.data));
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.response.data);
          setIsLoading(false);
        });
    }
  }, [fetching, choiceOption]);

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
        CategoriesService.getCategoriesSum(startDate, endDate)
          .then((response) => {
            dispatch(setCategoriesList(response.data));
            setActive(false);
            setCategoryValue('');
            setIsLoading(false);
          })
          .catch((err) => {
            setError(err.response.data);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setError(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <div className={s.categoriesTable}>
      <Modal
        handleSubmit={handleSubmit}
        active={active}
        setActive={setActive}
        closeModal={closeModal}
        buttonLabel="Добавить"
      >
        <CategoriesTableModalContent
          categoryType={categoryType}
          setCategoryType={setCategoryType}
          error={error}
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
        />
      </Modal>
      <CategoriesTableHeader openModal={openModal} />
      <CategoriesTableSubheader />
      {!isLoading ? (
        <ul className={s.categoriesList}>
          {categoriesList.length >= 1 &&
            categoriesList.map((el) => (
              <CategoryItem
                key={el.id}
                name={el.name}
                category_type={el.category_type}
                transactions_sum={el.transactions_sum}
              />
            ))}
        </ul>
      ) : (
        <Loader />
      )}
      <div className={s.categoriesTable__footer} />
    </div>
  );
};

export default CategoriesTable;
