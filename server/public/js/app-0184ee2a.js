webpackJsonp([2,3],{202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n.n(r),a=n(405),i=(n.n(a),n(204));n.i(a.render)(o.a.createElement(i.a,null),document.getElementById("app"))},204:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(14),u=n.n(i),c=n(480),l=n(206),f=n(205),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){return u.a.createElement(c.a,null,u.a.createElement("div",null,u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(c.b,{to:"/staff"},"Staffs")),u.a.createElement("li",null,u.a.createElement(c.b,{to:"/employer"},"Employers"))),u.a.createElement(c.c,{path:"/staff",component:function(e){return u.a.createElement(f.a,{props:e,loadingPromise:n.e(0).then(n.bind(null,505))})}}),u.a.createElement(c.c,{path:"/employer",component:l.a})))}}]),t}(i.Component);t.a=s},205:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(14),u=n.n(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loaded:!1},n}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;this.props.loadingPromise.then(function(t){e.component=t.default,e.setState({loaded:!0})})}},{key:"render",value:function(){return this.state.loaded?u.a.createElement(this.component,this.props.props):u.a.createElement("p",null,"Loading...")}}]),t}(i.Component);t.a=l},206:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(14),u=n.n(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){return u.a.createElement("h1",null,"Employer Screen 👺")}}]),t}(i.Component);t.a=l},504:function(e,t,n){n(203),e.exports=n(202)}},[504]);