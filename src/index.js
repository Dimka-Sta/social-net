import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntiretree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
         />
    </React.StrictMode>
  );
}


rerenderEntiretree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerenderEntiretree(state);
});

reportWebVitals();
