import{j as e}from"./jsx-runtime-94f6e698.js";import{B as ee}from"./breadcrumbs-81bf643b.js";import{L as ne}from"./link-bceeb1d9.js";import{B as i}from"./Box-99d005d7.js";import{T as r}from"./Typography-595f51a8.js";import{B as ie}from"./Button-2efb617b.js";import{P as a}from"./Paper-d9053942.js";import{u as re}from"./useTheme-a5a02c1a.js";import{O as L,E as te}from"./offering-related-experiences-table.stories-6e3251a2.js";function se({breadcrumb:c,title:A,editUrl:w,department:u,description:O,type:H,healthSafety:p,focusPopulation:I,focusAreas:M,subFocusAreas:m,activities:F,timeCommitment:N,address:h,maxStudents:R,requiredLanguages:x,preferredLanguages:g,startDate:B,endDate:W,primaryContact:U,timeApprovers:z,formSigners:$,observers:f,training:j,published:G,children:J}){const n=re(),y=G?"published":"unpublished",b={published:{label:"Published",backgroundColor:"success.dark"},unpublished:{label:"Unpublished",backgroundColor:"warning.main"}},K={mb:n.spacing(2),[n.breakpoints.up("sm")]:{display:"flex",gap:n.spacing(2),alignItems:"flex-start",justifyContent:"space-between"}},Q={color:"primary.main",[n.breakpoints.down("sm")]:{mb:n.spacing(2)}},X={mb:n.spacing(2),[n.breakpoints.up("sm")]:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}},Y={display:"inline-block",lineHeight:1,borderRadius:n.spacing(.5),textTransform:"uppercase",px:n.spacing(1),py:n.spacing(.5),mt:n.spacing(1),[n.breakpoints.up("sm")]:{ml:n.spacing(1.5),mt:0}},v={[n.breakpoints.up("md")]:{display:"flex",columnGap:n.spacing(3)}},s={p:n.spacing(3),mb:n.spacing(3),fontSize:"1rem"},S={[n.breakpoints.up("sm")]:{flex:"1 1 67%"}},P={[n.breakpoints.up("sm")]:{flex:"1 1 33%"}},Z={mt:n.spacing(1),pt:n.spacing(1),borderTop:`1px solid ${n.palette.secondary.main}`,[n.breakpoints.up("md")]:{mt:0,pt:0,pl:n.spacing(2),borderTop:"none",borderLeft:`1px solid ${n.palette.secondary.main}`}},d={[n.breakpoints.up("sm")]:{display:"flex",columnGap:n.spacing(5)}},t={m:0,mb:n.spacing(.5),dt:{display:"inline",fontWeight:"700"},dd:{display:"inline",ml:0},[n.breakpoints.up("sm")]:{flex:"1 1 50%"},"> div":{mb:n.spacing(.5)}},q={...t,dt:{fontWeight:"700"},dd:{ml:0}};return e.jsxs("article",{children:[e.jsx(ee,{items:c}),e.jsxs(i,{sx:K,children:[e.jsx(r,{variant:"h1",sx:Q,children:A}),e.jsx(ie,{variant:"contained",component:ne,href:w,sx:{flexShrink:0},children:"Edit offering"})]}),e.jsxs(a,{sx:s,children:[e.jsxs(i,{sx:X,children:[e.jsx(r,{component:"h2",variant:"h2",children:"General details"}),e.jsx(r,{sx:{...Y,backgroundColor:b[y].backgroundColor},component:"span",variant:"h5",children:b[y].label})]}),e.jsxs(i,{sx:v,children:[e.jsxs(i,{sx:S,children:[e.jsxs(i,{sx:d,children:[u&&e.jsxs(i,{sx:t,component:"dl",children:[e.jsx("dt",{children:"Department: "}),e.jsx("dd",{children:u})]}),h&&e.jsxs(i,{sx:t,component:"dl",children:[e.jsx("dt",{children:"Address: "}),e.jsx("dd",{children:h})]})]}),e.jsxs(i,{sx:d,children:[e.jsxs(i,{sx:t,component:"dl",children:[e.jsx("dt",{children:"Type: "}),e.jsx("dd",{children:H})]}),e.jsxs(i,{sx:t,component:"dl",children:[e.jsx("dt",{children:"Max number of students: "}),e.jsx("dd",{children:R})]})]}),e.jsxs(i,{sx:d,children:[e.jsxs(i,{sx:q,component:"dl",children:[e.jsx("dt",{children:"Time commitment: "}),e.jsx("dd",{children:N})]}),e.jsxs(i,{sx:q,component:"dl",children:[e.jsx("dt",{children:"Dates: "}),e.jsx("dd",{children:`Start: ${B}`}),e.jsx("dd",{children:`End: ${W}`})]})]}),e.jsxs(i,{sx:t,component:"dl",children:[x&&e.jsxs("div",{children:[e.jsx("dt",{children:"Required Language(s) other than English: "}),e.jsx("dd",{children:x})]}),g&&e.jsxs("div",{children:[e.jsx("dt",{children:"Preferred Language(s) other than English: "}),e.jsx("dd",{children:g})]})]})]}),e.jsxs(i,{sx:{...P,...Z},children:[e.jsx(r,{sx:{mb:n.spacing(.5)},component:"h3",variant:"h4",children:"Contact and other roles"}),e.jsxs(i,{sx:t,component:"dl",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Primary contact: "}),e.jsx("dd",{children:U})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Time approver(s): "}),e.jsx("dd",{children:z})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Form Signer(s): "}),e.jsx("dd",{children:$})]}),f&&e.jsxs("div",{children:[e.jsx("dt",{children:"Observer(s): "}),e.jsx("dd",{children:f})]})]})]})]})]}),e.jsxs(a,{sx:s,children:[e.jsx(r,{component:"h2",variant:"h2",children:"Description"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:O}})]}),p&&e.jsx(e.Fragment,{children:e.jsxs(a,{sx:s,children:[e.jsx(r,{component:"h2",variant:"h2",children:"Health & Safety"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:p}})]})}),j&&e.jsx(e.Fragment,{children:e.jsxs(a,{sx:s,children:[e.jsx(r,{component:"h2",variant:"h2",children:"Training"}),e.jsx("p",{dangerouslySetInnerHTML:{__html:j}})]})}),e.jsxs(i,{sx:v,children:[e.jsxs(a,{sx:{...s,...S},children:[e.jsx(r,{sx:{mb:n.spacing(1)},component:"h2",variant:"h2",children:"Focus"}),e.jsxs(i,{sx:t,component:"dl",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Population: "}),e.jsx("dd",{children:I})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Areas: "}),e.jsx("dd",{children:M})]}),m&&e.jsxs("div",{children:[e.jsx("dt",{children:"Sub focus areas: "}),e.jsx("dd",{children:m})]})]})]}),e.jsxs(a,{sx:{...s,...P},children:[e.jsx(r,{component:"h2",variant:"h2",children:"Activities"}),e.jsx(r,{children:F})]})]}),J]})}try{offeringpage.displayName="offeringpage",offeringpage.__docgenInfo={description:"",displayName:"offeringpage",props:{breadcrumb:{defaultValue:null,description:"",name:"breadcrumb",required:!0,type:{name:"{ title: string; url: string; }[]"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},editUrl:{defaultValue:null,description:"",name:"editUrl",required:!0,type:{name:"string"}},department:{defaultValue:null,description:"",name:"department",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},healthSafety:{defaultValue:null,description:"",name:"healthSafety",required:!1,type:{name:"string"}},focusPopulation:{defaultValue:null,description:"",name:"focusPopulation",required:!0,type:{name:"string"}},focusAreas:{defaultValue:null,description:"",name:"focusAreas",required:!0,type:{name:"string"}},subFocusAreas:{defaultValue:null,description:"",name:"subFocusAreas",required:!1,type:{name:"string"}},activities:{defaultValue:null,description:"",name:"activities",required:!0,type:{name:"string"}},timeCommitment:{defaultValue:null,description:"",name:"timeCommitment",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!1,type:{name:"string"}},maxStudents:{defaultValue:null,description:"",name:"maxStudents",required:!0,type:{name:"number"}},requiredLanguages:{defaultValue:null,description:"",name:"requiredLanguages",required:!1,type:{name:"string"}},preferredLanguages:{defaultValue:null,description:"",name:"preferredLanguages",required:!1,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!0,type:{name:"string"}},primaryContact:{defaultValue:null,description:"",name:"primaryContact",required:!0,type:{name:"string"}},timeApprovers:{defaultValue:null,description:"",name:"timeApprovers",required:!0,type:{name:"string"}},formSigners:{defaultValue:null,description:"",name:"formSigners",required:!0,type:{name:"string"}},observers:{defaultValue:null,description:"",name:"observers",required:!1,type:{name:"string"}},training:{defaultValue:null,description:"",name:"training",required:!1,type:{name:"string"}},published:{defaultValue:null,description:"",name:"published",required:!0,type:{name:"boolean"}}}}}catch{}const ae={title:"Components/Offering Page",component:se},le=`<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`,oe=`<p>
Deserunt mollit incididunt esse reprehenderit tempor deserunt officia culpa
ipsum id exercitation consequat. Irure pariatur est ea eiusmod duis quis veniam
deserunt. Nisi commodo laboris anim mollit dolor. Reprehenderit sint nostrud
enim qui.
</p>
<ul>
<li>Cillum mollit Lorem velit commodo exercitation irure deserunt Lorem dolore.</li>
<li>Ex eu et reprehenderit laboris.</li><li>Aute non amet magna.</li>
<li>Nulla pariatur ad amet eu tempor cillum incididunt enim irure nostrud exercitation elit labore est.</li>
<li>Cupidatat sint nulla mollit occaecat.</li>
</ul>`,de=`<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`,T={breadcrumb:[{title:"Offerings",url:"#"},{title:"Hi omnes lingua, institutis, legibus inter se differunt.",url:"#"}],title:"Hi omnes lingua, institutis, legibus inter se differunt.",editUrl:"#",type:"Hybrid",description:le,healthSafety:oe,department:"Finance, Human Resources, Sales",focusPopulation:"People Experiencing Disability, Seniors, People Experiencing Material Poverty",focusAreas:"People Experiencing Disability, Seniors, People Experiencing Material Poverty",subFocusAreas:"People Experiencing Disability, Seniors, People Experiencing Material Poverty",activities:"People Experiencing Disability, Seniors",timeCommitment:"20 hours per week",address:"Camarillo, CA United States",maxStudents:1,requiredLanguages:"None",preferredLanguages:"Spanish",startDate:"04/04/2023",endDate:"04/10/2023",primaryContact:"Emily Parker",timeApprovers:"Emily Parker, Emily Parker",formSigners:"Emily Parker",observers:"Emily Parker, Emily Parker, Emily Parker",training:de,published:!0,children:e.jsx(L,{...te.args})},l={args:{...T}},o={args:{...T,children:e.jsx(L,{url:"http://localhost:6006/",itemsPerPage:5,totalItems:0,currentPage:1})}};var C,E,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...offeringData
  }
}`,...(k=(E=l.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var V,D,_;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...offeringData,
    children: <OfferingRelatedExperiencesTable url="http://localhost:6006/" itemsPerPage={5} totalItems={0} currentPage={1} />
  }
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const ce=["Default","NoExperiences"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:l,NoExperiences:o,__namedExportsOrder:ce,default:ae},Symbol.toStringTag,{value:"Module"}));export{l as D,se as O,be as o};
//# sourceMappingURL=offering-page.stories-3a12c3b5.js.map
