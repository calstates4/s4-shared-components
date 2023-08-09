import{j as e}from"./jsx-runtime-94f6e698.js";import{e as te}from"./utils-5e7d37fa.js";import{C as ne}from"./card-experience-hours-001af19f.js";import{T as y}from"./Typography-595f51a8.js";import{P as ae}from"./Paper-d9053942.js";import{B as n}from"./Box-99d005d7.js";import{B as j}from"./Button-2efb617b.js";import{u as oe}from"./useTheme-a5a02c1a.js";function l({heading:a,state:i,description:d,program:p,dateStart:u,dateEnd:m,location:g,cta:x,hours:V,hoursCtaUrl:v,cardCount:t}){const r=oe(),c=t>=2?"column":"row",P=t>=2?r.spacing(4):r.spacing(5),k=t>=2?"flex-start":"center",M=t>=2?r.spacing(2):"0",B=t>=2?"0":r.spacing(2),L=t>=2?"0":r.spacing(5),T=t>=2?r.spacing(3):"0",W=t>=2?"row":"column",w=t>=2?"0":"1 0 75%",N=t>=2?"0":"1 0 25%",O=t>=2?"row":"column",f=te(r),I={p:r.spacing(3),display:"flex",flexDirection:"column",minWidth:"100%",[r.breakpoints.up("sm")]:{minWidth:"450px"},[r.breakpoints.up("md")]:{p:P,flexDirection:O,flex:"1 1 100%"},[r.breakpoints.up("lg")]:{minWidth:"500px"}},U={display:"flex",justifyContent:"space-between",flexDirection:"column",flex:"auto",[r.breakpoints.up("md")]:{flexDirection:c}},H={flex:w},R={display:"flex",alignItems:"flex-start",marginBottom:r.spacing(1),flexDirection:"column",[r.breakpoints.up("md")]:{flexDirection:c,alignItems:k}},z={fontWeight:"700"},A={marginTop:r.spacing(2),backgroundColor:f[i].color,px:r.spacing(1),borderRadius:"4px",[r.breakpoints.up("md")]:{marginLeft:B,my:M}},X={flexBasis:"60%",marginRight:L},Y={flexBasis:"40%"},$={display:"flex",flexDirection:"column"},h={backgroundColor:"white",border:`2px solid ${r.palette.primary.main}`,color:"primary.main",fontWeight:"700","&:focus, &:hover, &:active":{backgroundColor:"primary.dark",color:"white"}},F={display:"flex",flexDirection:"column",marginBottom:r.spacing(4),[r.breakpoints.up("md")]:{flexDirection:c,marginBottom:T}},G={flex:N},J=a&&e.jsx(y,{sx:z,variant:"h2",children:a}),K=i&&e.jsx(y,{sx:A,variant:"body2",children:f[i].label}),Q=d&&e.jsxs(n,{sx:$,children:[e.jsx("strong",{children:"Experience Details:"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:d}})]}),Z=p&&e.jsxs(n,{children:[e.jsx("strong",{children:"Program: "}),p]}),ee=g&&e.jsxs(n,{children:[e.jsx("strong",{children:"Location: "}),g]}),re=u&&m&&e.jsxs(n,{children:[e.jsx("strong",{children:"Date: "}),u," - ",m]});return e.jsxs(ae,{sx:I,component:"article",children:[e.jsxs(n,{sx:U,children:[e.jsxs(n,{sx:H,children:[e.jsxs(n,{sx:R,children:[J,K]}),e.jsxs(n,{sx:F,children:[e.jsx(n,{sx:X,children:Q}),e.jsxs(n,{sx:Y,children:[Z,ee,re]})]})]}),e.jsxs(n,{sx:G,children:[e.jsx(ne,{hours:V,cta:v,position:W}),t>=2&&e.jsx(j,{sx:{...h,width:"100%"},href:x,children:"More Details"})]})]}),t===1&&e.jsx(j,{sx:{...h,alignSelf:"flex-start"},href:x,children:"More Details"})]})}try{cardexperience.displayName="cardexperience",cardexperience.__docgenInfo={description:"",displayName:"cardexperience",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},program:{defaultValue:null,description:"",name:"program",required:!0,type:{name:"string"}},dateStart:{defaultValue:null,description:"",name:"dateStart",required:!0,type:{name:"string"}},dateEnd:{defaultValue:null,description:"",name:"dateEnd",required:!0,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},cta:{defaultValue:null,description:"",name:"cta",required:!0,type:{name:"string"}},hours:{defaultValue:null,description:"",name:"hours",required:!0,type:{name:"number"}},hoursCtaUrl:{defaultValue:null,description:"",name:"hoursCtaUrl",required:!0,type:{name:"string"}},cardCount:{defaultValue:null,description:"",name:"cardCount",required:!0,type:{name:"number"}}}}}catch{}const se={title:"Components/Card Experience",component:l},C=`
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt. 
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`,o={args:{heading:"{Opportunity Name}",state:"approved",description:C,cta:"/opportunities",program:"Program",dateStart:"05/03/2023",dateEnd:"05/03/2023",location:"Location",hours:128,hoursCtaUrl:"/",cardCount:1},render:a=>e.jsx(l,{...a})},s={args:{heading:"{Opportunity Name}",state:"approved",description:C,cta:"/opportunities",program:"Program",dateStart:"05/03/2023",dateEnd:"05/03/2023",location:"Location",hours:128,hoursCtaUrl:"/",cardCount:3},render:a=>e.jsx(l,{...a})};var b,S,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    heading: '{Opportunity Name}',
    state: 'approved',
    description: dummyText,
    cta: '/opportunities',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    cardCount: 1
  },
  render: args => <CardExperience {...args} />
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var _,E,q;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    heading: '{Opportunity Name}',
    state: 'approved',
    description: dummyText,
    cta: '/opportunities',
    program: 'Program',
    dateStart: '05/03/2023',
    dateEnd: '05/03/2023',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    cardCount: 3
  },
  render: args => <CardExperience {...args} />
}`,...(q=(E=s.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const ie=["Default","MoreElements"],fe=Object.freeze(Object.defineProperty({__proto__:null,Default:o,MoreElements:s,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{l as C,o as D,s as M,fe as c};
//# sourceMappingURL=card-experience.stories-2b9d2085.js.map
