import * as React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const axios = require('axios');

class List extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('http://wp-url/get/posts')
    .then( (response: any) => {
      this.setState({
        data: response.data.data
      });
    })
    .catch(function (error: any) {
      console.log(error);
    });
  }

  public render() {

    const data_source = [];

    this.state.data.map((item) => {
      data_source.push({
        title: item.post_title,
        author: item.post_author,
        id: item.post_id,
        date: item.post_date.scalar
      });
    });

    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    }, {
      title: 'Date',
      dataIndex: 'date',
      ket: 'date'
    }];

    return (
      <div>
        <Table dataSource={data_source} columns={columns} />
      </div>
    );
  }
}

export default List;