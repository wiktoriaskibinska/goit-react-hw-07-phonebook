import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'myredux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = evt => {
    evt.preventDefault();
    const filterValue = evt.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };
  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>
        Find contacts by Name
        <input
          className={css.filterInput}
          type="text"
          onChange={onFilterChange}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
