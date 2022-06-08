import React from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../redux/books/books';

function Form() {
  const [formData, setFormData] = React.useState({
    id: Math.floor(Math.random() * 1000),
    title: '',
    author: '',
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
      dispatch(addAction(formData));
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
