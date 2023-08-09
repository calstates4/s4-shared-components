import{j as e}from"./jsx-runtime-94f6e698.js";import{r as ue,i as me}from"./createSvgIcon-884c9325.js";import{d as ve}from"./ErrorOutline-b53cf036.js";import{P as ye}from"./pager-75e55470.js";import{r as u}from"./index-8db94870.js";import{b as Ce,c as De,d as je,T as ne,a as g,e as Te}from"./TableRow-6381f6f1.js";import{P as K}from"./Paper-d9053942.js";import{T as k}from"./Typography-595f51a8.js";import{d as M,b as _,_ as N}from"./useThemeProps-cab738f2.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{a as R,g as H,s as h,c as y,b as B,r as Pe}from"./styled-b0d0b538.js";import{T as Se}from"./TextField-9ffcd892.js";import{B as x}from"./Button-2efb617b.js";import{B as Q}from"./Box-99d005d7.js";import{u as ge}from"./useTheme-a5a02c1a.js";import{B as We,M as ke,F as Me}from"./Modal-2564dbb1.js";import{u as we}from"./useId-42d0e615.js";import"./_commonjsHelpers-042e6b4d.js";import"./createSvgIcon-d4492962.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-2674f3de.js";import"./ownerWindow-fbe9f185.js";import"./isMuiElement-08f54e3c.js";import"./useEventCallback-3abb6c00.js";import"./useControlled-1e5e8cad.js";import"./useIsFocusVisible-bbf13f29.js";import"./ButtonBase-0aa3f0f9.js";import"./emotion-react.browser.esm-eec9360d.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1e5fd21a.js";import"./components-fbca38e7.js";import"./iframe-6026ec75.js";import"../sb-preview/runtime.js";import"./extendSxProp-98dee475.js";import"./Select-c514f98f.js";import"./react-is.production.min-a192e302.js";import"./Menu-fef460f4.js";import"./utils-eb7299f7.js";import"./index-8ce4a492.js";import"./List-b5769a16.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-84a77259.js";import"./useSlotProps-e6942d43.js";function $e(t){return H("MuiDialog",t)}const _e=R("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),Z=_e,Ne=u.createContext({}),xe=Ne,Re=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],He=h(We,{name:"MuiDialog",slot:"Backdrop",overrides:(t,n)=>n.backdrop})({zIndex:-1}),Be=t=>{const{classes:n,scroll:i,maxWidth:a,fullWidth:d,fullScreen:o}=t,s={root:["root"],container:["container",`scroll${M(i)}`],paper:["paper",`paperScroll${M(i)}`,`paperWidth${M(String(a))}`,d&&"paperFullWidth",o&&"paperFullScreen"]};return B(s,$e,n)},Fe=h(ke,{name:"MuiDialog",slot:"Root",overridesResolver:(t,n)=>n.root})({"@media print":{position:"absolute !important"}}),Ie=h("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.container,n[`scroll${M(i.scroll)}`]]}})(({ownerState:t})=>l({height:"100%","@media print":{height:"auto"},outline:0},t.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},t.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),qe=h(K,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.paper,n[`scrollPaper${M(i.scroll)}`],n[`paperWidth${M(String(i.maxWidth))}`],i.fullWidth&&n.paperFullWidth,i.fullScreen&&n.paperFullScreen]}})(({theme:t,ownerState:n})=>l({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},n.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},n.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},n.maxWidth==="xs"&&{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`${t.breakpoints.values.xs}${t.breakpoints.unit}`,[`&.${Z.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.maxWidth&&n.maxWidth!=="xs"&&{maxWidth:`${t.breakpoints.values[n.maxWidth]}${t.breakpoints.unit}`,[`&.${Z.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[n.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Z.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Ae=u.forwardRef(function(n,i){const a=_({props:n,name:"MuiDialog"}),d=ge(),o={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":c,BackdropComponent:m,BackdropProps:p,children:C,className:F,disableEscapeKeyDown:f=!1,fullScreen:b=!1,fullWidth:Y=!1,maxWidth:I="sm",onBackdropClick:q,onClose:D,open:A,PaperComponent:X=K,PaperProps:O={},scroll:U="paper",TransitionComponent:G=Me,transitionDuration:E=o,TransitionProps:J}=a,L=N(a,Re),v=l({},a,{disableEscapeKeyDown:f,fullScreen:b,fullWidth:Y,maxWidth:I,scroll:U}),j=Be(v),T=u.useRef(),r=$=>{T.current=$.target===$.currentTarget},w=$=>{T.current&&(T.current=null,q&&q($),D&&D($,"backdropClick"))},P=we(c),be=u.useMemo(()=>({titleId:P}),[P]);return e.jsx(Fe,l({className:y(j.root,F),closeAfterTransition:!0,components:{Backdrop:He},componentsProps:{backdrop:l({transitionDuration:E,as:m},p)},disableEscapeKeyDown:f,onClose:D,open:A,ref:i,onClick:w,ownerState:v},L,{children:e.jsx(G,l({appear:!0,in:A,timeout:E,role:"presentation"},J,{children:e.jsx(Ie,{className:y(j.container),onMouseDown:r,ownerState:v,children:e.jsx(qe,l({as:X,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":P},O,{className:y(j.paper,O.className),ownerState:v,children:e.jsx(xe.Provider,{value:be,children:C})}))})}))}))}),Oe=Ae;function Ue(t){return H("MuiDialogActions",t)}R("MuiDialogActions",["root","spacing"]);const Ee=["className","disableSpacing"],Le=t=>{const{classes:n,disableSpacing:i}=t;return B({root:["root",!i&&"spacing"]},Ue,n)},ze=h("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.root,!i.disableSpacing&&n.spacing]}})(({ownerState:t})=>l({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),Ve=u.forwardRef(function(n,i){const a=_({props:n,name:"MuiDialogActions"}),{className:d,disableSpacing:o=!1}=a,s=N(a,Ee),c=l({},a,{disableSpacing:o}),m=Le(c);return e.jsx(ze,l({className:y(m.root,d),ownerState:c,ref:i},s))}),ie=Ve;function Ke(t){return H("MuiDialogContent",t)}R("MuiDialogContent",["root","dividers"]);function Ye(t){return H("MuiDialogTitle",t)}const Xe=R("MuiDialogTitle",["root"]),Ge=Xe,Je=["className","dividers"],Qe=t=>{const{classes:n,dividers:i}=t;return B({root:["root",i&&"dividers"]},Ke,n)},Ze=h("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.root,i.dividers&&n.dividers]}})(({theme:t,ownerState:n})=>l({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${Ge.root} + &`]:{paddingTop:0}})),et=u.forwardRef(function(n,i){const a=_({props:n,name:"MuiDialogContent"}),{className:d,dividers:o=!1}=a,s=N(a,Je),c=l({},a,{dividers:o}),m=Qe(c);return e.jsx(Ze,l({className:y(m.root,d),ownerState:c,ref:i},s))}),ae=et;function tt(t){return H("MuiDialogContentText",t)}R("MuiDialogContentText",["root"]);const nt=["children","className"],it=t=>{const{classes:n}=t,a=B({root:["root"]},tt,n);return l({},n,a)},at=h(k,{shouldForwardProp:t=>Pe(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,n)=>n.root})({}),st=u.forwardRef(function(n,i){const a=_({props:n,name:"MuiDialogContentText"}),{className:d}=a,o=N(a,nt),s=it(o);return e.jsx(at,l({component:"p",variant:"body1",color:"text.secondary",ref:i,ownerState:o,className:y(s.root,d)},a,{classes:s}))}),se=st,ot=["className","id"],rt=t=>{const{classes:n}=t;return B({root:["root"]},Ye,n)},lt=h(k,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),dt=u.forwardRef(function(n,i){const a=_({props:n,name:"MuiDialogTitle"}),{className:d,id:o}=a,s=N(a,ot),c=a,m=rt(c),{titleId:p=o}=u.useContext(xe);return e.jsx(lt,l({component:"h2",className:y(m.root,d),ownerState:c,ref:i,variant:"h6",id:o??p},s))}),ct=dt;var ee={},pt=me;Object.defineProperty(ee,"__esModule",{value:!0});var he=ee.default=void 0,ut=pt(ue()),mt=e,gt=(0,ut.default)((0,mt.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");he=ee.default=gt;var te={},xt=me;Object.defineProperty(te,"__esModule",{value:!0});var fe=te.default=void 0,ht=xt(ue()),ft=e,bt=(0,ht.default)((0,ft.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");fe=te.default=bt;function vt({url:t,FormElement:n,totalItems:i,itemsPerPage:a,currentPage:d,items:o}){var L,v,j,T;const s=ge(),[c,m]=u.useState(!1),[p,C]=u.useState({}),F=Math.ceil(i/a);function f(){m(!0)}function b(){m(!1)}function Y({id:r,state:w,revisions:P}){if(w==="submitted")return e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"contained",onClick:()=>{C({dialogType:"form",dialogTitle:"Confirm time entry approval",dialogFormData:{formId:r,formAction:"approve",submitButtonText:"Save and approve"}}),f()},sx:{display:"block",fontWeight:700,mb:s.spacing(1)},children:"Approve"}),e.jsx(x,{variant:"outlined",sx:{display:"block",fontWeight:700},onClick:()=>{C({dialogType:"form",dialogTitle:"Time entry needs to be updated",dialogFormData:{formId:r,formAction:"reject",submitButtonText:"Save and continue"}}),f()},children:"Needs update"})]});if(w==="published")return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{sx:D,children:[e.jsx(he,{sx:{color:"success.dark"}}),e.jsx(k,{sx:{fontWeight:700},children:"Approved"})]}),e.jsx(x,{onClick:()=>{C({dialogType:"list",dialogTitle:"Time entry notes",dialogListData:P}),f()},children:"View note(s)"})]});if(w==="declined")return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{sx:D,children:[e.jsx(ve,{color:"warning"}),e.jsx(k,{sx:{fontWeight:700},children:"Update request sent"})]}),e.jsx(x,{onClick:()=>{C({dialogType:"list",dialogTitle:"Time entry notes",dialogListData:P}),f()},children:"View note(s)"})]})}const I={p:s.spacing(3),mb:s.spacing(3),fontSize:"1rem"},q={minWidth:"56.25rem",th:{fontWeight:700}},D={display:"flex",columnGap:s.spacing(1),mb:s.spacing(1)},A={m:0,mb:s.spacing(.5),dt:{display:"inline",fontWeight:"700"},dd:{display:"inline",ml:0},"> div":{mb:s.spacing(1)}},X=F>1&&e.jsx(ye,{baseUrl:t,count:F,page:d,sx:{display:"flex",justifyContent:"center",pt:s.spacing(3)}}),O=o&&o.length?e.jsxs(Ce,{component:K,sx:I,children:[e.jsx(k,{sx:{mb:s.spacing(2)},component:"h2",variant:"h2",children:"Time log"}),e.jsxs(De,{sx:q,children:[e.jsx(je,{children:e.jsxs(ne,{children:[e.jsx(g,{children:"Date/Time"}),e.jsx(g,{children:"Hours Calculated"}),e.jsx(g,{children:"How have you contributed to the goals/mission of the organization?"}),e.jsx(g,{children:"Learning outcomes"}),e.jsx(g,{sx:{minWidth:"13.75rem"},"aria-label":"actions",children:" "})]})}),e.jsx(Te,{children:o.map(r=>e.jsxs(ne,{children:[e.jsx(g,{children:r.date}),e.jsx(g,{children:r.calculatedHours}),e.jsx(g,{children:r.description&&e.jsx("div",{dangerouslySetInnerHTML:{__html:r.description}})}),e.jsx(g,{children:r.learningOutcomes&&e.jsx("div",{dangerouslySetInnerHTML:{__html:r.learningOutcomes}})}),e.jsx(g,{children:Y(r)})]},r.id))})]}),X]}):e.jsx(K,{sx:I,children:e.jsx(k,{component:"h2",variant:"h2",children:"No time tracked yet"})}),U=e.jsxs(e.Fragment,{children:[e.jsxs(ae,{children:[e.jsx(se,{sx:{mb:s.spacing(1)},children:"Please add notes regarding this time entry"}),e.jsx(Se,{autoFocus:!0,fullWidth:!0,multiline:!0,maxRows:4,id:"time-entry-description",name:"time-entry-description",variant:"outlined"}),e.jsx("input",{type:"hidden",name:"time-entry-id",value:(L=p.dialogFormData)==null?void 0:L.formId}),e.jsx("input",{type:"hidden",name:"time-entry-action",value:(v=p.dialogFormData)==null?void 0:v.formAction})]}),e.jsxs(ie,{children:[e.jsx(x,{sx:{fontWeight:700},onClick:b,children:"Cancel"}),e.jsx(x,{sx:{fontWeight:700},variant:"contained",onClick:b,type:"submit",children:(j=p.dialogFormData)==null?void 0:j.submitButtonText})]})]}),G=n?e.jsx(n,{method:"post",children:U}):e.jsx("form",{children:U}),E=e.jsxs(e.Fragment,{children:[e.jsx(ae,{sx:{maxHeight:"13rem"},children:p.dialogListData?e.jsx(Q,{sx:A,component:"dl",children:(T=p.dialogListData)==null?void 0:T.map(r=>e.jsxs("div",{children:[e.jsx("dt",{children:`${r.date} - ${r.status}: `}),e.jsx("dd",{children:r.message})]}))}):e.jsx(se,{sx:{fontWeight:700},children:"There aren't notes associated with this time entry."})}),e.jsx(ie,{children:e.jsx(x,{variant:"contained",sx:{fontWeight:700},onClick:b,children:"Close"})})]}),J=p.dialogType==="form"?G:E;return e.jsxs(e.Fragment,{children:[O,e.jsxs(Oe,{open:c,onClose:b,maxWidth:"sm",scroll:"paper",fullWidth:!0,children:[e.jsx(ct,{variant:"h3",children:p.dialogTitle}),e.jsx(x,{startIcon:e.jsx(fe,{}),onClick:b,sx:{position:"absolute",right:s.spacing(1),top:s.spacing(1),color:"",textTransform:"capitalize"},children:"Close"}),J]})]})}try{experiencetimeentrytable.displayName="experiencetimeentrytable",experiencetimeentrytable.__docgenInfo={description:"",displayName:"experiencetimeentrytable",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},FormElement:{defaultValue:null,description:"",name:"FormElement",required:!1,type:{name:"ElementType"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"TimeEntryProps[]"}}}}}catch{}const pn={title:"Components/Experiences Time Entry Table",component:vt},S=`<p>
  Researching Walmart’s in the Kern county area will help locate how many stores
  will gift funding for the Ronald McDonald House located in Bakersfield.
</p>`,W=`<p>
  Deserunt mollit incididunt esse reprehenderit tempor deserunt officia culpa
  ipsum id exercitation consequat. Irure pariatur est ea eiusmod duis quis veniam
  deserunt. Nisi commodo laboris anim mollit dolor. Reprehenderit sint nostrud
  enim qui.
</p>`,z={args:{url:"#",totalItems:6,itemsPerPage:4,currentPage:1,items:[{id:"1",state:"submitted",date:"08/30/2022 6:00pm to 8:00pm",calculatedHours:3,description:S,learningOutcomes:W},{id:"2",state:"published",date:"08/30/2022 6:00pm to 8:00pm",calculatedHours:3,description:S,learningOutcomes:W,revisions:[{date:"04/26/2023",message:"Magna pars studiorum, prodita quaerimus. Hi omnes lingua, institutis, legibus inter se differunt.",status:"Needs update"},{date:"04/28/2023",message:"Ut enim ad minim veniam, quis nostrud exercitation.",status:"Submitted"},{date:"05/02/2023",message:"Plura mihi bona sunt, inclinet, amari petere vellent.",status:"Approved"}]},{id:"3",state:"declined",date:"08/30/2022 6:00pm to 8:00pm",calculatedHours:3,description:S,learningOutcomes:W,revisions:[{date:"04/26/2023",message:"Magna pars studiorum, prodita quaerimus. Hi omnes lingua, institutis, legibus inter se differunt.",status:"Needs update"},{date:"04/28/2023",message:"Ut enim ad minim veniam, quis nostrud exercitation.",status:"Submitted"},{date:"05/02/2023",message:"Plura mihi bona sunt, inclinet, amari petere vellent.",status:"Needs update"},{date:"05/03/2023",message:"Plura mihi bona sunt, inclinet, amari petere vellent.",status:"Submitted"},{date:"05/10/2023",message:"Plura mihi bona sunt, inclinet, amari petere vellent.",status:"Needs update"},{date:"05/20/2023",message:"Plura mihi bona sunt, inclinet, amari petere vellent.",status:"Submitted"},{date:"05/26/2023",message:"Plura mihi bona sunt, inclinet, amari petere vellent.",status:"Needs update"}]},{id:"4",state:"submitted",date:"08/30/2022 6:00pm to 8:00pm",calculatedHours:3,description:S,learningOutcomes:W},{id:"5",state:"declined",date:"08/30/2022 6:00pm to 8:00pm",calculatedHours:3,description:S,learningOutcomes:W},{id:"6",state:"submitted",date:"08/30/2022 6:00pm to 8:00pm",calculatedHours:3,description:S,learningOutcomes:W}]}},V={args:{url:"#",totalItems:6,itemsPerPage:4,currentPage:1}};var oe,re,le;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    url: '#',
    totalItems: 6,
    itemsPerPage: 4,
    currentPage: 1,
    items: [{
      id: '1',
      state: 'submitted',
      date: '08/30/2022 6:00pm to 8:00pm',
      calculatedHours: 3,
      description,
      learningOutcomes
    }, {
      id: '2',
      state: 'published',
      date: '08/30/2022 6:00pm to 8:00pm',
      calculatedHours: 3,
      description,
      learningOutcomes,
      revisions: [{
        date: '04/26/2023',
        message: 'Magna pars studiorum, prodita quaerimus. Hi omnes lingua, institutis, legibus inter se differunt.',
        status: 'Needs update'
      }, {
        date: '04/28/2023',
        message: 'Ut enim ad minim veniam, quis nostrud exercitation.',
        status: 'Submitted'
      }, {
        date: '05/02/2023',
        message: 'Plura mihi bona sunt, inclinet, amari petere vellent.',
        status: 'Approved'
      }]
    }, {
      id: '3',
      state: 'declined',
      date: '08/30/2022 6:00pm to 8:00pm',
      calculatedHours: 3,
      description,
      learningOutcomes,
      revisions: [{
        date: '04/26/2023',
        message: 'Magna pars studiorum, prodita quaerimus. Hi omnes lingua, institutis, legibus inter se differunt.',
        status: 'Needs update'
      }, {
        date: '04/28/2023',
        message: 'Ut enim ad minim veniam, quis nostrud exercitation.',
        status: 'Submitted'
      }, {
        date: '05/02/2023',
        message: 'Plura mihi bona sunt, inclinet, amari petere vellent.',
        status: 'Needs update'
      }, {
        date: '05/03/2023',
        message: 'Plura mihi bona sunt, inclinet, amari petere vellent.',
        status: 'Submitted'
      }, {
        date: '05/10/2023',
        message: 'Plura mihi bona sunt, inclinet, amari petere vellent.',
        status: 'Needs update'
      }, {
        date: '05/20/2023',
        message: 'Plura mihi bona sunt, inclinet, amari petere vellent.',
        status: 'Submitted'
      }, {
        date: '05/26/2023',
        message: 'Plura mihi bona sunt, inclinet, amari petere vellent.',
        status: 'Needs update'
      }]
    }, {
      id: '4',
      state: 'submitted',
      date: '08/30/2022 6:00pm to 8:00pm',
      calculatedHours: 3,
      description,
      learningOutcomes
    }, {
      id: '5',
      state: 'declined',
      date: '08/30/2022 6:00pm to 8:00pm',
      calculatedHours: 3,
      description,
      learningOutcomes
    }, {
      id: '6',
      state: 'submitted',
      date: '08/30/2022 6:00pm to 8:00pm',
      calculatedHours: 3,
      description,
      learningOutcomes
    }]
  }
}`,...(le=(re=z.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var de,ce,pe;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    url: '#',
    totalItems: 6,
    itemsPerPage: 4,
    currentPage: 1
  }
}`,...(pe=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const un=["Default","NoContent"];export{z as Default,V as NoContent,un as __namedExportsOrder,pn as default};
//# sourceMappingURL=experience-time-entry-table.stories-0d223d05.js.map
