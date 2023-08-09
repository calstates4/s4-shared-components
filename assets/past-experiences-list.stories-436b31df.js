import{j as e}from"./jsx-runtime-94f6e698.js";import{r as S,i as b}from"./createSvgIcon-884c9325.js";import{e as v}from"./utils-5e7d37fa.js";import{L as o}from"./link-bceeb1d9.js";import{T as p,a as s,b as T,c as E,d as L,e as I}from"./TableRow-6381f6f1.js";import{B as k}from"./Box-99d005d7.js";import{T as P}from"./Typography-595f51a8.js";import{P as q}from"./Paper-d9053942.js";import{u as D}from"./useTheme-a5a02c1a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./createSvgIcon-d4492962.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useThemeProps-cab738f2.js";import"./styled-b0d0b538.js";import"./createChainedFunction-0bab83cf.js";import"./useForkRef-2674f3de.js";import"./useId-42d0e615.js";import"./ownerWindow-fbe9f185.js";import"./isMuiElement-08f54e3c.js";import"./useEventCallback-3abb6c00.js";import"./useControlled-1e5e8cad.js";import"./useIsFocusVisible-bbf13f29.js";import"./components-fbca38e7.js";import"./iframe-6026ec75.js";import"../sb-preview/runtime.js";import"./extendSxProp-98dee475.js";var i={},R=b;Object.defineProperty(i,"__esModule",{value:!0});var d=i.default=void 0,B=R(S()),C=e,W=(0,B.default)((0,C.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");d=i.default=W;function w({experienceInfo:a,ctaLink:x}){const r=D(),u=v(r),f={mb:r.spacing(1),fontWeight:"700",color:"primary.main"},h={th:{fontWeight:700}},g={display:"flex",alignItems:"center",mb:r.spacing(2),textTransform:"uppercase",fontWeight:700,textDecoration:"none"},j={ml:r.spacing(2)},y=a.map(t=>e.jsxs(p,{children:[e.jsx(s,{children:e.jsx(o,{href:t.url,children:t.experience})}),e.jsx(s,{children:u[t.status].label})]},t.id)),_=e.jsxs(E,{children:[e.jsx(L,{children:e.jsxs(p,{sx:h,children:[e.jsx(s,{children:"Experience"}),e.jsx(s,{children:"Status"})]})}),e.jsx(I,{children:y})]});return e.jsxs(k,{children:[e.jsx(P,{sx:f,variant:"h2",children:"Past experiences"}),e.jsxs(o,{href:x,sx:g,children:["See all",e.jsx(d,{sx:j})]}),e.jsx(T,{component:q,sx:{p:r.spacing(3)},children:_})]})}try{pastexperienceslist.displayName="pastexperienceslist",pastexperienceslist.__docgenInfo={description:"",displayName:"pastexperienceslist",props:{experienceInfo:{defaultValue:null,description:"",name:"experienceInfo",required:!0,type:{name:"{ id: string; experience: string; status: string; url: string; }[]"}},ctaLink:{defaultValue:null,description:"",name:"ctaLink",required:!0,type:{name:"string"}}}}}catch{}const le={title:"Components/Past Experiences List",component:w},n={args:{experienceInfo:[{id:"1",experience:"Experience 1",status:"State 1",url:"/experiences/1"},{id:"2",experience:"Experience 2",status:"State 2",url:"/experiences/2"}],ctaLink:"/opportunities"}};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    experienceInfo: [{
      id: '1',
      experience: 'Experience 1',
      status: 'State 1',
      url: '/experiences/1'
    }, {
      id: '2',
      experience: 'Experience 2',
      status: 'State 2',
      url: '/experiences/2'
    }],
    ctaLink: '/opportunities'
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const me=["Default"];export{n as Default,me as __namedExportsOrder,le as default};
//# sourceMappingURL=past-experiences-list.stories-436b31df.js.map
