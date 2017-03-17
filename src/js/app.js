/**
 * Created by rqzheng on 2017/2/19.
 */
import {Layout, Menu, BackTop} from 'antd';
import React from 'react';
const {Sider, Content} = Layout;
import reqwest from 'reqwest';


//引入component
import NewHeader from './components/newHeader';
import Sidebar from './components/sidebar';
import RouterContent from './routers';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            data: [],
            pagination: {},
            loading: false,
        };
        this.fetch = this.fetch.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
    }

    static handleClick(e) {
        console.log('click ', e);
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    fetch(params = {}) {
        console.log('params:', params);
        this.setState({loading: true});
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = this.state.pagination;
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination: pagination,
            });
        });
    }

    componentDidMount() {
        this.fetch();
    }

    render() {
        return (

            <Layout className="app-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.props.collapsed}
                    style={{ minWidth: 100 }}
                >
                    <Sidebar />
                </Sider>
                <Layout>
                    <NewHeader />
                    <Content style={{ padding: 16 }}>
                        {/*路由字段*/}
                        <RouterContent />
                        <BackTop />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(store) {
    return {
        collapsed: store.dashboardStore.collapsed,
    };
}

export default withRouter(connect(mapStateToProps)(App));