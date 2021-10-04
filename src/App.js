import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Service from './components/Service/Service'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './components/Home/Home';
import  NotFound  from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
          <Service></Service>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
