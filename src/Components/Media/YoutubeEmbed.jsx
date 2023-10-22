import React from "react";
import PropTypes from "prop-types";
import Youtube from "react-player/youtube";


export default function YoutubeEmbed({embedId}){
  return(
    <div>
      <Youtube
        width="80vw"

        url={`https://www.youtube.com/embed/${embedId}`}
        controls
      />
    </div>
  ) 
}