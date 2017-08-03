import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { Link,NavLink ,withRouter} from 'react-router-dom'

@inject('store')
@observer
export default class About extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    render() {
        return (
            <div className="About">
                AboutAboutAboutAboutAboutAboutAboutAboutAboutAboutAbout
            </div>
        );
    }
}
