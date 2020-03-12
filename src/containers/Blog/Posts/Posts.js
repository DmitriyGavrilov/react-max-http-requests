import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 3);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatedPosts});
                // console.log(response);
            }).catch(error => {
                // console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = ( id ) => {
        // this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/posts/' + id});
        // this.props.history.push( '/' + id);
    }

    render() {
        // {console.log(this.state.error)}
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link key={post.id} to={'/' + post.id}>
                        <Post  
                            key={post.id}v
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                    ); 
            });
        }
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;