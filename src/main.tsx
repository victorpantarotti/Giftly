import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SlidesProvider } from './contexts/SlidesContext.tsx';
import { GlobalProvider } from './contexts/GlobalContext.tsx';

import GlobalStyle from './components/GlobalStyle/index.tsx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <SlidesProvider>
        <>
          <GlobalStyle />
          <App />
        </>
      </SlidesProvider>
    </GlobalProvider>
  </StrictMode>,
)
