(this["webpackJsonpticket-boking"]=this["webpackJsonpticket-boking"]||[]).push([[0],{119:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a,s,i,c,r,o,l,d,b,j,h,u,m=n(1),p=n.n(m),g=n(78),x=n.n(g),O=(n(90),n(25)),f=n(5),v=n(7),k=n(50),w=n(15),y=n(156),N=n(159),S=n(157),C=n(158),F=n(79),T=(n(119),n(9)),R=n.n(T),E=n(12),B=n(49),M=n(13),P=M.a.nav(a||(a=Object(E.a)(["\n  background: grey;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n"]))),I=Object(M.a)(O.b)(s||(s=Object(E.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: #15cdfc;\n  }\n"]))),z=Object(M.a)(B.a)(i||(i=Object(E.a)(["\n  display: none;\n  color: #fff;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 2.5rem;\n    cursor: pointer;\n  }\n"]))),A=M.a.div(c||(c=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),D=M.a.nav(r||(r=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),_=Object(M.a)(O.b)(o||(o=Object(E.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 16px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),L=n(0),W=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(P,{children:[Object(L.jsx)(I,{to:"/",children:Object(L.jsx)("h4",{style:{padding:"20px"},children:"Ticket-booking"})}),Object(L.jsx)(z,{}),Object(L.jsxs)(A,{children:[Object(L.jsx)(I,{to:"/home",activeStyle:!0,children:"Home"}),Object(L.jsx)(I,{to:"/book",activeStyle:!0,children:"Book"})]}),Object(L.jsx)(D,{children:Object(L.jsx)(_,{to:"/admin",children:"Admin"})})]})})},H=Object(y.a)((function(e){var t,n=e.breakpoints,a=e.spacing;return{root:Object(k.a)({margin:"auto",borderRadius:a(2),transition:"0.3s",boxShadow:"0px 14px 80px pink",position:"relative",maxWidth:500,marginLeft:"auto",overflow:"initial",backgroundImage:"linear-gradient(147deg, white 0%, black 74%)",display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:a(2)},n.up("md"),{flexDirection:"row",paddingTop:a(2)}),media:(t={width:"88%",marginLeft:"auto",marginRight:"auto",marginTop:a(-3),height:0,paddingBottom:"48%",borderRadius:a(2),backgroundColor:"pink",position:"relative"},Object(k.a)(t,n.up("md"),{width:"100%",marginLeft:a(-3),marginTop:0,transform:"translateX(-8px)"}),Object(k.a)(t,"&:after",{content:'" "',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(147deg, red 0%, pink 74%)",borderRadius:a(2),opacity:.5}),t),content:{padding:24},cta:{marginTop:24,textTransform:"initial"}}})),q=function(){var e=Object(m.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];Object(m.useEffect)((function(){R.a.get("https://bus-tickets-booking.herokuapp.com/update/details").then((function(e){a(e.data)}))}),[]);var s=H(),i=Object(F.useOverShadowStyles)();return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:"img1",children:[Object(L.jsx)(W,{}),Object(L.jsx)("h1",{className:"welcome",children:Object(L.jsx)("span",{children:"Hurry up!! Reserve your seats fast"})}),Object(L.jsxs)(N.a,{className:Object(w.a)(s.root,i.root),children:[Object(L.jsx)(S.a,{className:s.media,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYavwaWqM3wftg6O9FFEHwjcVT_YjKwQXgQ&usqp=CAU"}),Object(L.jsxs)(C.a,{children:[n.map((function(e,t){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h4",{className:"date",children:e.StartTime}),Object(L.jsx)("h1",{style:{textTransform:"uppercase"},className:"name",children:e.BusName}),Object(L.jsxs)("p",{style:{textTransform:"uppercase",color:"white"},children:["Cost:",e.Cost]}),Object(L.jsxs)("p",{className:"from",children:[Object(L.jsx)("strong",{className:"text",children:"From: "}),e.From,Object(L.jsx)("br",{}),Object(L.jsx)("strong",{className:"text",children:"To: "}),e.To]})]})})),Object(L.jsx)("div",{className:"button",children:Object(L.jsxs)("a",{children:[Object(L.jsx)("span",{}),Object(L.jsx)("span",{}),Object(L.jsx)("span",{}),Object(L.jsx)("span",{}),Object(L.jsx)("button",{onClick:function(){window.location.href="/book"},className:"but",children:"Book"})]})})]})]})]})})},Y=function(e){var t=e.setShowForm,n=p.a.useRef(null),a=p.a.useRef(null),s=p.a.useRef(null),i=p.a.useRef(null),c=Object(m.useState)(),r=Object(v.a)(c,2),o=r[0],l=r[1],d=Object(m.useState)(),b=Object(v.a)(d,2),j=b[0],h=b[1],u=Object(m.useState)(),g=Object(v.a)(u,2),x=g[0],O=g[1],f=Object(m.useState)(),k=Object(v.a)(f,2),w=k[0],y=k[1];return Object(L.jsxs)("div",{style:{backgroundColor:"darkgrey",padding:"20px",width:"400%",borderRadius:"20px"},children:[Object(L.jsx)("h2",{style:{textAlign:"center",fontFamily:"cursive"},children:"DETAILS"}),Object(L.jsxs)("form",{id:"add-app",onSubmit:function(e){e.preventDefault();var c={seatNo:a.current.value,passenger:{name:n.current.value,phNo:s.current.value,email:i.current.value}};(function(){var e={},t=!0;return n.current.value||(t=!1,e.name="*Please enter username",l(!0)),a.current.value||(t=!1,e.seatNo="*Please select SeatNo",y(!0)),s.current.value||(t=!1,e.phonenumber="*Please enter mobile no.",O(!0)),s.current.value&&(s.current.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)||(t=!1,e.phonenumber="*Please enter valid mobile no.",O(!0))),i.current.value||(t=!1,e.email="*Please enter email",h(!0)),t})()&&(console.log(c),R.a.post("https://bus-tickets-booking.herokuapp.com/ticket/booking",c).then((function(e){console.log(e)})).then((function(){return t(!1)})).catch((function(e){console.log(e)})))},children:[Object(L.jsx)("input",{type:"text",name:"name",ref:n,placeholder:"Enter name"}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),o?Object(L.jsx)("div",{className:"errorMsg",children:"*Enter name"}):null,Object(L.jsx)("input",{type:"text",name:"seatNo",ref:a,placeholder:"Enter seatNo"}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),w?Object(L.jsx)("div",{className:"errorMsg",children:"*Enter SeatNo"}):null,Object(L.jsx)("input",{type:"text",name:"phonenumber",ref:s,placeholder:"Enter Mobile"})," ",Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),x?Object(L.jsx)("div",{className:"errorMsg",children:"*Enter Mobile number"}):null,Object(L.jsx)("input",{type:"email",name:"email",ref:i,placeholder:"Enter Email"}),Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),j?Object(L.jsx)("div",{className:"errorMsg",children:"*Enter email"}):null,Object(L.jsx)("center",{children:Object(L.jsx)("button",{className:"btn btn-success",style:{display:"flex",background:"green"},children:"Update"})})]})]})},G=function(){var e=Object(m.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],s=Object(m.useState)(!1),i=Object(v.a)(s,2),c=i[0],r=i[1];return Object(m.useEffect)((function(){R.a.get("https://bus-tickets-booking.herokuapp.com/ticket/open").then((function(e){a(e.data)}))}),[]),Object(L.jsxs)("div",{style:{backgroundImage:"url('https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJhY2tncm91bmQlMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"100vh"},children:[Object(L.jsx)(W,{}),Object(L.jsx)("h1",{style:{textAlign:"center",color:"rgb(78, 124, 124)",fontSize:"56px",fontWeight:"800",margin:"0%"},children:"Available Seats"}),Object(L.jsxs)("div",{style:{display:"flex"},children:[Object(L.jsx)("div",{className:"bg-light-grey dib br3 ma2 pa3 bw2 shadow-5",style:{width:"300px",marginLeft:"10%",border:"2px solid black",boxShadow:"25px 50px 80px black"},children:n.map((function(e,t){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("button",{className:"card bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5",style:{padding:"5px"},onClick:function(){return r(!0)},children:e})})}))}),Object(L.jsx)("div",{className:"row",style:{marginRight:"0",marginLeft:"25%",float:"right",marginTop:"0%"},children:Object(L.jsx)("div",{className:"row",children:Object(L.jsx)("div",{className:"col-md-4",children:c?Object(L.jsx)(Y,{setShowForm:r}):null})})})]})]})},J=n(30),Q=n(31),U=n(11),X=n(34),Z=n(32),$=n.p+"static/media/undraw_welcome_3gvl.f18f6168.svg",K=(n(55),function(e){Object(X.a)(n,e);var t=Object(Z.a)(n);function n(e){var a;return Object(J.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",errors:{}},a.handleChangeEmail=a.handleChangeEmail.bind(Object(U.a)(a)),a.handleChangePassword=a.handleChangePassword.bind(Object(U.a)(a)),a.submituserRegistrationForm=a.submituserRegistrationForm.bind(Object(U.a)(a)),a}return Object(Q.a)(n,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"submituserRegistrationForm",value:function(e){if(e.preventDefault(),this.validateForm()){var t={email:this.state.email,password:this.state.password};R.a.post("https://bus-tickets-booking.herokuapp.com/ticket/login",t).then((function(e){console.log(e),!0===e.data?(window.location.href="/open",sessionStorage.setItem("admin","admin"),console.log(sessionStorage.getItem("admin"))):window.location.href="/admin"})).catch((function(e){alert(e)}))}}},{key:"validateForm",value:function(){var e={},t=!0;(this.state.email||(t=!1,e.email="*Please enter your email-ID."),"undefined"!==typeof this.state.email)&&(new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(this.state.email)||(t=!1,e.email="*Please enter valid email-ID."));return this.state.password||(t=!1,e.password="*Please enter your password."),this.setState({errors:e}),t}},{key:"render",value:function(){return Object(L.jsxs)("div",{className:"base-containerls",ref:this.props.containerRef,children:[Object(L.jsx)("div",{className:"imagels",children:Object(L.jsx)("img",{src:$,height:"200",width:"200",alt:"welcome"})}),Object(L.jsx)("div",{className:"headerls",children:"Admin Login"}),Object(L.jsx)("div",{className:"contentls",children:Object(L.jsxs)("div",{className:"formls",children:[Object(L.jsx)("div",{className:"form-groupls",children:Object(L.jsx)("input",{type:"email",name:"email",id:"exampleEmail",value:this.state.email,onChange:this.handleChangeEmail,placeholder:"Enter Email"})}),Object(L.jsx)("div",{className:"errorMsg",children:this.state.errors.email}),Object(L.jsx)("div",{className:"form-groupls",children:Object(L.jsx)("input",{type:"password",name:"password",id:"examplePassword",value:this.state.password,onChange:this.handleChangePassword,placeholder:"Enter Password"})}),Object(L.jsx)("div",{className:"errorMsg",children:this.state.errors.password})]})}),Object(L.jsx)("div",{className:"footerls",children:Object(L.jsx)("button",{onClick:this.submituserRegistrationForm,className:"buttonlog",children:"Login"})})]})}}]),n}(p.a.Component)),V=M.a.nav(l||(l=Object(E.a)(["\n  background: gray;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n"]))),ee=Object(M.a)(O.b)(d||(d=Object(E.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: #15cdfc;\n  }\n"]))),te=Object(M.a)(B.a)(b||(b=Object(E.a)(["\n  display: none;\n  color: #fff;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 2.5rem;\n    cursor: pointer;\n  }\n"]))),ne=M.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),ae=M.a.nav(h||(h=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),se=Object(M.a)(O.b)(u||(u=Object(E.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),ie=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(V,{children:[Object(L.jsx)(ee,{to:"/",children:Object(L.jsx)("h4",{style:{padding:"20px"},children:"Ticket-booking"})}),Object(L.jsx)(te,{}),Object(L.jsxs)(ne,{children:[Object(L.jsx)(ee,{to:"/open",activeStyle:!0,children:"Open"}),Object(L.jsx)(ee,{to:"/closed",activeStyle:!0,children:"Closed"}),Object(L.jsx)(ee,{to:"/update",activeStyle:!0,children:"update"}),Object(L.jsx)(ee,{to:"/reset",activeStyle:!0,children:"Reset"})]}),Object(L.jsx)(ae,{children:Object(L.jsx)(se,{to:"/",onClick:function(){sessionStorage.clear()},children:"Logout"})})]})})},ce=function(){var e=p.a.useState([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return p.a.useEffect((function(){R.a.get("https://bus-tickets-booking.herokuapp.com/ticket/open").then((function(e){a(e.data)}))}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(ie,{}),Object(L.jsx)("h1",{style:{textAlign:"center",color:"rgb(78, 124, 124)",fontSize:"56px",fontWeight:"800",margin:"0%"},children:"Available Seats"}),n.map((function(e,t){return Object(L.jsxs)("div",{className:"card bg-light-pink dib br3 ma2 pa3 grow bw2 shadow-5",children:[Object(L.jsx)("h5",{children:"S.No:"}),Object(L.jsx)("h2",{children:e})]})}))]})},re=function(){var e=Object(m.useState)(!1),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(m.useEffect)((function(){"admin"===sessionStorage.getItem("admin")&&a(!0)}),[sessionStorage.getItem("admnin")]),Object(L.jsxs)(L.Fragment,{children:[" ",n?Object(L.jsx)(ce,{}):Object(L.jsx)(K,{})," "]})},oe=function(e){var t=e.id,n=e.setShowForm,a=Object(m.useState)(),s=Object(v.a)(a,2),i=s[0],c=s[1],r=Object(m.useState)(),o=Object(v.a)(r,2),l=o[0],d=o[1],b=Object(m.useState)(),j=Object(v.a)(b,2),h=j[0],u=j[1];return Object(m.useEffect)((function(){R.a.get("https://bus-tickets-booking.herokuapp.com/ticket/details/".concat(t)).then((function(e){c(e.data.name),d(e.data.email),u(e.data.phNo)}))}),[t]),Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("button",{style:{width:"250px",height:"100%",backgroundColor:"grey",border:"4px solid black",marginLeft:"10%",padding:"2%",color:"whitesmoke"},onClick:function(){n(!1)},children:["Name:",i,Object(L.jsx)("br",{}),"Email:",l,Object(L.jsx)("br",{}),"Phone number:",h," "]})})},le=function(){var e=Object(m.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],s=Object(m.useState)(!1),i=Object(v.a)(s,2),c=i[0],r=i[1];return Object(m.useEffect)((function(){R.a.get("https://bus-tickets-booking.herokuapp.com/ticket/closed").then((function(e){a(e.data)}))}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(ie,{}),Object(L.jsx)("h1",{style:{textAlign:"center",color:"rgb(78, 124, 124)",fontSize:"56px",fontWeight:"800",margin:"0%"},children:"Reserved Seats"}),n.map((function(e,t){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("button",{className:"card bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5",style:{marginLeft:"10%"},onClick:function(){return r(!0)},children:["S.No",Object(L.jsx)("br",{})," ",e.seatNo," "]}),Object(L.jsx)("div",{className:"row",children:Object(L.jsxs)("div",{className:"col-md-4",children:[" ",c?Object(L.jsx)(oe,{id:e._id,setShowForm:r}):null," "]})})]})}))," "]})},de=n.p+"static/media/undraw_page_not_found_su7k.c6bc7ea6.svg",be=function(){return Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(L.jsx)("img",{src:de,height:"500",width:"500",alt:"404 not found"})})},je=function(e){Object(X.a)(n,e);var t=Object(Z.a)(n);function n(e){var a;return Object(J.a)(this,n),(a=t.call(this,e)).state={BusName:"",From:"",To:"",Cost:"",StartTime:"",detail:""},a.handleChangeBusName=a.handleChangeBusName.bind(Object(U.a)(a)),a.handleChangeFrom=a.handleChangeFrom.bind(Object(U.a)(a)),a.handleChangeTo=a.handleChangeTo.bind(Object(U.a)(a)),a.handleChangeCost=a.handleChangeCost.bind(Object(U.a)(a)),a.handleChangeStartTime=a.handleChangeStartTime.bind(Object(U.a)(a)),a.submituserRegistrationForm=a.submituserRegistrationForm.bind(Object(U.a)(a)),a}return Object(Q.a)(n,[{key:"handleChangeBusName",value:function(e){this.setState({BusName:e.target.value})}},{key:"handleChangeFrom",value:function(e){this.setState({From:e.target.value})}},{key:"handleChangeTo",value:function(e){this.setState({To:e.target.value})}},{key:"handleChangeStartTime",value:function(e){this.setState({StartTime:e.target.value})}},{key:"handleChangeCost",value:function(e){this.setState({Cost:e.target.value})}},{key:"submituserRegistrationForm",value:function(e){e.preventDefault();var t={BusName:this.state.BusName,From:this.state.From,To:this.state.To,StartTime:this.state.StartTime,Cost:this.state.Cost};R.a.put("https://bus-tickets-booking.herokuapp.com/update/details/60753c508fb098072c105f83",t).then((function(e){200===e.status&&alert("update successful")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(ie,{}),Object(L.jsxs)("div",{className:"base-containerls",ref:this.props.containerRef,children:[Object(L.jsx)("div",{className:"headerls",children:"Bus Details"}),Object(L.jsxs)("div",{className:"contentls",children:[Object(L.jsx)("div",{className:"imagels"}),Object(L.jsxs)("div",{className:"formls",children:[Object(L.jsx)("div",{className:"form-groupls",children:Object(L.jsx)("input",{type:"BusName",name:"BusName",id:"BusName",value:this.state.BusName,onChange:this.handleChangeBusName,placeholder:"Enter BusName"})}),Object(L.jsx)("div",{className:"form-groupls",children:Object(L.jsx)("input",{type:"From",name:"From",id:"From",value:this.state.From,onChange:this.handleChangeFrom,placeholder:"Enter From"})}),Object(L.jsx)("div",{className:"form-groupls",children:Object(L.jsx)("input",{type:"To",name:"To",id:"To",value:this.state.To,onChange:this.handleChangeTo,placeholder:"Enter To"})}),Object(L.jsx)("div",{className:"form-groupls",children:Object(L.jsx)("input",{type:"StartTime",name:"StartTime",id:"StartTime",value:this.state.StartTime,onChange:this.handleChangeStartTime,placeholder:"Enter Start Time&Date"})}),Object(L.jsx)("div",{className:"form-groupls",children:Object(L.jsx)("input",{type:"Cost",name:"Cost",id:"Cost",value:this.state.Cost,onChange:this.handleChangeCost,placeholder:"Enter Cost"})})]})]}),Object(L.jsx)("div",{className:"footerls",children:Object(L.jsx)("button",{onClick:this.submituserRegistrationForm,className:"buttonlog",children:"Update"})}),Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:this.state.detail})})]})]})}}]),n}(p.a.Component),he=n.p+"static/media/undraw_Throw_away_re_x60k.1db69a14.svg",ue=function(e){Object(X.a)(n,e);var t=Object(Z.a)(n);function n(e){var a;return Object(J.a)(this,n),(a=t.call(this,e)).submituserRegistrationForm=a.submituserRegistrationForm.bind(Object(U.a)(a)),a}return Object(Q.a)(n,[{key:"submituserRegistrationForm",value:function(e){e.preventDefault(),R.a.delete("https://bus-tickets-booking.herokuapp.com/ticket/reset").then((function(e){console.log(e),alert("Reset is successfull")})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(ie,{}),Object(L.jsxs)("div",{className:"base-containerls",ref:this.props.containerRef,children:[Object(L.jsx)("div",{className:"headerls",children:"Reset all data"}),Object(L.jsx)("div",{className:"imagels",children:Object(L.jsx)("img",{src:he,height:"300",width:"300",alt:"welcome"})}),Object(L.jsx)("div",{className:"footerls",children:Object(L.jsx)("button",{onClick:this.submituserRegistrationForm,className:"buttonlog",children:"Reset"})})]})]})}}]),n}(p.a.Component),me=function(){return Object(L.jsx)(O.a,{children:Object(L.jsxs)(f.c,{children:[Object(L.jsx)(f.a,{path:"/home",exact:!0,component:q}),Object(L.jsx)(f.a,{path:"/book",exact:!0,component:G}),Object(L.jsx)(f.a,{path:"/",exact:!0,component:q}),Object(L.jsx)(f.a,{path:"/admin",exact:!0,component:re}),Object(L.jsx)(f.a,{path:"/open",exact:!0,component:ce}),Object(L.jsx)(f.a,{path:"/closed",exact:!0,component:le}),Object(L.jsx)(f.a,{path:"/update",exact:!0,component:je}),Object(L.jsx)(f.a,{path:"/reset",exact:!0,component:ue}),Object(L.jsx)(f.a,{path:"*",component:be})]})})};n(142),n(143);x.a.render(Object(L.jsx)(me,{}),document.getElementById("root"))},55:function(e,t,n){},90:function(e,t,n){}},[[144,1,2]]]);
//# sourceMappingURL=main.fadbd67b.chunk.js.map