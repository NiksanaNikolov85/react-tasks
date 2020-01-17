import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import './Posts.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],

    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then((response => {
                console.log(response);
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts });
            }))
            .catch(error => {
                console.log(error);
                // this.setState({ error: true })
            });
    }

    clickedId = (id) => {

    }


    render() {
        let post = <p style={{ textAlign: "center" }}>Something went wrong !!!</p>
        if (!this.state.error) {
            post = this.state.posts.map(post => {
                return (
                    <Link to={'/posts/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={this.clickedId(post.id)}
                        />
                    </Link>
                )
            })
        }
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <Route
                    path={this.props.match.url + '/:id'}
                    component={(props) => <FullPost  {...props} />}
                    exact
                />
            </div>

        )
    }
}

export default Posts;