import React, { Component } from 'react';
import './app/App.css';
import {observer,inject} from 'mobx-react';


@inject('store')
@observer
class About extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { userToken } = this.props.store;
        return (
            <div className="About">
                AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout
            </div>
        );
    }
}

export default About;