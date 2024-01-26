import React from 'react';
import styles from './index.module.scss';

function MotorSelect() {
  return (
    <div className={styles.quadradosContainer}>
      <div className={styles.quadrado}>
        <h1 className={styles.textGreen}>Motos</h1>
        <p>Faça a pesquisa de motocicletas</p>
        <p>com valores atualizados</p>
        <p>Valores em R$</p>
        <a href="/moto">
          <button className={styles.ButtonGreen}>Buscar</button>
        </a>
        <p>Pesquisa simples</p>
        <p>Apenas adicionando</p>
        <p>marca</p>
        <p>modelo</p>
        <p>e ano</p>
      </div>
      <div className={styles.quadrado}>
        <h1 className={styles.textPurple}>Carros</h1>
        <p>Faça a pesquisa do seu automóvel</p>
        <p>com valores atualizados</p>
        <p>Valores em R$</p>
        <a href="/carros">
          <button className={styles.ButtonPurple}>Buscar</button>
        </a>
        <p>Pesquisa simples</p>
        <p>Apenas adicionando</p>
        <p>marca</p>
        <p>modelo</p>
        <p>e ano</p>
      </div>
      <div className={styles.quadrado}>
        <h1 className={styles.textOrange}>Caminhões</h1>
        <p>Faça a pesquisa do seu caminhão</p>
        <p>com valores atualizados</p>
        <p>Valores em R$</p>
        <a href="/caminhao">
          <button className={styles.ButtonOrange}>Buscar</button>
        </a>
        <p>Pesquisa simples</p>
        <p>Apenas adicionando</p>
        <p>marca</p>
        <p>modelo</p>
        <p>e ano</p>
      </div>
    </div>
  );
}

export default MotorSelect;
