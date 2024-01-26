import axios from "axios";
import { useEffect, useState } from "react";

function HookTruck() {
    const [marcas, setMarcas] = useState([]);
    const [modelos, setModelos] = useState([]);
    const [anos, setAnos] = useState([]);
    const [marcaSelecionada, setMarcaSelecionada] = useState('');
    const [modeloSelecionado, setModeloSelecionado] = useState('');
    const [anoSelecionado, setAnoSelecionado] = useState('');
    const [detalhesPesquisa, setDetalhesPesquisa] = useState(null);
    const [imagemVeiculo, setImagemVeiculo] = useState('');

    useEffect(() => {
        const carregarMarcas = async () => {
            try {
                const response = await axios.get('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas');
                setMarcas(response.data);
            } catch (error) {
                console.error('Erro ao obter marcas:', error);
            }
        };

        carregarMarcas();
    }, []);

    const carregarModelos = async (marca) => {
        try {
            const response = await axios.get(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${marca}/modelos`);
            setModelos(response.data.modelos);
        } catch (error) {
            console.error('Erro ao obter modelos:', error);
        }
    };

    const handleMarcaChange = async (selectedOption) => {
        setMarcaSelecionada(selectedOption.value);
        setModeloSelecionado('');
        setAnoSelecionado('');
        setModelos([]);
        setAnos([]);

        await carregarModelos(selectedOption.value);
    };

    const carregarAnos = async (codigoModelo) => {
        try {
            const response = await axios.get(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${marcaSelecionada}/modelos/${codigoModelo}/anos`);
            setAnos(response.data);
        } catch (error) {
            console.error('Erro ao obter anos:', error);
        }
    };

    const handleModeloChange = (selectedOption) => {
        setModeloSelecionado(selectedOption.value);

        const codigoModelo = selectedOption.value;

        if (codigoModelo) {
            carregarAnos(codigoModelo);
            buscarImagemVeiculo();
        }
    };

    const handleAnoChange = (selectedOption) => {
        setAnoSelecionado(selectedOption.value);
    };

    const handlePesquisarClick = async () => {
        try {
            const response = await axios.get(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${marcaSelecionada}/modelos/${modeloSelecionado}/anos/${anoSelecionado}`);
            setDetalhesPesquisa(response.data);
            buscarImagemVeiculo(response.data);
        } catch (error) {
            console.error('Erro ao obter valor da motocicleta:', error);
        }
    };

    const buscarImagemVeiculo = async (detalhes = null) => {
        try {
            const detalhesParaBuscar = detalhes || detalhesPesquisa;

            if (!detalhesParaBuscar) {
                console.error('Detalhes de pesquisa não disponíveis.');
                return;
            }

            const searchTerm = `${detalhesParaBuscar.Marca}-${detalhesParaBuscar.Modelo}`;
            const response = await axios.get(`https://carimagery.com/api.asmx/GetImageUrl?searchTerm=${searchTerm}`);
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response.data, 'text/xml');
            const imageUrl = xmlDoc.getElementsByTagName('string')[0].textContent;

            setImagemVeiculo(imageUrl);
        } catch (error) {
            console.error('Erro ao obter imagem do veículo:', error);
        }
    };
  return{
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
  }
}

export default HookTruck
