import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'mobx-react';
import App from './pages/App';
import './index.css';
import {rehydrate, hotRehydrate} from "rfx-core";
import stores from './stores/stores';
import registerServiceWorker from './registerServiceWorker';

const supportsHistory = 'pushState' in window.history
const store = rehydrate();

ReactDOM.render(
    <Router forceRefresh={false}>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
    ,
    document.getElementById('root')
);
//
// const renderApp = Component => {
//     render(
//         <Router>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </Router>,
//         document.getElementById('root')
//     );
// };

// renderApp(App);
registerServiceWorker();
