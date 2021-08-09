import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TransactionService from '../../../services/TransactionService';
import { setTransactionsList } from '../../../store/transactions/transactionsActions';

import TransactionItem from './TransactionItem/TransactionItem';
import s from './TransactionTable.module.scss';
import TransactionTableHeader from './TransactionTableHeader/TransactionTableHeader';

const TransactionTable = () => {
  const dispatch = useDispatch();
  const transactionsList = useSelector((state) => state.transactionsPage.transactionsList);

  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

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

  return (
    <div className={s.transactionTable}>
      <TransactionTableHeader />
      <ul className={s.transactionTable__list} onScroll={scrollHandler}>
        {transactionsList.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            amount={transaction.amount}
            data={transaction.transaction_date}
            categoryType={transaction.category.category_type}
            categoryName={transaction.category.name}
          />
        ))}
      </ul>
      <div className={s.transactionTable__footer} />
    </div>
  );
};

export default TransactionTable;
