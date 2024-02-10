import React from "react";
import ReactDom from "react-dom/client";
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { store } from './store'
const ele = document.getElementById('root');
const root = ReactDom.createRoot(ele);

root.render(
    <Provider store={store}>
    <App/>
    </Provider>
)