import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";


export default function YoutubeEmbed({embedId}){
  return <ReactPlayer
      url={`https://www.youtube.com/embed/${embedId}`}
      controls
      playing={false}
      />
}