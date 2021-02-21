import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from "./StoreContext";
import StoreContext from "./StoreContext";

let updateState = () => {
    debugger
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}

updateState();

store.subscribe(() => {
    updateState();
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();