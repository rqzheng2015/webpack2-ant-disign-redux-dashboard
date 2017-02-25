import {Layout, Icon, Breadcrumb, Row, Col, Dropdown, Menu} from 'antd';
import DataTable from '../components/dataTable';
import React from 'react';
const {Sider} = Layout;

const dropDownMenu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="javascript:;">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="javascript:;">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="javascript:;">3d menu item</a>
        </Menu.Item>
    </Menu>
);

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        {text: 'Male', value: 'male'},
        {text: 'Female', value: 'female'},
    ],
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];


export default class TablePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="breadcrumb-container">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="drop-down-menu-container">
                    <Row type="flex" align="middle" gutter={8}>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={4} className="drop-down-col">
                            <Dropdown overlay={dropDownMenu} trigger={['click']}
                            >
                                <a className="drop-down-menu-item" href="#">
                                    条件 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <DataTable columns={columns}/>
            </div>
        )
    }
}
