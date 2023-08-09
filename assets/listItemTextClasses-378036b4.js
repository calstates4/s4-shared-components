import{b as w,_ as N,j as x}from"./useThemeProps-cab738f2.js";import{_ as o}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as d}from"./index-8db94870.js";import{a as v,g as A,s as G,c as L,b as E}from"./styled-b0d0b538.js";import{a as $}from"./List-b5769a16.js";import{j as l}from"./jsx-runtime-94f6e698.js";import{B as Z}from"./ButtonBase-0aa3f0f9.js";import{a as tt}from"./useEventCallback-3abb6c00.js";import{i as et}from"./isMuiElement-08f54e3c.js";import{u as st}from"./useForkRef-2674f3de.js";import{i as _}from"./isHostComponent-73d6e646.js";function ot(t){return A("MuiListItem",t)}const at=v("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),f=at,nt=v("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),it=nt;function rt(t){return A("MuiListItemSecondaryAction",t)}v("MuiListItemSecondaryAction",["root","disableGutters"]);const ct=["className"],lt=t=>{const{disableGutters:e,classes:s}=t;return E({root:["root",e&&"disableGutters"]},rt,s)},dt=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),D=d.forwardRef(function(e,s){const a=w({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=N(a,ct),p=d.useContext($),u=o({},a,{disableGutters:p.disableGutters}),b=lt(u);return l.jsx(dt,o({className:L(b.root,n),ownerState:u,ref:s},i))});D.muiName="ListItemSecondaryAction";const pt=D,ut=["className"],mt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],ft=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},bt=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:b,hasSecondaryAction:g,selected:S}=t;return E({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",b&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",g&&"secondaryAction",S&&"selected"],container:["container"]},ot,a)},gt=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:ft})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${it.root}`]:{paddingRight:48}},{[`&.${f.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${f.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${f.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${f.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),It=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),vt=d.forwardRef(function(e,s){const a=w({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:b,component:g,components:S={},componentsProps:O={},ContainerComponent:j="li",ContainerProps:{className:z}={},dense:h=!1,disabled:k=!1,disableGutters:P=!1,disablePadding:H=!1,divider:W=!1,focusVisibleClassName:Y,secondaryAction:B,selected:q=!1,slotProps:J={},slots:K={}}=a,Q=N(a.ContainerProps,ut),X=N(a,mt),F=d.useContext($),R=d.useMemo(()=>({dense:h||F.dense||!1,alignItems:n,disableGutters:P}),[n,F.dense,h,P]),M=d.useRef(null);tt(()=>{i&&M.current&&M.current.focus()},[i]);const m=d.Children.toArray(u),T=m.length&&et(m[m.length-1],["ListItemSecondaryAction"]),C=o({},a,{alignItems:n,autoFocus:i,button:p,dense:R.dense,disabled:k,disableGutters:P,disablePadding:H,divider:W,hasSecondaryAction:T,selected:q}),U=bt(C),V=st(M,s),y=K.root||S.Root||gt,I=J.root||O.root||{},r=o({className:L(U.root,I.className,b),disabled:k},X);let c=g||"li";return p&&(r.component=g||"div",r.focusVisibleClassName=L(f.focusVisible,Y),c=Z),T?(c=!r.component&&!g?"div":c,j==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx($.Provider,{value:R,children:l.jsxs(It,o({as:j,className:L(U.container,z),ref:V,ownerState:C},Q,{children:[l.jsx(y,o({},I,!_(y)&&{as:c,ownerState:o({},C,I.ownerState)},r,{children:m})),m.pop()]}))})):l.jsx($.Provider,{value:R,children:l.jsxs(y,o({},I,{as:c,ref:V},!_(y)&&{ownerState:o({},C,I.ownerState)},r,{children:[m,B&&l.jsx(pt,{children:B})]}))})}),jt=vt;function ht(t){return A("MuiListItemIcon",t)}const Ct=v("MuiListItemIcon",["root","alignItemsFlexStart"]),kt=Ct;function Bt(t){return A("MuiListItemText",t)}const yt=v("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Ft=yt;export{jt as L,Ft as a,Bt as b,ht as g,kt as l};
//# sourceMappingURL=listItemTextClasses-378036b4.js.map