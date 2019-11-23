import React, {Component} from 'react';
import './Post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faUserFriends,faHeart,faUserAlt } from '@fortawesome/free-solid-svg-icons'
import TagList from "./TagList/TagList";
class Post extends Component {
    constructor(props) {
        super(props);
        this.state={
            heart : false
        }

    }
    hearthHandler() {
        this.setState({
            heart: !this.state.heart
        });

    }

    render() {
        const cls = this.state.heart ? 'heart' : '';

        return (
            <div className="d-flex">
                <div className="card" >
                    <div className="card-header">
                        <span className="cardDate">
                            {<FontAwesomeIcon icon={ faCalendarAlt } />}
                            <span className="card-text">{(this.props.created)}</span>

                        </span>
                        <div className="userId">{<FontAwesomeIcon icon={ faUserAlt } />}{this.props.userId}</div>

                    </div>
                    <div className="userImage">
                        <img src={this.props.image} alt="post-image" className="card-img-top" />

                    </div>
                    <div className="card-body">
                        <div><h5 key={this.props.id} className="card-title">{this.props.title}</h5></div>
                        <div className="like"><p  className="card-text">{<FontAwesomeIcon
                            className={cls}
                            icon={ faHeart }
                            onClick={this.hearthHandler.bind(this)}
                        />}{this.props.likes}</p></div>

                        <footer className="card-footer">
                            <TagList tags={this.props.tags}/>
                        </footer>
                    </div>
                </div>
            </div>


        );
    }
}

export default Post;