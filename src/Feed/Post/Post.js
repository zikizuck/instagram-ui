import React, {Component} from 'react';
import './Post.scss';

class Post extends Component {


    render() {

        return (
            <div className="card">
                <p ><img className="card-img-top" src={this.props.image} alt="post-image"/></p>
                <h5 key={this.props.id}>{this.props.title}</h5>
                <span>{this.props.created}</span>
                <p>{this.props.likes}</p>
                <p >{this.props.tags}</p>

            </div>
        );
    }
}

export default Post;