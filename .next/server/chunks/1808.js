"use strict";exports.id=1808,exports.ids=[1808],exports.modules={1808:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g,metadata:()=>p});var l=s(25036),a=s(15904),n=s.n(a),r=s(40646),i=s.n(r),d=s(34545),c=s(50374),x=s(73955),m=s(16744),o=s(75487),h=s(69755),u=s(55869),j=s(52665);let p={title:"Blog",description:"Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles."};async function g(){let e=await (0,j.n)();return(0,l.jsxs)(l.Fragment,{children:[l.jsx(h.O,{eyebrow:"Blog",title:"The latest articles and news",children:l.jsx("p",{children:"Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles."})}),l.jsx(m.W,{className:"mt-24 sm:mt-32 lg:mt-40",children:l.jsx("div",{className:"space-y-24 lg:space-y-32",children:e.map(e=>l.jsx(o.U,{children:l.jsx("article",{children:l.jsx(d.O,{className:"pt-16",children:l.jsx("div",{className:"relative lg:-mx-4 lg:flex lg:justify-end",children:(0,l.jsxs)("div",{className:"pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0",children:[l.jsx("h2",{className:"font-display text-2xl font-semibold text-neutral-950",children:l.jsx(i(),{href:e.href,children:e.title})}),(0,l.jsxs)("dl",{className:"lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4",children:[l.jsx("dt",{className:"sr-only",children:"Published"}),l.jsx("dd",{className:"absolute left-0 top-0 text-sm text-neutral-950 lg:static",children:l.jsx("time",{dateTime:e.date,children:(0,u.p)(e.date)})}),l.jsx("dt",{className:"sr-only",children:"Author"}),(0,l.jsxs)("dd",{className:"mt-6 flex gap-x-4",children:[l.jsx("div",{className:"flex-none overflow-hidden rounded-xl bg-neutral-100",children:l.jsx(n(),{alt:"",...e.author.image,className:"h-12 w-12 object-cover grayscale"})}),(0,l.jsxs)("div",{className:"text-sm text-neutral-950",children:[l.jsx("div",{className:"font-semibold",children:e.author.name}),l.jsx("div",{children:e.author.role})]})]})]}),l.jsx("p",{className:"mt-6 max-w-2xl text-base text-neutral-600",children:e.description}),l.jsx(c.z,{href:e.href,"aria-label":`Read more: ${e.title}`,className:"mt-8",children:"Read more"})]})})})})},e.href))})}),l.jsx(x.U,{})]})}},69755:(e,t,s)=>{s.d(t,{O:()=>i});var l=s(25036),a=s(70990),n=s(16744),r=s(75487);function i({eyebrow:e,title:t,children:s,centered:i=!1}){return l.jsx(n.W,{className:(0,a.Z)("mt-24 sm:mt-32 lg:mt-40",i&&"text-center"),children:(0,l.jsxs)(r.U,{children:[(0,l.jsxs)("h1",{children:[l.jsx("span",{className:"block font-display text-base font-semibold text-neutral-950",children:e}),l.jsx("span",{className:"sr-only",children:" - "}),l.jsx("span",{className:(0,a.Z)("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl",i&&"mx-auto"),children:t})]}),l.jsx("div",{className:(0,a.Z)("mt-6 max-w-3xl text-xl text-neutral-600",i&&"mx-auto"),children:s})]})})}},55869:(e,t,s)=>{s.d(t,{p:()=>l});function l(e){let t=e.split("-").length>2;return new Date(`${e}Z`).toLocaleDateString("en-US",{day:t?"numeric":void 0,month:"long",year:"numeric",timeZone:"UTC"})}}};