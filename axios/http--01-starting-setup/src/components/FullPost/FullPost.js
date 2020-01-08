import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        loadedPost: null
    }

    componentDidUpdate(prevProps) {
        // if(this.props.id !== prevProps.id){

        // }
        // console.log(this.props)
        debugger
        if (this.props.id && this.props.id !== prevProps.id) {
            debugger;
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    console.log(response.data)
                    this.setState({ loadedPost: response.data })
                })
        }

    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if (this.props.id && this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;