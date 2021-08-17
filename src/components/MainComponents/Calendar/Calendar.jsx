import React, { useState } from 'react';

import s from './Calendar.module.scss';
import CalendarBody from './CalendarBody/CalendarBody';

const Calendar = ({ choiceOption, setChoiceOption, setStartDate, setEndDate, setOffset, setFetching }) => {
  const [firstDay, setFirstDay] = useState('');
  const [lastDay, setLastDay] = useState('');

  return (
    <div className={s.calendar}>
      <div className={s.calendar__label}>
        <div className={s.calendar__text}>Date & Time Picker</div>
        <select value={choiceOption} onChange={(e) => setChoiceOption(e.target.value)} className={s.selector}>
          <option value="week" className={s.selector__item}>
            Week
          </option>
          <option value="month" className={s.selector__item}>
            Month
          </option>
          <option value="year" className={s.selector__item}>
            Year
          </option>
          <option value="all" className={s.selector__item}>
            all
          </option>
        </select>
      </div>
      <CalendarBody
        choiceOption={choiceOption}
        firstDay={firstDay}
        setFirstDay={setFirstDay}
        lastDay={lastDay}
        setLastDay={setLastDay}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setOffset={setOffset}
        setFetching={setFetching}
      />
    </div>
  );
};

export default Calendar;
