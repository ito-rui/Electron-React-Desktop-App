import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/config/globalStyle';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);

// Main Process
