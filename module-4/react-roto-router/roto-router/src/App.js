import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'


function App() {

  return (
    <Router className="App">
      <Header path1="/" path2="/about" path3="/contact" />
      <Switch>
        <Route path="/contact"><h1>CONTACT</h1></Route>
        <Route path="/about"><h1>ABOUT</h1></Route>
        <Route path="/"><h1>HOME</h1></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
