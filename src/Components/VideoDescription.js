import React from 'react'
import ImageAvatars from './Avatar'

const VideoDescription = (props) => {
    return (
        <div>
           <div id="channel_div">
               <div>
                   <ImageAvatars imgSrc="https://yt3.ggpht.com/qbceFhmqhXfX7jH_q3jL1UAZ3GEsgupsbpM-ABWYcQStBjudS5V-FdJyxLVdnTSuV5pdzE-h-fY=s88-c-k-c0x00ffffff-no-nd-rj" size="large"/>
                   <div style={{marginLeft:5}}>
                       <h6>{props.name}</h6>
                       <p>{props.subscribers} d'abonnés</p>
                   </div>
               </div>
               <div id="sub_button">
                S'ABONNER
                </div> 
          </div> 
          <div id="description">{props.description}</div>
        </div>
    )
}

export default VideoDescription
