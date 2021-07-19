import contador from './contador.js'

const reducers = Redux.combineReducers({contador})

const store = Redux.createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;