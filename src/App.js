import React from "react";
import { Switch, Route } from "react-router-dom";

import "./scss/main.scss";
import ListTasks from "./pages/ListTasks";

const App = () => {
    return (
        <div className="container">
            <Switch>
                <Route path="/" exact component={ListTasks} />
            </Switch>
        </div>
    );
};

export default App;
