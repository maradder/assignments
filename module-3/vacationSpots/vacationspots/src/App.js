import logo from './logo.svg';
import './App.css';
import { Header } from './styledComponents.js'
import VacaySpots from './VacaySpots.js'

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        Vacation Spots
      </Header>
      <VacaySpots />
    </div>
  );
}

export default App;
