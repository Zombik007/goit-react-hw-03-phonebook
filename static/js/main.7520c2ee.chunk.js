(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={phonebook__form:"Phonebook_phonebook__form__2y3vs",phonebook__label:"Phonebook_phonebook__label__2j_q2",phonebook__input:"Phonebook_phonebook__input__2mxIk",phonebook__button_form:"Phonebook_phonebook__button_form__2VtJJ",phonebook__list:"Phonebook_phonebook__list__2gHrk",phonebook__item:"Phonebook_phonebook__item__3ruUJ",phonebook__button:"Phonebook_phonebook__button__1aZzs"}},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),a=n.n(o),c=n(8),r=n.n(c),s=(n(15),n(10)),i=n(3),b=n(4),u=n(6),l=n(5),h=n(19),_=n(9),m=n(1),p=n.n(m),j=n(0),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.inputChange=function(e){var n=e.currentTarget,o=n.name,a=n.value;t.setState(Object(_.a)({},o,a))},t.formSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:p.a.phonebook__form,onSubmit:this.formSubmit,children:[Object(j.jsxs)("label",{className:p.a.phonebook__label,children:["Name",Object(j.jsx)("input",{className:p.a.phonebook__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.inputChange})]}),Object(j.jsxs)("label",{className:p.a.phonebook__label,children:["Number",Object(j.jsx)("input",{className:p.a.phonebook__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.inputChange})]}),Object(j.jsx)("button",{className:p.a.phonebook__button_form,type:"submit",children:"Add contact"})]})})}}]),n}(o.Component),f=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"filter",title:"Search contacts",value:e,onChange:n})]})},k=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:p.a.phonebook__list,children:e.map((function(t){var e=t.id,o=t.name,a=t.number;return Object(j.jsxs)("li",{className:p.a.phonebook__item,children:[o,": ",a,Object(j.jsx)("button",{className:p.a.phonebook__button,onClick:function(){n(e)},children:"Delete contact"})]},e)}))})},O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContactOnFormSubmit=function(e){var n={id:Object(h.a)(),name:e.name,number:e.number};t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(s.a)(e))}}))},t.searchFilterContact=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,o=e.contacts,a=n.toLowerCase();return o.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getFilteredContacts();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:this.addContactOnFormSubmit}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(f,{value:this.state.filter,onChange:this.searchFilterContact}),Object(j.jsx)(k,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(o.Component);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7520c2ee.chunk.js.map