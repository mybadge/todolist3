import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

// /** thunk 是一个中间件, 一个Redux的中间件, 不是React的中间件 */
// /// __REDUX_DEVTOOLS_EXTENSION 也是一个中间件, 两个中间件一起用的时候需要下面这样做.
// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;
// const enhancer = composeEnhancers(
//   applyMiddleware(thunk), 
// );

// //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(reducer, enhancer);

export default store;