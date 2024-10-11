import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Ação para adicionar livro
const adicionarLivro = (livro) => {
    return {
        type: 'adicionar',
        payload: livro,
    };
};

const AppLivro = ({ alternarTema, tema }) => {
    const [titulo, setTitulo] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação do título do livro
        if (titulo.trim() === '') {
            setError('Insira um nome válido');
            return; // Não continua se o título estiver vazio
        }
        
        // Criação do livro com ID único
        const livro = {
            id: Date.now(),
            titulo,
        }; 

        dispatch(adicionarLivro(livro));
        setTitulo(''); // Limpa o campo de entrada
        setError('');  // Reseta o erro
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título do Livro"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mensagem de erro */}
            <button type="submit">Adicionar Livro</button>
        </form>
    );
};

export default AppLivro;