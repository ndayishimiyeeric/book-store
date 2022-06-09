import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import styles from './style/Form.module.css';

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
    if (formData.title.trim() && formData.author.trim() && formData.category.trim()) {
      dispatch(addBook(formData));
    }

    setFormData({
      id: '',
      title: '',
      author: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.heading}>ADD NEW BOOK</h3>
      <div className={styles.formElements}>
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
        <button className={styles.button} type="submit">ADD BOOK</button>
      </div>
    </form>
  );
}

export default Form;
