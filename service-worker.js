if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const l=e=>r(e,o),a={module:{uri:o},exports:c,require:l};i[o]=Promise.all(s.map((e=>a[e]||l(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa-example"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.821e0115.css",revision:null},{url:"/img/background.f1acac03.jpg",revision:null},{url:"/img/background.jpg",revision:"7fbc7460ee983da36a22d08c8a3971e9"},{url:"/img/unite-logo.png",revision:"96be2eabac78b0305ea520b67a5f9d97"},{url:"/index.html",revision:"bbc3eeaeec9c0754508a4201112a1acf"},{url:"/js/app.9866e177.js",revision:null},{url:"/js/chunk-vendors.a1716e02.js",revision:null},{url:"/manifest.json",revision:"ad962fe4cf7aa88ea32ded259ab16ba7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map