exports.id=9984,exports.ids=[9984],exports.modules={7633:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},86517:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,61476,23)),Promise.resolve().then(r.bind(r,99683))},83949:(e,t,r)=>{Promise.resolve().then(r.bind(r,74150))},99683:(e,t,r)=>{"use strict";r.r(t),r.d(t,{FadeIn:()=>c,FadeInStagger:()=>d});var l=r(95344),s=r(3729),n=r(70484),i=r(23760);let a=(0,s.createContext)(!1),o={once:!0,margin:"0px 0px -200px"};function c(e){let t=(0,n.J)(),r=(0,s.useContext)(a);return l.jsx(i.E.div,{variants:{hidden:{opacity:0,y:t?0:24},visible:{opacity:1,y:0}},transition:{duration:.5},...r?{}:{initial:"hidden",whileInView:"visible",viewport:o},...e})}function d({faster:e=!1,...t}){return l.jsx(a.Provider,{value:!0,children:l.jsx(i.E.div,{initial:"hidden",whileInView:"visible",viewport:o,transition:{staggerChildren:e?.12:.2},...t})})}},80210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GridPattern:()=>a});var l=r(95344),s=r(3729),n=r(23760);function i({x:e,y:t,...r}){return l.jsx(n.E.path,{transform:`translate(${-32*t+96*e} ${160*t})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...r})}function a({yOffset:e=0,interactive:t=!1,...r}){let n=(0,s.useId)(),a=(0,s.useRef)(null),o=(0,s.useRef)(),c=(0,s.useRef)(0),[d,h]=(0,s.useState)([]);return(0,s.useEffect)(()=>{if(t)return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)};function r(t){if(!a.current)return;let r=a.current.getBoundingClientRect(),l=t.clientX-r.left,s=t.clientY-r.top;!(l<0)&&!(s<0)&&!(l>r.width)&&!(s>r.height)&&(l=l-r.width/2-32,s-=e,l+=Math.tan(.2)*s,l=Math.floor(l/96),s=Math.floor(s/160),(o.current?.[0]!==l||o.current?.[1]!==s)&&(o.current=[l,s],h(e=>{let t=c.current++;return[...e,[l,s,t]].filter(e=>!(e[0]===l&&e[1]===s&&e[2]!==t))})))}},[e,t]),(0,l.jsxs)("svg",{ref:a,"aria-hidden":"true",...r,children:[l.jsx("rect",{width:"100%",height:"100%",fill:`url(#${n})`,strokeWidth:"0"}),(0,l.jsxs)("svg",{x:"50%",y:e,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(e=>l.jsx(i,{x:e[0],y:e[1]},`${e}`)),d.map(e=>l.jsx(i,{x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{h(t=>t.filter(t=>t[2]!==e[2]))}},e[2]))]}),l.jsx("defs",{children:l.jsx("pattern",{id:n,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${e})`,fill:"none",children:l.jsx("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},74150:(e,t,r)=>{"use strict";r.r(t),r.d(t,{RootLayout:()=>L});var l=r(95344),s=r(3729),n=r(20783),i=r.n(n),a=r(22254),o=r(56815),c=r(70484),d=r(66056),h=r(23760);function u({invert:e=!1,className:t,children:r,...s}){t=(0,o.Z)(t,"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",e?"bg-white text-neutral-950 hover:bg-neutral-200":"bg-neutral-950 text-white hover:bg-neutral-800");let n=l.jsx("span",{className:"relative top-px",children:r});return void 0===s.href?l.jsx("button",{className:t,...s,children:n}):l.jsx(i(),{className:t,...s,children:n})}function x({as:e,className:t,children:r}){return l.jsx(e??"div",{className:(0,o.Z)("mx-auto max-w-7xl px-6 lg:px-8",t),children:l.jsx("div",{className:"mx-auto max-w-2xl lg:max-w-none",children:r})})}var m=r(99683);function f({invert:e=!1,filled:t=!1,...r}){let n=(0,s.useId)();return(0,l.jsxs)("svg",{viewBox:"0 0 32 32","aria-hidden":"true",...r,children:[l.jsx("rect",{clipPath:`url(#${n}-clip)`,className:(0,o.Z)("h-8 transition-all duration-300",e?"fill-white":"fill-neutral-950",t?"w-8":"w-0 group-hover/logo:w-8")}),l.jsx("use",{href:`#${n}-path`,className:e?"stroke-white":"stroke-neutral-950",fill:"none",strokeWidth:"1.5"}),(0,l.jsxs)("defs",{children:[l.jsx("path",{id:`${n}-path`,d:"M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"}),l.jsx("clipPath",{id:`${n}-clip`,children:l.jsx("use",{href:`#${n}-path`})})]})]})}function v({className:e,invert:t=!1,filled:r=!1,fillOnHover:s=!1,...n}){return(0,l.jsxs)("svg",{viewBox:"0 0 130 32","aria-hidden":"true",className:(0,o.Z)(s&&"group/logo",e),...n,children:[l.jsx(f,{preserveAspectRatio:"xMinYMid meet",invert:t,filled:r}),l.jsx("path",{className:t?"fill-white":"fill-neutral-950",d:"M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"})]})}let p=[{title:"Facebook",href:"https://facebook.com",icon:function(e){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"})})}},{title:"Instagram",href:"https://instagram.com",icon:function(e){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"})})}},{title:"GitHub",href:"https://github.com",icon:function(e){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"})})}},{title:"Dribbble",href:"https://dribbble.com",icon:function(e){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z"})})}}];function g({className:e,invert:t=!1}){return l.jsx("ul",{role:"list",className:(0,o.Z)("flex gap-x-10",t?"text-white":"text-neutral-950",e),children:p.map(e=>l.jsx("li",{children:l.jsx(i(),{href:e.href,"aria-label":e.title,className:(0,o.Z)("transition",t?"hover:text-neutral-200":"hover:text-neutral-700"),children:l.jsx(e.icon,{className:"h-6 w-6 fill-current"})})},e.title))})}let j=[{title:"Work",links:[{title:"FamilyFund",href:"/work/family-fund"},{title:"Unseal",href:"/work/unseal"},{title:"Phobia",href:"/work/phobia"},{title:(0,l.jsxs)(l.Fragment,{children:["See all ",l.jsx("span",{"aria-hidden":"true",children:"→"})]}),href:"/work"}]},{title:"Company",links:[{title:"About",href:"/about"},{title:"Process",href:"/process"},{title:"Blog",href:"/blog"},{title:"Contact us",href:"/contact"}]},{title:"Connect",links:p}];function b(){return l.jsx("nav",{children:l.jsx("ul",{role:"list",className:"grid grid-cols-2 gap-8 sm:grid-cols-3",children:j.map((e,t)=>(0,l.jsxs)("li",{children:[l.jsx("div",{className:"font-display text-sm font-semibold tracking-wider text-neutral-950",children:e.title}),l.jsx("ul",{role:"list",className:"mt-4 text-sm text-neutral-700",children:e.links.map((e,t)=>l.jsx("li",{className:"mt-4",children:l.jsx(i(),{href:e.href,className:"transition hover:text-neutral-950",children:e.title})},t))})]},t))})})}function w(e){return l.jsx("svg",{viewBox:"0 0 16 6","aria-hidden":"true",...e,children:l.jsx("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M16 3 10 .5v2H0v1h10v2L16 3Z"})})}function N(){return(0,l.jsxs)("form",{className:"max-w-sm",children:[l.jsx("h2",{className:"font-display text-sm font-semibold tracking-wider text-neutral-950",children:"Sign up for our newsletter"}),l.jsx("p",{className:"mt-4 text-sm text-neutral-700",children:"Subscribe to get the latest design news, articles, resources and inspiration."}),(0,l.jsxs)("div",{className:"relative mt-6",children:[l.jsx("input",{type:"email",placeholder:"Email address",autoComplete:"email","aria-label":"Email address",className:"block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"}),l.jsx("div",{className:"absolute inset-y-1 right-1 flex justify-end",children:l.jsx("button",{type:"submit","aria-label":"Submit",className:"flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800",children:l.jsx(w,{className:"w-4"})})})]})]})}function y(){return l.jsx(x,{as:"footer",className:"mt-24 w-full sm:mt-32 lg:mt-40",children:(0,l.jsxs)(m.FadeIn,{children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",children:[l.jsx(b,{}),l.jsx("div",{className:"flex lg:justify-end",children:l.jsx(N,{})})]}),(0,l.jsxs)("div",{className:"mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12",children:[l.jsx(i(),{href:"/","aria-label":"Home",children:l.jsx(v,{className:"h-8",fillOnHover:!0})}),(0,l.jsxs)("p",{className:"text-sm text-neutral-700",children:["\xa9 Studio Agency Inc. ",new Date().getFullYear()]})]})]})})}var k=r(80210);function Z({name:e,children:t,invert:r=!1}){return(0,l.jsxs)("address",{className:(0,o.Z)("text-sm not-italic",r?"text-neutral-300":"text-neutral-600"),children:[l.jsx("strong",{className:r?"text-white":"text-neutral-950",children:e}),l.jsx("br",{}),t]})}function M({invert:e=!1,...t}){return(0,l.jsxs)("ul",{role:"list",...t,children:[l.jsx("li",{children:(0,l.jsxs)(Z,{name:"Copenhagen",invert:e,children:["1 Carlsberg Gate",l.jsx("br",{}),"1260, K\xf8benhavn, Denmark"]})}),l.jsx("li",{children:(0,l.jsxs)(Z,{name:"Billund",invert:e,children:["24 Lego All\xe9",l.jsx("br",{}),"7190, Billund, Denmark"]})})]})}let R=(0,s.createContext)(null);function P(e){return(0,l.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:[l.jsx("path",{d:"m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"}),l.jsx("path",{d:"M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"})]})}function A(e){return l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:l.jsx("path",{d:"M2 6h20v2H2zM2 16h20v2H2z"})})}function S({panelId:e,icon:t,expanded:r,onToggle:n,toggleRef:a,invert:c=!1}){let{logoHovered:d,setLogoHovered:h}=(0,s.useContext)(R);return l.jsx(x,{children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)(i(),{href:"/","aria-label":"Home",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[l.jsx(f,{className:"h-8 sm:hidden",invert:c,filled:d}),l.jsx(v,{className:"hidden h-8 sm:block",invert:c,filled:d})]}),(0,l.jsxs)("div",{className:"flex items-center gap-x-8",children:[l.jsx(u,{href:"/contact",invert:c,children:"Contact us"}),l.jsx("button",{ref:a,type:"button",onClick:n,"aria-expanded":r?"true":"false","aria-controls":e,className:(0,o.Z)("group -m-2.5 rounded-full p-2.5 transition",c?"hover:bg-white/10":"hover:bg-neutral-950/10"),"aria-label":"Toggle navigation",children:l.jsx(t,{className:(0,o.Z)("h-6 w-6",c?"fill-white group-hover:fill-neutral-200":"fill-neutral-950 group-hover:fill-neutral-700")})})]})]})})}function C({children:e}){return l.jsx("div",{className:"even:mt-px sm:bg-neutral-950",children:l.jsx(x,{children:l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2",children:e})})})}function H({href:e,children:t}){return(0,l.jsxs)(i(),{href:e,className:"group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16",children:[t,l.jsx("span",{className:"absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"})]})}function E(){return(0,l.jsxs)("nav",{className:"mt-px font-display text-5xl font-medium tracking-tight text-white",children:[(0,l.jsxs)(C,{children:[l.jsx(H,{href:"/work",children:"Our Work"}),l.jsx(H,{href:"/about",children:"About Us"})]}),(0,l.jsxs)(C,{children:[l.jsx(H,{href:"/process",children:"Our Process"}),l.jsx(H,{href:"/blog",children:"Blog"})]})]})}function I({children:e}){let t=(0,s.useId)(),[r,n]=(0,s.useState)(!1),i=(0,s.useRef)(null),a=(0,s.useRef)(null),o=(0,s.useRef)(null),u=(0,c.J)();return(0,s.useEffect)(()=>{function e(e){e.target instanceof HTMLElement&&e.target.closest("a")?.href===window.location.href&&n(!1)}return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[]),(0,l.jsxs)(d.A,{transition:u?{duration:0}:void 0,children:[(0,l.jsxs)("header",{children:[l.jsx("div",{className:"absolute left-0 right-0 top-2 z-40 pt-14","aria-hidden":r?"true":void 0,inert:r?"":void 0,children:l.jsx(S,{panelId:t,icon:A,toggleRef:i,expanded:r,onToggle:()=>{n(e=>!e),window.setTimeout(()=>a.current?.focus({preventScroll:!0}))}})}),l.jsx(h.E.div,{layout:!0,id:t,style:{height:r?"auto":"0.5rem"},className:"relative z-50 overflow-hidden bg-neutral-950 pt-2","aria-hidden":r?void 0:"true",inert:r?void 0:"",children:(0,l.jsxs)(h.E.div,{layout:!0,className:"bg-neutral-800",children:[l.jsx("div",{ref:o,className:"bg-neutral-950 pb-16 pt-14",children:l.jsx(S,{invert:!0,panelId:t,icon:P,toggleRef:a,expanded:r,onToggle:()=>{n(e=>!e),window.setTimeout(()=>i.current?.focus({preventScroll:!0}))}})}),l.jsx(E,{}),l.jsx("div",{className:"relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800",children:l.jsx(x,{children:(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16",children:[(0,l.jsxs)("div",{children:[l.jsx("h2",{className:"font-display text-base font-semibold text-white",children:"Our offices"}),l.jsx(M,{invert:!0,className:"mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"})]}),(0,l.jsxs)("div",{className:"sm:border-l sm:border-transparent sm:pl-16",children:[l.jsx("h2",{className:"font-display text-base font-semibold text-white",children:"Follow us"}),l.jsx(g,{className:"mt-6",invert:!0})]})]})})})]})})]}),l.jsx(h.E.div,{layout:!0,style:{borderTopLeftRadius:40,borderTopRightRadius:40},className:"relative flex flex-auto overflow-hidden bg-white pt-14",children:(0,l.jsxs)(h.E.div,{layout:!0,className:"relative isolate flex w-full flex-col pt-9",children:[l.jsx(k.GridPattern,{className:"absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),l.jsx("main",{className:"w-full flex-auto",children:e}),l.jsx(y,{})]})})]})}function L({children:e}){let t=(0,a.usePathname)(),[r,n]=(0,s.useState)(!1);return l.jsx(R.Provider,{value:{logoHovered:r,setLogoHovered:n},children:l.jsx(I,{children:e},t)})}},35869:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>c});var l=r(25036),s=r(86843);let n=(0,s.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/RootLayout.tsx`),{__esModule:i,$$typeof:a}=n;n.default;let o=(0,s.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/RootLayout.tsx#RootLayout`);r(66092);let c={title:{template:"%s - Studio",default:"Studio - Award winning developer studio based in Denmark"}};function d({children:e}){return l.jsx("html",{lang:"en",className:"h-full bg-neutral-950 text-base antialiased",children:l.jsx("body",{className:"flex min-h-full flex-col",children:l.jsx(o,{children:e})})})}},48206:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var l=r(25036),s=r(40646),n=r.n(s),i=r(16744),a=r(75487);function o(){return l.jsx(i.W,{className:"flex h-full items-center pt-24 sm:pt-32 lg:pt-40",children:(0,l.jsxs)(a.U,{className:"flex max-w-xl flex-col items-center text-center",children:[l.jsx("p",{className:"font-display text-4xl font-semibold text-neutral-950 sm:text-5xl",children:"404"}),l.jsx("h1",{className:"mt-4 font-display text-2xl font-semibold text-neutral-950",children:"Page not found"}),l.jsx("p",{className:"mt-2 text-sm text-neutral-600",children:"Sorry, we couldn’t find the page you’re looking for."}),l.jsx(n(),{href:"/",className:"mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700",children:"Go to the home page"})]})})}},16744:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});var l=r(25036),s=r(70990);function n({as:e,className:t,children:r}){return l.jsx(e??"div",{className:(0,s.Z)("mx-auto max-w-7xl px-6 lg:px-8",t),children:l.jsx("div",{className:"mx-auto max-w-2xl lg:max-w-none",children:r})})}},75487:(e,t,r)=>{"use strict";r.d(t,{U:()=>a,o:()=>o});var l=r(86843);let s=(0,l.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/FadeIn.tsx`),{__esModule:n,$$typeof:i}=s;s.default;let a=(0,l.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/FadeIn.tsx#FadeIn`),o=(0,l.createProxy)(String.raw`/home/sputnik/developergokselglobal.github.io/src/components/FadeIn.tsx#FadeInStagger`)},88028:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var l=r(70337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,l.fillMetadataSegment)("/src/app",e.params,"favicon.ico")+""}]},66092:()=>{}};