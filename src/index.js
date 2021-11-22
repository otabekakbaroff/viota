import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { theme } from "./components/theme"
import { ThemeProvider } from '@material-ui/styles';
import allReducers from './components/redux/reducers'
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import logger from 'redux-logger';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';


const store = createStore(allReducers,applyMiddleware(thunk,logger))

// const persistor = persistStore(store) 

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
        <ThemeProvider theme={theme}>
          {/* <PersistGate persistor={persistor}> */}
              <App />
          {/* </PersistGate> */}
        </ThemeProvider>

    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
