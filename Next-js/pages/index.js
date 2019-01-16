import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import PostItem from '../components/post';
import Pagination from "react-js-pagination";

const axios = require('axios');

function createList(title, body, id) {
  var list = [];
  for(let i=0; i<5; i++) {
    list.push(<PostItem title={title[i]} body={body[i]} id={id[i]}/>)
  }
  return list;
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activePage: 1
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => {
      this.setState({
        data: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    var arr = this.state.data;
    var arr_title = [];
    var arr_body = [];
    var arr_id = [];

    arr.map((item) => {
      arr_title.push(item.title);
      arr_body.push(item.body);
      arr_id.push(item.id);
    });

		return(
			<div>
        <Head>
				  <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:700%7CNunito:300,600" rel="stylesheet"/> 
				  <link type="text/css" rel="stylesheet" href="../static/css/bootstrap.min.css"/>
				  <link rel="stylesheet" href="../static/css/font-awesome.min.css"/>
				  <link type="text/css" rel="stylesheet" href="../static/css/style.css"/>
        </Head>
        <Header />
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-title">
                      <h2>Most Read</h2>
                    </div>
                  </div>
                    {createList(arr_title, arr_body, arr_id)}
                  <div className="col-md-12">
                    <div className="section-row">
                      <button className="primary-button center-block">Load More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
		);
	}
}

export default Home;