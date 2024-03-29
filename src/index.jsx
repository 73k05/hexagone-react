import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./components/Counter/Counter";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {createStore} from "redux";
import counter from "./reducers/counter";
import CounterRedux from "./components/Counter/CounterRedux";

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            {/*<App/>*/}
            <Counter/>
            <CounterRedux/>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
