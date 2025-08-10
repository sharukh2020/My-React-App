export const loggedIn = (currentUser) => {
  return { type: "LOGGED_IN", uid: currentUser };
};

export const loggedOut = () => {
  return { type: "LOGGED_OUT" };
};

export const startLoading = () => {
  return { type: "START_APP_LOADING" };
};

export const endLoading = () => {
  return { type: "END_APP_LOADING" };
};

export const startSignInProgress = () => {
  return { type: "START_SIGNIN_PROGRESS" };
};

export const endSignInProgress = () => {
  return { type: "END_SIGNIN_PROGRESS" };
};

export const startLogoutProgress = () => {
  return { type: "START_LOGOUT_PROGRESS" };
};

export const endLogoutProgress = () => {
  return { type: "END_LOGOUT_PROGRESS" };
};

export const currentUserData = (data) => {
  return { type: "USER_DATA", userData: data };
};

export const currentUserNoData = () => {
  return { type: "USER_NO_DATA" };
};

export const currentNoUserNoData = () => {
  return { type: "NO_USER_NO_DATA" }
}

export const closeDrawerSideBar = () => {
  return { type: "CLOSE_DRAWER_SIDEBAR" }
}

export const openDrawerSideBar = () => {
  return { type: "OPEN_DRAWER_SIDEBAR" }
}