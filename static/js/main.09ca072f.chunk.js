(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{23:function(e,t,i){},24:function(e,t,i){},26:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),c=i(17),r=i.n(c),s=(i(23),i(10)),o=(i(24),[{id:1,question:"What is the use of useState hook",correct:2,answer1:{id:1,text:"To manage side effects",correct:!1},answer2:{id:2,text:"To mainitain states",correct:!0},answer3:{id:3,text:"To manage callbacks",correct:!1},answer4:{id:4,text:"To manage HOCs",correct:!1}},{id:2,question:"What does ES6 mean",correct:4,answer1:{id:1,text:"ES Lint 6",correct:!1},answer2:{id:2,text:"Enterprise Server",correct:!1},answer3:{id:3,text:"Emmets Substore",correct:!1},answer4:{id:4,text:"ECMA Script",correct:!0}},{id:3,question:"What does ES6 mean",correct:4,answer1:{id:1,text:"ES Lint 6",correct:!1},answer2:{id:2,text:"Enterprise Server",correct:!1},answer3:{id:3,text:"Emmets Substore",correct:!1},answer4:{id:4,text:"ECMA Script",correct:!0}},{id:4,question:"What does ES6 mean",correct:4,answer1:{id:1,text:"ES Lint 6",correct:!1},answer2:{id:2,text:"Enterprise Server",correct:!1},answer3:{id:3,text:"Emmets Substore",correct:!1},answer4:{id:4,text:"ECMA Script",correct:!0}}]),l=i(28),d=i(29),u=i(2),j={initial:{opacity:1},final:{opacity:1,transition:{staggerChildren:1}}},w={initial:{opacity:0},final:{opacity:1}},m={initial:{opacity:0},final:{opacity:1},hover:{scale:1.1,boxShadow:"0px 5px 15px 0px rgba(0,0,0,0.69)"},tap:{scale:.9}},h=function(e){var t=e.selectedQues,i=e.setSelectedQues,n=e.setEndQues,c=e.prize,r=Object(a.useState)(0),h=Object(s.a)(r,2),b=h[0],p=h[1],x=Object(a.useState)(!1),O=Object(s.a)(x,2),v=O[0],f=O[1],S=Object(a.useState)(3),y=Object(s.a)(S,2),g=y[0],E=y[1],C=Object(a.useState)(!1),N=Object(s.a)(C,2),T=N[0],Q=N[1],k=Object(a.useState)(!1),q=Object(s.a)(k,2),z=q[0],H=q[1],A=null,M=function(e,a){if(a!==e)return f(!0),H(!0),void p(e);p(e),n(t),f(!0),t===o.length?(H(!0),n(t)):(Q(!0),A=setInterval((function(){E((function(e){return e-1}))}),1e3),setTimeout((function(){i((function(e){return e+1})),p(null),f(null),clearInterval(A)}),3e3))};return Object(a.useEffect)((function(){E(3),Q(!1)}),[t]),Object(u.jsxs)(l.a.div,{variants:j,initial:"initial",animate:"final",className:"main",children:[o.map((function(e){return Object(u.jsx)(u.Fragment,{children:t===e.id?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a.div,{variants:w,div:!0,className:"que",children:e.question}),Object(u.jsxs)(l.a.div,{variants:m,className:"ans",children:[Object(u.jsxs)(l.a.li,{variants:m,whileHover:"hover",whileTap:"tap",className:"option ".concat(v?b===e.answer1.id?"correct":"wrong":""),onClick:function(){M(e.correct,e.answer1.id)},children:["A. ",e.answer1.text]},e.answer1.id),Object(u.jsxs)(l.a.li,{variants:m,whileHover:"hover",whileTap:"tap",className:"option ".concat(v?b===e.answer2.id?"correct":"wrong":""),onClick:function(){M(e.correct,e.answer2.id)},children:["B. ",e.answer2.text]},e.answer2.id),Object(u.jsxs)(l.a.li,{variants:m,whileHover:"hover",whileTap:"tap",className:"option ".concat(v?b===e.answer3.id?"correct":"wrong":""),onClick:function(){M(e.correct,e.answer3.id)},children:["C. ",e.answer3.text]},e.answer3.id),Object(u.jsxs)(l.a.li,{variants:m,whileHover:"hover",whileTap:"tap",className:"option ".concat(v?b===e.answer4.id?"correct":"wrong":""),onClick:function(){M(e.correct,e.answer4.id)},children:["D. ",e.answer4.text]},e.answer4.id)]})]}):null})})),Object(u.jsxs)(d.a,{children:[T&&Object(u.jsx)(l.a.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"tween"},exit:{scale:0,opacity:0},className:"modal",children:Object(u.jsx)("h1",{children:"Next question in: ".concat(g," seconds")})}),z&&Object(u.jsxs)(l.a.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"tween"},className:"modal",children:[Object(u.jsx)("h1",{children:"You won $ ".concat(c," ")}),Object(u.jsx)(l.a.button,{whileHover:{scale:1.2},whileTap:{scale:.9},onClick:function(){window.location.reload(!1)},children:"Try Again"})]})]})]})},b=[{id:1,amount:100},{id:2,amount:200},{id:3,amount:300},{id:4,amount:400},{id:5,amount:500},{id:6,amount:600},{id:7,amount:700},{id:8,amount:800},{id:9,amount:900},{id:10,amount:1e3}].reverse(),p={initial:{opacity:0},final:{opacity:1,transition:{duration:.2,when:"beforeChildren",staggerChildren:.15}}},x={initial:{y:50,opacity:0},final:{y:0,opacity:1}},O=function(e){var t=e.selectedQues,i=e.setPrize,a=e.endQues,n=b.map((function(e){return e.amount}));console.log(n.slice(10));var c=0===a?0:n.slice(-a).reduce((function(e,t){return e+t}));return console.log(c),i(c),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a.div,{className:"side",variants:p,initial:"initial",animate:"final",children:b.map((function(e){return Object(u.jsxs)(l.a.li,{variants:x,className:"money ".concat(t===e.id?"active":""),children:["$ ",e.amount]},e.id)}))})})},v=function(){var e=Object(a.useState)(1),t=Object(s.a)(e,2),i=t[0],n=t[1],c=Object(a.useState)(0),r=Object(s.a)(c,2),o=r[0],l=r[1],d=Object(a.useState)(0),j=Object(s.a)(d,2),w=j[0],m=j[1];return Object(u.jsxs)("div",{className:"body",children:[Object(u.jsx)(h,{selectedQues:i,setSelectedQues:n,setEndQues:m,prize:o}),Object(u.jsx)(O,{selectedQues:i,setPrize:l,endQues:w})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.09ca072f.chunk.js.map