import React, {Component} from 'react';
import config from "../../config";
import {Link , BrowserRouter} from "react-router-dom";
import { withRouter } from 'react-router';


class UserBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

    }

    componentDidMount() {
        fetch(config.apiUrl + '/api/users/me', {
            credentials: "include"
        })
            .then(res => res.json())
            .then( user => {
                this.setState({user});
            })

    }
    logoutHandler(e) {
        this.props.history.push('/login')
        this.setState({
            user:null
        });
        document.cookie = "user= ; expires=" + new Date().toString();
        console.log('Logged out');

    }

    render() {
        return (

                <div>
                    {this.state.user ? <span>{this.state.user.username}<button onClick={this.logoutHandler.bind(this)}>Log Out</button></span>


                        : <div>
                            <Link to="/register">Register</Link>
                            <Link to="/login"><div>Login</div></Link>
                        </div>
                    }
                    {/*<div>*/}
                    {/*    <button onClick={this.logoutHandler.bind(this)}>Log Out</button>*/}

                    {/*</div>*/}


                </div>

        );
    }
}

export default withRouter(UserBox);