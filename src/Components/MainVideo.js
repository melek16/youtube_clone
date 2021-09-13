import React from 'react'
import VideoDescription from './VideoDescription';



    function changeClr(id,not_id){

    let like=document.getElementById(id)
    let dislike=document.getElementById(not_id)
    let arr2=[...dislike.children]
    let arr1=[...like.children]
    let clr1=(arr1[1].style.color==='rgb(144, 144, 144)' || !arr1[1].style.color)?'#065fd4':'rgb(144, 144, 144)';
    let clr2='rgb(144, 144, 144)'
    arr1[1].style.color=clr1;
    arr2[1].style.color=clr2;
    arr1[0].style.fill=clr1
    arr2[0].style.fill=clr2
  }

const MainVideo = (props) => {
    
    return (
       
        <div style={{marginTop:80,paddingBottom:30,borderBottom:'1px solid #d3d3d3'}}>
          <iframe width="717" height="538" src="https://www.youtube.com/embed/EUwynJ-WHGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p style={{color:"#065fd4",fontSize:12,margin:'10px 0 0 0'}}>{props.hashtag}</p>
            <h5 style={{fontWeight:'400',margin:'0 0 15px 0',padding:0,fontFamily:'Arial'}}>{props.title}</h5>
          
            <div id="vues_like_share">
                <div style={{marginLeft:0}}>
                <p style={{userSelect:'auto'}} >{props.vues} vues</p>
            <span id="dot"><h5>.</h5></span>
            <p style={{userSelect:'auto'}} >Sortie le 18 août 2021</p>
                </div>
              
            
           <div>
            <div id="like_dislike">
                <div id="like" className="hov_" onClick={(e)=>changeClr("like","dislike",e)}>
             
              <svg aria-hidden="true" focusable="false" data-prefix="fas"  className="big_svgs" role="img" xmlns="http://www.w3.org/2000/svg" fill="rgb(144 144 144)"><path  d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></svg>
              <p>{props.likes}</p>
              </div>
             
              <div id="dislike" style={{marginLeft:15}} className="hov_"  onClick={(e)=>changeClr("dislike","like",e)}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" className="big_svgs"  role="img" xmlns="http://www.w3.org/2000/svg" fill="rgb(144 144 144)"><path  d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>
              <p>{props.dislikes}</p>
              </div>
            </div>
            <div className="hov_">
                <img alt="" src="share.svg" className="big_svgs"/>
                <p>PARTAGER</p>
            </div>
            <div className="hov_">
                <img alt="" src="add_to_playlist.svg" className="big_svgs"/>
                <p >ENREGISTRER</p>
            </div>
            <div className="hov_">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" id="three_dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="rgb(144 144 144)"><path  d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
            </div>
            </div>
            </div>
            <VideoDescription name="John Mayer" subscribers="2.14 M" />
            </div>
           
           
       
    )
   
}

export default MainVideo
