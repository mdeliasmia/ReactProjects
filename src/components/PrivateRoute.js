import ProtectedRoute from "./ProtectedRoute";
import { useNavigate, Route } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import Quiz from "./pages/Quiz";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    <Route path="/dashboard" element={
        <ProtectedRoute isLoggedIn={currentUser}>
            <Quiz />
        </ProtectedRoute>
    } />
}

