import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

const axios = require('axios');

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    var id = window.location.href.slice(window.location.href.indexOf('=')+1);
    axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
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
    var body = [];
    var title = [];
    arr.map((item) => {
      body.push(item.body);
      title.push(item.title);
    });
    return(
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:700%7CNunito:300,600" rel="stylesheet"/> 
          <link type="text/css" rel="stylesheet" href="../static/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="../static/css/font-awesome.min.css"/>
          <link type="text/css" rel="stylesheet" href="../static/css/style.css"/>
        </Head>
        <Header/>
        <div id="post-header" className="page-header">
          <div className="background-img" style={{background: 'url("../static/img/post-page.jpg")'}}></div>
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="post-meta">
                  <a className="post-category cat-2" href="category.html">JavaScript</a>
                  <span className="post-date">March 27, 2018</span>
                </div>
                <h1>{title[0]}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="section-row sticky-container">
                  <div className="main-post">
                   <p>{body[0]}</p>
                  </div>
                </div>
                <div className="section-row text-center">
                  <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
                    <img className="img-responsive" src="../static/img/ad-2.jpg" />
                  </a>
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

export default Post;