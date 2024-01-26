import React from 'react';
import styles from './index.module.scss';

function ButtonBlue({ children , onClick,}) {
  return (
    <div>
      <button onClick={onClick} className={styles.ButtonNew}>{children}</button>
    </div>
  );
}

export default ButtonBlue;