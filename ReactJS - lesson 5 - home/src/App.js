import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';

const app = document.getElementById('root');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="posts" component={Posts}>
                <Route path=":postId" component={Post} />
            </Route>
            <Route path="comments" component={Comments}>
                <Route path=":commentId" component={Comment} />
            </Route>
            <Route path="users" component={Users}>
                <Route path=":userId" component={User} />
            </Route>
            <Route path="*" component={PageNotFound} />
        </Route>        
    </Router>    
, app);
