import{j as e}from"./jsx-runtime-94f6e698.js";import{r as o,i}from"./createSvgIcon-884c9325.js";import{T as m,a as t,b as I,c as M,d as $,e as q}from"./TableRow-6381f6f1.js";import{B as p}from"./Box-99d005d7.js";import{P as z}from"./Paper-d9053942.js";import{T as C}from"./Typography-595f51a8.js";import{B as H}from"./Button-2efb617b.js";import{u as V}from"./useTheme-a5a02c1a.js";var l={},B=i;Object.defineProperty(l,"__esModule",{value:!0});var v=l.default=void 0,P=B(o()),E=e,W=(0,P.default)((0,E.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");v=l.default=W;var c={},k=i;Object.defineProperty(c,"__esModule",{value:!0});var _=c.default=void 0,w=k(o()),F=e,N=(0,w.default)((0,F.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");_=c.default=N;var u={},K=i;Object.defineProperty(u,"__esModule",{value:!0});var T=u.default=void 0,A=K(o()),G=e,J=(0,A.default)((0,G.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");T=u.default=J;function Q({timeLogInfo:d,cta:b}){const a=V(),y={p:a.spacing(5)},S={display:"flex",flexDirection:"column",alignItems:"flex-start",gap:a.spacing(2),[a.breakpoints.up("sm")]:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},L={display:"flex",gap:a.spacing(2)},n={color:a.palette.secondary.dark},D={td:{p:a.spacing(3),"&:first-child":{pl:0}},th:{p:a.spacing(3),fontWeight:700,"&:first-child":{pl:0}}},R=d.map(r=>e.jsxs(m,{children:[e.jsx(t,{children:r.dateTime}),e.jsx(t,{children:r.hour}),e.jsx(t,{children:r.goals}),e.jsx(t,{children:r.learningOutcomes}),e.jsx(t,{children:r.status}),e.jsx(t,{children:e.jsxs(p,{sx:L,children:[e.jsx(T,{sx:n}),e.jsx(v,{sx:n}),e.jsx(_,{sx:n})]})})]})),O=e.jsx(I,{children:e.jsxs(M,{sx:D,children:[e.jsx($,{children:e.jsxs(m,{children:[e.jsx(t,{children:"Date/Time"}),e.jsx(t,{children:"Hours Calculated"}),e.jsx(t,{children:"How have you contributed to the goals/mission of the organization?"}),e.jsx(t,{children:"Learning outcomes"}),e.jsx(t,{children:"Status"}),e.jsx(t,{})]})}),e.jsx(q,{children:R})]})});return e.jsxs(z,{sx:y,children:[e.jsxs(p,{sx:S,children:[e.jsx(C,{variant:"h2",children:"Time log"}),e.jsx(H,{variant:"outlined",href:b,children:"Request approval of hours"})]}),O]})}try{timelogtable.displayName="timelogtable",timelogtable.__docgenInfo={description:"",displayName:"timelogtable",props:{timeLogInfo:{defaultValue:null,description:"",name:"timeLogInfo",required:!0,type:{name:"{ dateTime: string; hour: number; goals: string; learningOutcomes: string; status: string; }[]"}},cta:{defaultValue:null,description:"",name:"cta",required:!0,type:{name:"string"}}}}}catch{}const U={title:"Components/Time Log Table",component:Q},g=`
Researching Walmart’s in the Kern county area will help locate how many stores will gift funding for the Ronald McDonald House located in Bakersfield.
`,h=`
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt. 
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`,s={args:{timeLogInfo:[{dateTime:"08/31/2022 6:00pm to 8:00pm",hour:2,goals:g,learningOutcomes:h,status:"Submitted"},{dateTime:"08/31/2022 6:00pm to 8:00pm",hour:2,goals:g,learningOutcomes:h,status:"Submitted"}],cta:"/logtime"}};var f,x,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    timeLogInfo: [{
      dateTime: '08/31/2022 6:00pm to 8:00pm',
      hour: 2,
      goals: goalsText,
      learningOutcomes: LearningText,
      status: 'Submitted'
    }, {
      dateTime: '08/31/2022 6:00pm to 8:00pm',
      hour: 2,
      goals: goalsText,
      learningOutcomes: LearningText,
      status: 'Submitted'
    }],
    cta: '/logtime'
  }
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const X=["Default"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:X,default:U},Symbol.toStringTag,{value:"Module"}));export{s as D,Q as T,oe as t};
//# sourceMappingURL=time-log-table.stories-a1e54035.js.map
