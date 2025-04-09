import{a as d,i as l,S as p}from"./assets/vendor-BjRz3xa9.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="49684635-7a6aa23e2b6de301ea62c53b0";function y(o){return d.get(`${h}`,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21}}).then(i=>(i.data.hits.length||l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.data.hits)).catch()}const c=document.querySelector(".gallery"),f=document.querySelector(".loader");var L=new p(".gallery-link",{captionsData:"alt",captionDelay:250});function b(o){const i=o.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:m})=>`<li class="gallery-item">
    <a class="gallery-link" href="${a}">
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
      <li class="info-item"><h3 class="info-title">Views</h3> <p class="info-text">${s}</p></li>
      <li class="info-item"><h3 class="info-title">Comments</h3> <p class="info-text">${u}</p></li>
      <li class="info-item"><h3 class="info-title">Downloads</h3> <p class="info-text">${m}</p></li>
    </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",i),L.refresh()}function x(){c.innerHTML=""}function S(){f.classList.remove("hiden")}function n(){setTimeout(()=>{f.classList.add("hiden")},1e3)}const $=document.querySelector(".form");$.addEventListener("submit",q);function q(o){o.preventDefault(),S();const i=o.currentTarget.elements["search-text"].value.trim();if(i===""){l.info({title:"Caution",message:"You forgot important data",position:"topLeft"}),n();return}y(i).then(r=>{x(),b(r)}).catch(r=>console.log(r)).finally(n())}
//# sourceMappingURL=index.js.map
