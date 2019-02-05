import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
//import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
//import thunk from 'redux-thunk';
//import {Provider} from 'react-redux';

// const rootReducer = combineReducers({}); 
// const logger = store=>{
// 	return next=>{
// 		return action=>{
// 			console.log('[Middleware] dispatching', action);
// 			const result = next(action);
// 			console.log('[Middleware] next state',store.getState());
// 			return result;
// 		}
// 	}
// }
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

//ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();

