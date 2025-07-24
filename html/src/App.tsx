import Router from './router/Router.tsx';
import { PopupProvider } from './contexts/PopupContext';

function App() {
  return (
    <PopupProvider>
      <Router />
    </PopupProvider>
  );
}

export default App;
