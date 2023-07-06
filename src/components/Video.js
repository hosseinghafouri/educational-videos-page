import Plyr from "plyr";
import "plyr/dist/plyr.css";
import React, { useEffect, useRef } from "react";

function Video(props) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      const player = new Plyr(playerRef.current);
    }
  }, []);

  return (
    <content className="vid">
        <title className="title">
        <i class="bi bi-film"></i>
      <p>{props.title}</p>
      </title>
      <br></br>
      <video
        ref={playerRef}
        data-poster="https://camo.githubusercontent.com/06008e9bf13a05288ef42641055267b07abdaa92b4258772d615806b8edd6088/68747470733a2f2f63646e2e706c79722e696f2f7374617469632f73637265656e73686f742e77656270"
      >
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          type="video/mp4"
        />
      </video>
      <br></br>
      <desc className="desc">
        {/* <i class="bi bi-film"></i> */}
      <p>{props.desc}</p>
      </desc>
    </content>
  );
}

export default Video;
