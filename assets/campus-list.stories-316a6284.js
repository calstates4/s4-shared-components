import{j as e}from"./jsx-runtime-94f6e698.js";import{C as V,A as _}from"./campus-card.stories-c0a9f46c.js";import{P as A}from"./pager-75e55470.js";import{F as C,I as P,S as N}from"./Select-c514f98f.js";import{T as q}from"./TextField-9ffcd892.js";import{B as I}from"./Button-2efb617b.js";import{T as m}from"./Typography-595f51a8.js";import{P as T}from"./Paper-d9053942.js";import{B as g}from"./Box-99d005d7.js";import{u as E}from"./useTheme-a5a02c1a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Place-784d8ce2.js";import"./createSvgIcon-884c9325.js";import"./createSvgIcon-d4492962.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useThemeProps-cab738f2.js";import"./styled-b0d0b538.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-2674f3de.js";import"./useId-42d0e615.js";import"./ownerWindow-fbe9f185.js";import"./isMuiElement-08f54e3c.js";import"./useEventCallback-3abb6c00.js";import"./useControlled-1e5e8cad.js";import"./useIsFocusVisible-bbf13f29.js";import"./WebAsset-3ac65838.js";import"./LibraryBooks-75390c20.js";import"./link-bceeb1d9.js";import"./components-fbca38e7.js";import"./iframe-6026ec75.js";import"../sb-preview/runtime.js";import"./ButtonBase-0aa3f0f9.js";import"./emotion-react.browser.esm-eec9360d.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1e5fd21a.js";import"./react-is.production.min-a192e302.js";import"./Menu-fef460f4.js";import"./Modal-2564dbb1.js";import"./utils-eb7299f7.js";import"./index-8ce4a492.js";import"./useSlotProps-e6942d43.js";import"./isHostComponent-73d6e646.js";import"./List-b5769a16.js";import"./GlobalStyles-84a77259.js";import"./extendSxProp-98dee475.js";function w({children:s,url:n,FormElement:p,totalItems:r,itemsPerPage:a,currentPage:o,statusFilterValues:y,currentFilters:u}){const t=E(),c=a*(o-1)+1,j=r>a?c+a-1:r,S={mt:t.spacing(3),p:t.spacing(3),pb:t.spacing(4)},F={"& article + article":{mt:t.spacing(3)}},d={mb:t.spacing(2),display:"flex",[t.breakpoints.up("sm")]:{display:"inline-flex",mb:0,mr:t.spacing(2)}},h=e.jsxs(e.Fragment,{children:[e.jsxs(C,{size:"small",sx:d,children:[e.jsx(P,{id:"status-select-label",children:"Status"}),e.jsx(N,{id:"status-select",label:"Status",native:!0,name:"agreementStatus",defaultValue:u.agreementStatus,children:y.map(l=>e.jsx("option",{value:l.id,children:l.label},l.id))})]}),e.jsx(q,{label:"Name",id:"name",size:"small",name:"campusName",sx:d,defaultValue:u.campusName}),e.jsx(I,{variant:"contained",type:"submit",children:"Apply Filters"})]}),v=p?e.jsx(p,{children:h}):e.jsx("form",{children:h});return e.jsxs("div",{children:[e.jsx(m,{variant:"h1",children:"Campuses"}),e.jsxs(T,{elevation:0,sx:S,children:[e.jsx(m,{children:"This page includes a list of campuses and the programs that are currently using CalState S4. You can use the filter function to see a list of campuses with which your organization has an existing partnership. For campuses your organization is not currently partnered with, use the Initiate Partnership button to begin the process."}),e.jsx(g,{sx:{pt:t.spacing(2),pb:t.spacing(6)},children:v}),r?e.jsxs(m,{sx:{mb:t.spacing(2)},children:["Showing ",c," to ",j," of ",r," results"]}):null,e.jsx(g,{sx:F,children:s}),r>a&&e.jsx(A,{baseUrl:n,count:Math.ceil(r/a),page:o,sx:{display:"flex",justifyContent:"center",pt:t.spacing(3)}})]})]})}try{campuslist.displayName="campuslist",campuslist.__docgenInfo={description:"",displayName:"campuslist",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},FormElement:{defaultValue:null,description:"",name:"FormElement",required:!1,type:{name:"ElementType"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},statusFilterValues:{defaultValue:null,description:"",name:"statusFilterValues",required:!0,type:{name:"{ id: string; label: string; }[]"}},currentFilters:{defaultValue:null,description:"",name:"currentFilters",required:!0,type:{name:"{ agreementStatus: string | null; campusName: string | null; }"}}}}}catch{}const Ne={title:"Components/CampusList",component:w},z=Array.from({length:5},(s,n)=>n).map(()=>e.jsx(V,{..._.args})),i={args:{children:z,url:"http://localhost:6006/",totalItems:38,itemsPerPage:5,currentPage:3,statusFilterValues:[{id:"all",label:"All"},{id:"draft",label:"Pending"},{id:"published",label:"Active"},{id:"expired",label:"Expired"},{id:"archived",label:"Archived"}],currentFilters:{agreementStatus:"all",campusName:""}}};var f,x,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: campuses,
    url: 'http://localhost:6006/',
    totalItems: 38,
    itemsPerPage: 5,
    currentPage: 3,
    statusFilterValues: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'draft',
      label: 'Pending'
    }, {
      id: 'published',
      label: 'Active'
    }, {
      id: 'expired',
      label: 'Expired'
    }, {
      id: 'archived',
      label: 'Archived'
    }],
    currentFilters: {
      agreementStatus: 'all',
      campusName: ''
    }
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const qe=["Default"];export{i as Default,qe as __namedExportsOrder,Ne as default};
//# sourceMappingURL=campus-list.stories-316a6284.js.map
