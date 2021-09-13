import React from 'react'
import ImageAvatars from './Avatar'



const CommentSection = () => {
  const comments=[
    {img:"https://yt3.ggpht.com/ytc/AKedOLR7D6b8frNAXAMMSk2toYIQcJNzadsTKY_Y__U_=s88-c-k-c0x00ffffff-no-rj",
    name:"EricBlackmonGuitar",
    duree:'3 semaines',
    comment:'Very soon you will hear this while shopping for groceries in Publix',
    likes:'1.2 K',
    plus2reponses:true,
    num2reponses:'Afficher les 46 réponses'
  },
  {img:"https://yt3.ggpht.com/ytc/AKedOLSP8fTtYQvjanTIiJ09nt87KqtgWFfA5UDqCnnH=s88-c-k-c0x00ffffff-no-rj",
  name:"TomoFujitaMusic",
  duree:'2 semaines',
  comment:'Lovely video John!!  I have same guitar!! I totally did not expect this (01:16)',
  likes:573,
  plus2reponses:true,
  num2reponses:'Afficher les 16 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLQQhtGPBNPhvMz2v1HHM55NY7f2y2pgAKaukW4CPqM=s88-c-k-c0x00ffffff-no-rj",
name:"Mohamed Hannachi",
duree:'3 semaines',
comment:'This song can be prescribed as a medecine to any Mental health issue. Just listen and take deep breaths.',
likes:35,
plus2reponses:false,

},
{img:"https://yt3.ggpht.com/ytc/AKedOLR5HEeM-YgS3I8wNpS4VVNdMZRtF1LYOuadUw=s88-c-k-c0x00ffffff-no-rj",
name:"Ernie Lim",
duree:'2 semaines',
comment:"John is so good on the electric guitar he doesn't even need to plug it in",
likes:3,
plus2reponses:true,
num2reponses:'Afficher les 3 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLR7D6b8frNAXAMMSk2toYIQcJNzadsTKY_Y__U_=s88-c-k-c0x00ffffff-no-rj",
    name:"EricBlackmonGuitar",
    duree:'3 semaines',
    comment:'Very soon you will hear this while shopping for groceries in Publix',
    likes:'1.2 K',
    plus2reponses:true,
    num2reponses:'Afficher les 46 réponses'
  },
  {img:"https://yt3.ggpht.com/ytc/AKedOLSP8fTtYQvjanTIiJ09nt87KqtgWFfA5UDqCnnH=s88-c-k-c0x00ffffff-no-rj",
  name:"TomoFujitaMusic",
  duree:'2 semaines',
  comment:'Lovely video John!!  I have same guitar!! I totally did not expect this (01:16)',
  likes:573,
  plus2reponses:true,
  num2reponses:'Afficher les 16 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLQQhtGPBNPhvMz2v1HHM55NY7f2y2pgAKaukW4CPqM=s88-c-k-c0x00ffffff-no-rj",
name:"Mohamed Hannachi",
duree:'3 semaines',
comment:'This song can be prescribed as a medecine to any Mental health issue. Just listen and take deep breaths.',
likes:35,
plus2reponses:false,

},
{img:"https://yt3.ggpht.com/ytc/AKedOLR5HEeM-YgS3I8wNpS4VVNdMZRtF1LYOuadUw=s88-c-k-c0x00ffffff-no-rj",
name:"Ernie Lim",
duree:'2 semaines',
comment:"John is so good on the electric guitar he doesn't even need to plug it in",
likes:3,
plus2reponses:true,
num2reponses:'Afficher les 3 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLR7D6b8frNAXAMMSk2toYIQcJNzadsTKY_Y__U_=s88-c-k-c0x00ffffff-no-rj",
name:"EricBlackmonGuitar",
duree:'3 semaines',
comment:'Very soon you will hear this while shopping for groceries in Publix',
likes:'1.2 K',
plus2reponses:true,
num2reponses:'Afficher les 46 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLSP8fTtYQvjanTIiJ09nt87KqtgWFfA5UDqCnnH=s88-c-k-c0x00ffffff-no-rj",
name:"TomoFujitaMusic",
duree:'2 semaines',
comment:'Lovely video John!!  I have same guitar!! I totally did not expect this (01:16)',
likes:573,
plus2reponses:true,
num2reponses:'Afficher les 16 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLQQhtGPBNPhvMz2v1HHM55NY7f2y2pgAKaukW4CPqM=s88-c-k-c0x00ffffff-no-rj",
name:"Mohamed Hannachi",
duree:'3 semaines',
comment:'This song can be prescribed as a medecine to any Mental health issue. Just listen and take deep breaths.',
likes:35,
plus2reponses:false,

},
{img:"https://yt3.ggpht.com/ytc/AKedOLR5HEeM-YgS3I8wNpS4VVNdMZRtF1LYOuadUw=s88-c-k-c0x00ffffff-no-rj",
name:"Ernie Lim",
duree:'2 semaines',
comment:"John is so good on the electric guitar he doesn't even need to plug it in",
likes:3,
plus2reponses:true,
num2reponses:'Afficher les 3 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLR7D6b8frNAXAMMSk2toYIQcJNzadsTKY_Y__U_=s88-c-k-c0x00ffffff-no-rj",
name:"EricBlackmonGuitar",
duree:'3 semaines',
comment:'Very soon you will hear this while shopping for groceries in Publix',
likes:'1.2 K',
plus2reponses:true,
num2reponses:'Afficher les 46 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLSP8fTtYQvjanTIiJ09nt87KqtgWFfA5UDqCnnH=s88-c-k-c0x00ffffff-no-rj",
name:"TomoFujitaMusic",
duree:'2 semaines',
comment:'Lovely video John!!  I have same guitar!! I totally did not expect this (01:16)',
likes:573,
plus2reponses:true,
num2reponses:'Afficher les 16 réponses'
},
{img:"https://yt3.ggpht.com/ytc/AKedOLQQhtGPBNPhvMz2v1HHM55NY7f2y2pgAKaukW4CPqM=s88-c-k-c0x00ffffff-no-rj",
name:"Mohamed Hannachi",
duree:'3 semaines',
comment:'This song can be prescribed as a medecine to any Mental health issue. Just listen and take deep breaths.',
likes:35,
plus2reponses:false,

},
{img:"https://yt3.ggpht.com/ytc/AKedOLR5HEeM-YgS3I8wNpS4VVNdMZRtF1LYOuadUw=s88-c-k-c0x00ffffff-no-rj",
name:"Ernie Lim",
duree:'2 semaines',
comment:"John is so good on the electric guitar he doesn't even need to plug it in",
likes:3,
plus2reponses:true,
num2reponses:'Afficher les 3 réponses'
},

  ]
 
    return (
      comments.map(c=>
        <div id="CommentSection">
          <div style={{width:'98%'}}>
          <ImageAvatars imgSrc={c.img}/>
            
          <div id="comment">
              <div id="commentor"><div>{c.name} </div><span>il y a {c.duree}</span></div>
              <div id="main_comment">{c.comment}</div>
              <div id="comment_feedback">
                <div>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas"  role="img" xmlns="http://www.w3.org/2000/svg" fill="rgb(144 144 144)" viewBox="-5 -6 32 32"><path  d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></svg>
              {(c.likes)?(<p>{c.likes}</p>):null}
              </div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas"   role="img" xmlns="http://www.w3.org/2000/svg" fill="rgb(144 144 144)" viewBox="-5 -6 32 32" ><path  d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>
                 <h6>{"Répondre".toUpperCase()}</h6>
                  
              </div>
            {(c.plus2reponses)?( <div id="plus_de_reponses"><img src="sort-down-solid.svg" alt="" />{c.num2reponses}</div>):null}
          </div>
          </div>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" id="ellipsis-v" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" fill="#9c9c9c"><path  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
        </div>
        )
    )
}

export default CommentSection
