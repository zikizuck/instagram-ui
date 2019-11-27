import React, {Component} from 'react';
import { Formik, Field,Form , ErrorMessage} from 'formik';
import postModel from '../Models/post.model';
import './CreatePost.scss';
import AutosizeInput from 'react-input-autosize';
import InputTag from "./InputTag/InputTag";


// import {Button} from 'React.Bootstrap';



class CreatePost extends Component {


    submit(values){
        console.log(values);

    }
    render() {
        return (
            <div className="form-box">
                <h4>Create Post</h4>
                <Formik initialValues={{image:'', title:'' , tags:''}}
                        validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-sm-6">
                        <div className="form-group ">
                            <label >Image</label>
                            <Field   type="file" name="image" id="" />

                        </div >
                        <div className="form-group mb-3">
                            <label htmlFor="">Title</label>
                            <Field  className="form-control" placeholder="title" name="title"   />
                            <ErrorMessage  className="alert alert-danger" name="title" component="div" />

                        </div>
                        <div className="form-group ">
                            <label htmlFor="">Tags</label>
                            <InputTag />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Save Post</button>

                        </div>
                    </Form>
                </Formik>

            </div>
        );
    }
}

export default CreatePost;