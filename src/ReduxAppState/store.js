import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk';
import counterReducer from "./reducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

const store = createStore(
    counterReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
