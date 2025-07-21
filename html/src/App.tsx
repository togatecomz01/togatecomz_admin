import Router from './router/Router.tsx';
import { PopupProvider } from './contexts/PopupContext';
import Popup from './components/layout/Popup/Popup.tsx';

function App() {
  return (
    <PopupProvider>
      <Router />
      <Popup />
    </PopupProvider>
  );
}

export default App;
