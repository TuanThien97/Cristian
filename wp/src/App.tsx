import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import List from './List';
import Post from './Post';
import Edit from './Edit';
import Delete from './Delete';
import './App.css';

class App extends React.Component<any, any> {   
  public render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <ul>
              <Link to="/"><li>List</li></Link>
              <Link to="/post"><li>Post</li></Link>
              <Link to="/edit"><li>Edit</li></Link>
              <Link to="/delete"><li>Delete</li></Link>
            </ul>
            <Route exact path="/" component={List} />
            <Route path="/post" component={Post} />
            <Route path="/edit" component={Edit} />
            <Route path="/delete" component={Delete} />
          </div> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
