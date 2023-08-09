import{j as e}from"./jsx-runtime-94f6e698.js";import{d as c}from"./SwapHoriz-ff895ff2.js";import{r as f}from"./index-8db94870.js";import{F as C,I as v,S}from"./Select-c514f98f.js";import{B as o}from"./Box-99d005d7.js";import{B as N}from"./Button-2efb617b.js";import{D as T}from"./Drawer-1bcb9976.js";import{u as U}from"./useTheme-a5a02c1a.js";function m({level1:n,level2:i,formSubmit:_}){const[s,B]=f.useState(!1),[F,w]=f.useState(n.selectedItem==="0"),t=U();function p(l){const d=l.currentTarget,h=d.getAttribute("id")==="level1-select";if(h&&i&&w(d.value==="0"),!i||!h){const y=d.closest("form");y&&_(y)}}const D={display:"none",[t.breakpoints.up("md")]:{display:"flex",justifyContent:"flex-end",".MuiFormControl-root + .MuiFormControl-root":{ml:t.spacing(2)}}},E={[t.breakpoints.up("md")]:{display:"none"},"& .MuiDrawer-paper":{pt:"96px",backgroundColor:"primary.light"}},L={p:t.spacing(4),".MuiFormControl-root + .MuiFormControl-root":{mt:t.spacing(3)}},u={display:"flex",maxWidth:400,mx:"auto",[t.breakpoints.up("md")]:{mx:0,width:250,display:"inline-flex"}},g={color:"primary.main",[t.breakpoints.up("md")]:{color:"white"},"select:disabled":{opacity:.5,WebkitTextFillColor:t.palette.primary.main,[t.breakpoints.up("md")]:{WebkitTextFillColor:"white"}},".MuiNativeSelect-icon":{fill:t.palette.primary.main,[t.breakpoints.up("md")]:{fill:"white"}},"&, &:hover, &.Mui-focused, &.Mui-disabled":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"primary.main",[t.breakpoints.up("md")]:{borderColor:"white"}}},"&.Mui-disabled":{".MuiOutlinedInput-notchedOutline, .MuiNativeSelect-icon":{opacity:.5}}},x={"&, &.Mui-focused, &.Mui-disabled":{color:"primary.main",[t.breakpoints.up("md")]:{color:"white"}},"&.Mui-disabled":{opacity:.5}},b=e.jsxs(e.Fragment,{children:[e.jsxs(C,{size:"small",sx:u,children:[e.jsx(v,{id:"level1-select-label",sx:x,children:n.label}),e.jsxs(S,{labelId:"level1-select-label",id:"level1-select",label:n.label,IconComponent:c,native:!0,name:"level1",sx:g,defaultValue:n.selectedItem,onChange:p,children:[e.jsx("option",{value:"0",children:n.placeholder}),n.items.map(l=>e.jsx("option",{value:l.id,children:l.title},l.id))]})]}),i&&e.jsxs(C,{size:"small",sx:u,disabled:F,children:[e.jsx(v,{id:"level2-select-label",sx:x,children:i.label}),e.jsxs(S,{labelId:"level2-select-label",id:"level2-select",label:i.label,IconComponent:c,native:!0,name:"level2",sx:g,defaultValue:i.selectedItem,onChange:p,children:[e.jsx("option",{value:"0",children:i.placeholder}),i.items.map(l=>e.jsx("option",{value:l.id,children:l.title},l.id))]})]})]});return e.jsxs(o,{children:[e.jsx(N,{sx:{borderRadius:0,height:56,[t.breakpoints.up("sm")]:{height:64},[t.breakpoints.up("md")]:{display:"none"},"&.is-active":{backgroundColor:"primary.light"}},onClick:()=>{B(!s)},className:s?"is-active":void 0,children:e.jsx(c,{sx:{color:s?"primary.main":"white"},fontSize:"large"})}),e.jsx(o,{sx:D,children:b}),e.jsx(T,{open:s,anchor:"top",sx:E,children:e.jsx(o,{sx:L,children:b})})]})}try{context.displayName="context",context.__docgenInfo={description:"",displayName:"context",props:{level1:{defaultValue:null,description:"",name:"level1",required:!0,type:{name:"{ items: { title: string; id: string; }[]; selectedItem: string; label: string; placeholder: string; }"}},level2:{defaultValue:null,description:"",name:"level2",required:!1,type:{name:"{ items: { title: string; id: string; }[]; selectedItem: string; label: string; placeholder: string; }"}},formSubmit:{defaultValue:null,description:"",name:"formSubmit",required:!0,type:{name:"(a: HTMLFormElement) => void"}}}}}catch{}const V={title:"Components/Context",component:m},A=[{title:"California State University",id:"1"}],q=[{title:"Channel Islands",id:"1"},{title:"Chico",id:"2"},{title:"Dominguez Hills",id:"3"},{title:"East Bay",id:"4"},{title:"Fullerton",id:"5"},{title:"Long Beach",id:"6"},{title:"Los Angeles",id:"7"},{title:"Monterey Bay",id:"8"},{title:"Northridge",id:"9"},{title:"Sacramento",id:"10"},{title:"San Bernardino",id:"11"},{title:"San Marcos",id:"12"},{title:"Stanislaus",id:"13"}],H=[{title:"Organization 1",id:"1"},{title:"Organization 2",id:"2"},{title:"Organization 3",id:"3"},{title:"Organization 4",id:"4"},{title:"Organization 5",id:"5"},{title:"Organization 6",id:"6"},{title:"Organization 7",id:"7"}],r={args:{level1:{items:A,label:"University",placeholder:"Select university...",selectedItem:"1"},level2:{items:q,label:"Campus",placeholder:"Select campus...",selectedItem:"10"}},render:n=>e.jsx(o,{sx:{backgroundColor:"primary.main",p:i=>i.spacing(2)},children:e.jsx(m,{...n})})},a={args:{level1:{items:H,label:"Organization",placeholder:"Select organization...",selectedItem:"3"}},render:n=>e.jsx(o,{sx:{backgroundColor:"primary.main",p:i=>i.spacing(2)},children:e.jsx(m,{...n})})};var j,I,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    level1: {
      items: universities,
      label: 'University',
      placeholder: 'Select university...',
      selectedItem: '1'
    },
    level2: {
      items: campuses,
      label: 'Campus',
      placeholder: 'Select campus...',
      selectedItem: '10'
    }
  },
  render: args => <Box sx={{
    backgroundColor: 'primary.main',
    p: theme => theme.spacing(2)
  }}>
      <Context {...args} />
    </Box>
}`,...(k=(I=r.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var z,M,O;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    level1: {
      items: organizations,
      label: 'Organization',
      placeholder: 'Select organization...',
      selectedItem: '3'
    }
  },
  render: args => <Box sx={{
    backgroundColor: 'primary.main',
    p: theme => theme.spacing(2)
  }}>
      <Context {...args} />
    </Box>
}`,...(O=(M=a.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const W=["UniversityAndCampus","Organization"],Z=Object.freeze(Object.defineProperty({__proto__:null,Organization:a,UniversityAndCampus:r,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{m as C,r as U,Z as c};
//# sourceMappingURL=context.stories-97386d86.js.map
