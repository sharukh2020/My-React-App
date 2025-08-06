import { getAuth, signOut } from "firebase/auth";

const handleLogout = () => {
    const auth = getAuth(); // or use the auth instance you're already using

    signOut(auth)
        .then(() => {
            console.log("User logged out successfully");
            // You can also redirect here
            // navigate("/login"); // if using React Router
        })
        .catch((error) => {
            console.error("Error during sign out:", error);
        });
};

<button onClick={handleLogout}>Logout</button>

// OR
// In AuthContext.js or AuthProvider.js
// ----------------------------------------------------
const logout = () => {
  return signOut(auth);
};

const { logout } = useContext(AuthContext);

const handleLogout = async () => {
  try {
    await logout();
    navigate("/login"); // or your desired route
  } catch (error) {
    console.error("Logout failed", error);
  }
};

