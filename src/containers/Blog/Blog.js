import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';
// import axios from '../../axios';

import Posts from '../Blog/Posts/Posts';
// import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* {console.log(this.props.match.url)} */}
                            <li><NavLink 
                                exact 
                                to="/posts"
                                activeClassName="active"
                                activeStyle={{color: "blue"}}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                // pathname: this.props.match.url + '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <h1 style={{textAlign: 'center'}}>Home</h1>} />
                <Route path="/new-post" exact render={() => <h1 style={{textAlign: 'center'}}>New Post</h1>} />
                <Route path="/:id" exact render={() => <h1 style={{textAlign: 'center'}}>Post</h1>} />
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

// export default withRouter(Blog);
export default Blog;