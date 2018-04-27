'use strict';

import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
/**
 * 注册redux，初始化state
 */
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer,initialState);
    return store;
}


