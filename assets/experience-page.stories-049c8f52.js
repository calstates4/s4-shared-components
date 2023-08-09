import{j as e}from"./jsx-runtime-94f6e698.js";import{T as ce,D as de}from"./time-log-table.stories-a1e54035.js";import{C as ue}from"./card-experience-hours-001af19f.js";import{B as xe}from"./breadcrumbs-81bf643b.js";import{L as C}from"./link-bceeb1d9.js";import{d}from"./ErrorOutline-b53cf036.js";import{r as ge,i as fe}from"./createSvgIcon-884c9325.js";import{e as he}from"./utils-5e7d37fa.js";import{T as n}from"./Typography-595f51a8.js";import{B as t}from"./Box-99d005d7.js";import{P as F}from"./Paper-d9053942.js";import{D as ye}from"./Divider-2ce7fb2b.js";import{B as D}from"./Button-2efb617b.js";import{u as je}from"./useTheme-a5a02c1a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./TableRow-6381f6f1.js";import"./useThemeProps-cab738f2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-b0d0b538.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-d4492962.js";import"./ButtonBase-0aa3f0f9.js";import"./emotion-react.browser.esm-eec9360d.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1e5fd21a.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./useEventCallback-3abb6c00.js";import"./useSlotProps-e6942d43.js";import"./isHostComponent-73d6e646.js";import"./components-fbca38e7.js";import"./iframe-6026ec75.js";import"../sb-preview/runtime.js";import"./createChainedFunction-0bab83cf.js";import"./useId-42d0e615.js";import"./ownerWindow-fbe9f185.js";import"./isMuiElement-08f54e3c.js";import"./useControlled-1e5e8cad.js";import"./extendSxProp-98dee475.js";import"./dividerClasses-26937b2b.js";var x={},Se=fe;Object.defineProperty(x,"__esModule",{value:!0});var u=x.default=void 0,be=Se(ge()),Ne=e,ve=(0,be.default)((0,Ne.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}),"CheckCircleOutlineOutlined");u=x.default=ve;function I({children:s,experienceName:g,url:P,opportunityName:B,state:o,experienceDetails:f,programName:_,organizationName:O,courseName:R,dates:k,timeCommitment:E,location:h,hours:$,hoursCtaUrl:H,formsBegining:m,formsDuring:l,primaryContact:w,formSigner:z,timeApprover:W,obverser:A,hasPendingForm:U}){const r=je(),y=he(r),M={mb:r.spacing(3)},p={fontWeight:"700"},j={fontWeight:"700",marginTop:r.spacing(3)},G={mb:r.spacing(3)},J={p:`${r.spacing(2)} ${r.spacing(4)} `,mb:r.spacing(5)},S={m:`${r.spacing(3)} 0 0`,p:0,listStyleType:"none"},b={display:"flex",py:r.spacing(2),alignItems:"center",flexDirection:"column",borderTop:`1px solid ${r.palette.secondary.light}`,borderBottom:`1px solid ${r.palette.secondary.light}`,[r.breakpoints.up("md")]:{alignItems:"flex-start",flexDirection:"row"}},N={flexBasis:"30%"},v={display:"flex",flexBasis:"20%"},K={display:"flex",flexDirection:"column"},Q={marginTop:r.spacing(2),backgroundColor:y[o].color,px:r.spacing(1),borderRadius:"4px",[r.breakpoints.up("md")]:{marginLeft:r.spacing(2),my:"0"}},X={display:"flex",p:r.spacing(3),mb:r.spacing(5),flexDirection:"column",[r.breakpoints.up("md")]:{p:r.spacing(5),minWidth:"600px",flexDirection:"column",alignItems:"flex-start"}},Y={display:"flex",justifyContent:"space-between",flexDirection:"column",flex:"auto",[r.breakpoints.up("md")]:{flexDirection:"row"}},Z={flex:"1 0 70%"},ee={display:"flex",flexDirection:"column",marginBottom:r.spacing(4),[r.breakpoints.up("md")]:{flexDirection:"row",marginBottom:0}},re={display:"flex",alignItems:"flex-start",marginBottom:r.spacing(1),flexDirection:"column",[r.breakpoints.up("md")]:{flexDirection:"row",alignItems:"center"}},te={flexBasis:"60%",marginRight:r.spacing(5)},ne={flexBasis:"40%"},ie={flex:"1 0 25%"},L={color:r.palette.success.main,marginRight:r.spacing(1)},c={color:r.palette.warning.main,marginRight:r.spacing(1)},se={width:"100%"},ae={marginTop:r.spacing(3)},oe={display:"grid",gridTemplateColumns:"repeat(1, 1fr)",[r.breakpoints.up("md")]:{gridTemplateColumns:"repeat(2, 1fr)",gap:`${r.spacing(2)} ${r.spacing(5)} `}},me={display:"flex",marginBottom:r.spacing(3),border:`1px solid ${r.palette.warning.main}`,padding:r.spacing(1),borderRadius:r.spacing(1)},le=f&&e.jsxs(t,{sx:K,children:[e.jsx("strong",{children:"Experience Details:"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:f}})]}),pe=o&&e.jsx(n,{sx:Q,variant:"body2",children:y[o].label});return e.jsxs("article",{children:[e.jsx(xe,{items:[{title:"Experiences",url:"/experiences"},{title:g,url:P}]}),e.jsxs(t,{children:[e.jsx(n,{variant:"h1",color:"primary.main",sx:M,children:g}),e.jsxs(F,{sx:X,children:[e.jsxs(t,{sx:Y,children:[e.jsxs(t,{sx:Z,children:[e.jsxs(t,{sx:re,children:[e.jsx(n,{sx:p,variant:"h2",children:B}),pe]}),e.jsxs(t,{sx:ee,children:[e.jsx(t,{sx:te,children:le}),e.jsxs(t,{sx:ne,children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Program: "}),_]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Course: "}),R]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Organization: "}),O]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Date: "}),k]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Time Commitment: "}),E]}),h&&e.jsxs(t,{children:[e.jsx("strong",{children:"Location: "}),h]})]})]})]}),e.jsx(t,{sx:ie,children:e.jsx(ue,{hours:$,cta:H,position:"column"})})]}),U&&e.jsxs(t,{sx:me,children:[e.jsx(d,{sx:c}),e.jsxs(t,{children:[e.jsx(n,{sx:p,variant:"h4",children:"Pending forms"}),e.jsx(n,{variant:"body2",children:"There are pending forms for this experience, please fill all the forms."})]})]}),e.jsx(ye,{sx:se}),e.jsxs(t,{sx:ae,children:[e.jsx(n,{sx:p,variant:"h3",children:"Site Staff"}),e.jsxs(t,{sx:oe,children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Primary contact(s): "}),w]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Form signer(s): "}),z]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Time approver(s): "}),W]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Observer(s): "}),A]})]})]})]}),m||l?e.jsxs(F,{sx:J,children:[e.jsx(n,{sx:G,variant:"h2",children:"Forms"}),m&&e.jsxs(t,{children:[e.jsx(n,{sx:j,variant:"h4",children:"Beginning of Term"}),e.jsx(t,{component:"ul",sx:S,children:m.items.map(i=>e.jsxs(t,{component:"li",sx:b,children:[e.jsx(n,{sx:N,children:i.formName}),e.jsxs(n,{variant:"body2",sx:v,children:[i.statusFoms==="Submitted"?e.jsx(u,{sx:L}):e.jsx(d,{sx:c}),i.statusFoms]}),e.jsx(D,{variant:"outlined",component:C,href:i.urlForm,sx:{flexShrink:0},children:"Complete form"})]},i.id))})]}),l&&e.jsxs(t,{children:[e.jsx(n,{sx:j,variant:"h4",children:"During Term"}),e.jsx(t,{component:"ul",sx:S,children:l.items.map(i=>e.jsxs(t,{component:"li",sx:b,children:[e.jsx(n,{sx:N,children:i.formName}),e.jsxs(n,{variant:"body2",sx:v,children:[i.statusFoms==="Submitted"?e.jsx(u,{sx:L}):e.jsx(d,{sx:c}),i.statusFoms]}),e.jsx(D,{variant:"outlined",component:C,href:i.urlForm,sx:{flexShrink:0},children:"Complete form"})]},i.id))})]})]}):null,s]})]})}try{experiencepage.displayName="experiencepage",experiencepage.__docgenInfo={description:"",displayName:"experiencepage",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},experienceName:{defaultValue:null,description:"",name:"experienceName",required:!0,type:{name:"string"}},opportunityName:{defaultValue:null,description:"",name:"opportunityName",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"string"}},experienceDetails:{defaultValue:null,description:"",name:"experienceDetails",required:!0,type:{name:"string"}},programName:{defaultValue:null,description:"",name:"programName",required:!0,type:{name:"string"}},courseName:{defaultValue:null,description:"",name:"courseName",required:!0,type:{name:"string"}},organizationName:{defaultValue:null,description:"",name:"organizationName",required:!0,type:{name:"string"}},dates:{defaultValue:null,description:"",name:"dates",required:!0,type:{name:"string"}},timeCommitment:{defaultValue:null,description:"",name:"timeCommitment",required:!0,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},hoursCtaUrl:{defaultValue:null,description:"",name:"hoursCtaUrl",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},primaryContact:{defaultValue:null,description:"",name:"primaryContact",required:!0,type:{name:"string"}},formSigner:{defaultValue:null,description:"",name:"formSigner",required:!0,type:{name:"string"}},timeApprover:{defaultValue:null,description:"",name:"timeApprover",required:!0,type:{name:"string"}},obverser:{defaultValue:null,description:"",name:"obverser",required:!0,type:{name:"string"}},hasPendingForm:{defaultValue:null,description:"",name:"hasPendingForm",required:!0,type:{name:"boolean"}},formsBegining:{defaultValue:null,description:"",name:"formsBegining",required:!1,type:{name:"{ items: { id: string; formName: string; statusFoms: string; urlForm: string; }[]; }"}},formsDuring:{defaultValue:null,description:"",name:"formsDuring",required:!1,type:{name:"{ items: { id: string; formName: string; statusFoms: string; urlForm: string; }[]; }"}}}}}catch{}const ur={title:"Components/Experience Page",component:I},Le=`
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt. 
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`,a={args:{id:"123",experienceName:"Experience Name",url:"#",opportunityName:"Opportunity Name",state:"approved",courseName:"HLTH 492 (01): Service Learning In Health Sci",experienceDetails:Le,organizationName:"Buen Vecino",programName:"Program",location:"Location",hours:128,hoursCtaUrl:"/",dates:"Fall 2022",timeCommitment:"200 hours",primaryContact:"Name Lastname",formSigner:"Name Lastname, Name Lastname,",timeApprover:"Name Lastname, Name Lastname",obverser:"Name Lastname",hasPendingForm:!0,formsBegining:{items:[{id:"1",formName:"Release of Liability - COVID 19",statusFoms:"Submitted",urlForm:"/opportunities"},{id:"2",formName:"Release of Liability - COVID 19",statusFoms:"Pending",urlForm:"/opportunities"}]},formsDuring:{items:[{id:"1",formName:"Release of Liability - COVID 19",statusFoms:"Submitted",urlForm:"/opportunities"},{id:"2",formName:"Release of Liability - COVID 19",statusFoms:"Pending",urlForm:"/opportunities"}]}},render:s=>e.jsx(I,{...s,children:e.jsx(ce,{...de.args})})};var V,T,q;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: '123',
    experienceName: 'Experience Name',
    url: '#',
    opportunityName: 'Opportunity Name',
    state: 'approved',
    courseName: 'HLTH 492 (01): Service Learning In Health Sci',
    experienceDetails,
    organizationName: 'Buen Vecino',
    programName: 'Program',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    dates: 'Fall 2022',
    timeCommitment: '200 hours',
    primaryContact: 'Name Lastname',
    formSigner: 'Name Lastname, Name Lastname,',
    timeApprover: 'Name Lastname, Name Lastname',
    obverser: 'Name Lastname',
    hasPendingForm: true,
    formsBegining: {
      items: [{
        id: '1',
        formName: 'Release of Liability - COVID 19',
        statusFoms: 'Submitted',
        urlForm: '/opportunities'
      }, {
        id: '2',
        formName: 'Release of Liability - COVID 19',
        statusFoms: 'Pending',
        urlForm: '/opportunities'
      }]
    },
    formsDuring: {
      items: [{
        id: '1',
        formName: 'Release of Liability - COVID 19',
        statusFoms: 'Submitted',
        urlForm: '/opportunities'
      }, {
        id: '2',
        formName: 'Release of Liability - COVID 19',
        statusFoms: 'Pending',
        urlForm: '/opportunities'
      }]
    }
  },
  render: args => <ExperiencePage {...args}>
      <TimeLogTable {...(TimeLogTableStory.args as TimeLogTableProps)} />
    </ExperiencePage>
}`,...(q=(T=a.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const xr=["Default"];export{a as Default,xr as __namedExportsOrder,ur as default};
//# sourceMappingURL=experience-page.stories-049c8f52.js.map
