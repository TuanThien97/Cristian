import React from 'react';
import Link from 'next/link';

class PostItem extends React.Component {
	render() {
    var x = this.props.id;
		const url = `/post?id=${x}`;
    return(
			<div className="col-md-12">
        <div className="post post-row">
         	<Link href={url}><a className="post-img"><img src="../static/img/post-6.jpg" /></a></Link>
          <div className="post-body">
            <div className="post-meta">
              <a className="post-category cat-2" href="category.html">JavaScript</a>
          		<span className="post-date">March 27, 2018</span>
		        </div>
        		<h3 className="post-title"><Link href={url}><a>{this.props.title}</a></Link></h3>
            <p>{this.props.body}</p>
        	</div>
      	</div>
      </div> 
		);
	}
}

export default PostItem;