/**
 * Created by rqzheng on 2017/2/27.
 */
import {Layout, Icon, Breadcrumb, Row, Col, Dropdown, Menu} from 'antd';
import React from 'react';

export default class PathContainer extends React.Component {
    static defaultProps = {
        pathArray: []
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="breadcrumb-container">
                <Breadcrumb separator=">">
                    {
                        this.props.pathArray.map((path, index) => {
                            return <Breadcrumb.Item key={index}>{path}</Breadcrumb.Item>
                        })
                    }
                    {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                     <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                     <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                     <Breadcrumb.Item>An Application</Breadcrumb.Item>*/}
                </Breadcrumb>
            </div>
        )
    }
}