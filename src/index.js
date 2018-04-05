import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './reducers';
import './index.css';

//eslint-disable-next-line
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, devTools);

const router = (
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
