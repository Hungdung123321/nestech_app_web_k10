import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
