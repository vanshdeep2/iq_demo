import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Queries from './pages/Queries';
import Documents from './pages/Documents';
import InsightPage from './pages/InsightPage';
import ActionPage from './pages/ActionPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/insight/:id" element={<InsightPage />} />
          <Route path="/action/:id" element={<ActionPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
