(this["webpackJsonpcorona-app"]=this["webpackJsonpcorona-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/back.198d755c.jpg"},function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),l=(a(28),a(5)),s=a(6),i=a(7),m=a(8),u=(a(10),a(29),a(4)),h=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={home_active:"active",news_active:null},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"topnav"},c.a.createElement(u.b,{to:"/",className:this.state.home_active,onClick:function(){return e.setState({home_active:"active",news_active:null})},style:{textDecoration:"none"}},"Home"),c.a.createElement(u.b,{to:"/news",className:this.state.news_active,onClick:function(){return e.setState({home_active:null,news_active:"active"})},style:{textDecoration:"none"}},"News"),c.a.createElement(u.b,{to:"#contact",style:{textDecoration:"none"}},"Contact"),c.a.createElement(u.b,{to:"#about",style:{textDecoration:"none"}},"About"))}}]),a}(n.Component);var p=function(e){return c.a.createElement("div",{className:"total"},c.a.createElement("h2",{className:"cases"},e.value))};var E=function(e){return c.a.createElement("div",{className:"death"},c.a.createElement("h2",{className:"cases"},e.value))};var d=function(e){return c.a.createElement("div",{className:"recover"},c.a.createElement("h2",{className:"cases"},e.value))},g=a(22),v=a.n(g);var f=function(){return c.a.createElement("div",{className:"prevent"},c.a.createElement("h2",{className:"option_text"},"Preventive Measures"),c.a.createElement("p",{className:"description"},"Precautions we suggest: Wash hands frequently, avoid crowded places...",c.a.createElement("br",null),c.a.createElement("br",null),"READ MORE"))};var y=function(){return c.a.createElement("div",{className:"symptoms"},c.a.createElement("h2",{className:"option_text"},"Coronavirus Symptoms"),c.a.createElement("p",{className:"description"},"If you have a fever, cough, difficulty breathing and sore throat....",c.a.createElement("br",null),c.a.createElement("br",null),"READ MORE"))};var b=function(){return c.a.createElement("div",{className:"myths"},c.a.createElement("h2",{className:"option_text"},"Myths vs Reality"),c.a.createElement("p",{className:"description"},"Be aware! The most pervasive myths on Coronavirus and why they are wrong.",c.a.createElement("br",null),c.a.createElement("br",null),"READ MORE"))},w=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).data=[],n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(t){e.data=t.statewise})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("table",{border:"1",align:"center",className:"stats"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"S.No."),c.a.createElement("th",null,"Name of State / UT"),c.a.createElement("th",null,"Total Confirmed cases "),c.a.createElement("th",null,"Cured/Discharged/Migrated"),c.a.createElement("th",null,"Death"))),c.a.createElement("tbody",null,this.data.map((function(e,t){if(0!=e.confirmed&&t>0)return c.a.createElement("tr",{key:t},c.a.createElement("td",{style:{textAlign:"right"}},t),c.a.createElement("td",{style:{textAlign:"center"}},e.state),c.a.createElement("td",{style:{textAlign:"right"}},e.confirmed),c.a.createElement("td",{style:{textAlign:"right"}},e.recovered),c.a.createElement("td",{style:{textAlign:"right"}},e.deaths))})))))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(t){e.setState(t.statewise[0])})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{className:"back",src:v.a,alt:"Trulli"}),c.a.createElement(p,{value:this.state.confirmed}),c.a.createElement(E,{value:this.state.deaths}),c.a.createElement(d,{value:this.state.recovered}),c.a.createElement("marquee",{hspace:"310",behavior:"scroll",direction:"left"},"Central Helpline Number for CoronaVirus: ",c.a.createElement("a",{href:"+91-11-23978046"},"+91-11-23978046"),"\xa0\xa0\xa0|\xa0\xa0\xa0 Helpline Email ID: ",c.a.createElement("a",{href:"ncov2019@gov.in"},"ncov2019@gov.in")," or ",c.a.createElement("a",{href:"ncov2019@gmail.com"},"ncov2019@gmail.com")),c.a.createElement("h4",{className:"from"},"Compiled from State Govt. numbers"),c.a.createElement(u.b,{to:"/prevent",style:{textDecoration:"none"}},c.a.createElement(f,null)),c.a.createElement(u.b,{to:"/symptoms",style:{textDecoration:"none"}},c.a.createElement(y,null)),c.a.createElement(u.b,{to:"/myths",style:{textDecoration:"none"}},c.a.createElement(b,null)),c.a.createElement(w,null))}}]),a}(n.Component),j=a(11);a(35);var O=function(){return c.a.createElement("div",{className:"PContent"},c.a.createElement("h1",null,"Coronavirus Precautions"),c.a.createElement("ul",null,c.a.createElement("li",null,"Regular hand washing"),c.a.createElement("li",null,"Covering mouth and nose when coughing and sneezing"),c.a.createElement("li",null,"If you are taking care of someone who is sick, try to stay 6 feet away \u2013 this is the distance virus-containing droplets can travel through a sneeze or cough"),c.a.createElement("li",null,"Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing"),c.a.createElement("li",null,"Avoid touching your eyes, nose, and mouth"),c.a.createElement("li",null,"Stay home when you are sick"),c.a.createElement("li",null,"Clean and disinfect frequently touched objects and surfacesusing a regular household cleaning spray or wipe")),c.a.createElement("img",{src:"https://static.toiimg.com/photo/imgsize-343749,msid-75044269/75044269.jpg"}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/imgsize-352379,msid-74670283/74670283.jpg",className:"steps"}))};a(36);var k=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"head"},c.a.createElement("h1",null,"What are the symptoms of COVID-19"),c.a.createElement("ul",null,c.a.createElement("li",null,"Fever"),c.a.createElement("li",null,"Dry cough"),c.a.createElement("li",null,"Shortness of breath"),c.a.createElement("li",null,"Runny nose"),c.a.createElement("li",null,"Sore throat"),c.a.createElement("li",null,"Persistent Pain or pressure in the chest"),c.a.createElement("p",null,"(In extreme cases)"),c.a.createElement("li",null,"Pneumonia"),c.a.createElement("li",null,"Severe acute respiratory Syndrome"),c.a.createElement("li",null,"Kidney failure")),c.a.createElement("img",{className:"symp",src:"https://static.toiimg.com/photo/imgsize-314866,msid-74731845/74731845.jpg"})))};a(37);var C=function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"header"},"Coronavirus: Myths vs facts"),c.a.createElement("p",{className:"desc"},"COVID-19 pandemic has grappled the world by its teeth. With no preventive measure or cure in sight and a lot of misinformation available on the internet, it can be hard to actually separate fact from fiction. From garlic water, bat soup remedy and weird self-tests, you will find a lot of myths and hoax messages related to the coronavirus infection. However, we shouldn't be the first ones to tell you that not all that you read on the internet or receive as Whatsapp messages from concerned relatives doesn't hold true. If you are panicking about the spread of coronavirus, here is help your way.",c.a.createElement("br",null),c.a.createElement("br",null),"Listed here are some of the most commonly associated myths surrounding the diseases and the real truth you need to know. Do share it and help someone in need!"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column"},c.a.createElement("img",{src:"https://static.toiimg.com/photo/74727567.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713362.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713418.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713267.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74712918.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74712745.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713202.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74712967.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713021.cms",alt:" "})),c.a.createElement("div",{className:"column"},c.a.createElement("img",{src:"https://static.toiimg.com/photo/74727287.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713396.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713221.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74712888.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74712977.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713047.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74776000.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713376.cms",alt:" "})),c.a.createElement("div",{className:"column"},c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713213.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713418.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713255.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74712903.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74712987.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713066.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74713356.cms",alt:" "}),c.a.createElement("img",{src:"https://static.toiimg.com/photo/74712823.cms",alt:" "}))))},D=(a(42),a(38),a(39)),x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(this.tick,1e3),fetch("https://api.covid19india.org/updatelog/log.json").then((function(e){return e.json()})).then((function(t){e.setState({data:t})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Updates:"),this.state.data.reverse().map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("div",{className:"news",key:t},c.a.createElement("h4",null,D(e.update))),c.a.createElement("br",null))})))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement("h1",{className:"coronavirus"},"CORONAVIRUS (COVID-19)"),c.a.createElement("h2",{className:"pandemic"},"PANDEMIC"),c.a.createElement(h,null),c.a.createElement(j.c,null,c.a.createElement(j.a,{path:"/",exact:!0,component:N}),c.a.createElement(j.a,{path:"/prevent",component:O}),c.a.createElement(j.a,{path:"/symptoms",component:k}),c.a.createElement(j.a,{path:"/myths",component:C}),c.a.createElement(j.a,{path:"/news",exact:!0,component:x}))))}}]),a}(n.Component);a(40);var A=function(){return c.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.6c944f24.chunk.js.map