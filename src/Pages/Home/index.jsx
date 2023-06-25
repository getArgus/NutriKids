import React, {useState} from 'react';
import Header from '../../components/Header';

import './styles.css';

import Prato from '../../assets/image/Prato.png'
import LogoPrato from "../../assets/image/LogoPrato.png";

function Home() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Header />
      <div className="grid-container">
        <div className="Inicio">
          <h1>Rumo à Nutrição Consciente</h1>
          <img src={LogoPrato} alt="Logo Prato" className="Image" />
          <p className='subtitle'>
            Você já parou para pensar como a alimentação pode impactar diretamente na sua saúde e bem-estar?
            Imagine ter mais energia, sentir-se mais disposto e ainda fortalecer o seu sistema imunológico.
            Parece bom demais para ser verdade, não é mesmo? Mas acredite, é possível!
            A chave para alcançar todos esses benefícios está em uma palavra: alimentação saudável.
            Neste site, convidamos você a mergulhar no mundo da nutrição adequada e descobrir como
            pequenas mudanças na sua rotina alimentar podem trazer grandes transformações para a sua vida e de sua família.
            Seja você um pai ou mãe preocupado com a saúde dos seus filhos, um merendeiro buscando oferecer refeições nutritivas e saborosas
            ou alguém envolvido no cuidado de crianças especiais, este é o lugar certo para encontrar informações confiáveis e dicas práticas.
            Vamos embarcar juntos nessa jornada deliciosa em busca de uma vida mais saudável e equilibrada?
          </p>

        </div>
        <div className="Beneficios">
          <h2>Benefícios da Alimentação Saudável</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <p className="titulo-teste">Energia e Vitalidade</p>
              <p className='conteudo-teste'>
                Uma alimentação saudável fornece os nutrientes essenciais para o bom funcionamento do corpo, garantindo energia e vitalidade ao longo do dia.
              </p>
            </div>
            <div className="benefit">
              <p className="titulo-teste">Benefício 2</p>
              <p>
                Descrição do benefício 2.
              </p>
            </div>
            <div className="benefit">
              <p className="titulo-teste">Benefício 3</p>
              <p>
                Descrição do benefício 3.
              </p>
            </div>
            <div className="benefit">
              <p className="titulo-teste">Benefício 4</p>
              <p>
                Descrição do benefício 4.
              </p>
            </div>
          </div>
          </div>
        <div className="Publico">
          <h2>Público-Alvo</h2>
          <h1>Rumo à Nutrição Consciente</h1>
          <p>
            Você já parou para pensar como a alimentação pode impactar diretamente na sua saúde e bem-estar?
            Imagine ter mais energia, sentir-se mais disposto e ainda fortalecer o seu sistema imunológico.
            Parece bom demais para ser verdade, não é mesmo? Mas acredite, é possível!
            A chave para alcançar todos esses benefícios está em uma palavra: alimentação saudável.
            Neste site, convidamos você a mergulhar no mundo da nutrição adequada e descobrir como
            pequenas mudanças na sua rotina alimentar podem trazer grandes transformações para a sua vida e de sua família.
            Seja você um pai ou mãe preocupado com a saúde dos seus filhos, um merendeiro buscando oferecer refeições nutritivas e saborosas
            ou alguém envolvido no cuidado de crianças especiais, este é o lugar certo para encontrar informações confiáveis e dicas práticas.
            Vamos embarcar juntos nessa jornada deliciosa em busca de uma vida mais saudável e equilibrada?
          </p>
        </div>
        <div className="Pratos">
          <h2>Pratos Saudáveis</h2>
          <div className="carousel">
            <img
              src={selectedImage || Prato}
              alt="Prato selecionado"
              className="selected-image"
            />
            <div className="thumbnails">
              <img
                src={Prato}
                alt="Prato 1"
                className="thumbnail"
                onClick={() => handleImageClick(Prato)}
              />
              <img
                src={Prato}
                alt="Prato 2"
                className="thumbnail"
                onClick={() => handleImageClick(Prato)}
              />
              <img
                src={Prato}
                alt="Prato 3"
                className="thumbnail"
                onClick={() => handleImageClick(Prato)}
              />
                            <img
                src={Prato}
                alt="Prato 3"
                className="thumbnail"
                onClick={() => handleImageClick(Prato)}
              />
                            <img
                src={Prato}
                alt="Prato 3"
                className="thumbnail"
                onClick={() => handleImageClick(Prato)}
              />
                            <img
                src={Prato}
                alt="Prato 3"
                className="thumbnail"
                onClick={() => handleImageClick(Prato)}
              />
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>UFPR</p>
          <p>Nutri</p>
        </footer>
      </div>
    </>
  )
}

export default Home;
