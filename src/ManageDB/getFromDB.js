import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const handleSignIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Firestore se user ka document lao
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
            console.log("User data from Firestore:", userDoc.data());
        } else {
            console.log("No user document found in Firestore.");
        }
    } catch (error) {
        console.error("Signin error:", error.message);
    }
};
