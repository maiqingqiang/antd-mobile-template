import React, {Component} from 'react';
import {BrowserRouter as Router, withRouter, Route} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import Bundle from './components/Bundle';
// import IndexPage from './pages/app/App';
// import AboutPage from './pages/about/About';


const lazyRoute = (func, props, auth) => {
    if (auth) {
        auth = props.location.pathname
    }
    return <Bundle auth={auth} load={func}>
        {(Com) => (<Com {...props} />)}
    </Bundle>
}

@inject('store')
@observer
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 可以把这些东西挪到最外面，layzRoute 赋值放到 class 里面
        const IndexPage = () => lazyRoute(() => import('./pages/app/App'), this.props)
        const AboutPage = () => lazyRoute(() => import('./pages/about/About'), this.props)

        return (
            <div>
                <Route exact path='/' component={IndexPage}/>
                <Route path='/about' component={AboutPage}/>
            </div>

        )
    }
}

export default withRouter(App);