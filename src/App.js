import NavBar from './components/NavBar';
import AppViews from './components/AppViews';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppViews />
    </BrowserRouter>
  );
}

export default App;
