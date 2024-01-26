import React from 'react';
import styles from './index.module.scss';
import Header from '../../components/Header';
import MotorSelect from '../MotorSelect';

function ScreenMenu() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
            <div className={styles.screenContainer}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.centeredText}>
                        <h1>Faça a busca dos valores do seu veículo</h1>
                        <h1>Rápido e fácil</h1>
                        <h4>Clique no tipo de veículo que deseja fazer a pesquisa</h4>
                    </div>
                </div>
            </div>
            <div>
                <MotorSelect />
            </div>
        </div>
    );
}

export default ScreenMenu;
