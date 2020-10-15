import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Hoc/Layout/layout";
import Home from "./components/Home/home";
import NewsArticle from "./components/Articles/News/Post/index";
import Videoarticle from "./components/Articles/Videos/video/index";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          <Route path="/videos/:id" exact component={Videoarticle} />
        </Switch>
      </Layout>
    );
  }
}
export default Routes;
