import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {reducer as weatherReducer} from './weather';

const reducer = combineReducers({
    weather: weatherReducer
});

const middlewares = [];
middlewares.push(thunkMiddleware);
if (process.env.NODE_ENV === 'development') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = composeWithDevTools(
    compose(
        applyMiddleware(...middlewares)
    )
)

const store = createStore(reducer,{}, storeEnhancers);

export default store;