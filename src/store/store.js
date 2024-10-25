import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
applyMiddleware


export const myStore = createStore(reducer,applyMiddleware(logger)); //kendi storeunuzu create ediniz
