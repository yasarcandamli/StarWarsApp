import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Starships from './components/starships/Starships'
import StarshipDetail from './components/starhipDetail/StarshipDetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Starships />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
      </Routes>
    </Router>
  );
}

export default App