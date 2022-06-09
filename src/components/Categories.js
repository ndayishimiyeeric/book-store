import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMessage } from '../redux/categories/categories';

function Categories() {
  const { status } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(displayMessage());
  };
  return (
    <>
      <button type="button" onClick={handleStatus}> Check Status </button>
      <h1>{ status }</h1>
    </>
  );
}

export default Categories;
