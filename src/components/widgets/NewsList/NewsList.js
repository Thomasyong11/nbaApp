import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../config";
import Button from "../Buttons/buttons";
import styles from "./newslist.module.css";
class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  UNSAFE_componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    axios
      .get(`${URL}/articles?_start=${start}&_end=${end}`)
      .then((response) => {
        this.setState({
          items: [...this.state.items, ...response.data], //appending load more to existing list instead of overriding
        });
      });
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount; //getting the end from state + the props amount passed to the state
    this.request(this.state.end, end); // now the begining will be 3 ie the end of the first render and the end will be 6 ie 3 + the amount "3"
  };

  renderNews = (type) => {
    let template = null;

    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter,
            }}
            timeout={5000}
            key={i}
          >
            <div>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }
}
export default NewsList;
