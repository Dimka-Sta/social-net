import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './StoreContext'


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntiretree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  );
}


rerenderEntiretree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntiretree(state);
});

reportWebVitals();
