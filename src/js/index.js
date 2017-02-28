/**
 * Created by rqzheng on 2017/2/8.
 */

/* css definition */
require('../css/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import configureStore from './store/index';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

class Root extends React.Component {
    //全局redux store初始化loading状态
    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({isLoading: false})),
        };
    }

    render() {
        //loading时不返回东西
        if (this.state.isLoading) {
            return null;
        }
        //如果loading完毕后返回主体页面(在<App />会判断是否已登录而进行跳转
        return (
            <Provider store={this.state.store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );
    }
}

window.onload = () => {
    const rootEl = document.querySelector('.react-dom-content');
    ReactDOM.render(
        (
            <Root />
        ),
        rootEl
    );
}