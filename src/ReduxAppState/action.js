// Action creators
export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

// export const setUserAction = () => {
//   return {
//     type: 'SET_USER',
//     payload: {
//       name: "Ali",
//       loggedIn: true
//     }
//   };
// }


// export const addAmount = (amount) => {
//   return {
//     type: "ADD_AMOUNT",
//     payload: amount,
//   };
// };


// export const fetchUser = () => {
//   return async (dispatch) => {
//     dispatch({ type: "LOADING_USER" });

//     try {
//       const res = await fetch("https://api.example.com/user");
//       const data = await res.json();
//       dispatch({ type: "SET_USER", payload: data });
//     } catch (err) {
//       dispatch({ type: "USER_ERROR", payload: err.message });
//     }
//   };
// };