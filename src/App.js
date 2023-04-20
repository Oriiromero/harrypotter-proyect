import './App.css';
import Menu from './components/Menu/Menu';
import Characters from './pages/Characters/Characters';
import Home from './pages/Home/Home';
import { Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Houses from './pages/Houses/Houses';
import Cronology from './pages/Cronology/Cronology';

function App() {
  return (
    <div className="App">

    <Router>
      <nav>
          <Link to="/characters"> Characters </Link>
          <Link to="/houses"> Houses </Link>
          <Link to="/cronology"> Cronology </Link>
      </nav>

      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/characters" element={<Characters />}></Route>
            <Route path="/houses" element={<Houses />}></Route>
            <Route path="/cronology" element={<Cronology />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
