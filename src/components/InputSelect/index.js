// InputSelect.js
import React from 'react';
import Select from 'react-select';
import styles from './index.module.scss';

const InputSelect = ({ label, options, className, placeholder, onChange }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="select-field">{label}</label>
      <Select
        id="select-field"
        options={options}
        placeholder={placeholder}
        className={`${styles.customSelect} ${className} ${styles.inputHalfWidth}`}
        isSearchable // Permite pesquisa
        onChange={handleChange} // Adiciona essa linha
      />
    </div>
  );
};

export default InputSelect;
