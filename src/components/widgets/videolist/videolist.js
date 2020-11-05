import React, { Component } from "react";
import styles from "./videosList.module.css";
import Button from "../Buttons/buttons";
import VideosListTemplate from "./videoslist_template";
import {
  firebaseLooper,
  firebaseVideos,
  firebaseTeams,
} from "../../../firebase";
class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };
  UNSAFE_componentWillMount() {
    this.request(this.state.start, this.state.end);
  }
  request = (start, end) => {
    if (this.state.teams.length < 1) {
      firebaseTeams.once("value").then((snapshot) => {
        const teams = firebaseLooper(snapshot);
        this.setState({ teams });
      });
    }
    firebaseVideos
      .orderByChild("id")
      .startAt(start)
      .endAt(end)
      .once("value")
      .then((snapshot) => {
        const videos = firebaseLooper(snapshot);
        this.setState({
          videos: [...this.state.videos, ...videos], //appending load more to existing list instead of overriding
          start, //updating start and end
          end,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then((response) => {
    //   this.setState({
    //     videos: [...this.state.videos, ...response.data],
    //     start, //updating start and end
    //     end,
  };

  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case "card":
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );

        break;
      default:
        template = null;
    }
    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end + 1, end);
  };
  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta=" load More Videos"
      />
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    );
  };
  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };
  render() {
    return (
      <div className={styles.video_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}
export default VideoList;
