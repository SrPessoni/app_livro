import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const removerLivro = (id) => {
  return {
    type: 'remover',
    payload: id,
  };
};

const DeletarLivros = () => {
  const livros = useSelector((state) => state); // Supondo que o reducer retorna um array de livros
  const dispatch = useDispatch();

  return (
    <ul>
      {livros.map((livro) => (
        <li key={livro.id}>
          {livro.titulo}
          <button onClick={() => dispatch(removerLivro(livro.id))}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default DeletarLivros;