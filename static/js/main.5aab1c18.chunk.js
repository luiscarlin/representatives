(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(29),c=a.n(s),i=a(9),o=a(10),l=a(13),u={addressSearch:{address:""},representatives:{data:[],fetching:!1}},d={saga:{RETRIEVE_REPRESENTATIVES:"SAGA@RETRIEVE_REPRESENTATIVES"},addressSearch:{RESET_STATE:"ADDRESS_SEARCH@RESET_STATE",SET_ADDRESS:"ADDRESS_SEARCH@SET_ADDRESS"},representatives:{SET_REPRESENTATIVES:"REPRESENTATIVES@SET_REPRESENTATIVES",SET_FETCHING_REPRESENTATIVES:"REPRESENTATIVES@SET_FETCHING_REPRESENTATIVES"}},E=a(18),p=Object(o.c)({addressSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.addressSearch,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.addressSearch.RESET_STATE:return Object.assign({},u.addressSearch);case d.addressSearch.SET_ADDRESS:return Object.assign({},e,{address:t.value});default:return e}},representatives:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.representatives,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.representatives.SET_REPRESENTATIVES:return Object(E.a)({},e,{data:t.value});case d.representatives.SET_FETCHING_REPRESENTATIVES:return Object(E.a)({},e,{fetching:t.value});default:return e}}}),f=a(12),m=a.n(f),v=a(6),h={saga:{retrieveRepresentatives:function(){return{type:d.saga.RETRIEVE_REPRESENTATIVES}}},addressSearch:{setAddress:function(e){return{type:d.addressSearch.SET_ADDRESS,value:e}}},representatives:{setRepresentatives:function(e){return{type:d.representatives.SET_REPRESENTATIVES,value:e}},setFetchingRepresentatives:function(e){return{type:d.representatives.SET_FETCHING_REPRESENTATIVES,value:e}}}},S={address:{getAddress:function(e){return e.addressSearch.address}},representatives:{getRepresentatives:function(e){return e.representatives.data},isFetching:function(e){return e.representatives.fetching}}},g=a(33),b=function(){return window.gapi&&window.gapi.client?Promise.resolve(window.gapi.client):R()},R=function(){return new Promise(function(e,t){var a=document.createElement("script");a.src="https://apis.google.com/js/client.js",a.onload=function(){window.gapi.load("client",{callback:function(){window.gapi.client.setApiKey("AIzaSyC63iYNVwNtcZ5e_6-fr2X5kjlSANRPXXc"),e(window.gapi.client)},onerror:function(){t("gapi client failed to load")},timeout:5e3,ontimeout:function(){t("gapi client failed to load in 5 seconds")}})},document.body.appendChild(a)})},T=function(e){console.log("raw representatives",e);var t=e.offices,a=e.officials,n=e.divisions,r=a.map(function(e){return{name:e.name,email:e.emails?e.emails[0]:void 0,address:e.address?{lines:function(e){var t=[];return Object.keys(e).forEach(function(a){a.includes("line")&&t.push(e[a])}),t}(e.address[0]),city:e.address[0].city,state:e.address[0].state,zip:e.address[0].zip}:void 0,party:e.party,phone:e.phones?e.phones[0]:void 0,website:e.urls&&e.urls[0],photoUrl:e.photoUrl,socialMedia:e.channels&&e.channels.map(function(e){return{site:e.type,handle:e.id}})}});return t.forEach(function(e){e.officialIndices.forEach(function(t){r[t].office=e.name})}),Object.keys(n).forEach(function(e){var t=n[e];t.officeIndices&&t.officeIndices.forEach(function(e){r[e].division=t.name})}),console.log("transformed",r),r},w=function(e){return function(e){var t=e.path,a=e.params;return new Promise(function(e,n){b().then(function(e){return e.request({path:t,params:a})}).then(function(t){return e(t)}).catch(function(e){return n(e)})})}({path:"/civicinfo/v2/representatives",params:{address:e}}).then(function(e){return e}).catch(function(){return null})},N=function(){var e=Object(g.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:if((a=e.sent)&&200===a.status){e.next=5;break}return e.abrupt("return",[]);case 5:if(n=T(a.result)){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),_=m.a.mark(y);function y(){var e,t,a;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(v.e)(d.saga.RETRIEVE_REPRESENTATIVES);case 3:return n.next=5,Object(v.b)(h.representatives.setFetchingRepresentatives(!0));case 5:return n.next=7,Object(v.d)(S.address.getAddress);case 7:return e=n.sent,n.next=10,Object(v.c)({representativesData:Object(v.a)(N,e),timeout:Object(v.a)(l.b,2e4)});case 10:if(t=n.sent,0!==(a=t.representativesData).length){n.next=16;break}return n.next=15,Object(v.b)(h.representatives.setFetchingRepresentatives(!1));case 15:return n.abrupt("continue",0);case 16:return n.next=18,Object(v.b)(h.representatives.setRepresentatives(a));case 18:return n.next=20,Object(v.b)(h.representatives.setFetchingRepresentatives(!1));case 20:n.next=0;break;case 22:case"end":return n.stop()}},_,this)}var A=function(){var e=Object(l.a)(),t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,a=Object(o.e)(p,t(Object(o.a)(e)));return e.run(y),window.Store=a,a},j=(a(52),a(34)),O=a(35),k=a(40),I=a(36),P=a(41),V=a(37),x=a.n(V),D=(a(55),Object(i.b)(null,function(e){return{onSearchClick:function(t){e(h.addressSearch.setAddress(t)),e(h.saga.retrieveRepresentatives())}}})(function(e){var t=e.onSearchClick;return r.a.createElement(x.a,{className:"search-box",onPlaceSelected:function(e){return t(e.formatted_address)},types:["geocode"],componentRestrictions:{country:"us"},placeholder:"Search with your address...",autoFocus:!0})})),F=(a(57),a(61),function(e){var t=e.socialMedia;return r.a.createElement("div",{className:"social-media"},function(){if(t)return t.map(function(e,t){var a;switch(e.site){case"GooglePlus":return a="https://plus.google.com/".concat(e.handle),r.a.createElement("a",{href:a,key:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-google-plus-square"}));case"Twitter":return a="https://twitter.com/".concat(e.handle),r.a.createElement("a",{href:a,key:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter-square"}));case"Facebook":return a="https://facebook.com/".concat(e.handle),r.a.createElement("a",{href:a,key:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-square"}));case"YouTube":return a="https://youtube.com/".concat(e.handle),r.a.createElement("a",{href:a,key:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-youtube-square"}));default:return console.log("Social media",e.name,"not recognized"),r.a.createElement("span",null)}})}())}),C=a(17),z=a.n(C),G=a(38),H=a.n(G),M=function(e){var t=e.person,a=r.a.createElement("div",{className:"email"},r.a.createElement("a",{href:"mailto:".concat(t.email)},t.email)),n=r.a.createElement("div",{className:"phone"},r.a.createElement("a",{href:"tel:+1".concat(t.phone)},t.phone));return r.a.createElement("div",{className:"card slide-up"},r.a.createElement("figure",{className:"image"},r.a.createElement("a",{href:t.website||void 0,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(H.a,{src:[t.photoUrl,z.a],loader:r.a.createElement("img",{src:z.a,alt:t.name})}))),r.a.createElement("figcaption",{className:"caption"},r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"name"},t.name),r.a.createElement("div",{className:"office"},t.office),r.a.createElement("div",{className:"party"},t.party),t.email&&a,t.phone&&n,t.address&&function(){var e=t.address,a="".concat(e.city," ").concat(e.state,", ").concat(e.zip);return r.a.createElement("div",{className:"address"},r.a.createElement("div",{className:"address-lines"},t.address.lines.join(",")),r.a.createElement("div",{className:"address-city-state-zip"},a))}()),r.a.createElement(F,{socialMedia:t.socialMedia})))},q=(a(75),Object(i.b)(function(e){return{representatives:S.representatives.getRepresentatives(e),isFetching:S.representatives.isFetching(e)}})(function(e){var t=e.representatives,a=e.isFetching;return r.a.createElement("div",{className:"representatives-section"},a&&r.a.createElement("div",{className:"loader"},"Loading..."),!a&&function(e){return e.map(function(e,t){return r.a.createElement(M,{person:e,key:t})})}(t))})),X=(a(77),a(79),a(39)),U=a.n(X),W=function(e){function t(){return Object(j.a)(this,t),Object(k.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(O.a)(t,[{key:"componentWillMount",value:function(){U()("http://www.politifact.com/api/v/2/statementlist/?speaker__name_slug=donald-trump&limit=100&format=json",null,function(e,t){e?console.error(e.message):console.log(t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:this.props.address?"title top":"title"},"Find Your Representatives"),r.a.createElement("div",{className:"address-search-wrapper"},r.a.createElement(D,null)),r.a.createElement(q,null)))}}]),t}(r.a.Component),Y=Object(i.b)(function(e){return{address:S.address.getAddress(e)}})(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=document.getElementById("root");c.a.render(r.a.createElement(i.a,{store:A()},r.a.createElement(Y,null)),B),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,t,a){e.exports=a.p+"static/media/capitol.4ff364fc.svg"},42:function(e,t,a){e.exports=a(101)},52:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){}},[[42,2,1]]]);
//# sourceMappingURL=main.5aab1c18.chunk.js.map