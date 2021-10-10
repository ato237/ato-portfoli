import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
