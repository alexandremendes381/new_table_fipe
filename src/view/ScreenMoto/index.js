import React from 'react';
import styles from './index.module.scss';
import Header from '../../components/Header';
import InputSelect from '../../components/InputSelect';
import ImageComponente from '../../components/ImageComponente';
import HookMoto from '../../hooks/HookMoto/HookMoto';
import ButtonGreen from '../../components/ButtonGreen';
import ButtonBlack from '../../components/ButtonBlack';
import Rodape from '../../components/Rodape';

function ScreenMoto() {
    const {
        marcas,
        handleMarcaChange,
        modelos,
        handleModeloChange,
        marcaSelecionada,
        anos,
        handleAnoChange,
        modeloSelecionado,
        carregarAnos,
        handlePesquisarClick,
        detalhesPesquisa,
        imagemVeiculo,
    } = HookMoto()

    return (
        <div className={styles.pageContainer}>
            <Header />
            
            <main className={styles.mainContent}>
                <section className={styles.heroSection}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>
                                Consulta de Motocicletas
                            </h1>
                            <p className={styles.heroDescription}>
                                Preencha os dados abaixo para obter o valor atualizado da sua motocicleta
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.formSection}>
                    <div className="container">
                        <div className={styles.formContainer}>
                            <div className={styles.formGrid}>
                                <div className={styles.inputWrapper}>
                                    <InputSelect
                                        label="Marca da Motocicleta"
                                        options={marcas?.map((marca) => ({ value: marca.codigo, label: marca.nome }))}
                                        placeholder="Selecione a marca"
                                        onChange={handleMarcaChange}
                                        moto={true}
                                    />
                                </div>
                                
                                <div className={styles.inputWrapper}>
                                    <InputSelect
                                        label="Modelo da Motocicleta"
                                        options={modelos?.map((modelos) => ({ value: modelos.codigo, label: modelos.nome }))}
                                        placeholder="Selecione o modelo"
                                        onChange={handleModeloChange}
                                        isDisabled={!marcaSelecionada}
                                        moto={true}
                                    />
                                </div>
                                
                                <div className={styles.inputWrapper}>
                                    <InputSelect
                                        label="Ano do modelo da Motocicleta"
                                        options={anos?.map((anos) => ({ value: anos.codigo, label: anos.nome }))}
                                        placeholder="Selecione o ano"
                                        onChange={handleAnoChange}
                                        isDisabled={!modeloSelecionado}
                                        onLoad={carregarAnos}
                                    />
                                </div>
                                
                                <div className={styles.buttonWrapper}>
                                    <ButtonGreen type="#" onClick={handlePesquisarClick}>
                                        Pesquisar
                                    </ButtonGreen>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {detalhesPesquisa && (
                    <section className={styles.resultsSection}>
                        <div className="container">
                            <div className={styles.resultsContainer}>
                                <div className={styles.tableContainer}>
                                    <h2 className={styles.resultsTitle}>Resultado da Consulta</h2>
                                    <div className={styles.tableWrapper}>
                                        <table className={styles.resultsTable}>
                                            <tbody>
                                                <tr>
                                                    <td className={styles.label}>Tipo de Veículo:</td>
                                                    <td className={styles.value}>{detalhesPesquisa?.TipoVeiculo}</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.label}>Valor:</td>
                                                    <td className={`${styles.value} ${styles.price}`}>{detalhesPesquisa?.Valor}</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.label}>Marca:</td>
                                                    <td className={styles.value}>{detalhesPesquisa?.Marca}</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.label}>Modelo:</td>
                                                    <td className={styles.value}>{detalhesPesquisa?.Modelo}</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.label}>Ano do Modelo:</td>
                                                    <td className={styles.value}>{detalhesPesquisa?.AnoModelo}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <div className={styles.imageContainer}>
                                    <ImageComponente moto={true} src={imagemVeiculo} alt="Motocicleta" />
                                </div>
                            </div>
                            
                            <div className={styles.backButtonContainer}>
                                <ButtonBlack onClick={() => window.location.href = '/'}>
                                    ← Voltar ao início
                                </ButtonBlack>
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Rodape />
        </div>
    );
}

export default ScreenMoto;
