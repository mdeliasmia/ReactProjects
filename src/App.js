import "./styles/App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import { AuthProvider } from './contexts/AuthContext';
import Signup from "./components/pages/Signup";
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/quiz/:id" element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          } />
          <Route exact path="/result/:id" element={
            <ProtectedRoute>
              <Result />
            </ProtectedRoute>
          } />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
