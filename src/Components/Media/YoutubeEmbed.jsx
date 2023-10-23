import React from "react";
import PropTypes from "prop-types";
import Ratio from 'react-bootstrap/Ratio';


export default function YoutubeEmbed({embedId}){
  return(
    <Ratio aspectRatio="16x9" className="video">
      <iframe 
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
      </iframe>
    </Ratio>
  ) 
}