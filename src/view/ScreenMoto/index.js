import styles from './index.module.scss';
import Header from '../../components/Header';
import InputSelect from '../../components/InputSelect';
import { Col } from 'react-bootstrap';
import ImageComponente from '../../components/ImageComponente';
import HookMoto from '../../hooks/HookMoto/HookMoto';
import ButtonGreen from '../../components/ButtonGreen';
import ButtonBlack from '../../components/ButtonBlack';

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
        <div>
            <div className={styles.screenContainer}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.centeredText}>
                        <h1>Verifique o Valor da sua Motocicleta</h1>
                        <h1>de forma rápida e fácil</h1>
                        <h4>Preencha todos os dados para obter o valor da sua motocicleta</h4>
                    </div>

                </div>
            </div>
            <div className={styles.divopen}>
                <Col>
                    <InputSelect
                        label="Marca da Moto"
                        options={marcas.map((marca) => ({ value: marca.codigo, label: marca.nome }))}
                        placeholder="Selecione a marca"
                        onChange={handleMarcaChange}
                        moto={true}
                    />
                </Col>
                <Col>
                    <InputSelect
                        label="Modelo da Moto"
                        options={modelos.map((modelos) => ({ value: modelos.codigo, label: modelos.nome }))}
                        placeholder="Selecione o modelo"
                        onChange={handleModeloChange}
                        isDisabled={!marcaSelecionada}
                        moto={true}
                    />
                </Col>
                <Col>
                    <InputSelect
                        label="Ano do modelo da Moto"
                        options={anos.map((anos) => ({ value: anos.codigo, label: anos.nome }))}
                        placeholder="Selecione o ano"
                        onChange={handleAnoChange}
                        isDisabled={!modeloSelecionado}
                        onLoad={carregarAnos}

                    />
                </Col>
                <Col>
                    <ButtonGreen type="#" onClick={handlePesquisarClick}>
                        Pesquisar
                    </ButtonGreen>
                </Col>
            </div>

            <div className={styles.divResultadoContainer}>
                <div className={styles.divResultado}>
                    <table className={styles.tableResultado} style={{ marginLeft: '140px' }}>
                        <thead>
                            <tr>
                                <th colSpan="2">Detalhes da pesquisa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tipo de Veículo:</td>
                                <td>{detalhesPesquisa?.TipoVeiculo}</td>
                            </tr>
                            <tr>
                                <td>Valor:</td>
                                <td>{detalhesPesquisa?.Valor}</td>
                            </tr>
                            <tr>
                                <td>Marca:</td>
                                <td>{detalhesPesquisa?.Marca}</td>
                            </tr>
                            <tr>
                                <td>Modelo:</td>
                                <td>{detalhesPesquisa?.Modelo}</td>
                            </tr>
                            <tr>
                                <td>Ano do Modelo:</td>
                                <td>{detalhesPesquisa?.AnoModelo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.imageContainer} style={{ marginRight: '120px' }}>
                    <ImageComponente moto={true} src={imagemVeiculo} alt="Veículo" />
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <Col className={styles.rightAlign}>
                    <a href="/">
                        <ButtonBlack className={styles.buttonWithSize} type="#">
                            retornar
                        </ButtonBlack>
                    </a>
                </Col>
            </div>
            <div style={{ marginTop: '20px' }}>

            </div>
        </div>
    );
}

export default ScreenMoto;
