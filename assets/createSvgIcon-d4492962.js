import{_ as g}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as $}from"./index-8db94870.js";import{j as y}from"./jsx-runtime-94f6e698.js";import{d as S,b as w,_ as C}from"./useThemeProps-cab738f2.js";import{g as R,a as b,s as j,c as N,b as B}from"./styled-b0d0b538.js";function M(o){return R("MuiSvgIcon",o)}b("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const T=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],U=o=>{const{color:e,fontSize:t,classes:n}=o,i={root:["root",e!=="inherit"&&`color${S(e)}`,`fontSize${S(t)}`]};return B(i,M,n)},A=j("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${S(t.color)}`],e[`fontSize${S(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,n,i,m,a,s,c,v,l,r,d,f,p,u,h,x,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(n=t.create)==null?void 0:n.call(t,"fill",{duration:(i=o.transitions)==null||(m=i.duration)==null?void 0:m.shorter}),fontSize:{inherit:"inherit",small:((a=o.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,20))||"1.25rem",medium:((c=o.typography)==null||(v=c.pxToRem)==null?void 0:v.call(c,24))||"1.5rem",large:((l=o.typography)==null||(r=l.pxToRem)==null?void 0:r.call(l,35))||"2.1875rem"}[e.fontSize],color:(d=(f=(o.vars||o).palette)==null||(p=f[e.color])==null?void 0:p.main)!=null?d:{action:(u=(o.vars||o).palette)==null||(h=u.action)==null?void 0:h.active,disabled:(x=(o.vars||o).palette)==null||(_=x.action)==null?void 0:_.disabled,inherit:void 0}[e.color]}}),I=$.forwardRef(function(e,t){const n=w({props:e,name:"MuiSvgIcon"}),{children:i,className:m,color:a="inherit",component:s="svg",fontSize:c="medium",htmlColor:v,inheritViewBox:l=!1,titleAccess:r,viewBox:d="0 0 24 24"}=n,f=C(n,T),p=g({},n,{color:a,component:s,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:l,viewBox:d}),u={};l||(u.viewBox=d);const h=U(p);return y.jsxs(A,g({as:s,className:N(h.root,m),focusable:"false",color:v,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:t},u,f,{ownerState:p,children:[i,r?y.jsx("title",{children:r}):null]}))});I.muiName="SvgIcon";const z=I;function D(o,e){function t(n,i){return y.jsx(z,g({"data-testid":`${e}Icon`,ref:i},n,{children:o}))}return t.muiName=z.muiName,$.memo($.forwardRef(t))}export{D as c};
//# sourceMappingURL=createSvgIcon-d4492962.js.map
