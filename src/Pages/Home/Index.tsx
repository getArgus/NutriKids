import Header from "../../components/Header";
import './styles.css'

function Home() {
  return (
    <>
      <Header />
      <div className="Content">
        <div className="Text">
          <h1>Home</h1>
          <p>
            Você já parou para pensar como a alimentação pode impactar
            diretamente na sua saúde e bem-estar? Imagine ter mais energia,
            sentir-se mais disposto e ainda fortalecer o seu sistema
            imunológico. Parece bom demais para ser verdade, não é mesmo? Mas
            acredite, é possível! A chave para alcançar todos esses benefícios
            está em uma palavra: alimentação saudável. Neste site, convidamos
            você a mergulhar no mundo da nutrição adequada e descobrir como
            pequenas mudanças na sua rotina alimentar podem trazer grandes
            transformações para a sua vida e de sua família. Seja você um pai ou
            mãe preocupado com a saúde dos seus filhos, um merendeiro buscando
            oferecer refeições nutritivas e saborosas ou alguém envolvido no
            cuidado de crianças especiais, este é o lugar certo para encontrar
            informações confiáveis e dicas práticas. Vamos embarcar juntos nessa
            jornada deliciosa em busca de uma vida mais saudável e equilibrada?
          </p>
        </div>
        <div className="Image"></div>
      </div>
    </>
  );
}

export default Home;
