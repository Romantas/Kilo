import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas';
import { loadState, saveState } from './localStorage';

export default function configureStore(initialState = {}, history) {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const persistedState = loadState();
  const store = createStore(
    createReducer(),
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  store.subscribe(() => {
    saveState({
      user: store.getState().user,
    });
  });
  sagaMiddleware.run(rootSaga);
  // Make reducers hot reloadable
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
