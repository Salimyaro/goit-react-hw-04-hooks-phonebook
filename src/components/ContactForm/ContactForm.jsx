import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };
  const handleNumberChange = ({ target }) => {
    setNumber(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.title}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={s.title}>
        Number
        <input
          className={s.input}
          type="text"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
