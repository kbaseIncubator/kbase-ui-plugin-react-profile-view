(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{349:function(e,t,a){e.exports=a.p+"static/media/nouserpic.9af42ba9.png"},356:function(e,t,a){e.exports=a(747)},361:function(e,t,a){},729:function(e,t,a){},747:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(11),o=a.n(s),i=(a(361),a(362),a(235)),l=a(63),c=a(161),u=a(117),d=a(328),p=a(73);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function m(e,t){console.log("im in narrative reducer",t.payload);var a=t.payload;switch(console.log("im in narrative reducer",a),t.type){case"LOAD_NARRATIVES":return h({},e,{narrativeDataArray:[{wsID:"foo",permission:"r",name:"foofoo",last_saved:0,users:{},narrative_detail:{creator:"me"}},{wsID:"bar",permission:"r",name:"barbar",last_saved:0,users:{},narrative_detail:{creator:"me"}},{wsID:"baz",permission:"r",name:"bazbaz",last_saved:0,users:{},narrative_detail:{creator:"me"}}]});case"LOAD_MINE_NARRATIVES":return h({},e,{narrativeDataArray:a});default:return e}}var v=function(e,t){return Object(p.baseReducer)(e,t)},b=function(e,t){var a=v(e,t);if(!e)return console.log("return state "),e;if(a)return a;switch(t.type){case"LOAD_NARRATIVES":case"LOAD_MINE_NARRATIVES":return console.log("calling narrative Reducer",t),m(e,t);default:return e}};function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function y(){var e=Object(p.makeBaseStoreState)();return console.log("baseStoreState",e),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{narrativeDataArray:[{wsID:"",permission:"",name:"",last_saved:0,users:{},narrative_detail:{creator:""}}]})}a(729);var E=a(165),w=a(166),O=a(172),k=a(167),j=a(173),S=(a(320),a(124)),x=(a(321),a(66)),_=(a(323),a(49)),N=(a(732),a(70)),D=(a(735),a(92)),L=a(349),P=a.n(L),A=D.a.Meta,I=N.a.TextArea;var T=function(e){var t,a=e.userProfile,r="",s="",o=[{title:"",organization:"",started:"",ended:""}],i=[],l=[{name:"",url:""}],c=!0;e.profileloaded&&(c=!1);var u=!0;return e.orgsloaded&&(u=!1),"undefined"!==typeof a.affiliations&&(o=a.affiliations),"undefined"!==typeof a.researchInterests&&Array.isArray(a.researchInterests)&&(i=a.researchInterests),r="Other"===a.jobTitle&&"undefined"!==typeof a.jobTitle?a.jobTitleOther:"undefined"!==typeof a.jobTitle?a.jobTitle:"",e.orgs&&(l=e.orgs),"silhoutte"!==a.avatarOption&&e.gravatarHash?e.gravatarHash&&(s="https://www.gravatar.com/avatar/"+e.gravatarHash+"?s=300&amp;r=pg&d="+a.gravatarDefault,t=n.a.createElement("img",{style:{maxWidth:"100%",margin:"8px 0px"},alt:"avatar",src:s})):t=n.a.createElement("img",{style:{maxWidth:"100%",margin:"8px 0px"},alt:"avatar",src:P.a}),n.a.createElement(x.a,{style:{padding:16}},n.a.createElement(x.a,{gutter:8},n.a.createElement(_.a,{span:8},n.a.createElement(D.a,{loading:c,style:{margin:"8px 0px",textAlign:"center"}},t),n.a.createElement(D.a,{loading:c,style:{margin:"8px 0px",textAlign:"left"},title:e.userName.name},n.a.createElement(A,{title:"User ID"}),n.a.createElement(N.a,{className:"clear-disabled",disabled:!0,defaultValue:e.userName.userID}),n.a.createElement(A,{title:"Position"}),n.a.createElement(N.a,{className:"clear-disabled",disabled:!0,defaultValue:r}),n.a.createElement(A,{title:"Department"}),n.a.createElement(N.a,{className:"clear-disabled",disabled:!0,defaultValue:a.department}),n.a.createElement(A,{title:"Organization"}),n.a.createElement(N.a,{className:"clear-disabled",disabled:!0,defaultValue:a.organization}),n.a.createElement(A,{title:"Location"}),n.a.createElement(N.a,{className:"clear-disabled",disabled:!0,defaultValue:a.city}),n.a.createElement(N.a,{className:"clear-disabled",disabled:!0,defaultValue:a.state}),n.a.createElement(N.a,{className:"clear-disabled",disabled:!0,defaultValue:a.country}),n.a.createElement(A,{title:"Primary Funding Source"}),n.a.createElement(N.a,{className:"clear-disabled",disabled:!0,defaultValue:a.fundingSource}))),n.a.createElement(_.a,{span:16},n.a.createElement(x.a,{gutter:8},n.a.createElement(_.a,{span:12},n.a.createElement(D.a,{className:"card-with-height",loading:c,style:{margin:"8px 0px"},title:"Research Interests"},n.a.createElement("ul",{style:{textAlign:"left"}},i.map(function(e){return n.a.createElement("li",{key:e},e)})))),n.a.createElement(_.a,{span:12},n.a.createElement(D.a,{className:"card-with-height",loading:u,style:{margin:"8px 0px"},title:"Organizations"},n.a.createElement("ul",{style:{textAlign:"left"}},l.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name))}))))),n.a.createElement(x.a,null,n.a.createElement(D.a,{loading:c,style:{margin:"8px 0px"},title:"Research or Personal Statement"},n.a.createElement(I,{autosize:!0,readOnly:!0,className:"clear-disabled",defaultValue:a.researchStatement})),n.a.createElement(D.a,{loading:c,style:{margin:"8px 0px"},title:"Afflications"},n.a.createElement("ul",{style:{textAlign:"left"}},o.map(function(e,t){return n.a.createElement("li",{key:t},e.title," @ ",e.organization,", ",e.started," -"," ",e.ended," ")})))))))},z=(a(748),a(352)),R=(a(745),a(350));var U=function(e){console.log("Narrative props",e);var t=[],a=!0;e.narrativesloaded&&(a=!1);for(var r=[{title:"Title",dataIndex:"name",width:350,key:"wsID",render:function(e,t){var a="/narrative/"+t.wsID;return n.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},e)},sorter:function(e,t){var a=e.name.toUpperCase(),r=t.name.toUpperCase();return a<r?-1:a>r?1:0}},{title:"Last Saved",dataIndex:"last_saved",width:190,render:function(e,t){var a=function(e){var t=(Date.now()-+new Date(e))/1e6,a=new Date(e).toString(),r=a.slice(4,7)+" "+a.slice(8,10)+" "+a.slice(11,15),n=r+" "+a.slice(16,24);return t>=2628?[n,r]:t<2628&&t>=86.4?[n,(t/86.4).toFixed(0)+" days ago"]:t<86.4&&t>=3.6?[r,(t/3.6).toFixed(0)+" hours ago"]:t<3.6&&t>=.06?[n,(10*t).toFixed(0)+" min ago"]:[n,"less than a min ago"]}(t.last_saved);return n.a.createElement(R.a,{placement:"right",content:a[0]},a[1])},sorter:function(e,t){var a=e.last_saved,r=t.last_saved;return a<r?1:a>r?-1:0}}],s=0;s<e.narratives.length;s+=1){var o=e.narratives[s];if("r"===o.permission||"n"===o.permission)Object.keys(o.users).length,t.push({key:o.wsID,wsID:o.wsID,name:o.name,last_saved:o.last_saved});else{var i=o.narrative_detail,l="";for(var c in o.users)c!==i.creator&&(l=l+c+", ");t.push({key:o.wsID,wsID:o.wsID,name:o.name,last_saved:o.last_saved})}}return n.a.createElement(z.a,{style:{width:"85%",margin:"auto"},columns:r,dataSource:t,loading:a})},H=a(75),M=(a(326),a(89)),V=a(35),C=a.n(V),F=a(78);function B(e,t){return G.apply(this,arguments)}function G(){return(G=Object(F.a)(C.a.mark(function e(t,a){var r,n,s,o,i;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a+"/services/service_wizard",n={id:0,method:"ServiceWizard.get_service_status",version:"1.1",params:[{module_name:"bff",version:null}]},s=JSON.stringify(n),e.next=5,fetch(r,{method:"POST",mode:"cors",headers:{Authorization:t},body:s});case 5:return o=e.sent,e.next=8,o.json();case 8:return i=e.sent,e.abrupt("return",i.result[0].url);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(){return(J=Object(F.a)(C.a.mark(function e(t,a,r){var n,s,o,i;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(a,r);case 2:return n=e.sent,s=n+"/fetchUserProfile/"+t,e.next=6,fetch(s,{method:"GET"});case 6:if(404!==(o=e.sent).status){e.next=11;break}console.warn("404 response:",o),e.next=14;break;case 11:if(500!==o.status){e.next=14;break}return console.error("500 response:",o),e.abrupt("return");case 14:return e.prev=14,e.next=17,o.json();case 17:return i=e.sent,e.abrupt("return",i);case 21:e.prev=21,e.t0=e.catch(14),console.error("profile fetch failed",o);case 24:case"end":return e.stop()}},e,null,[[14,21]])}))).apply(this,arguments)}function W(e,t,a){return K.apply(this,arguments)}function K(){return(K=Object(F.a)(C.a.mark(function e(t,a,r){var n,s,o,i;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(a,r);case 2:return n=e.sent,s=n+"/narrative_list/"+t,e.next=6,fetch(s,{method:"GET",headers:{Authorization:a}});case 6:if(500!==(o=e.sent).status){e.next=10;break}return console.error("Fetch Narratives 500 response:",o),e.abrupt("return");case 10:return e.prev=10,e.next=13,o.json();case 13:return i=e.sent,e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(10),console.error("fetch narratives failed",o);case 20:case"end":return e.stop()}},e,null,[[10,17]])}))).apply(this,arguments)}function q(){return(q=Object(F.a)(C.a.mark(function e(t,a,r){var n,s,o,i;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(a,r);case 2:return n=e.sent,s=n+"/org_list/"+t,e.next=6,fetch(s,{method:"GET",headers:{Authorization:a}});case 6:if(500!==(o=e.sent).status){e.next=10;break}return console.error("500 response:",o),e.abrupt("return");case 10:return e.prev=10,e.next=13,o.json();case 13:return i=e.sent,e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(10),console.error("fetch org failed",o);case 20:case"end":return e.stop()}},e,null,[[10,17]])}))).apply(this,arguments)}function Y(){return(Y=Object(F.a)(C.a.mark(function e(t,a,r){var n,s,o,i,l;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={version:"1.1",method:"UserProfile.filter_users",params:[{filter:t}]},s=JSON.stringify(n),o=r+"/services/user_profile/rpc",e.next=5,fetch(o,{method:"POST",mode:"cors",headers:{Authorization:a,"Content-Type":"application/json"},body:s});case 5:if(500!==(i=e.sent).status){e.next=9;break}return console.error("500 response:",i),e.abrupt("return");case 9:return e.prev=9,e.next=12,i.json();case 12:return l=e.sent,e.abrupt("return",l);case 16:e.prev=16,e.t0=e.catch(9),console.error("fetch search users failed",i);case 19:case"end":return e.stop()}},e,null,[[9,16]])}))).apply(this,arguments)}var Q=M.a.Option,X=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(O.a)(this,Object(k.a)(t).call(this,e))).state={data:[],mouseLeave:!1},a.onChangeHandler=a.onChangeHandler.bind(Object(H.a)(a)),a.onSearchHandler=a.onSearchHandler.bind(Object(H.a)(a)),a.onMouseLeaveHandler=a.onMouseLeaveHandler.bind(Object(H.a)(a)),a.onMouseEnterHandler=a.onMouseEnterHandler.bind(Object(H.a)(a)),a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"onSearchHandler",value:function(e){var t=this;e.length>2&&!0!==this.state.mouseLeave&&function(e,t,a){return Y.apply(this,arguments)}(e,this.props.token,this.props.baseURL).then(function(e){"undefined"!==typeof e?t.setState({data:e.result[0]}):t.setState({data:[{username:"error",realname:"Something went wrong. Try again later."}]})})}},{key:"onMouseLeaveHandler",value:function(){this.setState({mouseLeave:!0})}},{key:"onMouseEnterHandler",value:function(){this.setState({mouseLeave:!1})}},{key:"onChangeHandler",value:function(e){if("error"!==e&&"undefined"!==typeof e){var t="/#user/"+e;window.open(t,"_blank")}}},{key:"render",value:function(){var e=this.state.data;return n.a.createElement(M.a,{mode:"single",style:{width:250},allowClear:!0,showSearch:!0,placeholder:"enter more than 3 characters",showArrow:!1,onSearch:this.onSearchHandler,onChange:this.onChangeHandler,onMouseLeave:this.onMouseLeaveHandler,onMouseEnter:this.onMouseEnterHandler,optionFilterProp:"children",filterOption:function(e,t){return!0}},e.map(function(e){return n.a.createElement(Q,{key:e.username},e.realname," (",e.username,")")}))}}]),t}(n.a.Component);var Z=Object(l.connect)(function(e){return e})(function(e){return n.a.createElement(X,{token:e.auth.userAuthorization.token,baseURL:e.app.config.baseUrl})}),$=S.a.TabPane,ee=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(O.a)(this,Object(k.a)(t).call(this,e))).searchOnATab=n.a.createElement("div",{className:"search-on-a-tab"},"Search other users ",n.a.createElement(Z,null)),a.state={tabTitle:["Profile","Narratives","Shared narratives","Search users"],userName:{name:"",userID:""},editEnable:!1,userProfile:{organization:"",department:"",city:"",state:"",postalCode:"",country:"",affiliations:[],researchStatement:"",jobTitle:"",jobTitleOther:"",researchInterests:[],fundingSource:"",gravatarDefault:"",avatarOption:""},userProfileLoaded:!1,narratives:[],narrativesLoaded:!1,sharedNarratives:[],sharedNarrativesLoaded:!1,organizations:[],organizationsLoaded:!1,gravatarHash:""},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;console.log("home page props",this.props),this.props.username?(e=this.props.username,this.props.setTitle("User Profile for "+e)):(e=this.props.authUsername,this.props.setTitle("Your User Profile"),this.setState({editEnable:!0})),function(e,t,a){return J.apply(this,arguments)}(e,this.props.token,this.props.baseURL).then(function(e){console.log("user profile response",e),"undefined"!==typeof e?(t.props.username&&t.props.setTitle("User Profile for "+e.user.realname),t.setState({userName:{name:e.user.realname,userID:e.user.username},gravatarHash:e.profile.synced.gravatarHash,userProfile:e.profile.userdata,userProfileLoaded:!0})):t.setState({userName:{name:"Something went wrong. Please check console for error messages..",userID:""}})}),function(e,t,a){return q.apply(this,arguments)}(e,this.props.token,this.props.baseURL).then(function(e){var a=[];"undefined"!==typeof e?(e.forEach(function(e){a.push({name:e.name,url:t.props.baseURL+"/#org/"+e.id})}),t.setState({organizations:a,organizationsLoaded:!0})):t.setState({organizations:[{name:"Something went wrong. Please check console for error messages.",url:""}],organizationsLoaded:!0})});var a=this.props.username;if("undefined"!==typeof this.props.username&&"undefined"!==typeof this.props.authUsername)if(this.props.username===a)this.props.loadNarratives("mine"),W("mine",this.props.token,this.props.baseURL).then(function(e){"undefined"!==typeof e?(console.log("response fetchNarrativesAPI",e),t.setState({narratives:e,narrativesLoaded:!0})):t.setState({narratives:[{wsID:"",permission:"",name:"Something went wrong. Please check console for error messages.",last_saved:0,users:{},narrative_detail:{creator:""}}],narrativesLoaded:!0})}),W("shared",this.props.token,this.props.baseURL).then(function(e){"undefined"!==typeof e?t.setState({sharedNarratives:e,sharedNarrativesLoaded:!0}):t.setState({sharedNarratives:[{wsID:"",permission:"",name:"Something went wrong. Please check console for error messages.",last_saved:0,users:{},narrative_detail:{creator:""}}],sharedNarrativesLoaded:!0})});else{var r=W("public",this.props.token,this.props.baseURL).then(function(e){if("undefined"!==typeof e)return e;t.setState({narratives:[{wsID:"",permission:"",name:"Something went wrong. Please check console for error messages.",last_saved:0,users:{},narrative_detail:{creator:""}}],narrativesLoaded:!0})}),n=W("shared",this.props.token,this.props.baseURL).then(function(e){return e});Promise.all([r,n]).then(function(e){var r=[];if("undefined"!==typeof e[1])for(var n=0;n<e[1].length;n++){var s=e[1][n];if(s.narrative_detail.creator!==a)for(var o in s.users)o===a&&r.push(s)}var i=[];if("undefined"!==typeof e[0])for(var l=e[0].concat(e[1]),c=0;c<l.length;c+=1)l[c].narrative_detail.creator===a&&i.push(l[c]);t.setState({narratives:i,narrativesLoaded:!0,sharedNarratives:r,sharedNarrativesLoaded:!0})})}else this.setState({narratives:[{wsID:"",permission:"",name:"Something went wrong. Please check console for error messages.",last_saved:1,users:{},narrative_detail:{creator:""}}],narrativesLoaded:!0})}},{key:"componentDidUpdate",value:function(e,t){this.state}},{key:"render",value:function(){return n.a.createElement("div",{className:"profile-tabs"},n.a.createElement(S.a,{type:"line",defaultActiveKey:"1"},n.a.createElement($,{tab:"Profile",key:"1"},n.a.createElement(T,{baseURL:this.props.baseURL,userName:this.state.userName,editEnable:this.state.editEnable,userProfile:this.state.userProfile,orgs:this.state.organizations,gravatarHash:this.state.gravatarHash,profileloaded:this.state.userProfileLoaded,orgsloaded:this.state.organizationsLoaded,token:this.props.token})),n.a.createElement($,{tab:"Narratives",key:"3"},n.a.createElement(U,{narratives:this.state.narratives,narrativesloaded:this.state.narrativesLoaded})),n.a.createElement($,{disabled:!0,tab:this.searchOnATab,key:"8"})))}}]),t}(n.a.Component),te="LOAD_NARRATIVES",ae="LOAD_MINE_NARRATIVES";var re=Object(l.connect)(function(e,t){var a=e.auth.userAuthorization,r=e.app,n=r.config.baseUrl,s=r.runtime.navigation.params;if(!a)throw new Error("This plugin only operates with authentication; no KBase token in store");var o=s;return{token:a.token,authUsername:a.username,username:o.username||null,baseURL:n}},function(e,t){return{loadNarratives:function(t){return e(function(e){return function(){var t=Object(F.a)(C.a.mark(function t(a,r){var n,s,o;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(n=r()).auth.userAuthorization){t.next=9;break}return s=n.auth.userAuthorization.token,n.app.config.baseUrl,t.next=6,W(e,s,"https://ci.kbase.us/");case 6:o=t.sent,console.log("loadNarratives action with async",o),a({type:ae,payload:{response:o}});case 9:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}(t))},setTitle:function(t){return e(Object(p.sendTitle)(t))},loadNarratives_original:function(){return e({type:te,payload:[{wsID:"foo",permission:"r",name:"foofoo",last_saved:0,users:{},narrative_detail:{creator:"me"}}]})}}})(ee),ne=i.a.Content,se=Object(u.d)(b,y(),Object(u.c)(Object(u.a)(d.a))),oe=function(){return n.a.createElement(l.Provider,{store:se},n.a.createElement(p.AppBase,null,n.a.createElement(p.AuthGate,{required:!0},n.a.createElement("div",{className:"App"},n.a.createElement(i.a,{style:{minHeight:"100vh"}},n.a.createElement(ne,{style:{backgroundColor:"white"}},n.a.createElement(re,null)))))))};o.a.render(n.a.createElement(oe,null),document.getElementById("root"))}},[[356,1,2]]]);
//# sourceMappingURL=main.fbb27ec4.chunk.js.map