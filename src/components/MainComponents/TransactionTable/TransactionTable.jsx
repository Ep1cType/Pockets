import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesService from '../../../services/CaregoriesService';
import TransactionService from '../../../services/TransactionService';
import { editCategories } from '../../../store/categories/categoriesActions';
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  setTransactionsList,
} from '../../../store/transactions/transactionsActions';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

import TransactionItem from './TransactionItem/TransactionItem';
import s from './TransactionTable.module.scss';
import TransactionTableHeader from './TransactionTableHeader/TransactionTableHeader';
import TransactionTableModalContent from './TransactionTableModalContent/TransactionTableModalContent';
import TransactionTableModalEditContent from './TransactionTableModalEditContent/TransactionTableModalEditContent';

const TransactionTable = ({ firstPickDay, lastPickDay }) => {
  const dispatch = useDispatch();
  const transactionsList = useSelector((state) => state.transactionsPage.transactionsList);
  const categoriesList = useSelector((state) => state.categoriesPage.categoriesList);

  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [categoryType, setCategoryType] = useState('expense');
  const [totalCount, setTotalCount] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [active, setActive] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  const [categoryValue, setCategoryValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [transactionID, setTransactionID] = useState('');
  const [categoryID, setCategoryID] = useState('');

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      TransactionService.getTransactions(offset)
        .then((response) => {
          dispatch(setTransactionsList([...transactionsList, ...response.data.results]));
          setOffset((prevState) => prevState + 20);
          setTotalCount(response.data.count);
          setFetching(false);
        })
        .catch((err) => {
          setError(err.response.data);
          setFetching(false);
        });
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop < 520 && transactionsList.length < totalCount) {
      setFetching(true);
    }
  };

  const openModal = () => {
    setActive(true);
  };

  const openEditModal = (id) => {
    setTransactionID(id);
    const selectedItem = transactionsList.find((el) => el.id === id);
    setCategoryID(selectedItem.category.id);
    setCategoryValue(selectedItem.category.name);
    setDateValue(selectedItem.transaction_date);
    setAmountValue(selectedItem.amount);
    setCategoryType(selectedItem.category.category_type);
    setActiveEdit(true);
  };

  const closeModal = () => {
    setActive(false);
    setCategoryValue('');
    setDateValue('');
    setAmountValue(null);
    setError(null);
  };

  const closeEditModal = () => {
    setActiveEdit(false);
    setCategoryValue('');
    setDateValue('');
    setAmountValue(null);
    setError(null);
  };

  const handleSubmit = () => {
    setError(null);
    let selectedCategory = categoriesList.find(
      (category) => category.name === categoryValue && category.category_type === categoryType
    );
    if (selectedCategory === undefined) {
      selectedCategory = {
        id: 1,
      };
    }
    let categoryID = selectedCategory.id;
    TransactionService.postTransaction(categoryID, dateValue, amountValue)
      .then((response) => {
        dispatch(addTransaction(response.data));
        setActive(false);
        setAmountValue('');
        setDateValue('');
        setCategoryValue('');
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const handleEditSubmit = () => {
    CategoriesService.editCategory(categoryID, {
      name: categoryValue,
      category_type: categoryType,
    })
      .then((response) => {
        dispatch(editCategories(response.data));
        TransactionService.editTransaction(transactionID, {
          category: categoryID,
          transaction_date: dateValue,
          amount: amountValue,
        })
          .then((response) => {
            dispatch(editTransaction(response.data));
            setActiveEdit(false);
          })
          .catch((err) => {
            setError(err.response.data);
          });
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const handleDelete = (id) => {
    TransactionService.deleteTransaction(id)
      .then(() => {
        dispatch(deleteTransaction(id));
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <div className={s.transactionTable}>
      <Modal
        handleSubmit={handleSubmit}
        active={active}
        setActive={setActive}
        closeModal={closeModal}
        buttonLabel="Добавить"
      >
        <TransactionTableModalContent
          error={error}
          categoryType={categoryType}
          setCategoryType={setCategoryType}
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          dateValue={dateValue}
          setDateValue={setDateValue}
          amountValue={amountValue}
          setAmountValue={setAmountValue}
        />
      </Modal>
      <Modal
        handleSubmit={handleEditSubmit}
        active={activeEdit}
        setActive={setActiveEdit}
        closeModal={closeEditModal}
        buttonLabel="Сохранить"
      >
        <TransactionTableModalEditContent
          error={error}
          dateValue={dateValue}
          setDateValue={setDateValue}
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          amountValue={amountValue}
          setAmountValue={setAmountValue}
        />
      </Modal>
      <TransactionTableHeader openModal={openModal} />
      {fetching && offset === 0 ? (
        <Loader />
      ) : (
        <ul className={s.transactionTable__list} onScroll={scrollHandler}>
          {transactionsList.length >= 1 &&
            transactionsList.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                id={transaction.id}
                amount={transaction.amount}
                data={transaction.transaction_date}
                categoryType={transaction.category.category_type}
                categoryName={transaction.category.name}
                deleteTransaction={handleDelete}
                openEditModal={openEditModal}
              />
            ))}
        </ul>
      )}
      <div className={s.transactionTable__footer} />
    </div>
  );
};

export default TransactionTable;
