import React, { Fragment } from "react";
import Navigation from "../components/navbar.component";
import ReactPlayer from "react-player";

type Props = {};

const Yenni = (props: Props) => {
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
          Yenni <i> Te Amo ❤️</i>
        </h1>

        <ReactPlayer url="https://www.youtube.com/watch?v=uASWl4LdZIo" />
      </div>
    </Fragment>
  );
};
export default Yenni;
