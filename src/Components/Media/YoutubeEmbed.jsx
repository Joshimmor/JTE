import React from "react";
import PropTypes from "prop-types";
import Ratio from 'react-bootstrap/Ratio';


export default function YoutubeEmbed({embedId}){
  return(
    <Ratio aspectRatio="16x9">
      <iframe 
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </Ratio>
  ) 
}