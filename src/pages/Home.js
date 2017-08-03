import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import logo from '../logo.svg';
import './app/App.css';
import {observer,inject} from 'mobx-react';
import { Link,NavLink ,withRouter} from 'react-router-dom'

@inject('store')
@observer
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    ss(){
        this.props.store.userToken=11111
        console.log(this.props.store.userToken)
    }

    render() {
        const { userToken } = this.props.store;
        return (
            <div className="Home">
                <div className="App-header">
                    <Icon type={logo} className="App-logo" size="lg"/>
                    <h2>Welcome to React {userToken}</h2>
                </div>
                <Link to="/about">About</Link>
                <NavLink to="/about">About</NavLink>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button type="primary" onClick={this.ss}>This is a button</Button>
            </div>
        );
    }
}
