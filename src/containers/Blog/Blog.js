import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "../Blog/Posts/Posts";
import asyncComponent from "../../HOC/AsyncComponent";
// import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import ErrorMsg from "./ErrorMsg";

import "./Blog.css";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = { auth: true };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts/" exact>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* <Route component={ErrorMsg} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
