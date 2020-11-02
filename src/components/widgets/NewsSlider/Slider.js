import React, { Component } from "react";
import SliderTemplate from "./slider_template";
import { firebaseArticles } from "../../../firebase";
class NewsSlider extends Component {
  state = {
    news: [],
  };
  UNSAFE_componentWillMount() {
    firebaseArticles
      .limitToFirst(3)
      .once("value")
      .then((snapshot) => {
        const news = [];
        snapshot.forEach((childsnapshot) => {
          news.push({
            ...childsnapshot.val(),
            id: childsnapshot.key,
          });
          this.setState({
            news,
          });
        });
      });
    // axios
    //   .get(
    //     `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
    //   )
    //   .then((response) => {
    //     this.setState({
    //       news: response.data,
    //     });
    //   });
  }
  render() {
    console.log(this.state);
    return (
      <SliderTemplate
        data={this.state.news}
        type={this.props.type}
        settings={this.props.settings}
      />
    );
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
