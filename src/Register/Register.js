import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import registerModel from '../models/register.model';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Register extends Component {

    submit(values) {
        fetch('http://localhost:4000/api/users', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                <h2>Registration</h2>
                <hr />
                <Formik initialValues={{name: '', username: '', password: '', birthDate: new Date(), gender: 'm', about: ''}}
                        validationSchema={registerModel}
                        onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-md-6">
                        <div className="row form-group">
                            <label htmlFor="name">Name:</label>
                            <Field name="name" id="name" className="form-control" />
                            <ErrorMessage className="alert alert-danger mt-2" name="name" component="div" />
                        </div>
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
                        <div className="row form-group">
                            <label htmlFor="birthDate">Birth Date:</label>
                            <Field type="date" name="birthDate" id="birthDate" className="form-control" />
                            <ErrorMessage className="alert alert-danger mt-2" name="birthDate" component="div" />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="gender">Gender:</label>
                            <Field component="select" name="birthDate" id="gender" className="form-control">
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                            </Field>
                            <ErrorMessage className="alert alert-danger mt-2" name="birthDate" component="div" />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="about">About:</label>
                            <Field as="textarea" id="about" name="about" className="form-control" />
                            <ErrorMessage className="alert alert-danger mt-2" name="about" component="div" />
                        </div>
                        <div className="row form-group d-flex justify-content-end">
                            <Button type="submit">Register</Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default withRouter(Register);