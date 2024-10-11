// Components/DeletarLivros.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const DeletarLivros = () => {
    const dispatch = useDispatch();
    const livros = useSelector(state => state);

    const removerLivro = (id) => {
        dispatch({ type: 'remover', payload: id });
    };

    return (
        <div>
            <h2>Lista de Livros</h2>
            {livros.length === 0 ? (
                <p>Nenhum livro encontrado.</p>
            ) : (
                <ul>
                    {livros.map(livro => (
                        <li key={livro.id}>
                            {livro.titulo} 
                            <button className='btn-remover' onClick={() => removerLivro(livro.id)}>
                              <i className='bx bxs-trash'></i>Remover
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

//                 <button className="btn-remover" onClick={() => removerLivro(livro.id)}>
{/* <i className='bx bxs-trash'></i>Remover */}

export default DeletarLivros;