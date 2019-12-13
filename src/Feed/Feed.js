import React, {Component} from 'react';
import Post from "./Post/Post";
import './Feed.scss';
import { GridLoader } from 'react-spinners';
import { css } from '@emotion/core';
import TagList from "./Post/TagList/TagList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import config from "../config";
import ObjectId from 'bson-objectid';


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading:false

        }

    }


    componentDidMount() {
        this.setState({loading: true});
        fetch(config.apiUrl + '/api/posts')
            .then(res => res.json())
            .then(posts => {
                this.setState({posts});
                console.log(posts);

                this.setState({posts,loading:false})

            });



    }
    formatDate(dateStr) {
        const date = new Date(dateStr);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return months[date.getMonth()] + ' ' + date.getDate()+ ' '+ date.getFullYear();
    };




    render() {


        const override = css`
            display:block;
            margin: 0 auto;
            border-color:#5798ff;
        `;

        return (


            <div className="">
                    <div className="loading">
                        {this.state.loading ?
                            <div>
                                <GridLoader
                                    css={override}
                                    sizeUnit={"px"}
                                    size={80}
                                    color={'#5798ff'}
                                    loading={this.state.loading}/>
                            </div> : null
                        }
                    </div>


                <div className="container">

                    {this.state.posts.map((post, index) => {

                        return (

                            <Post   title={post.title}
                                    image={post.image}
                                    created={this.formatDate(post.created)}
                                    likes={post.likes}
                                    key={post._id}
                                    user={post.user.username}
                                    tags={post.tags}
                                    about={post.about}
                                    >


                            </Post>

                        );

                    })}

                </div>

            </div>
        );
    }
}

export default Feed;




