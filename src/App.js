import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import SingUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SingUp} />
        <Redirect from="/" to="/SignUp" />
      </Switch>
    </div>
  );
};

export default App;
