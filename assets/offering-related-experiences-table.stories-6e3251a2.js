import{j as e}from"./jsx-runtime-94f6e698.js";import{L as d}from"./link-bceeb1d9.js";import{P as N}from"./pager-75e55470.js";import{b as _,c as C,d as L,T as u,a as n,e as F}from"./TableRow-6381f6f1.js";import{P as c}from"./Paper-d9053942.js";import{T as p}from"./Typography-595f51a8.js";import{B as g}from"./Button-2efb617b.js";import{u as S}from"./useTheme-a5a02c1a.js";function k({url:l,totalItems:T,itemsPerPage:j,currentPage:y,items:i}){const r=S(),m=Math.ceil(T/j),o={p:r.spacing(3),mb:r.spacing(3),fontSize:"1rem"},U={minWidth:"56.25rem",th:{fontWeight:700}},v=m>1&&e.jsx(N,{baseUrl:l,count:m,page:y,sx:{display:"flex",justifyContent:"center",pt:r.spacing(3)}});return i&&i.length?e.jsxs(_,{component:c,sx:o,children:[e.jsx(p,{sx:{mb:r.spacing(2)},component:"h2",variant:"h2",children:"Experiences related to this offering"}),e.jsxs(C,{sx:U,children:[e.jsx(L,{children:e.jsxs(u,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Last name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Campus"}),e.jsx(n,{"aria-label":"actions",children:" "})]})}),e.jsx(F,{children:i.map(t=>e.jsxs(u,{children:[e.jsx(n,{children:t.studentName}),e.jsx(n,{children:t.stundentLastname}),e.jsx(n,{children:t.studentEmail}),e.jsx(n,{children:t.campus}),e.jsxs(n,{children:[e.jsx(g,{variant:"outlined",component:d,sx:{fontWeight:700,mr:r.spacing(1)},href:t.signFormUrl,children:"Sign forms"}),e.jsx(g,{variant:"outlined",component:d,sx:{fontWeight:700},href:t.approveTimeUrl,children:"Approve time"})]})]},t.id))})]}),v]}):e.jsx(c,{sx:o,children:e.jsx(p,{component:"h2",variant:"h2",children:"No Experiences related to this offering"})})}try{offeringrelatedexperiencestable.displayName="offeringrelatedexperiencestable",offeringrelatedexperiencestable.__docgenInfo={description:"",displayName:"offeringrelatedexperiencestable",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"OfferingRelatedExperiencesTableRowProps[]"}}}}}catch{}const I={title:"Components/Offering Experiences Related Table",component:k},a={args:{url:"http://localhost:6006/",totalItems:10,itemsPerPage:5,currentPage:1,items:[{id:"1",studentName:"Emily",stundentLastname:"Parker",studentEmail:"student@mail.com",campus:"Bakersfield",signFormUrl:"#",approveTimeUrl:"#"},{id:"2",studentName:"Emily",stundentLastname:"Parker",studentEmail:"student@mail.com",campus:"Channel Islands",signFormUrl:"#",approveTimeUrl:"#"},{id:"3",studentName:"Carlos",stundentLastname:"Smith",studentEmail:"student@mail.com",campus:"Bakersfield",signFormUrl:"#",approveTimeUrl:"#"},{id:"4",studentName:"Petter",stundentLastname:"Morries",studentEmail:"student@mail.com",campus:"Cal Poly Humboldt",signFormUrl:"#",approveTimeUrl:"#"},{id:"5",studentName:"Harold",stundentLastname:"West",studentEmail:"student@mail.com",campus:"Cal Poly Humboldt",signFormUrl:"#",approveTimeUrl:"#"}]}},s={args:{url:"#",totalItems:10,itemsPerPage:5,currentPage:1,items:[]}};var f,h,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    url: 'http://localhost:6006/',
    totalItems: 10,
    itemsPerPage: 5,
    currentPage: 1,
    items: [{
      id: '1',
      studentName: 'Emily',
      stundentLastname: 'Parker',
      studentEmail: 'student@mail.com',
      campus: 'Bakersfield',
      signFormUrl: '#',
      approveTimeUrl: '#'
    }, {
      id: '2',
      studentName: 'Emily',
      stundentLastname: 'Parker',
      studentEmail: 'student@mail.com',
      campus: 'Channel Islands',
      signFormUrl: '#',
      approveTimeUrl: '#'
    }, {
      id: '3',
      studentName: 'Carlos',
      stundentLastname: 'Smith',
      studentEmail: 'student@mail.com',
      campus: 'Bakersfield',
      signFormUrl: '#',
      approveTimeUrl: '#'
    }, {
      id: '4',
      studentName: 'Petter',
      stundentLastname: 'Morries',
      studentEmail: 'student@mail.com',
      campus: 'Cal Poly Humboldt',
      signFormUrl: '#',
      approveTimeUrl: '#'
    }, {
      id: '5',
      studentName: 'Harold',
      stundentLastname: 'West',
      studentEmail: 'student@mail.com',
      campus: 'Cal Poly Humboldt',
      signFormUrl: '#',
      approveTimeUrl: '#'
    }]
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var P,b,E;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    url: '#',
    totalItems: 10,
    itemsPerPage: 5,
    currentPage: 1,
    items: []
  }
}`,...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const B=["Experiences","NoExperiences"],D=Object.freeze(Object.defineProperty({__proto__:null,Experiences:a,NoExperiences:s,__namedExportsOrder:B,default:I},Symbol.toStringTag,{value:"Module"}));export{a as E,k as O,D as o};
//# sourceMappingURL=offering-related-experiences-table.stories-6e3251a2.js.map
