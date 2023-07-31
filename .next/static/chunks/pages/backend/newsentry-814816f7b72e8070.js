(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{8686:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/backend/newsentry",function(){return a(6830)}])},5874:function(e,s,a){"use strict";a.d(s,{Z:function(){return j}});var t=a(5893),r=a(682),n=a(9368),l=a(7597),i=a(1664),c=a.n(i),d=a(7294),o=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{variant:"dark",expand:"lg",className:"pageMenustrip",children:(0,t.jsxs)(r.Z,{children:[(0,t.jsx)("div",{className:"navbar-brand",children:(0,t.jsxs)(c(),{href:"/",className:"nav-link",children:[(0,t.jsx)("img",{src:"/static/sylogo.png",alt:"swaryoa",style:{maxHeight:30}}),(0,t.jsxs)("span",{className:"fs-2",children:[" ",(0,t.jsx)("b",{children:" swara yoga"})]})]})}),(0,t.jsx)(l.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,t.jsx)(l.Z.Collapse,{id:"basic-navbar-nav",children:(0,t.jsxs)(n.Z,{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,t.jsx)(c(),{href:"/backend/home",className:"nav-link",children:"Home"}),(0,t.jsx)(c(),{href:"/backend/newsentry",className:"nav-link",children:"NewsEntry"}),(0,t.jsx)(c(),{href:"/",className:"nav-link",children:"Panchang"}),(0,t.jsx)(c(),{href:"/",className:"nav-link",children:"Daily Swara"}),(0,t.jsx)(c(),{href:"/",className:"nav-link",children:"Video Gallery"}),(0,t.jsx)(c(),{href:"/contact",className:"nav-link",children:"Contact Us"}),(0,t.jsx)(c(),{href:"/loginuser",className:"nav-link",children:"Logout"})]})})]})})})},h=a(5780),x=function(){let[e,s]=(0,d.useState)(null);return(0,d.useEffect)(()=>{let e=localStorage.getItem("token");console.log("token is "+e);let a=async()=>{try{let e=await h.Z.get("/signin/getMenuList");if(200===e.status){let a=await e.data;s(a)}else console.error("API request failed")}catch(e){console.error(e)}};a()},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{children:e?(0,t.jsx)("ul",{children:e.map((e,s)=>(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:e.url,children:e.label})},s))}):(0,t.jsx)("p",{children:"Loading data..."})})})};let u=e=>{let{mainTitle:s,footer:a,children:r}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)(o,{}),(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"pageColor rounded",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3 rightsidebar",children:(0,t.jsxs)("div",{className:"pt-1",children:[(0,t.jsx)("div",{className:"fs-5 justifytext"}),(0,t.jsx)("div",{className:"fs-5 justifytext"}),(0,t.jsx)("div",{className:"card  titlestrip",children:(0,t.jsxs)("div",{className:"card-header text-white",children:[(0,t.jsx)("h3",{children:" Menu"}),(0,t.jsx)(x,{})]})})]})}),(0,t.jsx)("div",{className:"col-lg-9",children:r})]})})})}),(0,t.jsx)("div",{className:"row footer pt-4",children:(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsx)("div",{className:"container"})})})]})};var j=u},5780:function(e,s,a){"use strict";var t=a(6154);let r=t.Z.create({baseURL:"http://localhost:3001/api/v1"});r.interceptors.request.use(e=>{let s=localStorage.getItem("token");return console.log("token "+s),e.headers.Authorization="Bearer "+s,console.log("config file is "+e),e}),s.Z=r},6830:function(e,s,a){"use strict";a.r(s);var t=a(5893),r=a(7294),n=a(5874),l=a(5780);s.default=function(){let[e,s]=(0,r.useState)([]),[a,i]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[o,h]=(0,r.useState)("ipaddress"),[x,u]=(0,r.useState)(""),j=async()=>{try{let e=await l.Z.get("/news");if(200===e.status){let a=await e.data;console.log(a);let t=a.map(e=>({...e,isactive:1===e.isactive.data[0]?"Active":"Inactive"}));s(t)}else console.error("API request failed")}catch(e){console.log("error is :-"+e)}};(0,r.useEffect)(()=>{j()},[]);let m=async e=>{if(u(""),d(""),e.preventDefault(),!a){u("Please enter value in news description box");return}try{await l.Z.post("/news",{news_description:a,ipaddress:o}),d("Message saved successfully"),i(""),j()}catch(e){d("Error occered"),console.log(e)}},v=async e=>{try{let s=window.confirm("Are you sure you want to delete this record?");if(!s)return;await l.Z.delete("/news/"+e),console.log("Record deleted successfully"),d("Record deleted successfully"),j()}catch(e){console.log("Error occurred while deleting the record:",e),d("Error occurred while deleting the record:")}};return(0,t.jsxs)(n.Z,{mainTitle:"Home ",footer:"Copyright ".concat(new Date().getFullYear()),children:[(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsxs)("div",{className:"card  titlestrip ",children:[(0,t.jsxs)("div",{className:"card-header",children:["Add Important News      ",c]}),(0,t.jsx)("div",{className:"justifytext fs-5 p-3",children:(0,t.jsxs)("form",{onSubmit:m,children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("label",{htmlFor:"message",children:"News Desciption"}),(0,t.jsx)("textarea",{id:"news_description",value:a,onChange:e=>i(e.target.value)})]}),(0,t.jsx)("div",{className:"mt-3"}),(0,t.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),"   \xa0\xa0\xa0",(0,t.jsxs)("span",{className:"error-message",children:[" ",x," "]})," ",(0,t.jsxs)("span",{className:"success-message",children:[" ",c," "]})]})})]})}),(0,t.jsx)("div",{children:(0,t.jsx)("h1",{children:"Added Latest News"})}),(0,t.jsxs)("table",{className:"table table-striped",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"ID"}),(0,t.jsx)("th",{children:"News Description"}),(0,t.jsx)("th",{children:"isactive"}),(0,t.jsx)("th",{children:"entry_date"}),(0,t.jsx)("th",{children:"ipaddress"}),(0,t.jsx)("th",{children:"Delete"})]})}),(0,t.jsx)("tbody",{children:e&&e.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.news_id}),(0,t.jsx)("td",{children:e.news_description}),(0,t.jsx)("td",{children:e.isactive}),(0,t.jsx)("td",{children:e.entry_date}),(0,t.jsx)("td",{children:e.ipaddress}),(0,t.jsxs)("td",{children:["  ",(0,t.jsx)("button",{onClick:()=>v(e.news_id),children:"Delete"})]})]},e.news_id))})]})]})}}},function(e){e.O(0,[433,774,888,179],function(){return e(e.s=8686)}),_N_E=e.O()}]);