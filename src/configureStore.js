import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer, persistCombineReducers, REHYDRATE, PURGE, autoRehydrate } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './allreducers';

import AuthenticationReducer from './views/Authentication/AuthenticationReducer';

import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'


const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)



// ENABLE BEFORE CREATE PRODUCTION BUILD To REMOVE  REDUX logger :

let middleware;
if (NODE_ENV === 'development') {
  middleware = applyMiddleware(ReduxThunk, logger)
} else {
  middleware = applyMiddleware(ReduxThunk)
}


export default () => {
  //let store = createStore(persistedReducer)
  // let store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk, logger));
  let store = createStore(persistedReducer, {}, middleware);
  let persistor = persistStore(store)
  return { store, persistor }
}


