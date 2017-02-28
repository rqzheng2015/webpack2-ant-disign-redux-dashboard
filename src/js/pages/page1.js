import {Layout, Icon, Menu} from 'antd';
import React from 'react';
import {Tabs} from 'antd';
import ModuleBox from '../components/moduleBox';
import PathContainer from '../components/pathContainer';
const {Sider} = Layout;
const TabPane = Tabs.TabPane;

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    callback(key) {
        // console.log(key);
    }

    render() {
        return (
            <div>
                <PathContainer pathArray={["日概况","主页"]}/>
                <ModuleBox title="标题1">
                    <Tabs defaultActiveKey="1" onChange={(key)=>this.callback(key)}>
                        <TabPane tab="数据维度" key="1">数据维度</TabPane>
                        <TabPane tab="流量维度" key="2">流量维度</TabPane>
                        <TabPane tab="并发维度" key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="性能维度" key="4">Content of Tab Pane 1</TabPane>
                        <TabPane tab="单元测试维度" key="5">Content of Tab Pane 2</TabPane>
                    </Tabs>
                </ModuleBox>
            </div>
        )
    }
}
