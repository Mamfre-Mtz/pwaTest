(function(){"use strict";var e={737:function(e,t,n){var o=n(963),a=n(252);const r=(0,a._)("footer",{class:"footer"},"Made with love ♡ by Mamfre",-1);function i(e,t,n,o,i,s){const u=(0,a.up)("MainNav"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("header",null,[(0,a.Wm)(u)]),(0,a.Wm)(l),r])}const s={class:"bg-secondary-color"},u=(0,a.Uk)("Home"),l=(0,a.Uk)("About"),c=(0,a.Uk)("Pokemon of the day"),m=(0,a.Uk)("Moves");function p(e,t,n,o,r,i){const p=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a.Wm)(p,{to:"/pwaTest"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(p,{to:"/pwaTest/about"},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(p,{to:"/pwaTest/day"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(p,{to:"/pwaTest/moves"},{default:(0,a.w5)((()=>[m])),_:1})])}var d={name:"MainNav"},f=n(744);const g=(0,f.Z)(d,[["render",p]]);var v=g,h={name:"App",components:{MainNav:v}};const b=(0,f.Z)(h,[["render",i]]);var w=b,k=n(205);(0,k.z)("/pwaTest/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var y=n(119),_=n(636),q=n(577);const N={class:"text-center"},j=(0,a._)("h1",{class:"mt-5"},"Look for your pokemon",-1),x={class:"mt-2"},C={class:"result"},M=(0,a._)("h2",null,"Google Tag Manager",-1);function P(e,t,n,r,i,s){const u=(0,a.up)("PokeCard");return(0,a.wg)(),(0,a.iD)("div",N,[j,(0,a._)("div",x,[(0,a.wy)((0,a._)("input",{type:"text",name:"pokemonName",id:"pokemonName","onUpdate:modelValue":t[0]||(t[0]=e=>i.inputName=e)},null,512),[[o.nr,i.inputName]]),(0,a._)("button",{class:"btn ml-5 bg-primary-color border-primary-color-light",onClick:t[1]||(t[1]=(...e)=>s.search&&s.search(...e))}," Go!! "),(0,a._)("p",C,(0,q.zw)(i.resultName),1)]),(0,a._)("div",null,[M,(0,a._)("button",{class:"btn ml-5 bg-primary-color border-primary-color-light my_gtm",onClick:t[2]||(t[2]=(...e)=>s.gtmCall&&s.gtmCall(...e))}," Go!! ")]),i.data?((0,a.wg)(),(0,a.j4)(u,{key:0,pokemon:i.data},null,8,["pokemon"])):(0,a.kq)("",!0)])}const O={class:"card"},T={class:"img-w"},D=["src"],S={class:"font-xl"},A={class:"flex justify-center"},W={class:"font-lg"};function Z(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("figure",T,[(0,a._)("img",{src:n.pokemon.sprites.front_default,alt:"none"},null,8,D)]),(0,a._)("p",S,(0,q.zw)(n.pokemon.name),1),(0,a._)("div",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.pokemon.types,(e=>((0,a.wg)(),(0,a.iD)("p",{class:"font-lg",key:e},(0,q.zw)(e.type.name),1)))),128))]),(0,a._)("p",W,"No. "+(0,q.zw)(n.pokemon.order),1)])}var z={name:"poke-card",data(){return{msg:"hi"}},props:{pokemon:{type:Object,required:!0}}};const G=(0,f.Z)(z,[["render",Z]]);var U=G,E={name:"main-page",components:{PokeCard:U},data(){return{inputName:"",resultName:"no entries yet",data:null}},methods:{async search(){const e=this.inputName.toLowerCase(),t=await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`),n=await t.json();this.data=n,this.resultName="it's "+n.name+"!!"},gtmCall(){this.$gtm.trackEvent({event:"calling_home",category:"Calculator",action:"click",label:"pokeapi",value:400})}}};const F=(0,f.Z)(E,[["render",P]]);var H=F;const L={class:"mr-5 ml-5"},V=(0,a._)("h2",{class:"font-xl"},"About",-1),$=(0,a._)("article",null,[(0,a._)("p",{class:"font-md"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat sapien eu aliquam molestie. Aliquam lobortis ligula nec varius semper. Curabitur ultrices consectetur nisi ac tincidunt. Suspendisse et ipsum dui. Duis purus velit, aliquet commodo auctor nec, sollicitudin eu lectus. In hac habitasse platea dictumst. Proin vel lacus suscipit, interdum purus non, dapibus massa. Nulla sit amet bibendum libero. Mauris vitae diam non augue tincidunt euismod. Aliquam viverra placerat nisi, vitae fringilla purus. Nam ut orci dolor. Nunc vel nisi vehicula, scelerisque magna eu, condimentum tellus. Etiam eget condimentum libero. Donec facilisis metus eget tortor pellentesque gravida. Sed a ornare quam. Vivamus non felis at dui ornare maximus. Ut ac lacus facilisis, rhoncus orci nec, vestibulum urna. Cras in leo metus. "),(0,a._)("p",{class:"font-md mt-2"}," Pellentesque a neque in dolor lobortis blandit. Etiam risus eros, pretium eget orci non, tincidunt rhoncus orci. Nulla aliquet, tortor id pharetra pretium, leo urna iaculis velit, non maximus magna neque sit amet justo. Sed interdum laoreet elit, vel commodo dolor porta porta. Fusce justo dui, euismod non risus eu, dignissim molestie justo. In hac habitasse platea dictumst. Sed lobortis nunc a felis luctus facilisis. Morbi magna felis, tristique a convallis in, bibendum vitae nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent dictum vehicula tristique. Nam sed libero tempor, tempus enim vel, porttitor arcu. Nulla semper elit nec ullamcorper iaculis. Mauris augue purus, aliquet sit amet lectus dapibus, sagittis convallis sem. Morbi maximus lacus ac porta ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque congue mollis ligula eu egestas. Vivamus nec velit eu est faucibus tincidunt. Cras sed blandit magna. ")],-1),I=[V,$];function R(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",L,I)}var B={name:"about-page",data(){return{}}};const K=(0,f.Z)(B,[["render",R]]);var Q=K;const Y={class:"grid justify-center"},J=(0,a._)("h3",{class:"title-404 primary-color"},"Page not found",-1),X=(0,a._)("figure",{class:"notfound-img mt-5"},[(0,a._)("img",{src:"https://s3.amazonaws.com/kandipatternspatterns/characters/10670_Ghost_Missingno_Sprite.png",alt:"none"})],-1),ee=[J,X];function te(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",Y,ee)}var ne={name:"not-found"};const oe=(0,f.Z)(ne,[["render",te]]);var ae=oe;function re(e,t,n,o,r,i){const s=(0,a.up)("PokeCard");return(0,a.wg)(),(0,a.iD)("div",null,[r.data?((0,a.wg)(),(0,a.j4)(s,{key:0,pokemon:r.data},null,8,["pokemon"])):(0,a.kq)("",!0)])}var ie={name:"starters-page",components:{PokeCard:U},data(){return{data:null}},async created(){const e=se(),t=await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`),n=await t.json();this.data=n}};function se(){return Math.floor(799*Math.random()+1)}const ue=(0,f.Z)(ie,[["render",re]]);var le=ue;const ce=[{path:"/",component:H,name:"index-p"},{path:"/pwaTest",component:H,name:"index-page"},{path:"/pwaTest/about",component:Q,name:"/next-page"},{path:"/pwaTest/day",component:le,name:"startes-page"},{path:"/404",component:ae,name:"not-exist"},{path:"/:catchAll(.*)",redirect:"/404"}],me=(0,o.ri)(w),pe=(0,y.createRouter)({history:(0,y.createWebHistory)(),routes:ce});me.use(pe),me.use((0,_.createGtm)({id:"GTM-5W87P8H",enable:!0,debug:!0,loadScript:!0,vueRouter:pe})),me.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],u=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(o);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkpwa_example"]=self["webpackChunkpwa_example"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(737)}));o=n.O(o)})();
//# sourceMappingURL=app.426f21c7.js.map