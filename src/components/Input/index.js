import React, { useState } from 'react';
import styles from './index.module.scss';

const Input = ({ label, className }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="input-field">{label}</label>
      <input
        type="text"
        id="input-field"
        value={inputValue}
        onChange={handleInputChange}
        className={className}
      />
    </div>
  );
};

export default Input;
