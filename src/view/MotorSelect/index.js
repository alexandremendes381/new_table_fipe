import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

function MotorSelect() {
  const navigate = useNavigate();

  const vehicleTypes = [
    {
      id: 'moto',
      title: 'Motocicletas',
      description: 'Faça a pesquisa de motocicletas com valores atualizados da tabela FIPE',
      route: '/moto',
      colorClass: 'green',
      icon: '🏍️'
    },
    {
      id: 'carro',
      title: 'Automóveis',
      description: 'Consulte o valor do seu carro com dados oficiais da FIPE',
      route: '/carros',
      colorClass: 'purple',
      icon: '🚗'
    },
    {
      id: 'caminhao',
      title: 'Caminhões',
      description: 'Verifique o preço de caminhões e veículos pesados',
      route: '/caminhao',
      colorClass: 'orange',
      icon: '🚛'
    }
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {vehicleTypes.map((vehicle) => (
          <div
            key={vehicle.id}
            className={`${styles.card} ${styles[vehicle.colorClass]}`}
            onClick={() => handleCardClick(vehicle.route)}
          >
            <div className={styles.cardHeader}>
              <div className={styles.icon}>{vehicle.icon}</div>
              <h3 className={styles.title}>{vehicle.title}</h3>
            </div>
            
            <div className={styles.cardBody}>
              <p className={styles.description}>{vehicle.description}</p>
              
              <div className={styles.features}>
                <div className={styles.feature}>✓ Pesquisa simples</div>
                <div className={styles.feature}>✓ Dados atualizados</div>
                <div className={styles.feature}>✓ Valores oficiais FIPE</div>
              </div>
            </div>
            
            <div className={styles.cardFooter}>
              <button className={`${styles.button} ${styles[`button${vehicle.colorClass.charAt(0).toUpperCase() + vehicle.colorClass.slice(1)}`]}`}>
                Consultar Agora
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MotorSelect;
