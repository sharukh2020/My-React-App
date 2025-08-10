// AuthContext.js
// ------------------------------------------------------------------------------------------
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Important for initial load

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// index.js or App.js
// --------------------------------------------------
import { AuthProvider } from "./AuthContext";

<AuthProvider>
  <App />
</AuthProvider>

// In any component
// -----------------------------------------------
import { useAuth } from "./AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.email}</h1>
      ) : (
        <h1>User not logged in</h1>
      )}
    </div>
  );
};

// Bonus: Protecting Routes (Private Routes)
// PrivateRoute.js
// ------------------------------------------------------------
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// Then use it like this:
  < Route path = "/dashboard" element = {< PrivateRoute > <Dashboard /></PrivateRoute >} />






