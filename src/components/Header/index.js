import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './index.module.scss';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logo} onClick={handleHomeClick}>
          <h2 className={styles.logoText}>FIPE Consulta</h2>
          <span className={styles.logoSubtext}>Tabela de valores</span>
        </div>
        
        {!isHomePage && (
          <nav className={styles.navigation}>
            <button 
              className={styles.backButton}
              onClick={handleHomeClick}
              aria-label="Voltar ao início"
            >
              ← Voltar ao início
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
