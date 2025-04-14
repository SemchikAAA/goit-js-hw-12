import{a as w,i,S as x}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const $="https://pixabay.com/api/",q="49684635-7a6aa23e2b6de301ea62c53b0";async function h(t,s=1){const o=await w.get(`${$}`,{params:{key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s}});return o.data.hits.length||i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".btn-load-more");var B=new x(".gallery-link",{captionsData:"alt",captionDelay:250});function g(t){const s=t.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:S,downloads:v})=>`<li class="gallery-item">
    <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${e}"
    />
   </a>
    <ul class="info">
      <li class="info-item">
        <h3 class="info-title">Likes</h3>
        <p class="info-text">${r}</p>
      </li>
      <li class="info-item"><h3 class="info-title">Views</h3> <p class="info-text">${n}</p></li>
      <li class="info-item"><h3 class="info-title">Comments</h3> <p class="info-text">${S}</p></li>
      <li class="info-item"><h3 class="info-title">Downloads</h3> <p class="info-text">${v}</p></li>
    </ul>
    </li>`).join("");m.insertAdjacentHTML("beforeend",s),B.refresh()}function E(){m.innerHTML=""}function L(){p.classList.remove("hiden")}function d(){p.classList.add("hiden")}function b(){y.classList.remove("hiden")}function c(){y.classList.add("hiden")}const M=document.querySelector(".form"),P=document.querySelector(".btn-load-more");M.addEventListener("submit",O);P.addEventListener("click",C);let l=1,u="",f=0;async function O(t){t.preventDefault(),L();const s=t.currentTarget.elements["search-text"].value.trim();if(u=s,l=1,s===""){i.info({title:"Caution",message:"You forgot important data",position:"topLeft"}),d();return}try{const o=await h(u);f=o.totalHits,E(),g(o.hits),l*o.hits.length<f?b():(i.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topLeft"}),c())}catch(o){i.error({title:"Error",message:`${o.message}`}),c()}finally{d()}}async function C(){l++,L(),c();try{const t=await h(u,l);console.log(t),g(t.hits),l*t.hits.length<f?b():i.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topLeft"});const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){i.error({title:"Error",message:`${t.message}`}),c()}finally{d()}}
//# sourceMappingURL=index.js.map
