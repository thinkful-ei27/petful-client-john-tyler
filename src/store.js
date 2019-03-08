import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

// Bring in reducers from other files
import catReducer from './reducers/cats';
import dogReducer from './reducers/dogs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    cat: catReducer,
    dog: dogReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store;