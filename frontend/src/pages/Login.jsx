import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ role }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}...`);
    
    if (role === 'admin') navigate('/admin/dashboard');
    else if (role === 'farmer') navigate('/farmer/dashboard');
    else navigate('/shop');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 relative">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-green-100">
        <h2 className="text-3xl font-bold text-green-800 mb-2 capitalize">{role} Login</h2>
        <p className="text-gray-500 mb-6">Welcome back to AgriValue</p>

        <div className="bg-blue-50 text-blue-700 p-3 rounded mb-4 text-sm">
          <p><strong>Demo Email:</strong> demo@agrivalue.com</p>
          <p><strong>Password:</strong> Demo@123</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
