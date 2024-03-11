"use strict";exports.id=2322,exports.ids=[2322],exports.modules={42322:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var l=s(25036),a=s(73955),r=s(16744),n=s(75487),i=s(73279),o=s(40540),c=s(55869),m=s(52665);async function x({article:e,children:t}){let s=(await (0,m.n)()).filter(({metadata:t})=>t!==e).slice(0,2);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.W,{as:"article",className:"mt-24 sm:mt-32 lg:mt-40",children:[l.jsx(n.U,{children:(0,l.jsxs)("header",{className:"mx-auto flex max-w-5xl flex-col text-center",children:[l.jsx("h1",{className:"mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl",children:e.title}),l.jsx("time",{dateTime:e.date,className:"order-first text-sm text-neutral-950",children:(0,c.p)(e.date)}),(0,l.jsxs)("p",{className:"mt-6 text-sm font-semibold text-neutral-950",children:["by ",e.author.name,", ",e.author.role]})]})}),l.jsx(n.U,{children:l.jsx(i.t.wrapper,{className:"mt-24 sm:mt-32 lg:mt-40",children:t})})]}),s.length>0&&l.jsx(o.b,{className:"mt-24 sm:mt-32 lg:mt-40",title:"More articles",pages:s}),l.jsx(a.U,{})]})}},2609:(e,t,s)=>{s.d(t,{V:()=>m});var l=s(25036),a=s(15904),r=s.n(a),n=s(70990),i=s(34545);function o({author:e,children:t,className:s,image:a}){return(0,l.jsxs)("figure",{className:(0,n.Z)("grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16",s),children:[l.jsx("blockquote",{className:"col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2",children:"string"==typeof t?l.jsx("p",{children:t}):t}),l.jsx("div",{className:"col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl",children:l.jsx(r(),{alt:"",...a,sizes:"(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem",className:"h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"})}),(0,l.jsxs)("figcaption",{className:"text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base",children:[l.jsx("span",{className:"font-semibold",children:e.name}),l.jsx("span",{className:"hidden font-semibold sm:inline",children:", "}),l.jsx("br",{className:"sm:hidden"}),l.jsx("span",{className:"sm:font-semibold",children:e.role})]})]})}function c({author:e,children:t,className:s}){return l.jsx(i.O,{position:"left",className:(0,n.Z)("pl-8",s),children:(0,l.jsxs)("figure",{className:"text-sm",children:[l.jsx("blockquote",{className:"text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']",children:"string"==typeof t?l.jsx("p",{children:t}):t}),(0,l.jsxs)("figcaption",{className:"mt-6 font-semibold text-neutral-950",children:[e.name,", ",e.role]})]})})}function m(e){return e.image?l.jsx(o,{...e}):l.jsx(c,{...e})}},34596:(e,t,s)=>{s.d(t,{J:()=>i});var l=s(86843);let a=(0,l.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/GrayscaleTransitionImage.tsx`),{__esModule:r,$$typeof:n}=a;a.default;let i=(0,l.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/GrayscaleTransitionImage.tsx#GrayscaleTransitionImage`)},30214:(e,t,s)=>{s.d(t,{K:()=>i});var l=s(86843);let a=(0,l.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/GridPattern.tsx`),{__esModule:r,$$typeof:n}=a;a.default;let i=(0,l.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/GridPattern.tsx#GridPattern`)},73279:(e,t,s)=>{s.d(t,{t:()=>m});var l=s(25036),a=s(70990),r=s(2609),n=s(34545),i=s(34596),o=s(7695),c=s(83779);let m={Blockquote:({className:e,...t})=>l.jsx(r.V,{className:(0,a.Z)("my-32",e),...t}),img:function({className:e,...t}){return l.jsx("div",{className:(0,a.Z)("group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6",e),children:l.jsx(i.J,{...t,sizes:"(min-width: 768px) 42rem, 100vw",className:"aspect-[16/10] w-full object-cover"})})},StatList:({className:e,...t})=>l.jsx(o.Z,{className:(0,a.Z)("my-32 !max-w-none",e),...t}),StatListItem:o.j,table:function({className:e,...t}){return l.jsx("div",{className:(0,a.Z)("my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto",e),children:l.jsx("div",{className:"max-sm:min-w-full max-sm:flex-none max-sm:px-6",children:l.jsx("table",{...t})})})},TagList:({className:e,...t})=>l.jsx(c.P,{className:(0,a.Z)("my-6",e),...t}),TagListItem:c.N,TopTip:({children:e,className:t})=>(0,l.jsxs)(n.O,{position:"left",className:(0,a.Z)("my-10 pl-8",t),children:[l.jsx("p",{className:"font-display text-sm font-bold uppercase tracking-widest text-neutral-950",children:"Top tip"}),l.jsx("div",{className:"mt-4",children:e})]}),Typography:({className:e,...t})=>l.jsx("div",{className:(0,a.Z)("typography",e),...t}),wrapper:({className:e,...t})=>l.jsx("div",{className:(0,a.Z)("[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0",e),...t})}},40540:(e,t,s)=>{s.d(t,{b:()=>p});var l=s(25036),a=s(40646),r=s.n(a),n=s(70990),i=s(34545),o=s(16744),c=s(75487),m=s(30214),x=s(18937),d=s(55869);function u(e){return l.jsx("svg",{viewBox:"0 0 24 6","aria-hidden":"true",...e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 3 18 .5v2H0v1h18v2L24 3Z"})})}function h({page:e}){return l.jsx("article",{children:(0,l.jsxs)(i.O,{position:"left",className:"relative flex flex-col items-start pl-8",children:[l.jsx("h3",{className:"mt-6 text-base font-semibold text-neutral-950",children:e.title}),l.jsx("time",{dateTime:e.date,className:"order-first text-sm text-neutral-600",children:(0,d.p)(e.date)}),l.jsx("p",{className:"mt-2.5 text-base text-neutral-600",children:e.description}),(0,l.jsxs)(r(),{href:e.href,className:"mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700","aria-label":`Read more: ${e.title}`,children:["Read more",l.jsx(u,{className:"w-6 flex-none fill-current"}),l.jsx("span",{className:"absolute inset-0"})]})]})},e.href)}function p({title:e,pages:t,intro:s,className:a}){return(0,l.jsxs)("div",{className:(0,n.Z)("relative pt-24 sm:pt-32 lg:pt-40",a),children:[l.jsx("div",{className:"absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50",children:l.jsx(m.K,{className:"absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-270})}),l.jsx(x.v,{title:e,smaller:!0,children:s&&l.jsx("p",{children:s})}),l.jsx(o.W,{className:s?"mt-24":"mt-16",children:l.jsx(c.o,{className:"grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",children:t.map(e=>l.jsx(c.U,{children:l.jsx(h,{page:e})},e.href))})})]})}},18937:(e,t,s)=>{s.d(t,{v:()=>i});var l=s(25036),a=s(70990),r=s(16744),n=s(75487);function i({title:e,eyebrow:t,children:s,smaller:i=!1,invert:o=!1,...c}){return l.jsx(r.W,{...c,children:(0,l.jsxs)(n.U,{className:"max-w-2xl",children:[(0,l.jsxs)("h2",{children:[t&&(0,l.jsxs)(l.Fragment,{children:[l.jsx("span",{className:(0,a.Z)("mb-6 block font-display text-base font-semibold",o?"text-white":"text-neutral-950"),children:t}),l.jsx("span",{className:"sr-only",children:" - "})]}),l.jsx("span",{className:(0,a.Z)("block font-display tracking-tight [text-wrap:balance]",i?"text-2xl font-semibold":"text-4xl font-medium sm:text-5xl",o?"text-white":"text-neutral-950"),children:e})]}),s&&l.jsx("div",{className:(0,a.Z)("mt-6 text-xl",o?"text-neutral-300":"text-neutral-600"),children:s})]})})}},7695:(e,t,s)=>{s.d(t,{Z:()=>n,j:()=>i});var l=s(25036),a=s(34545),r=s(75487);function n({children:e,...t}){return l.jsx(r.o,{...t,children:l.jsx("dl",{className:"grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none",children:e})})}function i({label:e,value:t}){return(0,l.jsxs)(a.O,{as:r.U,position:"left",className:"flex flex-col-reverse pl-8",children:[l.jsx("dt",{className:"mt-2 text-base text-neutral-600",children:e}),l.jsx("dd",{className:"font-display text-3xl font-semibold text-neutral-950 sm:text-4xl",children:t})]})}},83779:(e,t,s)=>{s.d(t,{N:()=>n,P:()=>r});var l=s(25036),a=s(70990);function r({children:e,className:t}){return l.jsx("ul",{role:"list",className:(0,a.Z)(t,"flex flex-wrap gap-4"),children:e})}function n({children:e,className:t}){return l.jsx("li",{className:(0,a.Z)("rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600",t),children:e})}},55869:(e,t,s)=>{s.d(t,{p:()=>l});function l(e){let t=e.split("-").length>2;return new Date(`${e}Z`).toLocaleDateString("en-US",{day:t?"numeric":void 0,month:"long",year:"numeric",timeZone:"UTC"})}}};