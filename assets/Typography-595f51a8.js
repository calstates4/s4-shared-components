import{d as u,b as T,_ as B}from"./useThemeProps-cab738f2.js";import{_ as s}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as W}from"./index-8db94870.js";import{g as C,a as M,s as R,c as P,b as _}from"./styled-b0d0b538.js";import{j}from"./jsx-runtime-94f6e698.js";import{e as U}from"./extendSxProp-98dee475.js";function N(a){return C("MuiTypography",a)}M("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=a,i={root:["root",o,a.align!=="inherit"&&`align${u(t)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return _(i,N,p)},L=R("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${u(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>s({margin:0},t.variant&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=a=>w[a]||a,A=W.forwardRef(function(t,r){const n=T({props:t,name:"MuiTypography"}),e=z(n.color),o=U(s({},n,{color:e})),{align:p="inherit",className:i,component:h,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:g="body1",variantMapping:m=y}=o,x=B(o,$),c=s({},o,{align:p,color:e,className:i,component:h,gutterBottom:d,noWrap:f,paragraph:l,variant:g,variantMapping:m}),v=h||(l?"p":m[g]||y[g])||"span",b=E(c);return j.jsx(L,s({as:v,ref:r,ownerState:c,className:P(b.root,i)},x))}),F=A;export{F as T};
//# sourceMappingURL=Typography-595f51a8.js.map