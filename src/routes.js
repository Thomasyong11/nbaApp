import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Hoc/Layout/layout";
import Home from "./components/Home/home";
import NewsArticle from "./components/Articles/News/Post/index";
import Videoarticle from "./components/Articles/Videos/video/index";
import NewsMain from "./components/Articles/News/Main/index";
import VideosMain from "./components/Articles/Videos/main/index";
import SignIn from "./components/signin/Signin";
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={NewsMain} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          <Route path="/videos/:id" exact component={Videoarticle} />
          <Route path="/video" exact component={VideosMain} />
          <Route path="/sign-in" exact component={SignIn} />
        </Switch>
      </Layout>
    );
  }
}
export default Routes;
