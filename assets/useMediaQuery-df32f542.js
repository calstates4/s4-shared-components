import{r as f,a as p}from"./index-8db94870.js";import{u as h,x as S}from"./useThemeProps-cab738f2.js";import{a as w}from"./useEventCallback-3abb6c00.js";function Q(t,o,e,s,u){const[r,i]=f.useState(()=>u&&e?e(t).matches:s?s(t).matches:o);return w(()=>{let a=!0;if(!e)return;const n=e(t),m=()=>{a&&i(n.matches)};return m(),n.addListener(m),()=>{a=!1,n.removeListener(m)}},[t,e]),r}const d=p["useSyncExternalStore"];function L(t,o,e,s,u){const r=f.useCallback(()=>o,[o]),i=f.useMemo(()=>{if(u&&e)return()=>e(t).matches;if(s!==null){const{matches:c}=s(t);return()=>c}return r},[r,t,s,u,e]),[a,n]=f.useMemo(()=>{if(e===null)return[r,()=>()=>{}];const c=e(t);return[()=>c.matches,l=>(c.addListener(l),()=>{c.removeListener(l)})]},[r,e,t]);return d(n,a,i)}function b(t,o={}){const e=h(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:u=!1,matchMedia:r=s?window.matchMedia:null,ssrMatchMedia:i=null,noSsr:a=!1}=S({name:"MuiUseMediaQuery",props:o,theme:e});let n=typeof t=="function"?t(e):t;return n=n.replace(/^@media( ?)/m,""),(d!==void 0?L:Q)(n,u,r,i,a)}export{b as u};
//# sourceMappingURL=useMediaQuery-df32f542.js.map