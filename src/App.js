import './App.css';
import StyledButton from './components/Button/Button';
import { FancyButton, SubmitButton } from './components/Button/Button.styles';

function App() {
  return (
    <div className="App">
        {/*<button>Button</button>*/}

      <StyledButton>Styled Button</StyledButton> 

      <div><br/></div>

      <StyledButton variant="outline">Styled Button</StyledButton>

      <div><br/></div>

      <FancyButton as="a">FancyButton</FancyButton>

      <div><br/></div>

      <SubmitButton>Submit</SubmitButton>

    </div>
  );
}

export default App;
