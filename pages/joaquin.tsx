import React, { Fragment } from "react";
import Navigation from "../components/navbar.component";
import ReactPlayer from "react-player";

type Props = {};

const Joaquin = (props: Props) => {
  return (
    <Fragment>
      <Navigation />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>
          Joaquin <i> Te Amo ❤️</i>
        </h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=23g5HBOg3Ic" />
      </div>
    </Fragment>
  );
};
export default Joaquin;
