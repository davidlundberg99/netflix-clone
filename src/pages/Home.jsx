import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
};

export default Home;
