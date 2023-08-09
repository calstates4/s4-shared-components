import{_ as q,b as me}from"./useThemeProps-cab738f2.js";import{_ as y}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as i}from"./index-8db94870.js";import{g as he,a as be,b as Ee,s as te,c as ee}from"./styled-b0d0b538.js";import{j as S}from"./jsx-runtime-94f6e698.js";import{u as Pe}from"./useTheme-a5a02c1a.js";import{T as Te,r as Ce,g as se}from"./utils-eb7299f7.js";import{u as G,s as ie}from"./useForkRef-2674f3de.js";import{a as H,o as ne}from"./ownerWindow-fbe9f185.js";import{a as ae,u as le}from"./useEventCallback-3abb6c00.js";import{c as ce}from"./createChainedFunction-0bab83cf.js";import{u as de,r as ue}from"./useSlotProps-e6942d43.js";import{r as Se}from"./index-8ce4a492.js";import{i as Ne}from"./isHostComponent-73d6e646.js";function we(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Me={disableDefaultClasses:!1},Fe=i.createContext(Me);function Ie(e){const{disableDefaultClasses:t}=i.useContext(Fe);return o=>t?"":e(o)}const Ae=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Be(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Oe(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function De(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Oe(e))}function Le(e){const t=[],o=[];return Array.from(e.querySelectorAll(Ae)).forEach((n,a)=>{const r=Be(n);r===-1||!De(n)||(r===0?t.push(n):o.push({documentOrder:a,tabIndex:r,node:n}))}),o.sort((n,a)=>n.tabIndex===a.tabIndex?n.documentOrder-a.documentOrder:n.tabIndex-a.tabIndex).map(n=>n.node).concat(t)}function $e(){return!0}function je(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:a=!1,getTabbable:r=Le,isEnabled:s=$e,open:c}=e,u=i.useRef(!1),E=i.useRef(null),v=i.useRef(null),x=i.useRef(null),h=i.useRef(null),k=i.useRef(!1),f=i.useRef(null),F=G(t.ref,f),R=i.useRef(null);i.useEffect(()=>{!c||!f.current||(k.current=!o)},[o,c]),i.useEffect(()=>{if(!c||!f.current)return;const l=H(f.current);return f.current.contains(l.activeElement)||(f.current.hasAttribute("tabIndex")||f.current.setAttribute("tabIndex","-1"),k.current&&f.current.focus()),()=>{a||(x.current&&x.current.focus&&(u.current=!0,x.current.focus()),x.current=null)}},[c]),i.useEffect(()=>{if(!c||!f.current)return;const l=H(f.current),b=C=>{const{current:I}=f;if(I!==null){if(!l.hasFocus()||n||!s()||u.current){u.current=!1;return}if(!I.contains(l.activeElement)){if(C&&h.current!==C.target||l.activeElement!==h.current)h.current=null;else if(h.current!==null)return;if(!k.current)return;let w=[];if((l.activeElement===E.current||l.activeElement===v.current)&&(w=r(f.current)),w.length>0){var B,D;const L=!!((B=R.current)!=null&&B.shiftKey&&((D=R.current)==null?void 0:D.key)==="Tab"),A=w[0],d=w[w.length-1];typeof A!="string"&&typeof d!="string"&&(L?d.focus():A.focus())}else I.focus()}}},m=C=>{R.current=C,!(n||!s()||C.key!=="Tab")&&l.activeElement===f.current&&C.shiftKey&&(u.current=!0,v.current&&v.current.focus())};l.addEventListener("focusin",b),l.addEventListener("keydown",m,!0);const T=setInterval(()=>{l.activeElement&&l.activeElement.tagName==="BODY"&&b(null)},50);return()=>{clearInterval(T),l.removeEventListener("focusin",b),l.removeEventListener("keydown",m,!0)}},[o,n,a,s,c,r]);const g=l=>{x.current===null&&(x.current=l.relatedTarget),k.current=!0,h.current=l.target;const b=t.props.onFocus;b&&b(l)},N=l=>{x.current===null&&(x.current=l.relatedTarget),k.current=!0};return S.jsxs(i.Fragment,{children:[S.jsx("div",{tabIndex:c?0:-1,onFocus:N,ref:E,"data-testid":"sentinelStart"}),i.cloneElement(t,{ref:F,onFocus:g}),S.jsx("div",{tabIndex:c?0:-1,onFocus:N,ref:v,"data-testid":"sentinelEnd"})]})}function _e(e){return typeof e=="function"?e():e}const He=i.forwardRef(function(t,o){const{children:n,container:a,disablePortal:r=!1}=t,[s,c]=i.useState(null),u=G(i.isValidElement(n)?n.ref:null,o);if(ae(()=>{r||c(_e(a)||document.body)},[a,r]),ae(()=>{if(s&&!r)return ie(o,s),()=>{ie(o,null)}},[o,s,r]),r){if(i.isValidElement(n)){const E={ref:u};return i.cloneElement(n,E)}return S.jsx(i.Fragment,{children:n})}return S.jsx(i.Fragment,{children:s&&Se.createPortal(n,s)})}),Ue=He;function Ke(e){const t=H(e);return t.body===e?ne(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function V(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function fe(e){return parseInt(ne(e).getComputedStyle(e).paddingRight,10)||0}function We(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function pe(e,t,o,n,a){const r=[t,o,...n];[].forEach.call(e.children,s=>{const c=r.indexOf(s)===-1,u=!We(s);c&&u&&V(s,a)})}function Z(e,t){let o=-1;return e.some((n,a)=>t(n)?(o=a,!0):!1),o}function ze(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Ke(n)){const s=we(H(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${fe(n)+s}px`;const c=H(n).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${fe(u)+s}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=H(n).body;else{const s=n.parentElement,c=ne(n);r=(s==null?void 0:s.nodeName)==="HTML"&&c.getComputedStyle(s).overflowY==="scroll"?s:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:s,property:c})=>{r?s.style.setProperty(c,r):s.style.removeProperty(c)})}}function Ve(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Ye{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&V(t.modalRef,!1);const a=Ve(o);pe(o,t.mount,t.modalRef,a,!0);const r=Z(this.containers,s=>s.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:a}),n)}mount(t,o){const n=Z(this.containers,r=>r.modals.indexOf(t)!==-1),a=this.containers[n];a.restore||(a.restore=ze(a,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const a=Z(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[a];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&V(t.modalRef,o),pe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(a,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&V(s.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function qe(e){return he("MuiModal",e)}be("MuiModal",["root","hidden","backdrop"]);const Ge=["children","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],Xe=e=>{const{open:t,exited:o}=e;return Ee({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Ie(qe))};function Je(e){return typeof e=="function"?e():e}function Qe(e){return e?e.props.hasOwnProperty("in"):!1}const Ze=new Ye,et=i.forwardRef(function(t,o){var n,a;const{children:r,closeAfterTransition:s=!1,component:c,container:u,disableAutoFocus:E=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:x=!1,disablePortal:h=!1,disableRestoreFocus:k=!1,disableScrollLock:f=!1,hideBackdrop:F=!1,keepMounted:R=!1,manager:g=Ze,onBackdropClick:N,onClose:l,onKeyDown:b,open:m,onTransitionEnter:T,onTransitionExited:C,slotProps:I={},slots:B={}}=t,D=q(t,Ge),[w,L]=i.useState(!m),A=i.useRef({}),d=i.useRef(null),p=i.useRef(null),M=G(p,o),U=Qe(r),W=(n=t["aria-hidden"])!=null?n:!0,X=()=>H(d.current),$=()=>(A.current.modalRef=p.current,A.current.mountNode=d.current,A.current),z=()=>{g.mount($(),{disableScrollLock:f}),p.current&&(p.current.scrollTop=0)},j=le(()=>{const P=Je(u)||X().body;g.add($(),P),p.current&&z()}),K=i.useCallback(()=>g.isTopModal($()),[g]),J=le(P=>{d.current=P,!(!P||!p.current)&&(m&&K()?z():V(p.current,W))}),O=i.useCallback(()=>{g.remove($(),W)},[g,W]);i.useEffect(()=>()=>{O()},[O]),i.useEffect(()=>{m?j():(!U||!s)&&O()},[m,O,U,s,j]);const _=y({},t,{closeAfterTransition:s,disableAutoFocus:E,disableEnforceFocus:v,disableEscapeKeyDown:x,disablePortal:h,disableRestoreFocus:k,disableScrollLock:f,exited:w,hideBackdrop:F,keepMounted:R}),oe=Xe(_),xe=()=>{L(!1),T&&T()},ge=()=>{L(!0),C&&C(),s&&O()},ye=P=>{P.target===P.currentTarget&&(N&&N(P),l&&l(P,"backdropClick"))},ke=P=>{b&&b(P),!(P.key!=="Escape"||!K())&&(x||(P.stopPropagation(),l&&l(P,"escapeKeyDown")))},Y={};r.props.tabIndex===void 0&&(Y.tabIndex="-1"),U&&(Y.onEnter=ce(xe,r.props.onEnter),Y.onExited=ce(ge,r.props.onExited));const re=(a=c??B.root)!=null?a:"div",ve=de({elementType:re,externalSlotProps:I.root,externalForwardedProps:D,additionalProps:{ref:M,role:"presentation",onKeyDown:ke},className:oe.root,ownerState:_}),Q=B.backdrop,Re=de({elementType:Q,externalSlotProps:I.backdrop,additionalProps:{"aria-hidden":!0,onClick:ye,open:m},className:oe.backdrop,ownerState:_});return!R&&!m&&(!U||w)?null:S.jsx(Ue,{ref:J,container:u,disablePortal:h,children:S.jsxs(re,y({},ve,{children:[!F&&Q?S.jsx(Q,y({},Re)):null,S.jsx(je,{disableEnforceFocus:v,disableAutoFocus:E,disableRestoreFocus:k,isEnabled:K,open:m,children:i.cloneElement(r,Y)})]}))})}),tt=et,nt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ot={entering:{opacity:1},entered:{opacity:1}},rt=i.forwardRef(function(t,o){const n=Pe(),a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:c,easing:u,in:E,onEnter:v,onEntered:x,onEntering:h,onExit:k,onExited:f,onExiting:F,style:R,timeout:g=a,TransitionComponent:N=Te}=t,l=q(t,nt),b=i.useRef(null),m=G(b,c.ref,o),T=d=>p=>{if(d){const M=b.current;p===void 0?d(M):d(M,p)}},C=T(h),I=T((d,p)=>{Ce(d);const M=se({style:R,timeout:g,easing:u},{mode:"enter"});d.style.webkitTransition=n.transitions.create("opacity",M),d.style.transition=n.transitions.create("opacity",M),v&&v(d,p)}),B=T(x),D=T(F),w=T(d=>{const p=se({style:R,timeout:g,easing:u},{mode:"exit"});d.style.webkitTransition=n.transitions.create("opacity",p),d.style.transition=n.transitions.create("opacity",p),k&&k(d)}),L=T(f),A=d=>{r&&r(b.current,d)};return S.jsx(N,y({appear:s,in:E,nodeRef:b,onEnter:I,onEntered:B,onEntering:C,onExit:w,onExited:L,onExiting:D,addEndListener:A,timeout:g},l,{children:(d,p)=>i.cloneElement(c,y({style:y({opacity:0,visibility:d==="exited"&&!E?"hidden":void 0},ot[d],R,c.props.style),ref:m},p))}))}),st=rt;function it(e){return he("MuiBackdrop",e)}be("MuiBackdrop",["root","invisible"]);const at=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],lt=e=>{const{classes:t,invisible:o}=e;return Ee({root:["root",o&&"invisible"]},it,t)},ct=te("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>y({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),dt=i.forwardRef(function(t,o){var n,a,r;const s=me({props:t,name:"MuiBackdrop"}),{children:c,className:u,component:E="div",components:v={},componentsProps:x={},invisible:h=!1,open:k,slotProps:f={},slots:F={},TransitionComponent:R=st,transitionDuration:g}=s,N=q(s,at),l=y({},s,{component:E,invisible:h}),b=lt(l),m=(n=f.root)!=null?n:x.root;return S.jsx(R,y({in:k,timeout:g},N,{children:S.jsx(ct,y({"aria-hidden":!0},m,{as:(a=(r=F.root)!=null?r:v.Root)!=null?a:E,className:ee(b.root,u,m==null?void 0:m.className),ownerState:y({},l,m==null?void 0:m.ownerState),classes:b,ref:o,children:c}))}))}),ut=dt,ft=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],pt=te("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>y({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),mt=te(ut,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ht=i.forwardRef(function(t,o){var n,a,r,s,c,u;const E=me({name:"MuiModal",props:t}),{BackdropComponent:v=mt,BackdropProps:x,classes:h,className:k,closeAfterTransition:f=!1,children:F,container:R,component:g,components:N={},componentsProps:l={},disableAutoFocus:b=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:T=!1,disablePortal:C=!1,disableRestoreFocus:I=!1,disableScrollLock:B=!1,hideBackdrop:D=!1,keepMounted:w=!1,onBackdropClick:L,onClose:A,open:d,slotProps:p,slots:M,theme:U}=E,W=q(E,ft),[X,$]=i.useState(!0),z={container:R,closeAfterTransition:f,disableAutoFocus:b,disableEnforceFocus:m,disableEscapeKeyDown:T,disablePortal:C,disableRestoreFocus:I,disableScrollLock:B,hideBackdrop:D,keepMounted:w,onBackdropClick:L,onClose:A,open:d},j=y({},E,z,{exited:X}),K=(n=(a=M==null?void 0:M.root)!=null?a:N.Root)!=null?n:pt,J=(r=(s=M==null?void 0:M.backdrop)!=null?s:N.Backdrop)!=null?r:v,O=(c=p==null?void 0:p.root)!=null?c:l.root,_=(u=p==null?void 0:p.backdrop)!=null?u:l.backdrop;return S.jsx(tt,y({slots:{root:K,backdrop:J},slotProps:{root:()=>y({},ue(O,j),!Ne(K)&&{as:g,theme:U},{className:ee(k,O==null?void 0:O.className,h==null?void 0:h.root,!j.open&&j.exited&&(h==null?void 0:h.hidden))}),backdrop:()=>y({},x,ue(_,j),{className:ee(_==null?void 0:_.className,h==null?void 0:h.backdrop)})},onTransitionEnter:()=>$(!1),onTransitionExited:()=>$(!0),ref:o},W,z,{children:F}))}),Mt=ht;export{ut as B,st as F,Mt as M,Ue as P,we as g,Ie as u};
//# sourceMappingURL=Modal-2564dbb1.js.map