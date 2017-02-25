/**
 * Created by rqzheng on 2017/2/21.
 */
import {Layout, Icon, Table} from 'antd';
import React from 'react';
import reqwest from 'reqwest';


export default class DataTable extends React.Component {
    static defaultProps = {
        columns: []
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
        };
        this.fetch = this.fetch.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
    }

    componentDidMount() {
        this.fetch();
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

    render() {
        return (
            <Layout>
                <Table columns={this.props.columns}
                       rowKey={record => record.registered}
                       dataSource={this.state.data}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleTableChange}
                />
            </Layout>
        )
    }
}