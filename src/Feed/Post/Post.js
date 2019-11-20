import React, {Component} from 'react';
import './Post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faUserFriends,faHeart,faUserAlt } from '@fortawesome/free-solid-svg-icons'
class Post extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data: ""
        // }
    }


    render() {

        return (
           <div className="card">

                   <header className="header">
                       <div>{<FontAwesomeIcon icon={ faUserAlt } />}{this.props.userId}</div>
                       <div>{<FontAwesomeIcon icon={ faCalendarAlt } />}{this.props.created}</div>
                   </header>
                   <main className="main">
                       <div ><img  src={this.props.image} alt="post-image"/></div>
                   </main>
                   <footer className="footer">
                       <h5 key={this.props.id}>{this.props.title}</h5>
                       <p>{<FontAwesomeIcon icon={ faHeart } />}Likes:{this.props.likes}</p>
                       <div className="tags">{this.props.children}</div>
                   </footer>



           </div>

        );
    }
}

export default Post;