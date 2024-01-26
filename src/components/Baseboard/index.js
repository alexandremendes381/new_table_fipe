import React from 'react';
import styles from './index.module.scss';
const Baseboard = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        © PixExtra. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Baseboard;
