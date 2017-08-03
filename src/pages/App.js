import React, { Component } from "react";
import { Route ,Switch} from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import './app/App.css';

@inject('store')
@observer
export default class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return (
            <div>
                <Switch>
                <Route
                    exact
                    path="/"
                    render={props => (
                        <LazyRoute {...props} component={import("./Home")} />
                    )}
                />
                <Route
                    exact
                    path="/about"
                    render={props => (
                        <LazyRoute {...props} component={import("./About")} />
                    )}
                />
                </Switch>
            </div>
        );
    }
}