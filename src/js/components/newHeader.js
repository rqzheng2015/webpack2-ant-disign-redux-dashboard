import {Layout, Icon} from 'antd';
import React from 'react';
import {connect} from 'react-redux';

import {
    setCollapsedTrue,
    setCollapsedFalse,
} from '../actions';

const {Header} = Layout;

//这里要触发collapsed到header组件
@connect(mapStateToProps)
export default class NewHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: this.props.collapsed,
        };
    }

    toggle = () => {
        //修改redux store
        if (this.props.collapsed) {
            this.props.dispatch(setCollapsedFalse());
        } else {
            this.props.dispatch(setCollapsedTrue());
        }
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Header style={{ background: '#fff', padding: 0}}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
            </Header>
        )
    }
}

function mapStateToProps(store) {
    return {
        collapsed: store.dashboardStore.collapsed,
    };
}

