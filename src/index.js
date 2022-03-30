import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductContext from './state/productContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductContext.Provider value={{products : [{
          'amount': 2,
          'product': {
            'id': "YZWTvxIAACkAujoz",
            'data': {
              'name': "Bathrobe Disney Mickey Mouse",
            },
          },
        }],
      }}
    >
      <App />
    </ProductContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
