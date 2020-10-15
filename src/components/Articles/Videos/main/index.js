import React from "react";
import VideoList from "../../../widgets/videolist/videolist";
import VideosList from "../../../widgets/videolist/videolist";

const VideosMain = () => {
  return (
    <VideoList
      type="card"
      title={false}
      loadmore={true}
      start={0}
      amount={10}
    />
  );
};

export default VideosMain;
