
import React from 'react'

const Carousell = () => {

  function carousel(){ const gap = 16;
    
    const 
    carousel = document.querySelector("#carousell"),
    content = document.querySelector("#content"),
    next = document.querySelector("#next"),
    prev = document.querySelector("#prev");
  
  next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
  });
  prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
  });
  
  let width = carousel.offsetWidth;
  window.addEventListener("resize", e => (width = carousel.offsetWidth));
  
  
  } 
    return (
        
            <div className="wrapper">
    <div id="carousell">
      <div id="content">
        <div>Tout</div>
        <div>John Mayer</div>
        <div >Musique Rock</div>
        <div >Videos similaires</div>
        <div >Source:johnmayerVEVO</div>
        <div >Regardées</div>
      
      </div></div>
    <button id="prev" onClick={e => carousel()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"
        />
      </svg>
    </button>
    <button id="next" onClick={e => carousel()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"
        />
      </svg>
    </button>

  </div>
         
    )
  

}

export default Carousell
