import './App.css';
import Provider from './context-api/Provider';
import Homepage from './pages/Homepage';

export default function App() {
  return (
    <Provider>
      <Homepage />
    </Provider>
  );
}
