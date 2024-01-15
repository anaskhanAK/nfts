import './App.css';
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import Exploar from './pages/Exploar';
import Details from './pages/Details';
import Assets from './pages/Assets';
import RoadMap from './pages/RoadMap';
import Token from './pages/Token';
import Raffles from './pages/Raffles';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/explore' element={<Exploar />} />
        <Route path='/details' element={<Details />} />
        <Route path='/assets' element={<Assets />} />
        <Route path='/road-map' element={<RoadMap />} />
        <Route path='/token' element={<Token />} />
        <Route path='/raffles' element={<Raffles />} />
      </Route>
    </Routes>
  );
}

export default App;
