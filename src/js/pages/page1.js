import {Layout, Icon, Menu} from 'antd';
import React from 'react';
const {Sider} = Layout;

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1>hello from Page 1 </h1>
        )
    }
}
