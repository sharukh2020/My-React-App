// Do this in App.js (Alternate and simple method)
// ------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // apna firebase.js ya firebaseConfig ka path

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup listener
    }, []);

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

export default App;
