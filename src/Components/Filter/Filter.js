import React from 'react';
import { connect } from 'react-redux';
import { addFilterValue } from '../../redux/contact/contact-actions';
import { getError, getFilter } from '../../redux/contact/contact-selectors';

const Filter = ({ filter, addFilterValue }) => {
  const onHandleChange = (e) => {
    addFilterValue(e.target.value)
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

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  addFilterValue: value => dispatch(addFilterValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);