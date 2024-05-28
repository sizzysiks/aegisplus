import{j as e,L as m,r as t,u,H as d,N as f,S as j,b as x,g as o}from"./index-D5jsulaW.js";/* empty css                */const g=({project:s})=>e.jsxs(m,{to:`${s.url}`,className:"projects-link",children:[e.jsxs("span",{children:["0",s.id]}),e.jsx("p",{children:s.title})]}),v=({sidebarIsOpen:s,setSidebarIsOpen:r,data:p})=>{const n=t.useRef(),i=t.useRef(),a=t.useRef(),c=t.useRef();return t.useEffect(()=>{r(!1)},[]),t.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[]),u(()=>{o.to(c.current,{duration:1,scaleX:0,transformOrigin:"right",ease:"expo.in"}),o.fromTo(n.current,{y:500},{delay:1,duration:.3,y:0,ease:"expo.out"}),o.fromTo(i.current,{y:500},{delay:1.2,duration:.3,y:0,ease:"expo.out"}),o.fromTo(a.current,{y:500},{delay:1.4,duration:.3,y:0,ease:"expo.out"})},{dependencies:[]}),e.jsxs("div",{className:"projects",children:[e.jsxs(d,{children:[e.jsx("title",{children:"Aegis Plus - Our work"}),e.jsx("meta",{name:"description",content:"Explore Aegis Plus's diverse portfolio of web design projects. From sleek corporate websites to engaging e-commerce platforms."}),e.jsx("link",{rel:"canonical",href:"https://aegis.plus/projects"}),e.jsx("meta",{property:"og:title",content:"Aegis Plus - Our work"}),e.jsx("meta",{property:"og:description",content:"Explore Aegis Plus's diverse portfolio of web design projects. From sleek corporate websites to engaging e-commerce platforms."}),e.jsx("meta",{property:"og:url",content:"https://aegis.plus/projects"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:image",content:"https://aegis.plus/favicon.ico"}),e.jsx("meta",{name:"twitter:title",content:"Aegis Plus - Our work"}),e.jsx("meta",{name:"twitter:description",content:"Explore Aegis Plus's diverse portfolio of web design projects. From sleek corporate websites to engaging e-commerce platforms."})]}),e.jsx("div",{className:"projects-overlay",ref:c}),e.jsx(f,{sidebarIsOpen:s,setSidebarIsOpen:r}),s?e.jsx(j,{}):"",e.jsxs("div",{className:"projects-content",children:[e.jsx("h1",{ref:n,className:"page-type",children:"Explore Our Creative portfolio"}),e.jsx("p",{ref:i,className:"projects-p",children:"Explore stunning projects in full stack development, frontend design, and 3D innovation."}),e.jsx("div",{ref:a,className:"projects-links",children:p.map(l=>e.jsx(g,{project:l},l.id))})]}),e.jsx(x,{})]})};export{v as default};
