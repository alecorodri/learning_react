import logo from './logo.svg';
import './App.css';
import { First_component } from './components/first_component';
import { Second_component } from './components/second_component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learning React
        </p>
        <First_component/>
        <Second_component/>
      </header>
    </div>
  );
}

export default App;
