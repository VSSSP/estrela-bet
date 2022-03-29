import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateCompany from './pages/CreateCompany';
import CreateEmployee from './pages/CreateEmployee';
import Company from './pages/Company';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/create-company" component={ CreateCompany } />
        <Route exact path="/create-employee/:id" component={ CreateEmployee } />
        <Route exact path="/company/:id" component={ Company } />
      </Switch>
    </BrowserRouter>
  );
}
