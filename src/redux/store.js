import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage';
// import { reducers } from "./reducer";
import { createLogger } from "redux-logger";
import { reducers } from "./Reducer";
import { persistStore, persistReducer } from 'redux-persist';
// console.log(reducers,"reducers")
const loggerMiddleware = createLogger();


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers) 

const store = createStore(
    persistedReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);

const persistor = persistStore(store);

export { store, persistor };