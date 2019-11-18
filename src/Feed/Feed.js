import React, {Component} from 'react';
import Post from "./Post/Post";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []

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
        // const tags = this.state.post.map();
        return (
            <div className="container">
                <div className="cards">
                    {this.state.posts.map((post, index) => {
                        return (
                            <Post   title={post.title}
                                    image={post.image}
                                    created={post.created}
                                    likes={post.likes}
                                    key={post.id}
                                    tags={post.tags} />
                        )

                    })}

                    <Post/>

                </div>
            </div>
        );
    }
}

export default Feed;