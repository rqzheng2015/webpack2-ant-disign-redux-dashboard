/**
 * Created by rqzheng on 2017/2/20.
 */

import {Layout, Icon, Menu} from 'antd';
import React from 'react';
import {Router, Route, Link} from 'react-router-dom';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            selectedKeys: []
        };
    }

    render() {
        return (
            <div>
                <div className="logo"><Link to="/">游戏后台数据管理系统</Link></div>
                <Menu theme="dark" mode="inline">
                    <SubMenu key="page1" title={<span><Icon type="clock-circle-o"/><span>日概况</span></span>}>
                        <Menu.Item key="1"><Link to="/page1">链接1</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="page2" title={<span><Icon type="download"/><span>下载分析</span></span>}>
                        <Menu.Item key="5"><Link to="/page2">链接 2</Link></Menu.Item>
                        <SubMenu key="sub2-1" title="子菜单">
                            <Menu.Item key="7"><Link to="/page3">链接 3</Link></Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="bar-chart"/><span>留存分析</span></span>}>
                        <Menu.Item key="9"><Link to="/page4">链接 4</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="code-o"/><span>页面分析</span></span>}>
                        <Menu.Item key="sub10"><Link to="/tablePage">链接 5</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}