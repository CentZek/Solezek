import ReactDOM from 'react-dom/client';
import App from './App';
import { initSync } from './state/sync';
import './index.css';

initSync();

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
