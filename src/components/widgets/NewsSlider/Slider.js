import axios from "axios";
import React, { Component } from "react";
import SliderTemplate from "./slider_template";
class NewsSlider extends Component {
  state = {
    news: [],
  };
  UNSAFE_componentWillMount() {
    axios
      .get(`http://localhost:3004/articles?_start=0&_end=5`)
      .then((response) => {
        this.setState({
          news: response.data,
        });
      });
  }
  render() {
    return <SliderTemplate data={this.state.news} type="featured" />;
  }
}

export default NewsSlider;
// componentWillMount() {
//     axios.get(`http://localhost:3004/articles`).then((response) => {
//       console.log(response);
//     });
//   }
//   render() {
//     return <div></div>;
//   }
// }
