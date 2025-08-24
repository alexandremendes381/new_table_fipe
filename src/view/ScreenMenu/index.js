import React from 'react';
import styles from './index.module.scss';
import Header from '../../components/Header';
import MotorSelect from '../MotorSelect';
import Rodape from '../../components/Rodape';

function ScreenMenu() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.mainContent}>
                <section className={styles.heroSection}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>
                                Consulte o valor do seu veículo
                            </h1>
                            <h2 className={styles.heroSubtitle}>
                                Rápido e fácil
                            </h2>
                            <p className={styles.heroDescription}>
                                Escolha o tipo de veículo abaixo para começar sua pesquisa na tabela FIPE
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className={styles.selectionSection}>
                    <div className="container">
                        <MotorSelect />
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}

export default ScreenMenu;
