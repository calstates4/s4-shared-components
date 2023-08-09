import{j as e}from"./jsx-runtime-94f6e698.js";import{C as F,D as _}from"./card-experience.stories-2b9d2085.js";import{P as q}from"./pager-75e55470.js";import{F as c,I as g,S as b}from"./Select-c514f98f.js";import{B as I}from"./Button-2efb617b.js";import{B as n}from"./Box-99d005d7.js";import{T as E}from"./Typography-595f51a8.js";import{u as v}from"./useTheme-a5a02c1a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-5e7d37fa.js";import"./card-experience-hours-001af19f.js";import"./Paper-d9053942.js";import"./useThemeProps-cab738f2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-b0d0b538.js";import"./useControlled-1e5e8cad.js";import"./createSvgIcon-d4492962.js";import"./ButtonBase-0aa3f0f9.js";import"./emotion-react.browser.esm-eec9360d.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1e5fd21a.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./useEventCallback-3abb6c00.js";import"./components-fbca38e7.js";import"./iframe-6026ec75.js";import"../sb-preview/runtime.js";import"./isMuiElement-08f54e3c.js";import"./react-is.production.min-a192e302.js";import"./Menu-fef460f4.js";import"./Modal-2564dbb1.js";import"./utils-eb7299f7.js";import"./index-8ce4a492.js";import"./ownerWindow-fbe9f185.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-e6942d43.js";import"./isHostComponent-73d6e646.js";import"./List-b5769a16.js";import"./GlobalStyles-84a77259.js";import"./extendSxProp-98dee475.js";function A({children:t,url:i,FormElement:m,totalItems:s,itemsPerPage:o,currentPage:P,programFilterValues:y,termFilterValues:j,currentFilters:p}){const r=v(),T={"& article + article":{mt:r.spacing(3)}},d={mb:r.spacing(2),display:"flex",[r.breakpoints.up("sm")]:{display:"inline-flex",mb:0,mr:r.spacing(2)}},u=e.jsxs(e.Fragment,{children:[e.jsxs(c,{size:"small",sx:d,children:[e.jsx(g,{id:"program-select-label",children:"Program"}),e.jsx(b,{id:"program-select",label:"Program",native:!0,name:"program",defaultValue:p.program,children:y.map(l=>e.jsx("option",{value:l.id,children:l.label},l.id))})]}),e.jsxs(c,{size:"small",sx:d,children:[e.jsx(g,{id:"term-select-label",children:"Term"}),e.jsx(b,{id:"term-select",label:"Term",native:!0,name:"term",defaultValue:p.term,children:j.map(l=>e.jsx("option",{value:l.id,children:l.label},l.id))})]}),e.jsx(I,{variant:"contained",type:"submit",children:"Apply Filters"})]}),V=m?e.jsx(m,{children:u}):e.jsx("form",{children:u});return e.jsxs(n,{children:[e.jsx(E,{variant:"h1",mb:2,children:"Experiences"}),e.jsx(n,{sx:{pt:r.spacing(2),pb:r.spacing(6)},children:V}),e.jsx(n,{sx:T,children:t}),s>o&&e.jsx(q,{baseUrl:i,count:Math.ceil(s/o),page:P,sx:{display:"flex",justifyContent:"center",pt:r.spacing(3)}})]})}try{experienceslist.displayName="experienceslist",experienceslist.__docgenInfo={description:"",displayName:"experienceslist",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},FormElement:{defaultValue:null,description:"",name:"FormElement",required:!1,type:{name:"ElementType"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},programFilterValues:{defaultValue:null,description:"",name:"programFilterValues",required:!0,type:{name:"{ id: string; label: string; }[]"}},termFilterValues:{defaultValue:null,description:"",name:"termFilterValues",required:!0,type:{name:"{ id: string; label: string; }[]"}},currentFilters:{defaultValue:null,description:"",name:"currentFilters",required:!0,type:{name:"{ program: string | null; term: string | null; }"}}}}}catch{}const ye={title:"Components/Experiences List",component:A},C=Array.from({length:5},(t,i)=>i).map(()=>e.jsx(F,{..._.args})),a={args:{children:C,url:"http://localhost:6006/",totalItems:38,itemsPerPage:5,currentPage:3,programFilterValues:[{id:"all",label:"All"},{id:"1",label:"Program 1"},{id:"2",label:"Program 2"},{id:"3",label:"Program 3"},{id:"4",label:"Program 4"},{id:"5",label:"Program 5"},{id:"6",label:"Program 6"},{id:"7",label:"Program 7"}],termFilterValues:[{id:"all",label:"All"},{id:"1",label:"Term 1"},{id:"2",label:"Term 2"},{id:"3",label:"Term 3"},{id:"4",label:"Term 4"},{id:"5",label:"Term 5"},{id:"6",label:"Term 6"},{id:"7",label:"Term 7"}],currentFilters:{program:"all",term:"all"}}};var x,f,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: experiences,
    url: 'http://localhost:6006/',
    totalItems: 38,
    itemsPerPage: 5,
    currentPage: 3,
    programFilterValues: [{
      id: 'all',
      label: 'All'
    }, {
      id: '1',
      label: 'Program 1'
    }, {
      id: '2',
      label: 'Program 2'
    }, {
      id: '3',
      label: 'Program 3'
    }, {
      id: '4',
      label: 'Program 4'
    }, {
      id: '5',
      label: 'Program 5'
    }, {
      id: '6',
      label: 'Program 6'
    }, {
      id: '7',
      label: 'Program 7'
    }],
    termFilterValues: [{
      id: 'all',
      label: 'All'
    }, {
      id: '1',
      label: 'Term 1'
    }, {
      id: '2',
      label: 'Term 2'
    }, {
      id: '3',
      label: 'Term 3'
    }, {
      id: '4',
      label: 'Term 4'
    }, {
      id: '5',
      label: 'Term 5'
    }, {
      id: '6',
      label: 'Term 6'
    }, {
      id: '7',
      label: 'Term 7'
    }],
    currentFilters: {
      program: 'all',
      term: 'all'
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const je=["Default"];export{a as Default,je as __namedExportsOrder,ye as default};
//# sourceMappingURL=experiences-list.stories-091092f9.js.map
