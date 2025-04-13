import{a as v,i,S as w}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const x="https://pixabay.com/api/",$="49684635-7a6aa23e2b6de301ea62c53b0";async function f(r,s=1){const t=await v.get(`${x}`,{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s}});return t.data.hits.length||i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".btn-load-more");var q=new w(".gallery-link",{captionsData:"alt",captionDelay:250});function y(r){const s=r.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:n,comments:b,downloads:S})=>`<li class="gallery-item">
    <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${e}"
    />
   </a>
    <ul class="info">
      <li class="info-item">
        <h3 class="info-title">Likes</h3>
        <p class="info-text">${o}</p>
      </li>
      <li class="info-item"><h3 class="info-title">Views</h3> <p class="info-text">${n}</p></li>
      <li class="info-item"><h3 class="info-title">Comments</h3> <p class="info-text">${b}</p></li>
      <li class="info-item"><h3 class="info-title">Downloads</h3> <p class="info-text">${S}</p></li>
    </ul>
    </li>`).join("");h.insertAdjacentHTML("beforeend",s),q.refresh()}function B(){h.innerHTML=""}function g(){m.classList.remove("hiden")}function c(){m.classList.add("hiden")}function L(){p.classList.remove("hiden")}function E(){p.classList.add("hiden")}const M=document.querySelector(".form"),P=document.querySelector(".btn-load-more");M.addEventListener("submit",O);P.addEventListener("click",C);let l=1,d="",u=0;async function O(r){r.preventDefault(),g();const s=r.currentTarget.elements["search-text"].value.trim();if(d=s,l=1,s===""){i.info({title:"Caution",message:"You forgot important data",position:"topLeft"}),c();return}try{const t=await f(d);u=t.totalHits,B(),y(t.hits),l*t.hits.length<u?L():i.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topLeft"})}catch(t){i.error({title:"Error",message:`${t.message}`})}finally{c()}}async function C(){l++,g(),E();try{const r=await f(d,l);y(r.hits),l*r.hits.length<u?L():i.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topLeft"});const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(r){i.error({title:"Error",message:`${r.message}`})}finally{c()}}
//# sourceMappingURL=index.js.map
