(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/devgrub.bf79b675.png"},42:function(e,t,a){e.exports=a(58)},47:function(e,t,a){},48:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),i=(a(47),a(6)),o=a(11),s=a(8),m=a(9),u=a(23),d=a(16),h=a(12),f=a(29),b=a(41),E=(a(48),a(14)),g=a(19);var p=function(){return r.a.createElement("footer",{className:"mt-5"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,{className:"border-top justify-content-between p-3"},r.a.createElement(g.a,{className:"p-0",md:3,sm:12}),r.a.createElement(g.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Vivi Nguyen."))))},v=a(38);var k=function(e){return r.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,{className:"justify-content-center py-5"},r.a.createElement(g.a,{md:8,sm:12},e.title&&r.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&r.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),r.a.createElement("br",null),e.text&&r.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},y=a(20),w=a(34);var N=function(e){var t=Object(w.b)({opacity:1,from:{opacity:0}});return r.a.createElement(w.a.div,{className:"v-card-info",style:t},r.a.createElement("p",{className:"v-card-title"},e.title),r.a.createElement("p",{className:"v-card-sub-title"},e.subTitle),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var T=function(e){return r.a.createElement("div",{className:"d-inline-block v-card",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"v-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},j=a(28),C=a.n(j),x=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(y.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return r.a.createElement(T,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"DevGrub",subTitle:"The cookbook for developers",imgSrc:C.a,link:"https://devgrub.com",selected:!1},{id:1,title:"Vivi Nguyen",subTitle:"YouTube Channel",imgSrc:C.a,link:"https://www.youtube.com",selected:!1},{id:2,title:"Evverest",subTitle:"A social network for developers",imgSrc:C.a,link:"https://github.com",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(r.a.Component);var I=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"justify-content-center"},r.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text})),r.a.createElement(x,null))};var S=function(e){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,{className:"justify-content-center"},r.a.createElement(g.a,{md:8},e.children)))};var O=function(e){return r.a.createElement("div",null,r.a.createElement(k,{title:e.title}),r.a.createElement(S,null,r.a.createElement("p",null,"Hello! My name is Vivi. I graduated in 2019 with a Bachelor's in Cognitive Science from UC Berkeley. Throughout my college career, I've dabbled in teaching a lot of different subjects (reading, math, science, music, and computer science!)."),r.a.createElement("p",null,"I've taken courses in computer science in undergrad and worked on Python based research projects in psychology and in education. I also taught computer science for The Coder School, which has a very open-ended learning curriculum. Teaching computer science is where I learned to debug and have fun with coding."),r.a.createElement("p",null,"In the classroom, the teachers I worked with began to make use of new ed-tech tools that made monitoring reading progress so much easier. This was so different from the long-term research I was used to. These tools inspired me to pursue a different path in software, and led me to enrolling in the full-time software engineering bootcamp at Hackbright Academy."),r.a.createElement("p",null,"I am currently interested in full-stack software engineering roles after my graduation from Hackbright!")))};var H=function(e){return r.a.createElement("div",null,r.a.createElement(k,{title:e.title}),r.a.createElement(S,null,r.a.createElement("p",null,"Hello")))},V=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Vivi Nguyen",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Vivi Nguyen",subTitle:"Full-Stack Software Engineer",text:"Check out my projects below"},about:{title:"About Me"},contact:{title:"Contact Me"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement(h.a,{className:"p-0",fluid:!0},r.a.createElement(f.a,{className:"border-bottom",bg:"transparent",expand:"lg"},r.a.createElement(f.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(f.a.Collapse,{id:"navbar-toggle"},r.a.createElement(b.a,{className:"ml-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),r.a.createElement(d.a,{path:"/",exact:!0,render:function(){return r.a.createElement(I,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),r.a.createElement(d.a,{path:"/about",render:function(){return r.a.createElement(O,{title:e.state.about.title})}}),r.a.createElement(d.a,{path:"/contact",render:function(){return r.a.createElement(H,{title:e.state.contact.title})}}),r.a.createElement(p,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56),a(57);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.eea452d7.chunk.js.map