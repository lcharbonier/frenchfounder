import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers/user';
import postReducer from './reducers/posts';
import sagas from './sagas.js';

const sagaMiddleware = createSagaMiddleware(sagas);

const reducers = combineReducers({
  userReducer,
  postReducer,
});

export default () => {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(sagas);
  return store;
};
