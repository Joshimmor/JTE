import React from 'react'
import "./Media.css"

import YoutubeEmbed from './YoutubeEmbed';



export default function Media({mediaRef}) {

  return (
    <div className='media-hero' ref={mediaRef}>
        <YoutubeEmbed embedId='OHnSX0u0SVE'/>
        <YoutubeEmbed embedId='yrPYehWCbbQ'/>
    </div>
  )
}
