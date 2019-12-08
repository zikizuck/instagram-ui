import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import loginModel from '../models/login.model';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incorrectLoginMessage: false
        };
    }

    submit(values) {
        this.setState({incorrectLoginMessage: false});
        fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            body: JSON.stringify(values),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status === 200) {
                this.props.history.push('/');
            } else if(res.status === 403) {
                this.setState({incorrectLoginMessage: true});
            } else {
                console.log('Unexpected error');
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <hr />
                <Formik initialValues={{username: '', password: ''}}
                        validationSchema={loginModel}
                        onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-md-6">
                        {this.state.incorrectLoginMessage ? <div className="row alert alert-danger mt-2">Incorrect username or password</div> : null}
                        <div className="row form-group">
                            <label htmlFor="username">Username:</label>
                            <Field name="username" id="username" className="form-control" />
                            <ErrorMessage className="alert alert-danger mt-2" name="username" component="div" />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" id="password" className="form-control" />
                            <ErrorMessage className="alert alert-danger mt-2" name="password" component="div" />
                        </div>
                        <div className="row form-group d-flex justify-content-end">
                            <Button type="submit">Login</Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default withRouter(Login);