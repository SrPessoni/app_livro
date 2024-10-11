import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FormularioLivro from './Components/AppLivro';
import DeletarLivros from './Components/DeletarLivros';
import './App.css'; // Importe um padrão ou um conjunto de estilos

// Reducer
const livrosReducer = (state = [], action) => {
  switch (action.type) {
    case 'adicionar':
      return [...state, action.payload];
    case 'remover':
      return state.filter(livro => livro.id !== action.payload);
    default:
      return state;
  }
};

// Store
const store = createStore(livrosReducer);

function App() {
    const [tema, setTema] = useState('claro');

    const alternarTema = () => {
      setTema(prevTema => (prevTema === 'claro' ? 'escuro' : 'claro'));
    };

    // UseEffect para ajustar a classe do body
    useEffect(() => {
        document.body.className = tema === 'escuro' ? 'dark-mode' : '';
    }, [tema]);

    return (
        <Provider store={store}>
            <div>
                <h1>Livros</h1>
                <DeletarLivros />
                <FormularioLivro />
                <button className='temaApp' onClick={alternarTema}>
                    {tema === 'claro' ? (
                        <>
                            <i className='bx bx-moon'></i>
                        </>
                    ) : (
                        <>
                            <i className='bx bx-sun'></i>
                        </>
                    )}
                </button>
            </div>
        </Provider>
    );
}

export default App;