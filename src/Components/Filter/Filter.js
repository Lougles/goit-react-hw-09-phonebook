import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterValue } from '../../redux/contact/contact-actions';
import { getFilter } from '../../redux/contact/contact-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  const onHandleChange = (e) => {
    dispatch(addFilterValue(e.target.value));
  }
  return (
    <label className="Searchbar">
      Поиск:
          <br/> 
      <input
        className="SearchForm-input"
        name="filter"
        type="text"
        onChange={onHandleChange}
        value={filter}
      />
    </label>
  );
};

export default Filter;