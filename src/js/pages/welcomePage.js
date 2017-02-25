import {Layout, Icon, Menu} from 'antd';
import React from 'react';
const {Sider} = Layout;

export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1>This is a welcome page</h1>
        )
    }
}
