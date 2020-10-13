import React from "react";
import NewsSlider from "../widgets/NewsSlider/Slider";
import NewsList from "../widgets/NewsList/NewsList";
import VideoList from "../widgets/videolist/videolist";
const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={5}
        settings={{
          dots: false,
        }}
      />
      <NewsList type="card" loadmore={true} start={3} amount={3} />
      <VideoList type="card" title={true} loadmore={false} start={0} end={3} />
    </div>
  );
};

export default Home;
