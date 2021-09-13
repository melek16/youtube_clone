import React from 'react'

const SideVideo = () => {
    
        const videos=[
            {
                image:'https://i.ytimg.com/vi/dBFW8OvciIU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwxqKZ5s1MWbgt5WwNGxjncOEeXQ',
                title: 'Gravity (Live in L.A.)',
                duree: '7:52' ,
                vues:14253 ,
                date:'1 an' ,
                channel:'dfbxf'
            },
            {
                image:'https://i.ytimg.com/vi/_71w4UA2Oxo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMgSPt9wrteskK2N2m9lXbf2eNZA',
                title: "George Harrison - Got My Mind Set On You (Version II)",
                duree: '3:52' ,
                vues:'34 M' ,
                date:'4 ans' ,
                channel:'George Harrison'
            },
          
            {
                image:'https://i.ytimg.com/vi/20Ov0cDPZy8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5r8ULFin-XNkVTVVYg3ht8eGt6g',
                title: "John Mayer - Free Fallin' (Live at the Nokia Theatre)",
                duree: '4:02' ,
                vues:'110 M' ,
                date:'11 ans' ,
                channel:'John Mayer'
            },
            {
                image:'https://i.ytimg.com/vi/J6Pqwms_MBw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPVyHRpqqdDLZwuiuFbkhl2jF2Jg',
                title: "LEA - Wenn Du Mich Lässt (Official Video)",
                duree: '3:09' ,
                vues:'1.3 M' ,
                date:'2 semaines' ,
                channel:'LEA'
            },
            {
                image:'https://i.ytimg.com/vi/d-diB65scQU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApREXlb7mMVyLAPitgn6wU_hlGYw',
                title: "Bobby McFerrin - Don't Worry Be Happy (Official Music Video)",
                duree: '3:51' ,
                vues:'232 M' ,
                date:'12 ans' ,
                channel:'The Real Bobby McFerrin'
            },
            {
                image:'https://i.ytimg.com/vi/7jMlFXouPk8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBFaLMKT0RjydApkeiQCBQ1cHaUiA',
                title: "Pink Floyd - High Hopes (Official Music Video)",
                duree: '7:48' ,
                vues:'88 M' ,
                date:'7' ,
                channel:'Pink Floyd'
            },
            {
                image:'https://i.ytimg.com/vi/CrTMc2i6Lzc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCoSk8C30xIq4srM9rG2scmSg_oPA',
                title: "While My Guitar Gently Weeps",
                duree: '6:01' ,
                vues:'33 M' ,
                date:'3' ,
                channel:'George Harrison'
            },
            {
                image:'https://i.ytimg.com/vi/20Ov0cDPZy8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5r8ULFin-XNkVTVVYg3ht8eGt6g',
                title: "John Mayer - Free Fallin' (Live at the Nokia Theatre)",
                duree: '4:02' ,
                vues:'110 M' ,
                date:'11' ,
                channel:'John Mayer'
            },
            {
                image:'https://i.ytimg.com/vi/20Ov0cDPZy8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5r8ULFin-XNkVTVVYg3ht8eGt6g',
                title: "John Mayer - Free Fallin' (Live at the Nokia Theatre)",
                duree: '4:02' ,
                vues:'110 M' ,
                date:'11' ,
                channel:'John Mayer'
            },
            {
                image:'https://i.ytimg.com/vi/dBFW8OvciIU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwxqKZ5s1MWbgt5WwNGxjncOEeXQ',
                title: 'Gravity (Live in L.A.)',
                duree: '7:52' ,
                vues:14253 ,
                date:'1 an' ,
                channel:'dfbxf'
            },
            {
                image:'https://i.ytimg.com/vi/_71w4UA2Oxo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMgSPt9wrteskK2N2m9lXbf2eNZA',
                title: "George Harrison - Got My Mind Set On You (Version II)",
                duree: '3:52' ,
                vues:'34 M' ,
                date:'4 ans' ,
                channel:'George Harrison'
            },
          
            {
                image:'https://i.ytimg.com/vi/20Ov0cDPZy8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5r8ULFin-XNkVTVVYg3ht8eGt6g',
                title: "John Mayer - Free Fallin' (Live at the Nokia Theatre)",
                duree: '4:02' ,
                vues:'110 M' ,
                date:'11 ans' ,
                channel:'John Mayer'
            },
            {
                image:'https://i.ytimg.com/vi/J6Pqwms_MBw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPVyHRpqqdDLZwuiuFbkhl2jF2Jg',
                title: "LEA - Wenn Du Mich Lässt (Official Video)",
                duree: '3:09' ,
                vues:'1.3 M' ,
                date:'2 semaines' ,
                channel:'LEA'
            },
            {
                image:'https://i.ytimg.com/vi/d-diB65scQU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApREXlb7mMVyLAPitgn6wU_hlGYw',
                title: "Bobby McFerrin - Don't Worry Be Happy (Official Music Video)",
                duree: '3:51' ,
                vues:'232 M' ,
                date:'12 ans' ,
                channel:'The Real Bobby McFerrin'
            },
            {
                image:'https://i.ytimg.com/vi/7jMlFXouPk8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBFaLMKT0RjydApkeiQCBQ1cHaUiA',
                title: "Pink Floyd - High Hopes (Official Music Video)",
                duree: '7:48' ,
                vues:'88 M' ,
                date:'7' ,
                channel:'Pink Floyd'
            },
            {
                image:'https://i.ytimg.com/vi/CrTMc2i6Lzc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCoSk8C30xIq4srM9rG2scmSg_oPA',
                title: "While My Guitar Gently Weeps",
                duree: '6:01' ,
                vues:'33 M' ,
                date:'3' ,
                channel:'George Harrison'
            },
            {
                image:'https://i.ytimg.com/vi/20Ov0cDPZy8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5r8ULFin-XNkVTVVYg3ht8eGt6g',
                title: "John Mayer - Free Fallin' (Live at the Nokia Theatre)",
                duree: '4:02' ,
                vues:'110 M' ,
                date:'11' ,
                channel:'John Mayer'
            },
            {
                image:'https://i.ytimg.com/vi/20Ov0cDPZy8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5r8ULFin-XNkVTVVYg3ht8eGt6g',
                title: "John Mayer - Free Fallin' (Live at the Nokia Theatre)",
                duree: '4:02' ,
                vues:'110 M' ,
                date:'11' ,
                channel:'John Mayer'
            },
        ]
    
    return (
        videos.map(c=>
            <div id="side">
            <div id="side_video" style={{height:94}}>
            <div id="img_div" style={{height:'100%',width:168}}>
                <img src={c.image} alt="" />
                <div id="duree">{c.duree}</div>
                <div id="clock"><svg aria-hidden="true" focusable="false" data-prefix="fas"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg></div>
            </div>
            <div>
            <h6 style={{fontWeight:'500',margin:'0 0 5px 0',width:'85%',padding:0,fontFamily:'Arial',fontSize:14}}>{c.title}</h6>
       <div id="side_description">
        <p>{c.channel}</p>
                <div id="vues_side">
                <p >{c.vues} vues</p>
            <p style={{margin:'0 4px 8px 4px',color:'black',fontWeight:600}}>.</p>
            <p>il y a {c.date}</p>
                </div>
            </div>
            </div>
           
        </div>
         <svg style={{margin:0,top:'1%'}} aria-hidden="true" focusable="false" data-prefix="fas" id="ellipsis-v" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" fill="#9c9c9c"><path  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
         </div>)
        
    )
}

export default SideVideo
