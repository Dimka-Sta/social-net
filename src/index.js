import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntiretree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)} />
    </React.StrictMode>
  );
}


rerenderEntiretree(store.getState());

store.subscribe(rerenderEntiretree);

reportWebVitals();
