(this.webpackJsonpjuzdrive=this.webpackJsonpjuzdrive||[]).push([[0],{222:function(e,t,n){e.exports=n(496)},426:function(e,t,n){},428:function(e,t,n){},473:function(e,t,n){},476:function(e,t,n){},478:function(e,t,n){},479:function(e,t,n){},495:function(e,t,n){},496:function(e,t,n){"use strict";n.r(t);n(223),n(232);var a=n(0),i=n.n(a),r=n(65),o=n.n(r),c=(n(426),n(13)),s=n(14),l=n(21),u=n(20),h=n(22),m=(n(427),n(428),n(53)),d=n(42),p=n(130),f=n.n(p),g=n(215),v=n(58),b=n(38),y=n.n(b),x=(n(445),n(467)({displayName:"MidleService",statics:{setFillter:function(e){this.fillter=e},getFillter:function(){return this.fillter},setApplyFilterFuncAll:function(e){this.applyFilterFuncAll=e},getApplyFilterFuncAll:function(e,t){this.applyFilterFuncAll(e,t)},setDuration:function(e){this.duration=e},getDuration:function(){return this.duration},setDateTimeObj:function(e){this.dateTimeObject=e},getDateTimeObj:function(){return this.dateTimeObject?this.dateTimeObject:null},setSearchFunc:function(e){this.search_fun=e},search:function(e,t){this.search_fun&&this.search_fun(e,t)},setDriverSearchFunc:function(e){this.driver_search_fun=e},driverSearch:function(e,t,n,a,i,r,o){this.driver_search_fun&&this.driver_search_fun(e,t,n,a,i,r,o)},setSearchWithFilterFunc:function(e){this.searchFilter_fun=e},searchWithFilterFunc:function(e,t,n,a,i){this.searchFilter_fun&&this.searchFilter_fun(e,t,n,a,i)},setSwitchModeFunc:function(e){this.switchMode_fun=e},switchMode:function(e){this.switchMode_fun(e)},setApplyFilterFunc:function(e){this.applyFilter_fun=e},applyFilterFunc:function(e){this.applyFilter_fun(e)},setApplyFilterTimeFunc:function(e){this.applyFilterTime_fun=e},applyFilterTimeFunc:function(e,t){this.applyFilterTime_fun(e,t)},setShowLoginFunc:function(e){this.showLogin_fun=e},showLoginFunc:function(e){this.showLogin_fun(e)},setShowUpdateFunc:function(e){this.showUpdate_fun=e},showUpdateFunc:function(e){this.showUpdate_fun(e)},setReloadUserFunc:function(e){this.reloadUserinfo_func=e},reloadUserFunc:function(){this.reloadUserinfo_func&&this.reloadUserinfo_func()},setHomeSearchFunc:function(e){this.event_search_home_func=e},homeSearchFunc:function(e){this.event_search_home_func&&this.event_search_home_func(e)},setSupercarLocationSearchFunc:function(e){this.supercar_search_func=e},supercarLocationSearchFunc:function(e,t){this.supercar_search_func&&this.supercar_search_func(e,t)}},render:function(){return i.a.createElement("div",null,i.a.createElement("h1",null," the list "))}}),n(471),n(473),a.Component,n(476),new(function(){function e(){Object(c.a)(this,e),this.login=this.login.bind(this),this.loginSocial=this.loginSocial.bind(this),this.logout=this.logout.bind(this),this.getProfile=this.getProfile.bind(this),this.setProfile=this.setProfile.bind(this),this.domain="https://juzdrive.com"}return Object(s.a)(e,[{key:"login",value:function(e,t,n){var a=this.setProfile;y.a.post("".concat(this.domain,"/api/sigin"),{username:e,password:t}).then((function(e){a(e.data.data),n(!0)})).catch((function(e){console.log(e),n(!1)}))}},{key:"loginSocial",value:function(e,t,n){var a=this.setProfile;y.a.post("".concat(this.domain,"/api/").concat(e,"/sign"),t).then((function(e){a(e.data.data),n(!0)})).catch((function(e){console.log(e),n(!1)}))}},{key:"loggedIn",value:function(){return null!=this.getProfile()}},{key:"setProfile",value:function(e){localStorage.setItem("profile",e.token)}},{key:"getProfile",value:function(){return localStorage.getItem("profile")?localStorage.profile:null}},{key:"logout",value:function(){localStorage.removeItem("profile"),window.location.replace("/")}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}}]),e}())),E=null,w=function(){function e(){Object(c.a)(this,e),this.post=this.post.bind(this),this.upload=this.upload.bind(this),this.patch=this.patch.bind(this),this.get=this.get.bind(this),this.getHeader=this.getHeader.bind(this),this.getHeaderUpload=this.getHeaderUpload.bind(this),this.handleError=this.handleError.bind(this),this.domain="http://localhost:8000",E=this}return Object(s.a)(e,[{key:"getHeader",value:function(){return{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",authorization:x.getProfile()}}}},{key:"getHeaderUpload",value:function(){return{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",authorization:x.getProfile()}}}},{key:"post",value:function(e,t){var n=this;return new Promise((function(a,i){y.a.post(n.domain+e,t,n.getHeader()).then((function(e){return a(e.data)})).catch((function(e){console.log(e.response),E.handleError(e,i)}))}))}},{key:"upload",value:function(e,t){var n=this;return new Promise((function(a,i){y.a.post(n.domain+e,t,n.getHeaderUpload()).then((function(e){return a(e.data)})).catch((function(e){console.log("UploadError",e),E.handleError(e,i)}))}))}},{key:"patch",value:function(e,t){var n=this;return new Promise((function(a,i){y.a.patch(n.domain+e,t,n.getHeader()).then((function(e){return a(e.data)})).catch((function(e){console.log(e),E.handleError(e,i)}))}))}},{key:"getApi",value:function(e){return new Promise((function(t,n){y.a.get(e).then((function(e){return t(e.data)})).catch((function(e){E.handleError(e,n)}))}))}},{key:"get",value:function(e){var t=this;return new Promise((function(n,a){y.a.get(t.domain+e,t.getHeader()).then((function(e){return n(e.data)})).catch((function(e){E.handleError(e,a)}))}))}},{key:"delete",value:function(e,t){var n=this;return new Promise((function(a,i){y.a.delete(n.domain+e,t).then((function(e){return a(e.data)})).catch((function(e){E.handleError(e,i)}))}))}},{key:"handleError",value:function(e,t){e.response?401===e.response.status?x.logout():404===e.response.status?window.location.href="/error":t(e):(console.log("ERROR----\x3e",e),t(e))}}]),e}(),F=(new w,a.Component,a.Component,n(129)),_=(n(478),function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.show?"page-load-mg":"page-load-mg _load_hide"},i.a.createElement("div",{className:"load-csx"},i.a.createElement(F.MetroSpinner,{color:"#ff9f43",size:60})))}}]),t}(a.Component)),O=(n(479),n(99)),k={width:"100%",height:"700px"},N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).displayMarkers=function(){return n.state.stores.map((function(e,t){return i.a.createElement(O.Marker,{key:t,id:t,position:{lat:e.latitude,lng:e.longitude},onClick:function(){return alert("You clicked me!")}})}))},n.state={stores:[{latitude:21.057788,longitude:104.868363},{latitude:20.585423,longitude:105.417679},{latitude:15.23537,longitude:108.142288}]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(O.Map,{onClick:!0,google:this.props.google,zoom:6,style:k,initialCenter:{lat:16.12387,lng:106.186722}},this.displayMarkers())}}]),t}(a.Component),j=Object(O.GoogleApiWrapper)({apiKey:"AIzaSyABmI6zQPZEW5vUWtMuAen2CsXqPoEKlBc"})(N),A=n(81),S=n.n(A),C=new w,T=[],P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,n.componentGetCase=n.componentGetCase.bind(Object(v.a)(n)),n.state={data_1:{cases:"",deaths:"",recovered:""},data_2:{cases:"",deaths:"",recovered:""},loading:!0,mai:[{name:"son",data:[1,2,3,4,5,6,7,8,9,10,11,12]}],mai1:[{name:"son",data:[1,2,3,4,5,6,7,8,9,10,11,12]},{name:"son1",data:[11,21,31,41,51,61,71,81,91,101,111,121]}],series:[{name:"Gases",data:[{name:"Argon",y:.9,color:"#3498db"},{name:"Nitrogen",y:78.1,color:"#9b59b6"},{name:"Oxygen",y:20.9,color:"#2ecc71"},{name:"Trace Gases",y:.1,color:"#f1c40f"}]}]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"highChartsRender",value:function(){S.a.chart({chart:{type:"pie",renderTo:"atmospheric-composition"},title:{verticalAlign:"middle",floating:!0,text:"Earth's Atmospheric Composition",style:{fontSize:"10px"}},plotOptions:{pie:{dataLabels:{format:"{point.name}: {point.percentage:.1f} %"},innerSize:"70%"}},series:this.state.series}),S.a.chart({chart:{type:"area",renderTo:"truongson"},title:{verticalAlign:"middle",floating:!0,text:"truongson",style:{fontSize:"10px"}},xAxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{formatter:function(){return this.value}}},yAxis:{title:{text:"truongson"},labels:{formatter:function(){return this.value}}},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:1,states:{hover:{enabled:!0}}}}},series:this.state.mai}),S.a.chart({chart:{type:"line",renderTo:"truongson3"},title:{verticalAlign:"middle",floating:!0,text:"truongson3",style:{fontSize:"10px"}},xAxis:{labels:{formatter:function(){return this.value}}},yAxis:{title:{text:"truongson3"},labels:{formatter:function(){return this.value}}},plotOptions:{series:{label:{connectorAllowed:!1}}},series:this.state.mai1}),S.a.chart({chart:{type:"bar",renderTo:"truongson2"},title:{verticalAlign:"middle",floating:!0,text:"truongson2",style:{fontSize:"10px"}},xAxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},plotOptions:{series:{dataLabels:{enabled:!0,align:"right",color:"#FFFFFF",x:-10},pointPadding:.1,groupPadding:0}},series:this.state.mai})}},{key:"componentGetCase",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/api/case");case 3:t=e.sent,T.push(Object.values(t.data.data)),t.data&&(window.scroll({top:0,left:0,behavior:"smooth"}),this.setState({data_1:T[0][0],data_2:T[0][1],loading:!1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error ====> ",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.componentGetCase(),this.highChartsRender()}},{key:"render",value:function(){var e=this.state.data_1,t=this.state.data_2;return i.a.createElement("div",{className:"container-map",style:{}},i.a.createElement(_,{show:!1}),i.a.createElement("div",{className:"row maps-cotx"},i.a.createElement("div",{className:"col-md-4 offset-md-1 col-sm-12 map-view-search maphide",style:{marginTop:"10px"}},i.a.createElement("div",{className:"maps-container",style:{height:"700px",width:"100%"}},i.a.createElement(j,null))),i.a.createElement("div",{className:"col-md-7",style:{display:"block"}},i.a.createElement("div",{className:"row car-list-search",style:{marginTop:"50px"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"box-tke"},i.a.createElement("div",{className:"row fivecolumns"},i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-12 mb-20"},i.a.createElement("span",{className:"box-vn"},"Vi\u1ec7t Nam")),i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new mb-20"},"S\u1ed1 ca nhi\u1ec5m  ",i.a.createElement("span",{className:"font24"},t.cases)),i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-warning1 mb-20"},"\u0110ang \u0111i\u1ec1u tr\u1ecb  ",i.a.createElement("span",{className:"font24"},t.cases-t.recovered-t.deaths)),i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-primary mb-20"},"\u0110\xe3 ch\u1eefa kh\u1ecfi  ",i.a.createElement("span",{className:"font24"},t.recovered)),i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new1 mb-20"},"T\u1eed vong  ",i.a.createElement("span",{className:"font24"},t.deaths))),i.a.createElement("div",{className:"row fivecolumns"},i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-12 mb-20"},i.a.createElement("span",{className:"box-tg"},"Th\u1ebf gi\u1edbi")),i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new mb-20"},"T\u1ed5ng ca nhi\u1ec5m  ",i.a.createElement("span",{className:"font24"},e.cases)),i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-warning1 mb-20"},"\u0110ang nhi\u1ec5m  ",i.a.createElement("span",{className:"font24"},e.cases-e.recovered-e.deaths)),i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-primary mb-20"},"\u0110\xe3 ch\u1eefa kh\u1ecfi  ",i.a.createElement("span",{className:"font24"},e.recovered)),i.a.createElement("div",{className:"col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new1 mb-20"},"T\u1eed vong  ",i.a.createElement("span",{className:"font24"},e.deaths)))))),i.a.createElement("div",{id:"atmospheric-composition"}),i.a.createElement("div",{id:"truongson"}),i.a.createElement("div",{id:"truongson2"}),i.a.createElement("div",{id:"truongson3"}))))}}]),t}(i.a.Component),M=(n(495),[{path:"/",exact:!0,main:P},{path:"/error",exact:!0,main:function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"error",className:"row"},i.a.createElement("div",{className:"content col-md-12"},i.a.createElement("i",{id:"fa-warning-err",className:"fa fa-warning"}),i.a.createElement("h1",{className:"title-err-four"},"404"),i.a.createElement("p",{className:"p-err"},"Error occurred! - Page not Found"),i.a.createElement("div",{className:"col-md-12 pt-2"},i.a.createElement(d.b,{to:"/",className:"err-back",style:{marginTop:"10px"}},"Back"))))}}]),t}(a.Component)}]),U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).showContentMenu=function(e){var t=null;return e.length>0&&(t=e.map((function(e,t){return i.a.createElement(m.a,{key:t,path:e.path,exact:e.exact,component:e.main})}))),t},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(m.c,null,this.showContentMenu(M)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[222,1,2]]]);
//# sourceMappingURL=main.d0fe8f1d.chunk.js.map