(window["webpackJsonpaw-react-grid"]=window["webpackJsonpaw-react-grid"]||[]).push([[0],{13:function(e,n,t){e.exports=t(22)},18:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(8),r=t.n(o),c=(t(18),t(6)),s=t(5),m=t(2),u=t(1),p=Object(a.createContext)(),i=function(e){var n=e.children,t=e.maxCol,a=e.gutter;return l.a.createElement(p.Provider,{value:{maxCol:t,gutter:a}},n)},C=function(e){switch(e){case"baseline":case"stretch":case"center":return e;case"end":case"start":return"flex-".concat(e);default:return console.error("Invalid align value('".concat(e,"') provided.")),null}},E=function(e){switch(e){case"between":case"around":return"space-".concat(e);case"center":return e;case"end":case"start":return"flex-".concat(e);default:return console.error("Invalid justify value('".concat(e,"') provided.")),null}};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var d=function(e){var n=e.gutter,t=e.outerGutter,a=e.justify,l=e.align;return Object(u.a)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach((function(n){Object(m.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({display:"flex",flexWrap:"wrap",marginLeft:t-n/2,marginRight:t-n/2,boxSizing:"border-box"},a&&{justifyContent:E(a)},{},l&&{alignItems:C(l)}))},f=Object(u.a)({overflowX:"hidden"}),b=function(e){var n=e.children,t=e.align,a=e.gutter,o=e.justify,r=e.maxCol,c=e.outerGutter,m=e.className,p=Object(s.a)(e,["children","align","gutter","justify","maxCol","outerGutter","className"]),C=d({gutter:a,outerGutter:c,justify:o,align:t}),E=function(){return l.a.createElement("div",Object.assign({className:Object(u.b)(C,m)},p),n)};return l.a.createElement(i,{maxCol:r,gutter:a},c?E():l.a.createElement("div",{className:f},E()))},h=b;b.defaultProps={className:"",gutter:8,outerGutter:0,maxCol:12,justify:null,align:null,children:null};var w=t(11);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(t,!0).forEach((function(n){Object(m.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e,n,t){return console.error("Col span(".concat(e,") is larger than allowed maxCol(").concat(n,") | scrFrom: ").concat(t)),n},O=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;switch(e){case"auto":return{flex:"0 0 auto",width:"auto",maxWidth:"100%",display:"block"};case 0:return{flexGrow:1,flexBasis:0,maxWidth:"100%",display:"block"};case-1:return{display:"none"};default:var a=e>n?y(e,n,t):e;return{flex:"0 0 ".concat(a/n*100,"%"),maxWidth:"".concat(a/n*100,"%"),display:"block"}}},j=function(e){var n=e.gutter,t=e.maxCol,a=e.span,l=e.alignSelf,o=x({paddingLeft:n/2,paddingRight:n/2,boxSizing:"border-box"},l&&{alignSelf:C(l)});return Object(u.a)(x({},o,{},"object"===typeof a?function(e,n){return Object.assign.apply(Object,[{}].concat(Object(w.a)(e.map((function(e){if("number"===typeof e||"string"===typeof e)return O(e,n);var t=e.span,a=void 0===t?0:t,l=e.scrFrom,o=void 0===l?0:l;return o?Object(m.a)({},"@media screen and (min-width: ".concat(o,"px)"),O(a,n,o)):O(a,n,o)})))))}(a,t):O(a,t)))},R=function(e){var n=e.children,t=e.span,o=e.alignSelf,r=e.className,c=Object(s.a)(e,["children","span","alignSelf","className"]),m=Object(a.useContext)(p),i=m.gutter,C=m.maxCol,E=j({gutter:i,maxCol:C,span:t,alignSelf:o});return l.a.createElement("div",Object.assign({className:Object(u.b)(E,r)},c),n)};R.defaultProps={alignSelf:null,children:null,className:"",span:0};var S={Row:h,Col:R},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{span:e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{scrFrom:768,span:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{scrFrom:992,span:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{scrFrom:1200,span:e}},B=S.Row,D=S.Col,N=function(){var e,n=Object(a.useState)(8),t=Object(c.a)(n,2),o=t[0],r=t[1],s=Object(a.useState)(8),m=Object(c.a)(s,2),u=m[0],p=m[1],i=function(e){switch(e.target.name){case"testGutter":r(e.target.value);break;default:p(e.target.value)}},C={padding:8,backgroundColor:"#e0e0e0",marginBottom:8,textAlign:"center",fontSize:12,height:"100%",boxSizing:"border-box"},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Sample Column";return l.a.createElement("div",{style:C},e)};return l.a.createElement(B,{outerGutter:16,maxCol:10},l.a.createElement(D,{span:2}),l.a.createElement(D,{span:6},l.a.createElement("h1",null,"Grid System"),l.a.createElement(B,{gutter:16,align:"center"},l.a.createElement(D,null,l.a.createElement("h3",null,"Flexible Columns - Mobile-first Flexbox Grid System")),l.a.createElement(D,{span:"auto"},l.a.createElement("a",{href:"https://github.com/andywihalim2/react-grid"},"Visit Github repo"))),l.a.createElement("h2",null,"Basic Usage (Equal Grid)"),l.a.createElement(B,{align:"start"},l.a.createElement(D,null,E("Col")),l.a.createElement(D,null,E("Col")),l.a.createElement(D,null,E("Col"))),l.a.createElement(B,{align:"start"},l.a.createElement(D,null,E("Col")),l.a.createElement(D,null,E("Col"))),l.a.createElement("pre",null,"<Row>\n  <Col>...</Col>\n  <Col>...</Col>\n  <Col>...</Col>\n</Row>\n<Row>\n  <Col>...</Col>\n  <Col>...</Col>\n</Row>"),l.a.createElement("h2",null,"Defining Column Span"),l.a.createElement(B,{align:"start"},l.a.createElement(D,{span:12},E("Col-12")),l.a.createElement(D,{span:6},E("Col-6")),l.a.createElement(D,{span:6},E("Col-6")),l.a.createElement(D,{span:4},E("Col-4")),l.a.createElement(D,{span:4},E("Col-4")),l.a.createElement(D,{span:4},E("Col-4"))),l.a.createElement("pre",null,"<Row>\n  <Col span={12}>...</Col>\n  <Col span={6}>...</Col>\n  <Col span={6}>...</Col>\n  <Col span={4}>...</Col>\n  <Col span={4}>...</Col>\n  <Col span={4}>...</Col>\n</Row>"),l.a.createElement("h2",null,"Auto Column Width"),l.a.createElement(B,{align:"start"},l.a.createElement(D,{span:"auto"},E("Col-auto")),l.a.createElement(D,{span:"auto"},E("Col-auto")),l.a.createElement(D,null,E("Col"))),l.a.createElement("pre",null,'<Row>\n  <Col span="auto">...</Col>\n  <Col span="auto">...</Col>\n  <Col>...</Col>\n</Row>'),l.a.createElement("h2",null,"Mix Example"),l.a.createElement(B,{align:"start"},l.a.createElement(D,{span:7},E("Col-7")),l.a.createElement(D,{span:"auto"},E("Col-auto")),l.a.createElement(D,null,E("Col")),l.a.createElement(D,{span:12},E("Col-12")),l.a.createElement(D,{span:8},E("Col-8")),l.a.createElement(D,null,E("Col"))),l.a.createElement("pre",null,'<Row>\n  <Col span={7}>...</Col>\n  <Col span="auto">...</Col>\n  <Col>...</Col>\n  <Col span={12}>...</Col>\n  <Col span={8}>...</Col>\n  <Col>...</Col>\n</Row>'),l.a.createElement("h2",null,"Custom Column Count"),l.a.createElement("h5",null,"Example: 14 Grids System"),l.a.createElement(B,{align:"start",maxCol:14},l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:10},E("Col-10")),l.a.createElement(D,{span:4},E("Col-4"))),l.a.createElement("pre",null,"<Row maxCol={14}>\n  <Col span={2}>...</Col>\n  <Col span={2}>...</Col>\n  <Col span={2}>...</Col>\n  <Col span={2}>...</Col>\n  <Col span={2}>...</Col>\n  <Col span={2}>...</Col>\n  <Col span={2}>...</Col>\n  <Col span={10}>...</Col>\n  <Col span={4}>...</Col>\n</Row>"),l.a.createElement("h5",null,"Example: 5 Grids System"),l.a.createElement(B,{align:"start",maxCol:5},l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:3},E("Col-3")),l.a.createElement(D,{span:1},E("Col-1")),l.a.createElement(D,{span:1},E("Col-1")),l.a.createElement(D,{span:1},E("Col-1")),l.a.createElement(D,{span:1},E("Col-1")),l.a.createElement(D,{span:1},E("Col-1"))),l.a.createElement("pre",null,"<Row maxCol={5}>\n  <Col span={2}>...</Col>\n  <Col span={3}>...</Col>\n  <Col span={1}>...</Col>\n  <Col span={1}>...</Col>\n  <Col span={1}>...</Col>\n  <Col span={1}>...</Col>\n  <Col span={1}>...</Col>\n</Row>"),l.a.createElement("h5",null,"Example: Fibonacci 13"),l.a.createElement(B,{align:"start",maxCol:13},l.a.createElement(D,{span:13},E("Col-13")),l.a.createElement(D,{span:8},E("Col-8")),l.a.createElement(D,{span:5},E("Col-5")),l.a.createElement(D,{span:5},E("Col-5")),l.a.createElement(D,{span:3},E("Col-3")),l.a.createElement(D,{span:2},E("Col-2")),l.a.createElement(D,{span:1},E("Col-1")),l.a.createElement(D,{span:1},E("Col-1")),l.a.createElement(D,{span:1},E("Col-1"))),l.a.createElement("pre",null,"<Row maxCol={13}>\n  <Col span={13}>...</Col>\n  <Col span={8}>...</Col>\n  <Col span={5}>...</Col>\n  <Col span={5}>...</Col>\n  <Col span={3}>...</Col>\n  <Col span={2}>...</Col>\n  <Col span={1}>...</Col>\n  <Col span={1}>...</Col>\n  <Col span={1}>...</Col>\n</Row>"),l.a.createElement("h2",null,"Gutter"),l.a.createElement(B,null,l.a.createElement(D,{span:"auto",style:{marginBottom:8}},"Gutter: ",l.a.createElement("input",{name:"testGutter",onChange:i,style:{fontSize:16},type:"number",min:"0",max:"40",value:o})),l.a.createElement(D,{span:"auto",style:{marginBottom:8}},"Outer Gutter: ",l.a.createElement("input",{name:"testOuterGutter",onChange:i,style:{fontSize:16},type:"number",min:"0",max:"40",value:u}))),l.a.createElement("div",{style:{border:"1px solid #e0e0e0",paddingTop:8}},l.a.createElement(B,{gutter:o,outerGutter:u,align:"start"},l.a.createElement(D,null,E("Col")),l.a.createElement(D,null,E("Col")),l.a.createElement(D,null,E("Col")))),l.a.createElement("pre",null,(e=u,"<Row gutter={".concat(o,"} outerGutter={").concat(e,"}>\n  <Col>...</Col>\n  <Col>...</Col>\n  <Col>...</Col>\n</Row>"))),l.a.createElement("h2",null,"Responsive"),l.a.createElement("h3",null,"Manual Breakpoint Definition"),l.a.createElement("h5",null,"Example 1: < 768 | >= 768"),l.a.createElement(B,{align:"start"},l.a.createElement(D,{span:[12,{scrFrom:768,span:6}]},E("Col-12, Col-[768]-6")),l.a.createElement(D,{span:[12,{scrFrom:768,span:6}]},E("Col-12, Col-[768]-6"))),l.a.createElement("pre",null,"<Row>\n  <Col span={[12, {scrFrom: 768, span: 6}]}>\n    ...\n  </Col>\n  <Col span={[12, {scrFrom: 768, span: 6}]}>\n    ...\n  </Col>\n</Row>"),l.a.createElement("h5",null,"Example 2: < 768 | >= 768 | >= 1200"),l.a.createElement(B,{align:"start"},l.a.createElement(D,{span:[12,{scrFrom:768,span:6},{scrFrom:1200,span:4}]},E("Col-12, Col-[768]-6, col-[1200]-4")),l.a.createElement(D,{span:[12,{scrFrom:768,span:6},{scrFrom:1200,span:4}]},E("Col-12, Col-[768]-6, col-[1200]-4")),l.a.createElement(D,{span:[12,{scrFrom:1200,span:4}]},E("Col-12, Col-[1200]-4"))),l.a.createElement("pre",null,"<Row>\n  <Col span={[12, {scrFrom: 768, span: 6}, {scrFrom: 1200, span: 4}]}>\n    ...\n  </Col>\n  <Col span={[12, {scrFrom: 768, span: 6}, {scrFrom: 1200, span: 4}]}>\n    ...\n  </Col>\n  <Col span={[12, {scrFrom: 1200, span: 4}]}>\n    ...\n  </Col>\n</Row>"),l.a.createElement("h3",null,"Using Helper"),l.a.createElement("h4",null,"Example: Based on Bootstrap 3"),l.a.createElement(B,{align:"start"},l.a.createElement(D,{span:[F(12),G(6),P(4),k(3)]},E("Col-12, Col-sm-6, col-md-4, col-lg-3")),l.a.createElement(D,{span:[F(12),G(6),P(4),k(3)]},E("Col-12, Col-sm-6, col-md-4, col-lg-3")),l.a.createElement(D,{span:[F(12),G(6),P(4),k(3)]},E("Col-12, Col-sm-6, col-md-4, col-lg-3")),l.a.createElement(D,{span:[F(12),G(6),P(4),k(3)]},E("Col-12, Col-sm-6, col-md-4, col-lg-3"))),l.a.createElement("h5",null,"Import Helper"),l.a.createElement("pre",null,"import { BS3 as col } from '../lib/Grids/helper/Breakpoint';"),l.a.createElement("h5",null,"Render"),l.a.createElement("pre",null,"<Row>\n  <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>\n    ...\n  </Col>\n  <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>\n    ...\n  </Col>\n  <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>\n    ...\n  </Col>\n  <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>\n    ...\n  </Col>\n</Row>"),l.a.createElement("h5",null,"Contributor"),l.a.createElement("pre",null,l.a.createElement("a",{href:"https://github.com/andywihalim2"},"Andy Wihalim"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.92dbe3fd.chunk.js.map