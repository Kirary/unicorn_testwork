import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const Root = () => {
    return (
        <div className="root">
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>
        </div>
    );
};

export default Root;
