//import logo from './logo.svg';
import './App.css';
import './App.scss';
import NavBar from './Components/NavBar';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import {Switch, Route} from 'react-router-dom';
import Portfoliopage from './Pages/Portfoliopage';
import Contactpage from './Pages/Contactpage';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar/>
      </div>
      <div className="main-content">
        <div className="content"> 
        <Switch> 
          <Route path="/" exact>
            <Homepage/> 
          </Route>
          <Route path="/about" exact>
            <Aboutpage/> 
          </Route>
          <Route path="/portfolio" exact>
            <Portfoliopage/> 
          </Route>
          <Route path="/contact" exact>
            <Contactpage/> 
          </Route>
        </Switch>
        </div>
      </div>


    </div>
  );
}

export default App;
