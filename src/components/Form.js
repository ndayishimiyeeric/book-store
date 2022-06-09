import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [formData, setFormData] = React.useState({
    id: Math.floor(Math.random() * 1000),
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (event) => {
    const {
      value, name, type, checked,
    } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.title.trim() && formData.author.trim()) {
      dispatch(addBook(formData));
    }

    setFormData({
      id: '',
      title: '',
      author: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>ADD NEW BOOK</h3>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Book title"
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <select
        name="category"
        id="category"
        onChange={handleChange}
      >
        <option value="">Categories</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Comic">Comic</option>
        <option value="Classic">Classic</option>
        <option value="Detective">Detective</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Historical">Historical</option>
        <option value="Horror">Horror</option>
        <option value="Novel">Novel</option>
        <option value="Scientific">Scientific</option>
        <option value="Technology">Technology</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
