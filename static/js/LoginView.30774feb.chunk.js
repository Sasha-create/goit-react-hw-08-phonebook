(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{117:function(e,a,t){e.exports={form:"LoginView_form__1kd1x",label:"LoginView_label__1Yh9C"}},125:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(36),o=t(37),l=t(40),i=t(38),r=t(0),c=t(11),h=t(10),b=t(117),u=t.n(b),p=t(1),j=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,o=t.value;e.setState(Object(n.a)({},s,o))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:u.a.form,autoComplete:"off",children:[Object(p.jsxs)("label",{className:u.a.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(p.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:u.a.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(p.jsx)("input",{type:"password",name:"password",value:t,onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),t}(r.Component),m={onLogin:h.a.logIn};a.default=Object(c.b)(null,m)(j)}}]);
//# sourceMappingURL=LoginView.30774feb.chunk.js.map