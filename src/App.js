import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FormularioLivro from './Components/AppLivro'; // Certifique-se de que esse caminho esteja correto
import DeletarLivros from './Components/DeletarLivros';
import "./App.css"

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
  return (
    <Provider store={store}>
      <div>
        <h1>Livros</h1>
        <DeletarLivros />
        <FormularioLivro />
      </div>
    </Provider>
  );
}

export default App;