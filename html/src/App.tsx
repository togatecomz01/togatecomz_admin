import Button from './components/Button/Button';
import ButtonContainer from './components/Button/ButtonContainer/ButtonContainer';
import Router from './router/Router';

function App() {
  return (
    <>
      <Router />
      <ButtonContainer>
        <Button name="목록" />
      </ButtonContainer>
    </>
  );
}

export default App;
