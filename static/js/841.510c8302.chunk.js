"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[841],{8445:function(n,e,t){t.d(e,{z:function(){return o}});var r,i=t(168),o=t(6444).ZP.button(r||(r=(0,i.Z)(["\n  max-width: 150px;\n  height: 35px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  background-color: green;\n\n  font-weight: 500;\n  font-size: 16px;\n  box-shadow: 3px 5px 24px -9px rgba(0, 0, 0, 0.75);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    scale: 1.05;\n    color: green;\n    background-color: #fff;\n    border: 1px solid green;\n  }\n"])))},1149:function(n,e,t){t.d(e,{W:function(){return o}});var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])))},5841:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i,o,c,a,s,u,l=t(5861),f=t(9439),d=t(7757),p=t.n(d),h=t(2791),x=t(6036),g=t(1087),v=t(7689),m=t(7596),Z=t(8565),j=t(168),b=t(6444),k=t(1149),w=t(8445),y=(0,b.ZP)(k.W)(r||(r=(0,j.Z)(["\n  align-items: flex-start;\n"]))),P=(0,b.ZP)(w.z)(i||(i=(0,j.Z)(["\n  margin-bottom: 40px;\n"]))),_=b.ZP.li(o||(o=(0,j.Z)(["\n  display: block;\n  color: green;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: lightgreen;\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),z=b.ZP.h5(c||(c=(0,j.Z)(["\n  margin-bottom: 10px;\n  font-size: 16px;\n"]))),S=b.ZP.div(a||(a=(0,j.Z)(["\ndisplay: flex;\nmargin-bottom: 20px;\n"]))),U=b.ZP.div(s||(s=(0,j.Z)(["\nmargin-left: 50px;\n"]))),C=b.ZP.div(u||(u=(0,j.Z)(["\n  width: 300px;\n  height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: lightgrey;\n"]))),O=t(3521),A=t(184),I=function(n){var e=n.info,t=(0,h.useState)(!1),r=(0,f.Z)(t,2),i=r[0],o=r[1],c=(0,h.useState)(""),a=(0,f.Z)(c,2),s=a[0],u=a[1],d=e.release_date,x=e.poster_path,g=e.title,v=e.vote_average,j=e.overview,b=e.genres,k=new Date(d).getFullYear(),w=Math.round(10*v);return(0,h.useEffect)((function(){if(x){var n=function(){var n=(0,l.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,(0,Z.Qk)(x);case 4:e=n.sent,u(e),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.massege),m.Am.error("Ooops! Something went wrong. Please, try later");case 12:return n.prev=12,o(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,8,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[x]),(0,A.jsxs)(S,{children:[i&&(0,A.jsx)(O.Z,{}),s?(0,A.jsx)("img",{src:s,alt:s}):(0,A.jsx)(C,{children:"Image not found"}),(0,A.jsxs)(U,{children:[(0,A.jsxs)("h2",{children:[g,k?(0,A.jsxs)("span",{children:["(",k,")"]}):null]}),(0,A.jsxs)("p",{children:["User score: ",(0,A.jsxs)("span",{children:[w,"%"]})]}),(0,A.jsx)("h3",{children:"Overview"}),(0,A.jsx)("p",{children:j}),(0,A.jsx)("h3",{children:"Genres"}),(0,A.jsx)("ul",{children:b&&b.map((function(n){var e=n.id,t=n.name;return(0,A.jsx)("li",{children:t},e)}))})]})]})},R=function(){var n=(0,h.useState)(!1),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=(0,v.UO)().movieId,o=(0,h.useState)({}),c=(0,f.Z)(o,2),a=c[0],s=c[1],u=(0,v.s0)(),d=(0,v.TH)(),j=(0,h.useRef)(d.state);(0,h.useEffect)((function(){var n=function(){var n=(0,l.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.prev=1,n.next=4,(0,Z.Pg)(i);case 4:e=n.sent,s(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),m.Am.error("Ooops! Something went wrong. Please, try later");case 11:return n.prev=11,r(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]);return(0,A.jsxs)(y,{children:[(0,A.jsx)(m.Ix,{position:"top-center",theme:"dark"}),t&&(0,A.jsx)(O.Z,{}),(0,A.jsxs)(P,{type:"button",onClick:function(){return u(j.current)},children:[(0,A.jsx)(x.wFh,{})," Go back"]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(I,{info:a}),(0,A.jsxs)("div",{children:[(0,A.jsx)(z,{children:"Additional information"}),(0,A.jsxs)("ul",{children:[(0,A.jsx)(_,{children:(0,A.jsx)(g.rU,{state:j,to:"cast",children:"Cast"})}),(0,A.jsx)(_,{children:(0,A.jsx)(g.rU,{state:j,to:"reviews",children:"Review"})})]})]})]}),(0,A.jsx)(v.j3,{})]})}},8565:function(n,e,t){t.d(e,{JN:function(){return o},Pg:function(){return a},Pt:function(){return c},Qk:function(){return l},tx:function(){return u},zv:function(){return s}});var r=t(1243);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="6031aff1495aee0d83201b316a243945",o=function(){return r.Z.get("/trending/movie/day?api_key=".concat(i)).then((function(n){return n.data.results}))},c=function(n){return r.Z.get("/search/movie?api_key=".concat(i),{params:{query:n}}).then((function(n){return n.data.results}))},a=function(n){return r.Z.get("/movie/".concat(n,"?api_key=").concat(i)).then((function(n){return n.data}))},s=function(n){return r.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i)).then((function(n){return n.data.cast}))},u=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i)).then((function(n){return n.data.results}))},l=function(n){return r.Z.get("https://image.tmdb.org/t/p/w300".concat(n)).then((function(n){return n.config.url}))}}}]);
//# sourceMappingURL=841.510c8302.chunk.js.map