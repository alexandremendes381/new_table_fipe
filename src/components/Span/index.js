// components/Span.js

import React from 'react';
import styles from './index.module.scss'; // Use your CSS module file here

const Span = ({ children }) => {
  return <span className={styles.customSpan}>{children}</span>;
};

export default Span;
