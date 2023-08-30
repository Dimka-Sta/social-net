import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderEntiretree } from './render';
import state from './redux/state';


rerenderEntiretree(state);

reportWebVitals();
