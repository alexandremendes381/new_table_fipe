import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './index.module.scss';
import motocicleta from '../../assets/Logos/motocicleta.svg';
import carro from '../../assets/Logos/carro.svg';
import caminhao from '../../assets/Logos/caminhao.svg';

function ImageComponente({ src, alt, moto, car, truck }) {
    return (
        <div className={`${styles.imagecontainer} ${moto ? styles.motoBorder : ''}${truck ? styles.truckBorder : ''}`}>
            {src ? (
                <img src={src} alt={alt} />
            ) : (
                // Verifica primeiro se é uma motocicleta
                moto ? (
                    <img src={motocicleta} alt={alt} className={styles.placeholderIcon} />
                ) : (
                    // Verifica em seguida se é um carro
                    car ? (
                        <img src={carro} alt={alt} className={styles.placeholderIcon} />
                    ) : (
                        // Verifica se é um caminhão
                        truck ? (
                            <img src={caminhao} alt={alt} className={styles.placeholderIcon} />
                        ) : (
                            // Se não for nem moto, nem carro, nem caminhão, exibe o ícone de usuário
                            <FaUserCircle className={styles.placeholderIcon} />
                        )
                    )
                )
            )}
        </div>
    );
}

export default ImageComponente;
