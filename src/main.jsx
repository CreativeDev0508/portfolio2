import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import { StyledLoadingContainer } from './styles/UI/StyledLoadingContainer';
import SuspenseFallback from './styles/UI/SuspenseFallback';
import { AppProvider } from './Context/Context';

const loadingMarkup = (
  <StyledLoadingContainer>
    <SuspenseFallback />
  </StyledLoadingContainer>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <AppProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProvider>
  </Suspense>
);
