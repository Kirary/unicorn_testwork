import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./Root.css";

function Root() {
    return (
        <div className="Root">
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    );
}

export default Root;
