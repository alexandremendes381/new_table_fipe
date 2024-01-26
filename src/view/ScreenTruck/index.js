import styles from './index.module.scss';
import Header from '../../components/Header';
import InputSelect from '../../components/InputSelect';
import { Col } from 'react-bootstrap';
import ImageComponente from '../../components/ImageComponente';
import HookTruck from '../../hooks/HookTruck/HookTruck';
import ButtonOrange from '../../components/ButtonOrange';
import ButtonBlack from '../../components/ButtonBlack';

function Screentruck() {
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
    } = HookTruck()

    return (
        <div>
            <div className={styles.screenContainer}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.centeredText}>
                        <h1>Verifique o Valor do Caminhão</h1>
                        <h1>de forma rápida e fácil</h1>
                        <h4>Preencha todos os dados para obter o valor do Caminhão</h4>
                    </div>
                </div>
            </div>
            <div className={styles.divopen}>
                <Col>
                    <InputSelect
                        label="Marca do Caminhao"
                        options={marcas.map((marca) => ({ value: marca.codigo, label: marca.nome }))}
                        placeholder="Selecione a marca"
                        onChange={handleMarcaChange}
                    />
                </Col>
                <Col>
                    <InputSelect
                        label="Modelo do Caminhao"
                        options={modelos.map((modelos) => ({ value: modelos.codigo, label: modelos.nome }))}
                        placeholder="Selecione o modelo"
                        onChange={handleModeloChange}
                        isDisabled={!marcaSelecionada}
                    />
                </Col>
                <Col>
                    <InputSelect
                        label="Ano do modelo do Caminhao"
                        options={anos.map((anos) => ({ value: anos.codigo, label: anos.nome }))}
                        placeholder="Selecione o ano"
                        onChange={handleAnoChange}
                        isDisabled={!modeloSelecionado}
                        onLoad={carregarAnos}
                    />
                </Col>
                <Col>
                    <ButtonOrange type="#" onClick={handlePesquisarClick}>
                        Pesquisar
                    </ButtonOrange>
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
                    <ImageComponente src={imagemVeiculo} truck={true} alt="Veículo" />
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

export default Screentruck;
