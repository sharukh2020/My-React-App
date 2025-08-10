import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const deleteUserData = async () => {
  const user = auth.currentUser;

  if (!user) {
    console.error("User not logged in.");
    return;
  }

  try {
    const userRef = doc(db, "users", user.uid);
    await deleteDoc(userRef);

    console.log("User document deleted from Firestore.");
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
};

// Bonus: Delete Auth User (Firebase Authentication se bhi hatao)
// Agar aap user ko Firebase Auth se bhi hataana chahte ho (not just Firestore):
// -----------------------------------------------------------------------------------------
import { deleteUser } from "firebase/auth";

const deleteAuthAccount = async () => {
  const user = auth.currentUser;

  if (!user) return;

  try {
    await deleteUser(user);
    console.log("Auth account deleted.");
  } catch (error) {
    console.error("Error deleting auth account:", error.message);
  }
};
// 🔒 Note: Auth account delete karne se pehle recent login zaroori hota hai, warna error aayega (for security).