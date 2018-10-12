import { createStore } from 'redux'
import reducers from '../reducers'
import Main from './Main.js'
import Team from './Team.js'
import Events from './Events.js'
const initialState = { Main, Team, Events };

function generateStore(preloadState = initialState) {
  let devtool = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  let store;
  if(devtool) {
    store = createStore(reducers, preloadState, devtool);
  } else {
    store = createStore(reducers, preloadState);
  }
  return store;
}

export default generateStore;
