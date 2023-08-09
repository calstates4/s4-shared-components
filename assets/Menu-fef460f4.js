import{_ as b}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{_,b as de}from"./useThemeProps-cab738f2.js";import{r as s}from"./index-8db94870.js";import"./react-is.production.min-a192e302.js";import{g as he,a as me,s as U,c as Q,b as ge,r as xe}from"./styled-b0d0b538.js";import{u as ye}from"./useTheme-a5a02c1a.js";import{j as $}from"./jsx-runtime-94f6e698.js";import{g as be,M as we}from"./Modal-2564dbb1.js";import{P as ve}from"./Paper-d9053942.js";import{T as Me,r as Re,g as ae}from"./utils-eb7299f7.js";import{u as ee}from"./useForkRef-2674f3de.js";import{a as B,o as le,d as Te}from"./ownerWindow-fbe9f185.js";import{L as Ce}from"./List-b5769a16.js";import{a as De}from"./useEventCallback-3abb6c00.js";const Le=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Z(t){return`scale(${t}, ${t**2})`}const Se={entering:{opacity:1,transform:Z(1)},entered:{opacity:1,transform:"none"}},Y=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ee=s.forwardRef(function(e,n){const{addEndListener:P,appear:w=!0,children:d,easing:h,in:u,onEnter:p,onEntered:T,onEntering:F,onExit:z,onExited:j,onExiting:c,style:m,timeout:g="auto",TransitionComponent:C=Me}=e,v=_(e,Le),D=s.useRef(),o=s.useRef(),r=ye(),f=s.useRef(null),y=ee(f,d.ref,n),l=a=>O=>{if(a){const k=f.current;O===void 0?a(k):a(k,O)}},I=l(F),R=l((a,O)=>{Re(a);const{duration:k,delay:H,easing:L}=ae({style:m,timeout:g,easing:h},{mode:"enter"});let i;g==="auto"?(i=r.transitions.getAutoHeightDuration(a.clientHeight),o.current=i):i=k,a.style.transition=[r.transitions.create("opacity",{duration:i,delay:H}),r.transitions.create("transform",{duration:Y?i:i*.666,delay:H,easing:L})].join(","),p&&p(a,O)}),E=l(T),A=l(c),G=l(a=>{const{duration:O,delay:k,easing:H}=ae({style:m,timeout:g,easing:h},{mode:"exit"});let L;g==="auto"?(L=r.transitions.getAutoHeightDuration(a.clientHeight),o.current=L):L=O,a.style.transition=[r.transitions.create("opacity",{duration:L,delay:k}),r.transitions.create("transform",{duration:Y?L:L*.666,delay:Y?k:k||L*.333,easing:H})].join(","),a.style.opacity=0,a.style.transform=Z(.75),z&&z(a)}),X=l(j),V=a=>{g==="auto"&&(D.current=setTimeout(a,o.current||0)),P&&P(f.current,a)};return s.useEffect(()=>()=>{clearTimeout(D.current)},[]),$.jsx(C,b({appear:w,in:u,nodeRef:f,onEnter:R,onEntered:E,onEntering:I,onExit:G,onExited:X,onExiting:A,addEndListener:V,timeout:g==="auto"?null:g},v,{children:(a,O)=>s.cloneElement(d,b({style:b({opacity:0,transform:Z(.75),visibility:a==="exited"&&!u?"hidden":void 0},Se[a],m,d.props.style),ref:y},O))}))});Ee.muiSupportAuto=!0;const Fe=Ee,Ie=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function q(t,e,n){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:n?null:t.firstChild}function ce(t,e,n){return t===e?n?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:n?null:t.lastChild}function Pe(t,e){if(e===void 0)return!0;let n=t.innerText;return n===void 0&&(n=t.textContent),n=n.trim().toLowerCase(),n.length===0?!1:e.repeating?n[0]===e.keys[0]:n.indexOf(e.keys.join(""))===0}function W(t,e,n,P,w,d){let h=!1,u=w(t,e,e?n:!1);for(;u;){if(u===t.firstChild){if(h)return!1;h=!0}const p=P?!1:u.disabled||u.getAttribute("aria-disabled")==="true";if(!u.hasAttribute("tabindex")||!Pe(u,d)||p)u=w(t,u,n);else return u.focus(),!0}return!1}const Oe=s.forwardRef(function(e,n){const{actions:P,autoFocus:w=!1,autoFocusItem:d=!1,children:h,className:u,disabledItemsFocusable:p=!1,disableListWrap:T=!1,onKeyDown:F,variant:z="selectedMenu"}=e,j=_(e,Ie),c=s.useRef(null),m=s.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});De(()=>{w&&c.current.focus()},[w]),s.useImperativeHandle(P,()=>({adjustStyleForScrollbar:(o,r)=>{const f=!c.current.style.width;if(o.clientHeight<c.current.clientHeight&&f){const y=`${be(B(o))}px`;c.current.style[r.direction==="rtl"?"paddingLeft":"paddingRight"]=y,c.current.style.width=`calc(100% + ${y})`}return c.current}}),[]);const g=o=>{const r=c.current,f=o.key,y=B(r).activeElement;if(f==="ArrowDown")o.preventDefault(),W(r,y,T,p,q);else if(f==="ArrowUp")o.preventDefault(),W(r,y,T,p,ce);else if(f==="Home")o.preventDefault(),W(r,null,T,p,q);else if(f==="End")o.preventDefault(),W(r,null,T,p,ce);else if(f.length===1){const l=m.current,I=f.toLowerCase(),R=performance.now();l.keys.length>0&&(R-l.lastTime>500?(l.keys=[],l.repeating=!0,l.previousKeyMatched=!0):l.repeating&&I!==l.keys[0]&&(l.repeating=!1)),l.lastTime=R,l.keys.push(I);const E=y&&!l.repeating&&Pe(y,l);l.previousKeyMatched&&(E||W(r,y,!1,p,q,l))?o.preventDefault():l.previousKeyMatched=!1}F&&F(o)},C=ee(c,n);let v=-1;s.Children.forEach(h,(o,r)=>{s.isValidElement(o)&&(o.props.disabled||(z==="selectedMenu"&&o.props.selected||v===-1)&&(v=r),v===r&&(o.props.disabled||o.props.muiSkipListHighlight||o.type.muiSkipListHighlight)&&(v+=1,v>=h.length&&(v=-1)))});const D=s.Children.map(h,(o,r)=>{if(r===v){const f={};return d&&(f.autoFocus=!0),o.props.tabIndex===void 0&&z==="selectedMenu"&&(f.tabIndex=0),s.cloneElement(o,f)}return o});return $.jsx(Ce,b({role:"menu",ref:C,className:u,onKeyDown:g,tabIndex:w?0:-1},j,{children:D}))}),ke=Oe;function ze(t){return he("MuiPopover",t)}me("MuiPopover",["root","paper"]);const je=["onEntering"],Ae=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function ue(t,e){let n=0;return typeof e=="number"?n=e:e==="center"?n=t.height/2:e==="bottom"&&(n=t.height),n}function fe(t,e){let n=0;return typeof e=="number"?n=e:e==="center"?n=t.width/2:e==="right"&&(n=t.width),n}function pe(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function J(t){return typeof t=="function"?t():t}const He=t=>{const{classes:e}=t;return ge({root:["root"],paper:["paper"]},ze,e)},$e=U(we,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Ke=U(ve,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ne=s.forwardRef(function(e,n){const P=de({props:e,name:"MuiPopover"}),{action:w,anchorEl:d,anchorOrigin:h={vertical:"top",horizontal:"left"},anchorPosition:u,anchorReference:p="anchorEl",children:T,className:F,container:z,elevation:j=8,marginThreshold:c=16,open:m,PaperProps:g={},transformOrigin:C={vertical:"top",horizontal:"left"},TransitionComponent:v=Fe,transitionDuration:D="auto",TransitionProps:{onEntering:o}={}}=P,r=_(P.TransitionProps,je),f=_(P,Ae),y=s.useRef(),l=ee(y,g.ref),I=b({},P,{anchorOrigin:h,anchorReference:p,elevation:j,marginThreshold:c,PaperProps:g,transformOrigin:C,TransitionComponent:v,transitionDuration:D,TransitionProps:r}),R=He(I),E=s.useCallback(()=>{if(p==="anchorPosition")return u;const i=J(d),M=(i&&i.nodeType===1?i:B(y.current).body).getBoundingClientRect();return{top:M.top+ue(M,h.vertical),left:M.left+fe(M,h.horizontal)}},[d,h.horizontal,h.vertical,u,p]),A=s.useCallback(i=>({vertical:ue(i,C.vertical),horizontal:fe(i,C.horizontal)}),[C.horizontal,C.vertical]),G=s.useCallback(i=>{const x={width:i.offsetWidth,height:i.offsetHeight},M=A(x);if(p==="none")return{top:null,left:null,transformOrigin:pe(M)};const te=E();let K=te.top-M.vertical,N=te.left-M.horizontal;const ne=K+x.height,oe=N+x.width,re=le(J(d)),ie=re.innerHeight-c,se=re.innerWidth-c;if(K<c){const S=K-c;K-=S,M.vertical+=S}else if(ne>ie){const S=ne-ie;K-=S,M.vertical+=S}if(N<c){const S=N-c;N-=S,M.horizontal+=S}else if(oe>se){const S=oe-se;N-=S,M.horizontal+=S}return{top:`${Math.round(K)}px`,left:`${Math.round(N)}px`,transformOrigin:pe(M)}},[d,p,E,A,c]),[X,V]=s.useState(m),a=s.useCallback(()=>{const i=y.current;if(!i)return;const x=G(i);x.top!==null&&(i.style.top=x.top),x.left!==null&&(i.style.left=x.left),i.style.transformOrigin=x.transformOrigin,V(!0)},[G]),O=(i,x)=>{o&&o(i,x),a()},k=()=>{V(!1)};s.useEffect(()=>{m&&a()}),s.useImperativeHandle(w,()=>m?{updatePosition:()=>{a()}}:null,[m,a]),s.useEffect(()=>{if(!m)return;const i=Te(()=>{a()}),x=le(d);return x.addEventListener("resize",i),()=>{i.clear(),x.removeEventListener("resize",i)}},[d,m,a]);let H=D;D==="auto"&&!v.muiSupportAuto&&(H=void 0);const L=z||(d?B(J(d)).body:void 0);return $.jsx($e,b({BackdropProps:{invisible:!0},className:Q(R.root,F),container:L,open:m,ref:n,ownerState:I},f,{children:$.jsx(v,b({appear:!0,in:m,onEntering:O,onExited:k,timeout:H},r,{children:$.jsx(Ke,b({elevation:j},g,{ref:l,className:Q(R.paper,g.className)},X?void 0:{style:b({},g.style,{opacity:0})},{ownerState:I,children:T}))}))}))}),_e=Ne;function We(t){return he("MuiMenu",t)}me("MuiMenu",["root","paper","list"]);const Ue=["onEntering"],Ge=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],Ve={vertical:"top",horizontal:"right"},Be={vertical:"top",horizontal:"left"},Xe=t=>{const{classes:e}=t;return ge({root:["root"],paper:["paper"],list:["list"]},We,e)},Ye=U(_e,{shouldForwardProp:t=>xe(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),qe=U(ve,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Je=U(ke,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),Qe=s.forwardRef(function(e,n){const P=de({props:e,name:"MuiMenu"}),{autoFocus:w=!0,children:d,disableAutoFocusItem:h=!1,MenuListProps:u={},onClose:p,open:T,PaperProps:F={},PopoverClasses:z,transitionDuration:j="auto",TransitionProps:{onEntering:c}={},variant:m="selectedMenu"}=P,g=_(P.TransitionProps,Ue),C=_(P,Ge),v=ye(),D=v.direction==="rtl",o=b({},P,{autoFocus:w,disableAutoFocusItem:h,MenuListProps:u,onEntering:c,PaperProps:F,transitionDuration:j,TransitionProps:g,variant:m}),r=Xe(o),f=w&&!h&&T,y=s.useRef(null),l=(E,A)=>{y.current&&y.current.adjustStyleForScrollbar(E,v),c&&c(E,A)},I=E=>{E.key==="Tab"&&(E.preventDefault(),p&&p(E,"tabKeyDown"))};let R=-1;return s.Children.map(d,(E,A)=>{s.isValidElement(E)&&(E.props.disabled||(m==="selectedMenu"&&E.props.selected||R===-1)&&(R=A))}),$.jsx(Ye,b({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:D?"right":"left"},transformOrigin:D?Ve:Be,PaperProps:b({as:qe},F,{classes:b({},F.classes,{root:r.paper})}),className:r.root,open:T,ref:n,transitionDuration:j,TransitionProps:b({onEntering:l},g),ownerState:o},C,{classes:z,children:$.jsx(Je,b({onKeyDown:I,actions:y,autoFocus:w&&(R===-1||h),autoFocusItem:f,variant:m},u,{className:Q(r.list,u.className),children:d}))}))}),dt=Qe;export{dt as M};
//# sourceMappingURL=Menu-fef460f4.js.map