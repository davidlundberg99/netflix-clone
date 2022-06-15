import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row RowID="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row RowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row RowID="3" title="Trending" fetchURL={requests.requestNowPlaying} />
      <Row RowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
};

export default Home;
