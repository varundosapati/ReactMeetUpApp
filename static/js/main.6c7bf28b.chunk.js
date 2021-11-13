(this.webpackJsonpReactMeetUpApp=this.webpackJsonpReactMeetUpApp||[]).push([[0],{12:function(e,t,i){e.exports={item:"MeetupItem_item__3wFkh",image:"MeetupItem_image__8bIih",content:"MeetupItem_content__2ZnAs",actions:"MeetupItem_actions__f_r9S"}},13:function(e,t,i){e.exports={header:"MainNavigation_header__2B-h_",logo:"MainNavigation_logo__2j-iw",active:"MainNavigation_active__2NYTL",badge:"MainNavigation_badge__9wIle"}},18:function(e,t,i){e.exports={card:"Card_card__C7QTy"}},19:function(e,t,i){e.exports={list:"MeetupList_list__2UOTT"}},22:function(e,t,i){e.exports={main:"Layout_main__z5Frg"}},28:function(e,t,i){},29:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i(17),r=i.n(n),s=(i(28),i(29),i(2)),a=i(23),o=i(11),d=i(0),j=Object(c.createContext)({favorites:[],totalFavorites:0,addFavorites:function(e){},removeFavorites:function(e){},itemIsFavorites:function(e){}});function l(e){var t=Object(c.useState)([]),i=Object(o.a)(t,2),n=i[0],r=i[1];var s={favorites:n,totalFavorites:n.length,addFavorites:function(e){console.log("Happening add favorites"),r((function(t){return t.concat(e)}))},removeFavorites:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorites:function(e){return n.some((function(t){return t.id===e}))}};return Object(d.jsx)(j.Provider,{value:s,children:e.children})}var u=j,b=i(18),h=i.n(b);var O=function(e){return Object(d.jsx)("div",{className:h.a.card,children:e.children})},x=i(12),p=i.n(x);var v=function(e){var t=Object(c.useContext)(u),i=t.itemIsFavorites(e.id);return Object(d.jsx)("li",{className:p.a.item,children:Object(d.jsxs)(O,{children:[Object(d.jsx)("div",{className:p.a.image,children:Object(d.jsx)("img",{src:e.image,alt:e.title})}),Object(d.jsxs)("div",{className:p.a.content,children:[Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)("address",{children:e.address}),Object(d.jsx)("p",{children:e.description})]}),Object(d.jsx)("div",{className:p.a.actions,children:Object(d.jsx)("button",{onClick:function(){i?t.removeFavorites(e.id):t.addFavorites({id:e.id,title:e.title,image:e.image,description:e.description,address:e.address})},children:i?"Remove From Favorites":"To Favorites"})})]})})},m=i(19),f=i.n(m);var _=function(e){return Object(d.jsx)("ul",{className:f.a.list,children:e.meetups.map((function(e){return Object(d.jsx)(v,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var g=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),i=t[0],n=t[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),j=s[0],l=s[1];return Object(c.useEffect)((function(){n(!0),fetch("https://react-getting-started-d911e-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var i in e){var c=Object(a.a)({id:i},e[i]);t.push(c)}n(!1),l(t)}))}),[]),i?Object(d.jsx)("section",{children:Object(d.jsx)("p",{children:"Loading ..."})}):Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"All Meet ups"}),Object(d.jsx)(_,{meetups:j})]})};var M=function(){var e,t=Object(c.useContext)(u);return e=0===t.totalFavorites?Object(d.jsx)("p",{children:"you got no favorites pageYOffset, start adding some?"}):Object(d.jsx)(_,{meetups:t.favorites}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"My Favorites"}),e]})},F=i(9),N=i.n(F);var w=function(e){var t=Object(c.useRef)(),i=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)();return Object(d.jsx)(O,{children:Object(d.jsxs)("form",{className:N.a.form,onSubmit:function(c){c.preventDefault();var s={title:t.current.value,image:i.current.value,address:n.current.value,description:r.current.value};e.onAddMeetup(s)},children:[Object(d.jsxs)("div",{className:N.a.control,children:[Object(d.jsx)("label",{htmlFor:"title",children:" Meeting Title"}),Object(d.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(d.jsxs)("div",{className:N.a.control,children:[Object(d.jsx)("label",{htmlFor:"image",children:" Meetup Image"}),Object(d.jsx)("input",{type:"url",required:!0,id:"image",ref:i})]}),Object(d.jsxs)("div",{className:N.a.control,children:[Object(d.jsx)("label",{htmlFor:"address",children:" Meetup Address"}),Object(d.jsx)("input",{type:"text",required:!0,id:"address",ref:n})]}),Object(d.jsxs)("div",{className:N.a.control,children:[Object(d.jsx)("label",{htmlFor:"description",children:" Meetup Description"}),Object(d.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:r})]}),Object(d.jsx)("div",{className:N.a.actions,children:Object(d.jsx)("button",{children:"Add Meetup"})})]})})};var I=function(){var e=Object(s.f)();return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Add New Meetup"}),Object(d.jsx)(w,{onAddMeetup:function(t){fetch("https://react-getting-started-d911e-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})},y=i(22),A=i.n(y),T=i(7),C=i(13),R=i.n(C);var S=function(){var e=Object(c.useContext)(u);return Object(d.jsxs)("header",{className:R.a.header,children:[Object(d.jsx)("div",{className:R.a.logo,children:" React Meetups"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(T.b,{to:"/",children:"All Meet ups "})," "]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(T.b,{to:"/new-meetup",children:"New Meet ups "})," "]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsxs)(T.b,{to:"/favorites",children:["Favorites Meet ups",Object(d.jsx)("span",{className:R.a.badge,children:e.totalFavorites})]})," "]})]})})]})};var k=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{}),Object(d.jsx)("main",{className:A.a.main,children:e.children})]})};var q=function(){return Object(d.jsx)(k,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/favorites",exact:!0,children:Object(d.jsx)(M,{})}),Object(d.jsx)(s.a,{path:"/new-meetup",children:Object(d.jsx)(I,{})}),Object(d.jsx)(s.a,{path:"/",children:Object(d.jsx)(g,{})})]})})};r.a.render(Object(d.jsx)(l,{children:Object(d.jsx)(T.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root"))},9:function(e,t,i){e.exports={form:"NewMeetupForm_form__2xkji",control:"NewMeetupForm_control__37WIX",actions:"NewMeetupForm_actions__2A-nT"}}},[[39,1,2]]]);
//# sourceMappingURL=main.6c7bf28b.chunk.js.map