const initialLoginState = {
  appLoading: true,
  login: false,
  uid: null,
  signInProgress: false,
  logoutProgress: false
};

const userLoginStatusReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, login: true, uid: action.uid };
    case "LOGGED_OUT":
      return { loading: false, login: false, uid: null };
    case "END_APP_LOADING":
      return { ...state, appLoading: false };
    case "START_APP_LOADING":
      return { ...state, appLoading: true };
    case "END_SIGNIN_PROGRESS":
      return { ...state, signInProgress: false };
    case "START_SIGNIN_PROGRESS":
      return { ...state, signInProgress: true };
    case "END_LOGOUT_PROGRESS":
      return { ...state, logoutProgress: false };
    case "START_LOGOUT_PROGRESS":
      return { ...state, logoutProgress: true };
    default:
      return state;
  }
};

const initialDataState = {
  dataLoading: true
};
const userDataStatusReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return { dataLoading: false, ...action.userData };
    case "USER_NO_DATA":
      return { dataLoading: false };
    case "NO_USER_NO_DATA":
      return { dataLoading: true };
    default:
      return state;
  }
}

const initialDrawerSidebarState = {
  openDrawerSidebar: false
};
const drawerSidebarStatusReducer = (state = initialDrawerSidebarState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER_SIDEBAR":
      return { openDrawerSidebar: true };
    case "CLOSE_DRAWER_SIDEBAR":
      return { openDrawerSidebar: false };
    default:
      return state;
  }
}

export { userLoginStatusReducer, userDataStatusReducer, drawerSidebarStatusReducer };
