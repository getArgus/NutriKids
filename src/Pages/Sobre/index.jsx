import React, { useState, useEffect } from 'react';
import data from '../../database/db.json';
import Header from '../../components/Header';

const Sobre = () => {
  const { alimentos, receitas } = data;
  const [alimentosState, setAlimentos] = useState([]);
  const [receitasState, setReceitas] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    setAlimentos(alimentos);
    setReceitas(receitas);
  }, [alimentos, receitas]);

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setCurrentPage(item.tipo);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'alimentos':
        return (
          <div>
            <Header />
            <h2>Alimentos</h2>
            <ul>
              {alimentosState.map((alimento) => (
                <li key={alimento.id} onClick={() => handleItemClick(alimento)}>
                  <strong>{alimento.nome}</strong> - {alimento.grupo}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'receitas':
        return (
          <div>
            <Header />
            <h2>Receitas</h2>
            <ul>
              {receitasState.map((receita) => (
                <li key={receita.id} onClick={() => handleItemClick(receita)}>
                  <strong>{receita.nome}</strong>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'descricao':
        return (
          <div>
            <h2>Descrição do Item</h2>
            {currentItem && (
              <div>
                <h3>{currentItem.nome}</h3>
                {currentItem.ingredientes && (
                  <div>
                    <h4>Ingredientes:</h4>
                    <ul>
                      {currentItem.ingredientes.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {currentItem.modo_preparo && (
                  <div>
                    <h4>Modo de Preparo:</h4>
                    <p>{currentItem.modo_preparo}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      default:
        return (
          <div>
            <Header />
            <h1>Menu Nutri</h1>
            <div>
              <h3>Selecione uma opção:</h3>
              <button onClick={() => setCurrentPage('alimentos')}>Alimentos</button>
              <button onClick={() => setCurrentPage('receitas')}>Receitas</button>
            </div>
          </div>
        );
    }
  };

  return <div>{renderPage()}</div>;
};

export default Sobre;
