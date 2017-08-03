import React, { Component } from 'react'
import {observer,inject} from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject('store')
@observer
class Bundle extends Component {
    state = {
        mod: null
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        })

        if(this.props.auth && !this.props.store.user){
            return;
        }
        props.load().then((mod)=>{
            this.setState({
                mod: mod.default ? mod.default : mod
            })
        });
    }

    render() {
        if(this.props.auth && !this.props.store.user){
            console.log('no user');
            return <Redirect to={{
                pathname:'/login',
                state: {from: this.props.auth}
            }} />
        }
        if(this.state.mod)
            return this.props.children(this.state.mod)
        else
            return (<div></div>)
    }
}

export default Bundle