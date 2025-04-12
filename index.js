import{a as v,i as l,S as w}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const x="https://pixabay.com/api/",q="49684635-7a6aa23e2b6de301ea62c53b0";async function f(i,o=1){const r=await v.get(`${x}`,{params:{key:q,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o}});return r.data.hits.length||l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".btn-load-more");var $=new w(".gallery-link",{captionsData:"alt",captionDelay:250});function y(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:a,comments:b,downloads:S})=>`<li class="gallery-item">
    <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${e}"
    />
   </a>
    <ul class="info">
      <li class="info-item">
        <h3 class="info-title">Likes</h3>
        <p class="info-text">${t}</p>
      </li>
      <li class="info-item"><h3 class="info-title">Views</h3> <p class="info-text">${a}</p></li>
      <li class="info-item"><h3 class="info-title">Comments</h3> <p class="info-text">${b}</p></li>
      <li class="info-item"><h3 class="info-title">Downloads</h3> <p class="info-text">${S}</p></li>
    </ul>
    </li>`).join("");h.insertAdjacentHTML("beforeend",o),$.refresh()}function B(){h.innerHTML=""}function g(){m.classList.remove("hiden")}function c(){m.classList.add("hiden")}function L(){p.classList.remove("hiden")}function M(){p.classList.add("hiden")}const P=document.querySelector(".form"),O=document.querySelector(".btn-load-more");P.addEventListener("submit",C);O.addEventListener("click",E);let n=1,u="",d=0;async function C(i){i.preventDefault(),g();const o=i.currentTarget.elements["search-text"].value.trim();if(u=o,n=1,o===""){l.info({title:"Caution",message:"You forgot important data",position:"topLeft"}),c();return}try{const r=await f(u);d=r.totalHits,B(),y(r.hits),d>15?L():l.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topLeft"})}catch(r){console.log(r)}finally{c()}}async function E(){n++;try{g(),M();const i=n*15,o=await f(u,n);y(o.hits),i<d?L():l.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topLeft"});const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:s*2,behavior:"smooth"})}catch(i){console.log(i)}finally{c()}}
//# sourceMappingURL=index.js.map
