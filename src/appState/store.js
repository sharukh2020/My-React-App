import { combineReducers, createStore } from "redux";
import { drawerSidebarStatusReducer, userDataStatusReducer, userLoginStatusReducer } from "./reducer";

const rootReducer = combineReducers(
    {
        loginState: userLoginStatusReducer,
        userDataState: userDataStatusReducer,
        drawerSidebarState: drawerSidebarStatusReducer
    }
);

const store = createStore(rootReducer);

export default store;
