import{j as e}from"./jsx-runtime-94f6e698.js";import{O as k,P as E}from"./offering-card.stories-0694dc11.js";import{r as L,i as M}from"./createSvgIcon-884c9325.js";import{L as U}from"./link-bceeb1d9.js";import{P as z}from"./pager-75e55470.js";import{B as T}from"./breadcrumbs-81bf643b.js";import{F as y,I as h,S as b}from"./Select-c514f98f.js";import{B as j}from"./Button-2efb617b.js";import{B as o}from"./Box-99d005d7.js";import{T as v}from"./Typography-595f51a8.js";import{P as w}from"./Paper-d9053942.js";import{u as H}from"./useTheme-a5a02c1a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./createSvgIcon-d4492962.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useThemeProps-cab738f2.js";import"./styled-b0d0b538.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-2674f3de.js";import"./useId-42d0e615.js";import"./ownerWindow-fbe9f185.js";import"./isMuiElement-08f54e3c.js";import"./useEventCallback-3abb6c00.js";import"./useControlled-1e5e8cad.js";import"./useIsFocusVisible-bbf13f29.js";import"./components-fbca38e7.js";import"./iframe-6026ec75.js";import"../sb-preview/runtime.js";import"./ButtonBase-0aa3f0f9.js";import"./emotion-react.browser.esm-eec9360d.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1e5fd21a.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-e6942d43.js";import"./isHostComponent-73d6e646.js";import"./Menu-fef460f4.js";import"./Modal-2564dbb1.js";import"./utils-eb7299f7.js";import"./index-8ce4a492.js";import"./List-b5769a16.js";import"./GlobalStyles-84a77259.js";import"./extendSxProp-98dee475.js";var m={},N=M;Object.defineProperty(m,"__esModule",{value:!0});var S=m.default=void 0,W=N(L()),G=e,J=(0,W.default)((0,G.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");S=m.default=J;function K({breadcrumb:l,children:s,url:q,addUrl:O,FormElement:p,totalItems:n,itemsPerPage:a,currentPage:d,categoryFilterValues:I,departmentFilterValues:u,currentFilters:c}){const r=H(),f=a*(d-1)+1,P=n>a?f+a-1:n,C={mt:r.spacing(3),p:r.spacing(3),pb:r.spacing(4)},A={mb:r.spacing(2),[r.breakpoints.up("sm")]:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"}},B={color:"primary.main",[r.breakpoints.down("sm")]:{mb:r.spacing(2)}},D={"& article + article":{mt:r.spacing(3)}},g={mb:r.spacing(2),display:"flex",minWidth:"8rem",[r.breakpoints.up("sm")]:{display:"inline-flex",mb:0,mr:r.spacing(2)}},x=e.jsxs(e.Fragment,{children:[e.jsxs(y,{size:"small",sx:g,children:[e.jsx(h,{id:"category-select-label",children:"Category"}),e.jsx(b,{labelId:"categiry-select-label",id:"category-select",label:"Category",native:!0,name:"category",defaultValue:c.category,children:I.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))})]}),u?e.jsxs(y,{size:"small",sx:g,children:[e.jsx(h,{id:"department-select-label",children:"Department"}),e.jsx(b,{labelId:"department-select-label",id:"department-select",label:"Department",native:!0,name:"department",defaultValue:c.department,children:u.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))})]}):null,e.jsx(j,{variant:"contained",type:"submit",children:"Apply Filters"})]}),R=p?e.jsx(p,{children:x}):e.jsx("form",{children:x});return e.jsxs("div",{children:[e.jsx(T,{items:l}),e.jsxs(o,{sx:A,children:[e.jsx(v,{variant:"h1",sx:B,children:"Offerings"}),e.jsx(j,{variant:"outlined",component:U,href:O,startIcon:e.jsx(S,{sx:{fontSize:"1rem",mr:r.spacing(.5)}}),sx:{flexShrink:0,fontWeight:700},children:"Add offering"})]}),e.jsxs(w,{elevation:0,sx:C,children:[e.jsx(o,{sx:{pt:r.spacing(2),pb:r.spacing(6)},children:R}),n?e.jsxs(v,{sx:{mb:r.spacing(2)},children:["Showing ",f," to ",P," of ",n," results"]}):null,e.jsx(o,{sx:D,children:s}),n>a&&e.jsx(z,{baseUrl:q,count:Math.ceil(n/a),page:d,sx:{display:"flex",justifyContent:"center",pt:r.spacing(3)}})]})]})}try{offeringlist.displayName="offeringlist",offeringlist.__docgenInfo={description:"",displayName:"offeringlist",props:{breadcrumb:{defaultValue:null,description:"",name:"breadcrumb",required:!0,type:{name:"{ title: string; url: string; }[]"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},addUrl:{defaultValue:null,description:"",name:"addUrl",required:!0,type:{name:"string"}},FormElement:{defaultValue:null,description:"",name:"FormElement",required:!1,type:{name:"ElementType"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},categoryFilterValues:{defaultValue:null,description:"",name:"categoryFilterValues",required:!0,type:{name:"{ id: string; name: string; }[]"}},departmentFilterValues:{defaultValue:null,description:"",name:"departmentFilterValues",required:!1,type:{name:"{ id: string; name: string; }[]"}},currentFilters:{defaultValue:null,description:"",name:"currentFilters",required:!0,type:{name:"{ category: string | null; department: string | null; }"}}}}}catch{}const ze={title:"Components/Offering List",component:K},Q=Array.from({length:5},(l,s)=>s).map(()=>e.jsx(k,{...E.args})),i={args:{breadcrumb:[{title:"Offerings",url:"#"}],children:Q,url:"http://localhost:6006/",addUrl:"#",totalItems:38,itemsPerPage:5,currentPage:3,categoryFilterValues:[{id:"all",name:"All Offerings"},{id:"1",name:"My Offerings"}],departmentFilterValues:[{id:"1",name:"Sales"},{id:"2",name:"Human Resources"}],currentFilters:{category:"all",department:"1"}}};var V,_,F;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    breadcrumb: [{
      title: 'Offerings',
      url: '#'
    }],
    children: offerings,
    url: 'http://localhost:6006/',
    addUrl: '#',
    totalItems: 38,
    itemsPerPage: 5,
    currentPage: 3,
    categoryFilterValues: [{
      id: 'all',
      name: 'All Offerings'
    }, {
      id: '1',
      name: 'My Offerings'
    }],
    departmentFilterValues: [{
      id: '1',
      name: 'Sales'
    }, {
      id: '2',
      name: 'Human Resources'
    }],
    currentFilters: {
      category: 'all',
      department: '1'
    }
  }
}`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const Te=["Default"];export{i as Default,Te as __namedExportsOrder,ze as default};
//# sourceMappingURL=offering-list.stories-4cd14fde.js.map
