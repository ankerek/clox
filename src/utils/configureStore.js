import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import socketMiddleware from './socketMiddleware'
import rootReducer from '../reducers'

export default function configureStore(initialState, socket) {
	
	const middlewares = [ thunk, socketMiddleware(socket) ]
	
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	);

	if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

	return store;
}

