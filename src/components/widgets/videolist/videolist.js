import React, { Component } from "react";
import styles from "./videosList.module.css";
import axios from "axios";
import { URL } from "../../../config";
import Button from "../Buttons/buttons";

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };
  renderButton = () => {
    return this.props.loadmore ? (
      "loadmore"
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
        {this.renderButton()}
      </div>
    );
  }
}
export default VideoList;
