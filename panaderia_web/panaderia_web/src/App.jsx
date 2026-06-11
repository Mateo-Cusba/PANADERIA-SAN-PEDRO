// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros';
import Ubicacion from './pages/Ubicacion';

import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ProtectedRoute from './admin/ProtectedRoute';

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/menu" element={<PublicLayout><Menu /></PublicLayout>} />
          <Route path="/nosotros" element={<PublicLayout><Nosotros /></PublicLayout>} />
          <Route path="/ubicacion" element={<PublicLayout><Ubicacion /></PublicLayout>} />

          {/* Ruta oculta admin */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      paddingTop: 72
    }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', color: 'var(--color-tinto)' }}>404</h1>
      <p style={{ color: 'var(--color-gris)' }}>Página no encontrada</p>
      <a href="/" className="btn-primary">Volver al inicio</a>
    </div>
  );
}
