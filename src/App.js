import './App.css';
import {Home} from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { TumKoclar } from './pages/Home/components/TumKoclar';
import { Navbar } from './pages/Home/components/Navbar';
import {Koc} from "./pages/Home/components/Koc"

function App() {
  return (
    <div className="App">

<Router>
  
        <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/tumkoclar" component={TumKoclar} />
        <Route exact path="/tumkoclar/:paramName" component={Koc} />


        </Switch>
      </Router>

    </div>
  );
}

export default App;
