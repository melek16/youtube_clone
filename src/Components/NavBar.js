
import React from 'react'
// import { Form, FormControl ,Button} from 'react-bootstrap'
import ImageAvatars from './Avatar'

const NavBar = () => {
    return (
        <div id="nav">
            <div id="bar_1">
                <img src="bars-solid.svg" alt="" className="klein_svg" />
                <div id="youtube_logo_div">
                    <img src="youtube-brands.svg" alt="" style={{width:"28%",height:30}} />
                    <img alt="" src="42ade.png" id="youtube"/><p id="tn">TN</p>
                </div>
            </div>
            <div id="bar_2">
                <form className="d-flex" action="https://www.youtube.com/results" method="get">
                   <input
                   name="search_query" 
                      type="search"
                   placeholder="Rechercher"
                    aria-label="Search"
                    style={{borderRadius:0}}
                                          />
<button type="submit" id="search_btn"><img src="search-solid.svg" alt="" id="search_svg"/></button>

    </form>
    <div id="mic_div"><img src="microphone-solid.svg" alt=""   /></div>
            </div>
            
                <ul id="bar_3">
                    <li><img src="video.svg" alt="" className="klein_svg" /></li>
                    <li><img src="th-solid.svg" alt="" className="klein_svg" style={{width:30}}/></li>
                    <li><img src="bell-solid.svg" alt="" className="klein_svg" /></li>
                    <li><ImageAvatars imgSrc="https://yt3.ggpht.com/ytc/AKedOLSP8fTtYQvjanTIiJ09nt87KqtgWFfA5UDqCnnH=s88-c-k-c0x00ffffff-no-rj" size="normal"/></li>
                </ul>
           
        </div>
    )
}

export default NavBar
