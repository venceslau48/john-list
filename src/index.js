import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { TasksProvider } from "./global/TasksContext";
import App from "./App";

ReactDOM.render(
    <TasksProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </TasksProvider>,
    document.getElementById("root")
);
