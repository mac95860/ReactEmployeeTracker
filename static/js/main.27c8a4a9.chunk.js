(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(22),a(2)),s=a(3),u=a(5),i=a(4);a(23);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"display-2 p-3"},"Employee Tracking"))};var p=function(e){var t=e.handleInputChange;return r.a.createElement("div",{className:"input-group my-3 w-25"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-default"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-search",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})))),r.a.createElement("input",{onChange:function(e){return t(e)},type:"text",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",placeholder:"Employee's name"}))};var h=function(e){var t=e.cell,a=e.picture,n=e.name,l=e.email,c=e.location;return r.a.createElement("tr",{key:t},r.a.createElement("td",{scope:"row"},r.a.createElement("img",{src:a.thumbnail,alt:"employee pic"})),r.a.createElement("td",null,n.first," ",n.last),r.a.createElement("td",null,l),r.a.createElement("td",null,t),r.a.createElement("td",null,c.city),r.a.createElement("td",null,c.state))};var d=function(e){var t=e.results,a=e.sortUsers;return r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"id"),r.a.createElement("th",{scope:"col",onClick:function(e){return a(e)}},"name"),r.a.createElement("th",{scope:"col"},"email"),r.a.createElement("th",{scope:"col"},"cell"),r.a.createElement("th",{scope:"col"},"City"),r.a.createElement("th",{scope:"col"},"State"))),r.a.createElement("tbody",null,t.map((function(e){var t=e.cell,a=e.name,n=e.picture,l=e.location,c=e.email;return r.a.createElement(h,{cell:t,name:a,location:l,picture:n,email:c})}))))},f=a(16),v=a.n(f),E=function(){return v.a.get("https://randomuser.me/api/?results=200&nat=us")},g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:null,users:null},e.sortUsers=function(){var t=e.state.results.sort((function(e,t){var a=e.name,n=t.name;return a>n?1:a<n?-1:a===n?0:void 0}));return e.setState({results:t})},e.handleInputChange=function(t){var a=t.target.value,n=e.state.results.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({users:n})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){var a=t.data;e.setState({results:a.results,users:a.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.users;return r.a.createElement("div",{className:"container d-flex justify-content-center flex-column"},r.a.createElement(p,{handleInputChange:this.handleInputChange}),e&&r.a.createElement(d,{results:e,sortUsers:this.sortUsers}))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(g,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.27c8a4a9.chunk.js.map