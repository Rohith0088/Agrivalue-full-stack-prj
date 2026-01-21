import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Watermark from './components/Watermark';
import Login from './pages/Login';

const Dashboard = ({ title }) => <div className="p-10 text-2xl font-bold text-green-800">{title}</div>;

function App() {
  return (
    <Router>
      <Watermark />
      
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/login/buyer" />} />
          <Route path="/login/buyer" element={<Login role="buyer" />} />
          <Route path="/login/farmer" element={<Login role="farmer" />} />
          <Route path="/login/admin" element={<Login role="admin" />} />
          <Route path="/shop" element={<Dashboard title="Buyer Shop & Product Listing" />} />
          <Route path="/farmer/dashboard" element={<Dashboard title="Farmer Inventory & Sales" />} />
          <Route path="/admin/dashboard" element={<Dashboard title="Admin Platform Analytics" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
