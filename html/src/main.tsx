import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@/styles/global.scss';
import 'pretendard/dist/web/static/pretendard.css'; /* 250812 추가 pretendard 적용*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
