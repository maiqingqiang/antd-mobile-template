import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import logo from '../../logo.svg';
import './App.css';
import {observer,inject} from 'mobx-react';
import { Link } from 'react-router-dom'

@inject('store')
@observer
class App extends Component {
    constructor(props){
        super(props);
        this.ss=this.ss.bind(this)

    }

    ss(){
        this.props.store.userToken=11111
        console.log(this.props.store.userToken)
    }

    render() {
        const { userToken } = this.props.store;
        return (
            <div className="App">
                <div className="App-header">
                    <Icon type={logo} className="App-logo" size="lg"/>
                    <h2>Welcome to React {userToken}</h2>
                </div>
                <Link to="/about">About</Link>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button type="primary" onClick={this.ss}>This is a button</Button>
            </div>
        );
    }
}

export default App;