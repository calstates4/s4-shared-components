import{j as e}from"./jsx-runtime-94f6e698.js";import{r as O,i as E}from"./createSvgIcon-884c9325.js";import{B as D}from"./breadcrumbs-81bf643b.js";import{P as L}from"./pager-75e55470.js";import{A as i}from"./autocomplete-field-733a69de.js";import{T as P}from"./TextField-9ffcd892.js";import{B as S}from"./Button-2efb617b.js";import{B as u}from"./Box-99d005d7.js";import{T as U}from"./Typography-595f51a8.js";import{P as W}from"./Paper-d9053942.js";import{u as J}from"./useTheme-a5a02c1a.js";import{O as K,D as Y}from"./opportunity-card.stories-221b752a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./createSvgIcon-d4492962.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useThemeProps-cab738f2.js";import"./styled-b0d0b538.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-2674f3de.js";import"./useId-42d0e615.js";import"./ownerWindow-fbe9f185.js";import"./isMuiElement-08f54e3c.js";import"./useEventCallback-3abb6c00.js";import"./useControlled-1e5e8cad.js";import"./useIsFocusVisible-bbf13f29.js";import"./link-bceeb1d9.js";import"./components-fbca38e7.js";import"./iframe-6026ec75.js";import"../sb-preview/runtime.js";import"./react-is.production.min-a192e302.js";import"./ButtonBase-0aa3f0f9.js";import"./emotion-react.browser.esm-eec9360d.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1e5fd21a.js";import"./useSlotProps-e6942d43.js";import"./isHostComponent-73d6e646.js";import"./Select-c514f98f.js";import"./Menu-fef460f4.js";import"./Modal-2564dbb1.js";import"./utils-eb7299f7.js";import"./index-8ce4a492.js";import"./List-b5769a16.js";import"./GlobalStyles-84a77259.js";import"./IconButton-818038af.js";import"./extendSxProp-98dee475.js";import"./Place-784d8ce2.js";import"./Collapse-e586580a.js";var m={},G=E;Object.defineProperty(m,"__esModule",{value:!0});var R=m.default=void 0,Q=G(O()),X=e,Z=(0,Q.default)((0,X.jsx)("path",{d:"M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"}),"ListAltOutlined");R=m.default=Z;var d={},ee=E;Object.defineProperty(d,"__esModule",{value:!0});var N=d.default=void 0,te=ee(O()),le=e,re=(0,te.default)((0,le.jsx)("path",{d:"m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99 3-1.01v11.7l-3 1.16V6.46zm14 11.08-3 1.01V6.86l3-1.16v11.84z"}),"MapOutlined");N=d.default=re;function ie({breadcrumb:n,children:o,url:q,listView:s,onClickHandler:C,FormElement:c,totalItems:y,itemsPerPage:f,currentPage:T,programFilterValues:b,courseFilterValues:g,typeFilterValues:x,termFilterValues:V,focusPopulationFilterValues:h,focusAreaFilterValues:v,cityFilterValues:A,currentFilters:l}){const t=J(),k={mt:t.spacing(3),p:t.spacing(3),pb:t.spacing(4)},H={mb:t.spacing(2),[t.breakpoints.up("sm")]:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"}},z={color:"primary.main",[t.breakpoints.down("sm")]:{mb:t.spacing(2)}},w={borderTop:`1px solid ${t.palette.secondary.main}`,pt:t.spacing(4),mt:t.spacing(4),"& article + article":{mt:t.spacing(3)}},j={fontSize:"1rem",mr:t.spacing(.5)},r={mb:t.spacing(2),display:"flex",minWidth:"12rem",[t.breakpoints.up("sm")]:{display:"inline-flex",mr:t.spacing(2)}},F=e.jsxs(e.Fragment,{children:[b&&e.jsx(P,{select:!0,id:"opportunity-program",name:"opportunity-program",label:"Programs",defaultValue:l.program??void 0,InputLabelProps:{shrink:!0},SelectProps:{native:!0},sx:r,children:b.map(p=>e.jsx("option",{value:p.id,children:p.label},p.id))}),g&&e.jsx(i,{id:"opportunity-course",name:"opportunity-course",label:"Course",options:g,selected:l.course,sx:r}),x&&e.jsx(i,{id:"opportunity-type",name:"opportunity-type",label:"Opportunity Type",options:x,selected:l.type,sx:r}),V&&e.jsx(i,{id:"opportunity-term",name:"opportunity-term",label:"Term",options:V,selected:l.term,sx:r}),h&&e.jsx(i,{id:"opportunity-focus-population",name:"opportunity-focus-population",label:"Focus Population",options:h,selected:l.focusPopulation,sx:r}),v&&e.jsx(i,{id:"opportunity-focus-area",name:"opportunity-focus-area",label:"Focus Area",options:v,selected:l.focusArea,sx:r}),A&&e.jsx(i,{id:"opportunity-city",name:"opportunity-city",label:"City",options:A,selected:l.city,sx:r}),e.jsx(P,{id:"opportunity-keyword",name:"opportunity-keyword",label:"Keyword",defaultValue:l.keyword??void 0,sx:r}),e.jsx(S,{size:"large",variant:"contained",type:"submit",sx:{display:"block"},children:"Apply Filters"})]}),B=c?e.jsx(c,{children:F}):e.jsx("form",{children:F}),$=s?e.jsx(N,{sx:j}):e.jsx(R,{sx:j});return e.jsxs("div",{children:[e.jsx(D,{items:n}),e.jsxs(u,{sx:H,children:[e.jsx(U,{variant:"h1",sx:z,children:"Opportunities"}),e.jsx(S,{variant:"outlined",onClick:C,endIcon:$,sx:{flexShrink:0,fontWeight:700},children:`View as ${s?"map":"list"}`})]}),e.jsxs(W,{elevation:0,sx:k,children:[e.jsx(u,{children:B}),e.jsx(u,{sx:w,children:o}),s&&y>f&&e.jsx(L,{baseUrl:q,count:Math.ceil(y/f),page:T,sx:{display:"flex",justifyContent:"center",pt:t.spacing(3)}})]})]})}try{opportunitylist.displayName="opportunitylist",opportunitylist.__docgenInfo={description:"",displayName:"opportunitylist",props:{breadcrumb:{defaultValue:null,description:"",name:"breadcrumb",required:!0,type:{name:"{ title: string; url: string; }[]"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},listView:{defaultValue:null,description:"",name:"listView",required:!0,type:{name:"boolean"}},onClickHandler:{defaultValue:null,description:"",name:"onClickHandler",required:!0,type:{name:"() => void"}},FormElement:{defaultValue:null,description:"",name:"FormElement",required:!1,type:{name:"ElementType"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},programFilterValues:{defaultValue:null,description:"",name:"programFilterValues",required:!1,type:{name:"AutocompleteOptionType[]"}},courseFilterValues:{defaultValue:null,description:"",name:"courseFilterValues",required:!1,type:{name:"AutocompleteOptionType[]"}},typeFilterValues:{defaultValue:null,description:"",name:"typeFilterValues",required:!1,type:{name:"AutocompleteOptionType[]"}},termFilterValues:{defaultValue:null,description:"",name:"termFilterValues",required:!1,type:{name:"AutocompleteOptionType[]"}},focusPopulationFilterValues:{defaultValue:null,description:"",name:"focusPopulationFilterValues",required:!1,type:{name:"AutocompleteOptionType[]"}},focusAreaFilterValues:{defaultValue:null,description:"",name:"focusAreaFilterValues",required:!1,type:{name:"AutocompleteOptionType[]"}},cityFilterValues:{defaultValue:null,description:"",name:"cityFilterValues",required:!1,type:{name:"AutocompleteOptionType[]"}},currentFilters:{defaultValue:null,description:"",name:"currentFilters",required:!0,type:{name:"{ program: string | null; course: string | null; type: string | null; term: string | null; focusPopulation: string | null; focusArea: string | null; city: string | null; keyword: string | null; }"}}}}}catch{}const it={title:"Components/Opportunity List",component:ie},ae=Array.from({length:6},(n,o)=>o).map(()=>e.jsx(K,{...Y.args})),ne=[{id:"1",label:"People Experiencing Addiction"},{id:"2",label:"Seniors"},{id:"3",label:"Veterans, Active Military and/or Military Families"},{id:"4",label:"Veterans, People Experiencing Homelessness"},{id:"5",label:"People Experiencing Material Poverty"},{id:"6",label:"Adults"},{id:"7",label:"Formerly Incarcerated People"},{id:"8",label:"Children/Youth"},{id:"9",label:"Immigrants/Refugees"}],oe=[{id:"1",label:"Emergency Services & Public Safety"},{id:"2",label:"International Service Experiences"},{id:"3",label:"Arts, Culture, and Humanities"},{id:"4",label:"Construction"},{id:"5",label:"Restorative Justice"},{id:"6",label:"Transportation & Tourism"},{id:"7",label:"Migration & Naturalization Services"}],se=[{id:"Camarillo",label:"Camarillo"},{id:"Bakersfield",label:"Bakersfield"},{id:"Arcata",label:"Arcata"}],a={args:{breadcrumb:[{title:"Opportunities",url:"#"}],url:"http://localhost:6006/",children:ae,listView:!0,totalItems:30,itemsPerPage:6,currentPage:3,programFilterValues:[{id:"all",label:"All Campus programs"},{id:"1",label:"My programs"}],courseFilterValues:[{id:"1",label:"UNIV 100 (07): FRESHMAN SEMINAR"},{id:"2",label:"UNIV 100 (04): FRESHMAN SEMINAR"},{id:"3",label:"UNIV 100 (03): FRESHMAN SEMINAR"}],typeFilterValues:[{id:"on-site",label:"On-site"},{id:"remote",label:"Remote"},{id:"hybrid",label:"Hybrid"}],termFilterValues:[{id:"1",label:"Fall 2023"},{id:"2",label:"Winter 2023"}],focusPopulationFilterValues:ne,focusAreaFilterValues:oe,cityFilterValues:se,currentFilters:{program:"1",course:null,type:null,term:null,focusPopulation:null,focusArea:null,city:null,keyword:null}}};var I,M,_;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    breadcrumb: [{
      title: 'Opportunities',
      url: '#'
    }],
    url: 'http://localhost:6006/',
    children: opportunities,
    listView: true,
    totalItems: 30,
    itemsPerPage: 6,
    currentPage: 3,
    programFilterValues: [{
      id: 'all',
      label: 'All Campus programs'
    }, {
      id: '1',
      label: 'My programs'
    }],
    courseFilterValues: [{
      id: '1',
      label: 'UNIV 100 (07): FRESHMAN SEMINAR'
    }, {
      id: '2',
      label: 'UNIV 100 (04): FRESHMAN SEMINAR'
    }, {
      id: '3',
      label: 'UNIV 100 (03): FRESHMAN SEMINAR'
    }],
    typeFilterValues: [{
      id: 'on-site',
      label: 'On-site'
    }, {
      id: 'remote',
      label: 'Remote'
    }, {
      id: 'hybrid',
      label: 'Hybrid'
    }],
    termFilterValues: [{
      id: '1',
      label: 'Fall 2023'
    }, {
      id: '2',
      label: 'Winter 2023'
    }],
    focusPopulationFilterValues: focusPopulations,
    focusAreaFilterValues: focusAreas,
    cityFilterValues: cities,
    currentFilters: {
      program: '1',
      course: null,
      type: null,
      term: null,
      focusPopulation: null,
      focusArea: null,
      city: null,
      keyword: null
    }
  }
}`,...(_=(M=a.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const at=["Default"];export{a as Default,at as __namedExportsOrder,it as default};
//# sourceMappingURL=opportunity-list.stories-846f19fb.js.map
