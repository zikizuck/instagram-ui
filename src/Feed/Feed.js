import React, {Component} from 'react';
import Post from "./Post/Post";
import './Feed.scss';
import { GridLoader } from 'react-spinners';
import { css } from '@emotion/core';

import TagList from "./Post/TagList/TagList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faUserFriends } from '@fortawesome/free-solid-svg-icons';


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading:false

        }

    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/fake-api/posts')
            .then(res => res.json())
            .then(posts => {
                this.setState({posts});
                console.log(posts);
            });



    }


    render() {
        const override = css`
            display:block;
            margin: 0 auto;
            border-color:#5798ff;
        `;
        function timeConverter(UNIX_timestamp) {
            let a = new Date(UNIX_timestamp * 1000);
            let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            let year = a.getFullYear();
            let month = months[a.getMonth()];
            let date = a.getDate();

            let time = `${date} ${month} ${year}`;
            return time;

        }


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
                                    created={timeConverter(post.created)}
                                    likes={post.likes}
                                    key={post.id}
                                    userId={post.userId}
                                    >

                                <div className="postTags">{post.tags.map(tag=>{
                                    return (<span >#{tag}  </span>);
                                })}</div>
                            </Post>

                        );

                    })}

                </div>

            </div>
        );
    }
}

export default Feed;