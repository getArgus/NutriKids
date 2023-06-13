import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuPage: React.FC = () => {
  const [alimentos, setAlimentos] = useState<any[]>([]);
  const [receitas, setReceitas] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alimentosResponse = await axios.get('/api/alimentos');
        setAlimentos(alimentosResponse.data);

        const receitasResponse = await axios.get('/api/receitas');
        setReceitas(receitasResponse.data);
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error);
      }
    };

    fetchData();
  }, []);

  // Paginação dos itens
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAlimentos = alimentos.slice(indexOfFirstItem, indexOfLastItem);
  const currentReceitas = receitas.slice(indexOfFirstItem, indexOfLastItem);

  // Função para alterar a página atual
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Menu NutriKids</h1>

      <section>
        <h2>Alimentos</h2>
        <ul>
          {currentAlimentos.map((alimento) => (
            <li key={alimento.id}>
              <strong>{alimento.nome}</strong> - {alimento.grupo}
            </li>
          ))}
        </ul>
        {/* Paginação dos alimentos */}
        <div className="pagination">
          {alimentos.length > itemsPerPage &&
            Array.from({ length: Math.ceil(alimentos.length / itemsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
        </div>
      </section>

      <section>
        <h2>Receitas</h2>
        <ul>
          {currentReceitas.map((receita) => (
            <li key={receita.id}>
              <strong>{receita.nome}</strong>
              <ul>
                {receita.ingredientes.map((ingrediente: string) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>
              <p>{receita.modo_preparo}</p>
              <p>Porções: {receita.porcoes}</p>
              <p>Tempo de Preparo: {receita.tempo_preparo}</p>
            </li>
          ))}
        </ul>
        {/* Paginação das receitas */}
        <div className="pagination">
          {receitas.length > itemsPerPage &&
            Array.from({ length: Math.ceil(receitas.length / itemsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
