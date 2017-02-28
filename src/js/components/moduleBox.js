/**
 * Created by rqzheng on 2017/2/27.
 */
require('../../css/components/moduleBox.scss');
import React from 'react';
import { Icon } from 'antd';

export default class ModuleBox extends React.Component {
    static defaultProps = {
        title: 'default title',
    }

    constructor(props) {
        super(props);
        this.state = {
            opened: true,
            moduleHeight: '40px'
        }
    }

    componentDidMount() {
        this.setState({ moduleHeight: `${this.content.clientHeight}px` });
    }

    //change the status of the module box
    changeTabStatus() {
        this.setState({ opened: !this.state.opened });
    }

    componentDidUpdate() {
        let height= (this.state.opened ? `${this.state.moduleHeight}px` : '40px');
        this.content.style.height = (this.state.opened ? `${this.state.moduleHeight}` : '40px');
    }

    render() {
        return (
            <div className="module-box" ref={(content) => this.content = content}>
                <div className="module-header">
                    <div className="module-name">{this.props.title}</div>
                    <div className="right-button-container">
                        <Icon type={this.state.opened ? "minus" : "plus"} onClick={() => this.changeTabStatus()} />
                    </div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>

        )
    }
}