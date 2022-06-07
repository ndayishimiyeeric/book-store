import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAction } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(updateAction());
  };
  return (
    <>
      <button type="button" onClick={handleStatus}> Check Status </button>
      <h1>{ categories }</h1>
    </>
  );
}

export default Categories;
