(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){},24:function(t,e,n){t.exports=n(39)},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(20),i=n.n(o),c=(n(29),n(3)),s=n(4),u=n(6),l=n(5),h=n(21),f=n(1),p=(n(18),n(12)),y=n(11),v=n.n(y),d=(n(30),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this)).submitQuestion=function(t){t.preventDefault(),fetch("".concat("https://fs-trivia-backend-syou.onrender.com","/questions"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:r.state.question,answer:r.state.answer,difficulty:r.state.difficulty,category:r.state.category})}).then(function(t){if(!t.ok)throw new Error("Unable to add question");document.getElementById("add-question-form").reset()}).catch(function(t){alert("Unable to add question. Please try your request again")})},r.handleChange=function(t){r.setState(Object(p.a)({},t.target.name,t.target.value))},r.state={question:"",answer:"",difficulty:1,category:1,categories:{}},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat("https://fs-trivia-backend-syou.onrender.com","/categories")).then(function(t){return t.json()}).then(function(e){t.setState({categories:e.categories})}).catch(function(t){alert("Unable to load categories. Please try your request again")})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{id:"add-form"},a.a.createElement("h2",null,"Add a New Trivia Question"),a.a.createElement("form",{className:"form-view",id:"add-question-form",onSubmit:this.submitQuestion},a.a.createElement("label",null,"Question",a.a.createElement("input",{type:"text",name:"question",onChange:this.handleChange})),a.a.createElement("label",null,"Answer",a.a.createElement("input",{type:"text",name:"answer",onChange:this.handleChange})),a.a.createElement("label",null,"Difficulty",a.a.createElement("select",{name:"difficulty",onChange:this.handleChange},a.a.createElement("option",{value:"1"},"1"),a.a.createElement("option",{value:"2"},"2"),a.a.createElement("option",{value:"3"},"3"),a.a.createElement("option",{value:"4"},"4"),a.a.createElement("option",{value:"5"},"5"))),a.a.createElement("label",null,"Category",a.a.createElement("select",{name:"category",onChange:this.handleChange},Object.keys(this.state.categories).map(function(e){return a.a.createElement("option",{key:e,value:e},t.state.categories[e])}))),a.a.createElement("input",{type:"submit",className:"button",value:"Submit"})))}}]),n}(r.Component)),m=n(13),g=(n(31),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={visibleAnswer:!1},t}return Object(s.a)(n,[{key:"flipVisibility",value:function(){this.setState({visibleAnswer:!this.state.visibleAnswer})}},{key:"render",value:function(){var t=this,e=this.props,n=e.question,r=e.answer,o=e.category,i=e.difficulty;return a.a.createElement("div",{className:"Question-holder"},a.a.createElement("div",{className:"Question"},n),a.a.createElement("div",{className:"Question-status"},a.a.createElement("img",{className:"category",alt:"".concat(o.toLowerCase()),src:"".concat(o.toLowerCase(),".svg")}),a.a.createElement("div",{className:"difficulty"},"Difficulty: ",i),a.a.createElement("img",{src:"delete.png",alt:"delete",className:"delete",onClick:function(){return t.props.questionAction("DELETE")}})),a.a.createElement("div",{className:"show-answer button",onClick:function(){return t.flipVisibility()}},this.state.visibleAnswer?"Hide":"Show"," Answer"),a.a.createElement("div",{className:"answer-holder"},a.a.createElement("span",{style:{visibility:this.state.visibleAnswer?"visible":"hidden"}},"Answer: ",r)))}}]),n}(r.Component)),w=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={query:""},t.getInfo=function(e){e.preventDefault(),t.props.submitSearch(t.state.query)},t.handleInputChange=function(){t.setState({query:t.search.value})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("form",{onSubmit:this.getInfo},a.a.createElement("input",{placeholder:"Search questions...",ref:function(e){return t.search=e},onChange:this.handleInputChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"button"}))}}]),n}(r.Component);function b(){b=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new O(a||[]);return r(i,"_invoke",{value:x(t,n,c)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h={};function f(){}function p(){}function y(){}var v={};s(v,o,function(){return this});var d=Object.getPrototypeOf,m=d&&d(d(L([])));m&&m!==e&&n.call(m,o)&&(v=m);var g=y.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e(function(a,i){!function r(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=l(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=y,r(g,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:p,configurable:!0}),p.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),s(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),s(g,c,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var E=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).getQuestions=Object(m.a)(b().mark(function e(){var n,r;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://fs-trivia-backend-syou.onrender.com","/questions?page=").concat(t.state.page));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t.setState({questions:r.questions,totalQuestions:r.total_questions,categories:r.categories,currentCategory:r.current_category}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Unable to load questions. Please try your request again");case 13:case"end":return e.stop()}},e,null,[[0,10]])})),t.getByCategory=function(e){v.a.ajax({url:"/categories/".concat(e,"/questions"),type:"GET",success:function(e){t.setState({questions:e.questions,totalQuestions:e.total_questions,currentCategory:e.current_category})},error:function(t){alert("Unable to load questions. Please try your request again")}})},t.submitSearch=function(e){v.a.ajax({url:"/questions/search",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({searchTerm:e}),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(e){t.setState({questions:e.questions,totalQuestions:e.total_questions,currentCategory:e.current_category})},error:function(t){alert("Unable to load questions. Please try your request again")}})},t.questionAction=function(e){return function(n){"DELETE"===n&&window.confirm("are you sure you want to delete the question?")&&v.a.ajax({url:"/questions/".concat(e),type:"DELETE",success:function(e){t.getQuestions()},error:function(t){alert("Unable to load questions. Please try your request again")}})}},t.state={questions:[],page:1,totalQuestions:0,categories:{},currentCategory:null},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"selectPage",value:function(t){var e=this;this.setState({page:t},function(){return e.getQuestions()})}},{key:"createPagination",value:function(){for(var t=this,e=[],n=Math.ceil(this.state.totalQuestions/10),r=function(n){e.push(a.a.createElement("span",{key:n,className:"page-num ".concat(n===t.state.page?"active":""),onClick:function(){t.selectPage(n)}},n))},o=1;o<=n;o++)r(o);return e}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"question-view"},a.a.createElement("div",{className:"categories-list"},a.a.createElement("h2",{onClick:function(){t.getQuestions()}},"Categories"),a.a.createElement("ul",null,Object.keys(this.state.categories).map(function(e){return a.a.createElement("li",{key:e,onClick:function(){t.getByCategory(e)}},t.state.categories[e],a.a.createElement("img",{className:"category",alt:"".concat(t.state.categories[e].toLowerCase()),src:"".concat(t.state.categories[e].toLowerCase(),".svg")}))})),a.a.createElement(w,{submitSearch:this.submitSearch})),a.a.createElement("div",{className:"questions-list"},a.a.createElement("h2",null,"Questions"),this.state.questions.map(function(e,n){return a.a.createElement(g,{key:e.id,question:e.question,answer:e.answer,category:t.state.categories[e.category],difficulty:e.difficulty,questionAction:t.questionAction(e.id)})}),a.a.createElement("div",{className:"pagination-menu"},this.createPagination())))}}]),n}(r.Component),x=(n(32),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"navTo",value:function(t){window.location.href=window.location.origin+t}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App-header"},a.a.createElement("h1",{onClick:function(){t.navTo("")}},"Udacitrivia"),a.a.createElement("h2",{onClick:function(){t.navTo("")}},"List"),a.a.createElement("h2",{onClick:function(){t.navTo("/add")}},"Add"),a.a.createElement("h2",{onClick:function(){t.navTo("/play")}},"Play"))}}]),n}(r.Component)),j=n(23);n(33);function q(){q=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new O(a||[]);return r(i,"_invoke",{value:E(t,n,c)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h={};function f(){}function p(){}function y(){}var v={};s(v,o,function(){return this});var d=Object.getPrototypeOf,m=d&&d(d(L([])));m&&m!==e&&n.call(m,o)&&(v=m);var g=y.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e(function(a,i){!function r(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=l(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=y,r(g,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:p,configurable:!0}),p.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),s(g,c,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this)).selectCategory=function(t){var e=t.type,n=t.id,a=void 0===n?0:n;r.setState({quizCategory:{type:e,id:a}},r.getNextQuestion)},r.handleChange=function(t){r.setState(Object(p.a)({},t.target.name,t.target.value))},r.getNextQuestion=Object(m.a)(q().mark(function t(){var e,n,a;return q().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(j.a)(r.state.previousQuestions),r.state.currentQuestion.id&&e.push(r.state.currentQuestion.id),t.prev=2,t.next=5,fetch("".concat("https://fs-trivia-backend-syou.onrender.com","/quiz"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previous_questions:e,quiz_category:r.state.quizCategory})});case 5:return n=t.sent,t.next=8,n.json();case 8:a=t.sent,r.setState({showAnswer:!1,previousQuestions:e,currentQuestion:a.question,guess:"",forceEnd:!a.question}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),alert("Unable to load question. Please try your request again");case 15:case"end":return t.stop()}},t,null,[[2,12]])})),r.submitGuess=function(t){t.preventDefault();var e=r.evaluateAnswer();r.setState({numCorrect:e?r.state.numCorrect+1:r.state.numCorrect,showAnswer:!0})},r.restartGame=function(){r.setState({quizCategory:null,previousQuestions:[],showAnswer:!1,numCorrect:0,currentQuestion:{},guess:"",forceEnd:!1})},r.evaluateAnswer=function(){var t=r.state.guess.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();return r.state.currentQuestion.answer.toLowerCase().split(" ").every(function(e){return t.includes(e)})},r.state={quizCategory:null,previousQuestions:[],showAnswer:!1,categories:{},numCorrect:0,currentQuestion:{},guess:"",forceEnd:!1},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat("https://fs-trivia-backend-syou.onrender.com","/categories")).then(function(t){return t.json()}).then(function(e){t.setState({categories:e.categories})}).catch(function(t){alert("Unable to load categories. Please try your request again")})}},{key:"renderPrePlay",value:function(){var t=this;return a.a.createElement("div",{className:"quiz-play-holder"},a.a.createElement("div",{className:"choose-header"},"Choose Category"),a.a.createElement("div",{className:"category-holder"},a.a.createElement("div",{className:"play-category",onClick:this.selectCategory},"ALL"),Object.keys(this.state.categories).map(function(e){return a.a.createElement("div",{key:e,value:e,className:"play-category",onClick:function(){return t.selectCategory({type:t.state.categories[e],id:e})}},t.state.categories[e])})))}},{key:"renderFinalScore",value:function(){return a.a.createElement("div",{className:"quiz-play-holder"},a.a.createElement("div",{className:"final-header"},"Your Final Score is ",this.state.numCorrect),a.a.createElement("div",{className:"play-again button",onClick:this.restartGame},"Play Again?"))}},{key:"renderCorrectAnswer",value:function(){var t=this.evaluateAnswer();return a.a.createElement("div",{className:"quiz-play-holder"},a.a.createElement("div",{className:"quiz-question"},this.state.currentQuestion.question),a.a.createElement("div",{className:"".concat(t?"correct":"wrong")},t?"You were correct!":"You were incorrect"),a.a.createElement("div",{className:"quiz-answer"},this.state.currentQuestion.answer),a.a.createElement("div",{className:"next-question button",onClick:this.getNextQuestion}," ","Next Question"," "))}},{key:"renderPlay",value:function(){return 5===this.state.previousQuestions.length||this.state.forceEnd?this.renderFinalScore():this.state.showAnswer?this.renderCorrectAnswer():a.a.createElement("div",{className:"quiz-play-holder"},a.a.createElement("div",{className:"quiz-question"},this.state.currentQuestion.question),a.a.createElement("form",{onSubmit:this.submitGuess},a.a.createElement("input",{type:"text",name:"guess",onChange:this.handleChange}),a.a.createElement("input",{className:"submit-guess button",type:"submit",value:"Submit Answer"})))}},{key:"render",value:function(){return this.state.quizCategory?this.renderPlay():this.renderPrePlay()}}]),n}(r.Component),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,{path:!0}),a.a.createElement(h.a,null,a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0,component:E}),a.a.createElement(f.a,{path:"/add",component:d}),a.a.createElement(f.a,{path:"/play",component:C}),a.a.createElement(f.a,{component:E}))))}}]),n}(r.Component);i.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.253c06e3.chunk.js.map