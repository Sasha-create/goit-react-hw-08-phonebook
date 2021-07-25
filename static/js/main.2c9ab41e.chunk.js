(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{10:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return S}));var r,c,a,u,o=n(2),s={registerRequest:Object(o.b)("auth/registerRequest"),registerSuccess:Object(o.b)("auth/registerSuccess"),registerError:Object(o.b)("auth/registerError"),loginRequest:Object(o.b)("auth/loginRequest"),loginSuccess:Object(o.b)("auth/loginSuccess"),loginError:Object(o.b)("auth/loginError"),logoutRequest:Object(o.b)("auth/logoutRequest"),logoutSuccess:Object(o.b)("auth/logoutSuccess"),logoutError:Object(o.b)("auth/logoutError"),getCurrentUserRequest:Object(o.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(o.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(o.b)("auth/getCurrentUserError")},i=n(3),b=n(8),j={name:null,email:null},l=Object(o.c)(j,(r={},Object(i.a)(r,s.registerSuccess,(function(t,e){return e.payload.user})),Object(i.a)(r,s.loginSuccess,(function(t,e){return e.payload.user})),Object(i.a)(r,s.logoutSuccess,(function(){return j})),Object(i.a)(r,s.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),f=Object(o.c)(null,(c={},Object(i.a)(c,s.registerSuccess,(function(t,e){return e.payload.token})),Object(i.a)(c,s.loginSuccess,(function(t,e){return e.payload.token})),Object(i.a)(c,s.logoutSuccess,(function(){return null})),c)),d=function(t,e){return e.payload},O=Object(o.c)(null,(a={},Object(i.a)(a,s.registerError,d),Object(i.a)(a,s.loginError,d),Object(i.a)(a,s.logoutError,d),Object(i.a)(a,s.getCurrentUserError,d),a)),h=Object(o.c)(!1,(u={},Object(i.a)(u,s.registerSuccess,(function(){return!0})),Object(i.a)(u,s.loginSuccess,(function(){return!0})),Object(i.a)(u,s.getCurrentUserSuccess,(function(){return!0})),Object(i.a)(u,s.registerError,(function(){return!1})),Object(i.a)(u,s.loginError,(function(){return!1})),Object(i.a)(u,s.getCurrentUserError,(function(){return!1})),Object(i.a)(u,s.logoutSuccess,(function(){return!1})),u)),p=Object(b.c)({user:l,isAuthenticated:h,token:f,error:O}),g=n(9),v=n.n(g),m=n(19),x=n(16),k=n.n(x);k.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var C=function(t){k.a.defaults.headers.common.Authorization="Bearer ".concat(t)},_=function(){k.a.defaults.headers.common.Authorization=""},y={register:function(t){return function(){var e=Object(m.a)(v.a.mark((function e(n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.registerRequest()),e.prev=1,e.next=4,k.a.post("/users/signup",t);case 4:r=e.sent,C(r.data.token),n(s.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(s.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(m.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(s.logoutRequest()),t.prev=1,t.next=4,k.a.post("/users/logout");case 4:_(),e(s.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(s.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(m.a)(v.a.mark((function e(n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.loginRequest()),e.prev=1,e.next=4,k.a.post("/users/login",t);case 4:r=e.sent,C(r.data.token),n(s.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(s.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(m.a)(v.a.mark((function t(e,n){var r,c,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return C(c),e(s.getCurrentUserRequest()),t.prev=5,t.next=8,k.a.get("/users/current");case 8:a=t.sent,e(s.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(s.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},S={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUsername:function(t){return t.auth.user.name}}},110:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(22),a=n.n(c),u=n(18),o=n(11),s=n(52),i=n(29),b=n(2),j=n(20),l=n(53),f=n.n(l),d=n(39),O=n(10),h=Object(i.a)(Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),p={key:"auth",storage:f.a,whitelist:["token"]},g=Object(b.a)({reducer:{auth:Object(j.g)(p,O.b),contacts:d.b},middleware:h,devTools:!1}),v={store:g,persistor:Object(j.h)(g)},m=(n(88),n(89),n(36)),x=n(37),k=n(40),C=n(38),_=n(7),y=n(58),S=n(54),A=n.n(S),w="/",E="/register",U="/login",N="/contacts",L=n(24),q=n.n(L),R=n(1),T=Object(o.b)((function(t){return{isAuthenticated:O.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(R.jsxs)("nav",{children:[Object(R.jsx)(u.b,{to:w,exact:!0,className:q.a.link,activeClassName:q.a.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(R.jsx)(u.b,{to:N,exact:!0,className:q.a.link,activeClassName:q.a.activeLink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})})),z=n(25),B=n.n(z),I=n.p+"static/media/default-user.1ac4f3d0.png",M={onLogout:O.a.logOut},F=Object(o.b)((function(t){return{name:O.c.getUsername(t),avatar:I}}),M)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(R.jsxs)("div",{className:B.a.container,children:[Object(R.jsx)("img",{src:e,alt:"",width:"32",className:B.a.avatar}),Object(R.jsxs)("span",{className:B.a.name,children:["Welcome, ",n]}),Object(R.jsx)("button",{className:B.a.button,type:"button",onClick:r,children:"Logout"})]})})),D=n(26),G=n.n(D),H=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(u.b,{to:E,exact:!0,className:G.a.link,activeClassName:G.a.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(R.jsx)(u.b,{to:U,exact:!0,className:G.a.link,activeClassName:G.a.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},J=Object(o.b)((function(t){return{isAuthenticated:O.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(R.jsxs)("header",{className:A.a.header,children:[Object(R.jsx)(T,{}),e?Object(R.jsx)(F,{}):Object(R.jsx)(H,{})]})})),W=n(55),X=n.n(W),Z=n(56),P=n.n(Z);function Q(){return Object(R.jsx)("div",{className:P.a.loading,children:Object(R.jsx)(X.a,{className:"status",type:"ThreeDots",color:"#00BFFF",height:80,width:80})})}var V=n(50),K=n(21),Y=n(30),$=Object(o.b)((function(t){return{isAuthenticated:O.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(Y.a)(t,["component","isAuthenticated","redirectTo"]);return Object(R.jsx)(_.b,Object(K.a)(Object(K.a)({},c),{},{render:function(t){return n?Object(R.jsx)(e,Object(K.a)({},t)):Object(R.jsx)(_.a,{to:r})}}))})),tt=Object(o.b)((function(t){return{isAuthenticated:O.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(Y.a)(t,["component","isAuthenticated","redirectTo"]);return Object(R.jsx)(_.b,Object(K.a)(Object(K.a)({},c),{},{render:function(t){return n&&c.restricted?Object(R.jsx)(_.a,{to:r}):Object(R.jsx)(e,Object(K.a)({},t))}}))})),et=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,123))})),nt=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,124))})),rt=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,125))})),ct=Object(r.lazy)((function(){return Promise.all([n.e(7),n.e(0)]).then(n.bind(null,126))})),at=function(t){Object(k.a)(n,t);var e=Object(C.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(R.jsxs)(V.a,{children:[Object(R.jsx)(J,{}),Object(R.jsx)(r.Suspense,{fallback:Object(R.jsx)(Q,{}),children:Object(R.jsxs)(_.d,{children:[Object(R.jsx)(tt,{exact:!0,path:w,component:et}),Object(R.jsx)(tt,{exact:!0,path:E,restricted:!0,redirectTo:N,component:nt}),Object(R.jsx)(tt,{path:U,restricted:!0,redirectTo:N,component:rt}),Object(R.jsx)($,{path:N,redirectTo:U,component:ct}),Object(R.jsx)(tt,{component:et})]})}),Object(R.jsx)(y.a,{autoClose:3e3})]})}}]),n}(r.Component),ut={onGetCurrentUser:O.a.getCurrentUser},ot=Object(o.b)(null,ut)(at);a.a.render(Object(R.jsx)(o.a,{store:v.store,children:Object(R.jsx)(s.a,{loading:null,persistor:v.persistor,children:Object(R.jsx)(u.a,{children:Object(R.jsx)(ot,{})})})}),document.getElementById("root"))},24:function(t,e,n){t.exports={link:"Navigation_link__2BMLE",activeLink:"Navigation_activeLink__D7ple"}},25:function(t,e,n){t.exports={container:"UserMenu_container__etj2w",avatar:"UserMenu_avatar__XEnZo",name:"UserMenu_name__3BlHa",button:"UserMenu_button__1H7A-"}},26:function(t,e,n){t.exports={link:"AuthNav_link__tQzeX",activeLink:"AuthNav_activeLink__ddC0d"}},39:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return v})),n.d(e,"c",(function(){return C}));var r,c,a=n(3),u=n(29),o=n(8),s=n(2),i=n(6),b=Object(s.c)([],(r={},Object(a.a)(r,i.g,(function(t,e){return e.payload})),Object(a.a)(r,i.c,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(a.a)(r,i.j,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),j=Object(s.c)(!1,(c={},Object(a.a)(c,i.f,(function(){return!0})),Object(a.a)(c,i.g,(function(){return!1})),Object(a.a)(c,i.e,(function(){return!1})),Object(a.a)(c,i.b,(function(){return!0})),Object(a.a)(c,i.c,(function(){return!1})),Object(a.a)(c,i.a,(function(){return!1})),Object(a.a)(c,i.i,(function(){return!0})),Object(a.a)(c,i.j,(function(){return!1})),Object(a.a)(c,i.h,(function(){return!1})),c)),l=Object(s.c)("",Object(a.a)({},i.d,(function(t,e){return e.payload}))),f=Object(o.c)({items:b,filter:l,loading:j}),d=n(9),O=n.n(d),h=n(19),p=n(16),g=n.n(p),v={fetchContacts:function(){return function(){var t=Object(h.a)(O.a.mark((function t(e){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i.f()),t.prev=1,t.next=4,g.a.get("/contacts");case 4:n=t.sent,r=n.data,e(i.g(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(i.e(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(h.a)(O.a.mark((function n(r){var c,a,u;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={name:t,number:e},r(i.b()),n.prev=2,n.next=5,g.a.post("/contacts",c);case 5:a=n.sent,u=a.data,r(i.c(u)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r(i.a(n.t0.message));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},removeContact:function(t){return function(){var e=Object(h.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.i()),e.prev=1,e.next=4,g.a.delete("/contacts/".concat(t));case 4:n(i.j(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(i.h(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},m=n(28),x=function(t){return t.contacts.filter},k=function(t){return t.contacts.items},C={getLoading:function(t){return t.contacts.loading},getFilter:x,getAllContacts:k,getVisibleContacts:Object(m.a)([k,x],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))}},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(57),c=n.n(r),a=n(1);var u=function(t){var e=t.children;return Object(a.jsx)("div",{className:c.a.container,children:e})}},54:function(t,e,n){t.exports={header:"AppBar_header__3Z2kq"}},56:function(t,e,n){t.exports={loading:"Loader_loading__3MaeU"}},57:function(t,e,n){t.exports={container:"Container_container__1WbAB"}},6:function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return j})),n.d(e,"h",(function(){return l})),n.d(e,"d",(function(){return f}));var r=n(2),c=Object(r.b)("contacts/fetchContactRequest"),a=Object(r.b)("contacts/fetchContactSuccess"),u=Object(r.b)("contacts/fetchContactError"),o=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/removeContactRequest"),j=Object(r.b)("contacts/removeContactSuccess"),l=Object(r.b)("contacts/removeContactError"),f=Object(r.b)("contacts/changeFilter")},89:function(t,e,n){}},[[110,5,6]]]);
//# sourceMappingURL=main.2c9ab41e.chunk.js.map