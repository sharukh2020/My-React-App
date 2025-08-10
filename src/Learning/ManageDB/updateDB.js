import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const updateUserData = async (newData) => {
  const user = auth.currentUser;

  if (!user) {
    console.error("User not logged in.");
    return;
  }

  try {
    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, newData);

    console.log("User document updated successfully.");
  } catch (error) {
    console.error("Error updating user:", error.message);
  }
};

//  Example Call:
updateUserData({ name: "Aman Kumar", age: 24 });