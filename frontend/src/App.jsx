import React from 'react';
import HomePage from './pages/HomePage';
import ApiProductsPage from './pages/ApiProductsPage';
import PlaygroundPage from './pages/PlaygroundPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 24px',
  background: '#0F172A',
  color: '#fff',
  flexWrap: 'wrap',
};

const brandStyle = {
  fontSize: '20px',
  fontWeight: 700,
};

const navStyle = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
};

const navButtonStyle = (active) => ({
  border: 'none',
  borderRadius: '999px',
  padding: '10px 18px',
  background: active ? '#38BDF8' : 'transparent',
  color: active ? '#0F172A' : '#F8FAFC',
  cursor: 'pointer',
  fontWeight: 600,
});

const loginButtonStyle = {
  border: '1px solid rgba(248, 250, 252, 0.4)',
  borderRadius: '999px',
  padding: '10px 18px',
  background: 'transparent',
  color: '#F8FAFC',
  cursor: 'pointer',
  fontWeight: 600,
};

const appStyle = {
  background: '#F8FAFC',
  minHeight: '100vh',
  color: '#0F172A',
};

export default function App() {
  const [page, setPage] = React.useState('home');

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <div style={brandStyle}>LearnHub</div>
        <div style={navStyle}>
          <button style={navButtonStyle(page === 'home')} onClick={() => setPage('home')}>
            หน้าหลัก
          </button>
          <button style={navButtonStyle(page === 'products')} onClick={() => setPage('products')}>
            คอร์ส
          </button>
          <button style={navButtonStyle(page === 'dashboard')} onClick={() => setPage('dashboard')}>
            แดชบอร์ด
          </button>
          <button style={navButtonStyle(page === 'playground')} onClick={() => setPage('playground')}>
            API Catalog
          </button>
        </div>
        <button style={loginButtonStyle} onClick={() => setPage('login')}>
          เข้าสู่ระบบ
        </button>
      </header>
      <main>
        {page === 'home' && <HomePage />}
        {page === 'products' && <ApiProductsPage />}
        {page === 'dashboard' && <DashboardPage />}
        {page === 'playground' && <PlaygroundPage />}
        {page === 'login' && <LoginPage />}
      </main>
    </div>
  );
}
