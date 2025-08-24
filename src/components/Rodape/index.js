import React from 'react';
import styles from './index.module.scss';

function Rodape() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>FIPE Consulta</h4>
            <p className={styles.footerDescription}>
              Consulte valores de veículos baseados na tabela oficial FIPE
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h5 className={styles.sectionTitle}>Serviços</h5>
            <ul className={styles.footerLinks}>
              <li><a href="/">Automóveis</a></li>
              <li><a href="/">Motocicletas</a></li>
              <li><a href="/">Caminhões</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h5 className={styles.sectionTitle}>Informações</h5>
            <ul className={styles.footerLinks}>
              <li><a href="https://www.fipe.org.br" target="_blank" rel="noopener noreferrer">Sobre a FIPE</a></li>
              <li><a href="https://www.fipe.org.br/pt-br/indices/veiculos" target="_blank" rel="noopener noreferrer">Metodologia</a></li>
              <li><a href="https://www.fipe.org.br/pt-br/home/faq" target="_blank" rel="noopener noreferrer">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} FIPE Consulta. Dados baseados na tabela oficial FIPE.</p>
          </div>
          <div className={styles.disclaimer}>
            <p>Os valores apresentados são referenciais e podem variar conforme o mercado.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
