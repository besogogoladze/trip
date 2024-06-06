"use strict";(self.webpackChunkblog_porto_by_insestos=self.webpackChunkblog_porto_by_insestos||[]).push([[348],{2409:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(5043),o=n(8168),r=n(8587),i=n(8387),s=n(8606),l=n(4535),c=n(2876),d=n(3336),u=n(7056),h=n(2400);function m(e){return(0,h.Ay)("MuiCard",e)}(0,u.A)("MuiCard",["root"]);var v=n(579);const p=["className","raised"],g=(0,l.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),f=a.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCard"}),{className:a,raised:l=!1}=n,d=(0,r.A)(n,p),u=(0,o.A)({},n,{raised:l}),h=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},m,t)})(u);return(0,v.jsx)(g,(0,o.A)({className:(0,i.A)(h.root,a),elevation:l?8:void 0,ref:t,ownerState:u},d))}));function x(e){return(0,h.Ay)("MuiCardContent",e)}(0,u.A)("MuiCardContent",["root"]);const A=["className","component"],y=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),b=a.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCardContent"}),{className:a,component:l="div"}=n,d=(0,r.A)(n,A),u=(0,o.A)({},n,{component:l}),h=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},x,t)})(u);return(0,v.jsx)(y,(0,o.A)({as:l,className:(0,i.A)(h.root,a),ownerState:u,ref:t},d))}));function w(e){return(0,h.Ay)("MuiCardMedia",e)}(0,u.A)("MuiCardMedia",["root","media","img"]);const C=["children","className","component","image","src","style"],k=(0,l.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:a,isImageComponent:o}=n;return[t.root,a&&t.media,o&&t.img]}})((e=>{let{ownerState:t}=e;return(0,o.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),j=["video","audio","picture","iframe","img"],M=["picture","img"],S=a.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCardMedia"}),{children:a,className:l,component:d="div",image:u,src:h,style:m}=n,p=(0,r.A)(n,C),g=-1!==j.indexOf(d),f=!g&&u?(0,o.A)({backgroundImage:'url("'.concat(u,'")')},m):m,x=(0,o.A)({},n,{component:d,isMediaComponent:g,isImageComponent:-1!==M.indexOf(d)}),A=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:a}=e,o={root:["root",n&&"media",a&&"img"]};return(0,s.A)(o,w,t)})(x);return(0,v.jsx)(k,(0,o.A)({className:(0,i.A)(A.root,l),as:d,role:!g&&u?"img":void 0,ref:t,style:f,ownerState:x,src:g?u||h:void 0},p,{children:a}))}));var R=n(5865),N=n(7528),I=n(3290);function T(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function D(e){return parseFloat(e)}var O=n(6632),P=n(7040);function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,P.A)(e,t,n)}function F(e){if(e.type)return e;if("#"===e.charAt(0))return F(function(e){e=e.slice(1);const t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map((e=>e+e))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", "),")"):""}(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error((0,O.A)(9,e));let a,o=e.substring(t+1,e.length-1);if("color"===n){if(o=o.split(" "),a=o.shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a))throw new Error((0,O.A)(10,a))}else o=o.split(",");return o=o.map((e=>parseFloat(e))),{type:n,values:o,colorSpace:a}}function q(e){const{type:t,colorSpace:n}=e;let{values:a}=e;return-1!==t.indexOf("rgb")?a=a.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(a[1]="".concat(a[1],"%"),a[2]="".concat(a[2],"%")),a=-1!==t.indexOf("color")?"".concat(n," ").concat(a.join(" ")):"".concat(a.join(", ")),"".concat(t,"(").concat(a,")")}function B(e,t){return e=F(e),t=_(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]="/".concat(t):e.values[3]=t,q(e)}function X(e){return(0,h.Ay)("MuiSkeleton",e)}(0,u.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var W,E,G,H;const z=["animation","className","component","height","style","variant","width"];let L,Y,J,K;const Q=(0,I.i7)(L||(L=W||(W=(0,N.A)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),U=(0,I.i7)(Y||(Y=E||(E=(0,N.A)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),V=(0,l.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:n}=e;const a=T(t.shape.borderRadius)||"px",r=D(t.shape.borderRadius);return(0,o.A)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:B(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(a,"/").concat(Math.round(r/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,I.AH)(J||(J=G||(G=(0,N.A)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),Q)}),(e=>{let{ownerState:t,theme:n}=e;return"wave"===t.animation&&(0,I.AH)(K||(K=H||(H=(0,N.A)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),U,(n.vars||n).palette.action.hover)})),Z=a.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:l,component:d="span",height:u,style:h,variant:m="text",width:p}=n,g=(0,r.A)(n,z),f=(0,o.A)({},n,{animation:a,component:d,variant:m,hasChildren:Boolean(g.children)}),x=(e=>{const{classes:t,variant:n,animation:a,hasChildren:o,width:r,height:i}=e,l={root:["root",n,a,o&&"withChildren",o&&!r&&"fitContent",o&&!i&&"heightAuto"]};return(0,s.A)(l,X,t)})(f);return(0,v.jsx)(V,(0,o.A)({as:d,ref:t,className:(0,i.A)(x.root,l),ownerState:f},g,{style:(0,o.A)({width:p,height:u},h)}))}));var $=n(1284),ee=n(5922),te=n(5840);const ne=n.p+"static/media/image5.f334d38322981879c801.jpeg";var ae=n(7802),oe=n(6947),re=n(5128),ie=n(7120),se=n(9794),le=n(6707),ce=n(9753),de=n(5475);function ue(e){let{...t}=e;return(0,v.jsx)(de.k2,{className:"tripCards",to:t.linkTo,children:(0,v.jsx)("div",{style:{width:"300px"},children:(0,v.jsx)($.GP,{triggerOnce:!0,children:(0,v.jsxs)(f,{sx:{maxWidth:345,width:"100%"},children:[(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)(Z,{sx:{height:190},animation:"wave",variant:"rectangular"}),children:(0,v.jsx)(S,{component:"img",height:"300",image:t.img,alt:"Error"})}),(0,v.jsx)(b,{children:(0,v.jsx)(a.Suspense,{fallback:(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)(Z,{animation:"wave",height:10,style:{marginBottom:6}}),(0,v.jsx)(Z,{animation:"wave",height:10,width:"80%"})]}),children:(0,v.jsx)(R.A,{variant:"body2",color:"text.secondary",component:"p",children:t.text})})})]})})})})}function he(){return(0,v.jsxs)("div",{id:"flex_container",style:{margin:"50px auto",width:"100%",maxWidth:"1260px",display:"flex",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap",gap:"20px"},children:[(0,v.jsx)(ue,{img:ee,text:"Departure day (Porto)",linkTo:"/departure_day"}),(0,v.jsx)(ue,{img:te,text:"Day 1 (Dom Luis I Bridge)",linkTo:"/day1"}),(0,v.jsx)(ue,{img:ne,text:"Day 2 (Church Saint Ildefonso)",linkTo:"/day2"}),(0,v.jsx)(ue,{img:ae,text:"Day 3 (Panda Gathering Time)",linkTo:"/day3"}),(0,v.jsx)(ue,{img:oe,text:"Day 4 (Panda Plays Football)",linkTo:"/day4"}),(0,v.jsx)(ue,{img:re,text:"Day 5 (What is Metyis)",linkTo:"/day5"}),(0,v.jsx)(ue,{img:ie,text:"Day 7 (Boat tour in Aveiro)",linkTo:"/day7"}),(0,v.jsx)(ue,{img:se,text:"Day 8 (Panda and Dragon)",linkTo:"/day8"}),(0,v.jsx)(ue,{img:le,text:"Day 9 (CISCO/CCNA DAY)",linkTo:"/day9"}),(0,v.jsx)(ue,{img:ce,text:"Arrival Day (Toulouse)",linkTo:"/arrival_day"})]})}},3336:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(8587),o=n(8168),r=n(5043),i=n(8387),s=n(8606),l=n(7266),c=n(4535);const d=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var u=n(2876),h=n(7056),m=n(2400);function v(e){return(0,m.Ay)("MuiPaper",e)}(0,h.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=n(579);const g=["className","component","elevation","square","variant"],f=(0,c.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((e=>{let{theme:t,ownerState:n}=e;var a;return(0,o.A)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat((t.vars||t).palette.divider)},"elevation"===n.variant&&(0,o.A)({boxShadow:(t.vars||t).shadows[n.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,l.X4)("#fff",d(n.elevation)),", ").concat((0,l.X4)("#fff",d(n.elevation)),")")},t.vars&&{backgroundImage:null==(a=t.vars.overlays)?void 0:a[n.elevation]}))})),x=r.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiPaper"}),{className:r,component:l="div",elevation:c=1,square:d=!1,variant:h="elevation"}=n,m=(0,a.A)(n,g),x=(0,o.A)({},n,{component:l,elevation:c,square:d,variant:h}),A=(e=>{const{square:t,elevation:n,variant:a,classes:o}=e,r={root:["root",a,!t&&"rounded","elevation"===a&&"elevation".concat(n)]};return(0,s.A)(r,v,o)})(x);return(0,p.jsx)(f,(0,o.A)({as:l,ownerState:x,className:(0,i.A)(A.root,r),ref:t},m))}))}}]);
//# sourceMappingURL=348.c1693f8c.chunk.js.map