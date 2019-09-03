import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as filterReducer } from './filter/';

const reducer = combineReducers({
    filter: filterReducer
});

const middleware = [];
if (process.env.NODE_ENV === 'development') {
    middleware.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = composeWithDevTools(
    compose(
        applyMiddleware(...middleware),
    )
)

const initialState = {
    todos: [
        {
            id: 0,
            text: 'First',
            completed: true
        },
        {
            id: 1,
            text: 'Second',
            completed: false
        },
        {
            id: 2,
            text: 'Third',
            completed: true
        }
    ]

}
const store = createStore(reducer, initialState, storeEnhancers)
export default store;

/**
 * 使用中间件有两种方法，两种方法都离不开Redux提供的 applyMiddleware来包装 createStore 产生一个新的创建的store函数
 */