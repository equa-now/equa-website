import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Board } from './pages/Board';
import { Solution } from './pages/Solution';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/board" element={<Board />} />
          <Route path="/solution" element={<Solution />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
