import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import './Posts.module.css';
import axios from 'axios'

class Posts extends Component {
    state = {
        posts: [],

    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then((response => {
                console.log(response)
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts });
                console.log(this.state.posts);
            }))
            .catch(error => {
                console.log(error)
                // this.setState({ error: true })
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id })
    }
    render() {
        let post = <p style={{ textAlign: "center" }}>Something went wrong !!!</p>
        if (!this.state.error) {
            post = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => { this.postSelectedHandler(post.id) }}
                />
            })
        }
        return (
            <section className="Posts">
                {post}
            </section>
        )
    }
}

export default Posts;