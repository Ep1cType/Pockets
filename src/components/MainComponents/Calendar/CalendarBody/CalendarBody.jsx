import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import leftIcon from '../../../../assets/img/leftIcon.svg';
import rightIcon from '../../../../assets/img/rightIcon.svg';

import s from './CalendarBody.module.scss';

const CalendarBody = ({ choiceOption, firstDay, setFirstDay, lastDay, setLastDay }) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getStartDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  const formatDate = (pickDate) => {
    let dd = pickDate.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = pickDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = pickDate.getFullYear();

    return yy + '-' + mm + '-' + dd;
  };

  let first = today.getDate() - today.getDay() + 1;
  let last = first + 6;
  let firstDayOfWeek = formatDate(new Date(today.setDate(first)));
  let lastDayOfWeek = formatDate(new Date(today.setDate(last)));

  const clickLeft = (year, month, day) => {
    setDate(new Date(year, month - 1, day));
  };

  const clickRight = (year, month, day) => {
    setDate(new Date(year, month + 1, day));
  };

  const onChange = (year, month, d) => {
    setDate(new Date(year, month, d));
    if (!firstDay) {
      setFirstDay(formatDate(new Date(year, month, d)));
    }
    if (firstDay) {
      setLastDay(formatDate(new Date(year, month, d)));
    }
    if (firstDay && lastDay) {
      setFirstDay('');
      setLastDay('');
    }
  };

  return (
    <>
      <div className={s.calendarBody__header}>
        <div className={s.calendarBody__settings}>
          <button className={s.calendarBody__button} onClick={() => clickLeft(year, month, day)}>
            <img src={leftIcon} alt="#" />
          </button>
          <div className={s.calendarBody__text}>
            <span className={s.calendarBody__text_month}>{MONTHS[month]}</span>
            <span className={s.calendarBody__text_year}>{year}</span>
          </div>
          <button className={s.calendarBody__button} onClick={() => clickRight(year, month, day)}>
            <img src={rightIcon} alt="#" />
          </button>
        </div>
        <div className={s.daysOfWeek}>
          {DAYS_OF_THE_WEEK.map((d, index) => (
            <span className={cn(s.daysOfWeek__item)} key={index}>
              {d}
            </span>
          ))}
        </div>
      </div>
      <ul className={s.daysList}>
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <li
                className={cn(
                  s.daysList__item,
                  {
                    [s.daysList__item_week]:
                      d <= Number(lastDayOfWeek.substring(8)) &&
                      d >= Number(firstDayOfWeek.substring(8)) &&
                      month === Number(firstDayOfWeek.substring(5, 7)) - 1 &&
                      month === Number(lastDayOfWeek.substring(5, 7)) - 1 &&
                      choiceOption === 'week',
                  },
                  {
                    [s.daysList__item_today]:
                      d === new Date().getDate() && month === new Date().getMonth() && choiceOption !== 'week',
                  },
                  {
                    [s.daysList__item_selectedFirst]:
                      Number(d) === Number(firstDay.substring(8)) && month === Number(firstDay.substring(5, 7)) - 1,
                  },
                  {
                    [s.daysList__item_selectedLast]:
                      Number(d) === Number(lastDay.substring(8)) && month === Number(lastDay.substring(5, 7)) - 1,
                  },
                  { [s.daysList__item_inactive]: d <= 0 }
                )}
                key={index}
                onClick={() => onChange(year, month, d)}
              >
                <i className={s.daysList__subitem}>{d > 0 && d}</i>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default CalendarBody;