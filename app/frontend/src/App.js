import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateCompany from './pages/CreateCompany';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path="/create-company" component={ CreateCompany } />
      </Switch>
    </BrowserRouter>
  );
}
