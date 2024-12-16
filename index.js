import{S as p,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function y(o){const n=await fetch(`https://pixabay.com/api/?key=47637626-a9f1551754daf4452dc005acb&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`);if(!n.ok)throw new Error("Failed to fetch images");return await n.json()}let l;function g(o,t){const s=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:i,views:f,comments:m,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${n}" alt="${r}" />
          </a>
          <div class="info">
            <p>Likes: ${i}</p>
            <p>Views: ${f}</p>
            <p>Comments: ${m}</p>
            <p>Downloads: ${d}</p>
          </div>
        </li>`).join("");t.innerHTML=s,l?l.refresh():l=new p(".gallery a",{captionDelay:250,captionsData:"alt"})}const u=document.querySelector("#search-form"),h=document.querySelector(".gallery"),c=document.querySelector(".loader");u.addEventListener("submit",w);function w(o){o.preventDefault();const t=o.currentTarget.elements.searchQuery.value.trim();if(!t){a.warning({message:"Please enter a search query!"});return}c.style.display="block",y(t).then(s=>{if(s.hits.length===0){a.error({message:"No images found. Try another query."});return}g(s.hits,h)}).catch(()=>{a.error({message:"Something went wrong. Please try again."})}).finally(()=>{c.style.display="none",u.reset()})}
//# sourceMappingURL=index.js.map
