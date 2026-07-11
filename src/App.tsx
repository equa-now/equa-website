import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { SolutionPage } from './pages/SolutionPage';
import { TeamPage } from './pages/TeamPage';
import { BoardPage } from './pages/BoardPage';
import { ContactPage } from './pages/ContactPage';
import { TryEquaPage } from './pages/TryEquaPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/try" element={<TryEquaPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
