import{j as a}from"./jsx-runtime-94f6e698.js";import{u as I}from"./useTheme-a5a02c1a.js";import{B as T}from"./Box-99d005d7.js";import{T as U}from"./Typography-595f51a8.js";import{d as m,b as z,_ as B}from"./useThemeProps-cab738f2.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as F}from"./index-8db94870.js";import{g as K,a as V,s as y,c as W,b as q}from"./styled-b0d0b538.js";import{k as R,c as N}from"./emotion-react.browser.esm-eec9360d.js";import"./extendSxProp-98dee475.js";import"./_commonjsHelpers-042e6b4d.js";function G(r){return K("MuiCircularProgress",r)}V("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const O=["className","color","disableShrink","size","style","thickness","value","variant"];let d=r=>r,S,P,b,D;const t=44,Z=R(S||(S=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),A=R(P||(P=d`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),H=r=>{const{classes:e,variant:s,color:o,disableShrink:p}=r,u={root:["root",s,`color${m(o)}`],svg:["svg"],circle:["circle",`circle${m(s)}`,p&&"circleDisableShrink"]};return q(u,G,e)},J=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${m(s.color)}`]]}})(({ownerState:r,theme:e})=>i({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&N(b||(b=d`
      animation: ${0} 1.4s linear infinite;
    `),Z)),Q=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),X=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${m(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>i({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&N(D||(D=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),A)),Y=F.forwardRef(function(e,s){const o=z({props:e,name:"MuiCircularProgress"}),{className:p,color:u="primary",disableShrink:w=!1,size:f=40,style:L,thickness:n=3.6,value:g=0,variant:v="indeterminate"}=o,E=B(o,O),c=i({},o,{color:u,disableShrink:w,size:f,thickness:n,value:g,variant:v}),h=H(c),x={},k={},C={};if(v==="determinate"){const _=2*Math.PI*((t-n)/2);x.strokeDasharray=_.toFixed(3),C["aria-valuenow"]=Math.round(g),x.strokeDashoffset=`${((100-g)/100*_).toFixed(3)}px`,k.transform="rotate(-90deg)"}return a.jsx(J,i({className:W(h.root,p),style:i({width:f,height:f},k,L),ownerState:c,ref:s,role:"progressbar"},C,E,{children:a.jsx(Q,{className:h.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:a.jsx(X,{className:h.circle,style:x,ownerState:c,cx:t,cy:t,r:(t-n)/2,fill:"none",strokeWidth:n})})}))}),rr=Y;function er({title:r}){const e=I(),s={display:"flex",flexDirection:"column",alignItems:"center"},o={color:"primary.main",mb:e.spacing(2)};return a.jsxs(T,{sx:s,children:[a.jsx(U,{component:"p",variant:"h3",sx:o,children:r||"Loading..."}),a.jsx(rr,{})]})}try{loader.displayName="loader",loader.__docgenInfo={description:"",displayName:"loader",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const ur={title:"Elements/Loader",component:er},l={args:{title:"Loading..."}};var $,j,M;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Loading...'
  }
}`,...(M=(j=l.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const fr=["Default"];export{l as Default,fr as __namedExportsOrder,ur as default};
//# sourceMappingURL=loader.stories-ef0eaa8d.js.map
