import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser ,faUserFriends, faStickyNote} from '@fortawesome/free-solid-svg-icons';
import config from "../config";
import Login from "../Login/Login";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

    }

    componentDidMount() {
        fetch(config.apiUrl + '/api/users', {
            credentials: "include",
            method : 'GET'
        })
            .then(res => res.json())
            .then( users => {
                this.setState({users});
                console.log(users);
            })

    }
    render() {
        return (
            <div>
                Profile:
                {this.state.users.map((user, index) => {

                    return (
                    <div className="container-fluid">
                        <div>{<FontAwesomeIcon icon={ faUser } />}   user name : {user.username}</div>
                        <div>{<FontAwesomeIcon icon={ faUserFriends } />}   user gender : {user.gender}</div>
                        <div>{<FontAwesomeIcon icon={ faStickyNote } />}   user about : {user.about}</div>
                    </div>
                    )


                })}


            </div>
        );
    }
}

export default Profile;