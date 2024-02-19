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
import ScrollOnTop from './components/ScrollOnTop';
import Dashboard from './pages/Dashboard/Dashboard';
import MyNft from './components/Dashboard/Childs/MyNft';
import Propositions from './components/Dashboard/Childs/Propositions';
import Transactions from './components/Dashboard/Childs/Transactions';
import Documentation from './components/Dashboard/Childs/Documentation';
import Dashboardcontent from './components/Dashboard/Dashboardcontent';
import TransDetails from './components/Dashboard/Childs/TransDetails';

function App() {

  return (
    <div>
      <ScrollOnTop />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Dashboardcontent />} />
          <Route path='mynfts' element={<MyNft />} />
          <Route path='proposition' element={<Propositions />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='documentation' element={<Documentation />} />
          <Route path='transactions/:hash/detailed' element={<TransDetails />} />
        </Route>

        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/explore' element={<Exploar />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/assets' element={<Assets />} />
          <Route path='/road-map' element={<RoadMap />} />
          <Route path='/token' element={<Token />} />
          <Route path='/raffles' element={<Raffles />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
