(this.webpackJsonpsign=this.webpackJsonpsign||[]).push([[0],{189:function(e,t,r){},200:function(e,t,r){},337:function(e,t){},353:function(e,t){},355:function(e,t){},365:function(e,t){},367:function(e,t){},377:function(e,t){},429:function(e,t,r){"use strict";r.r(t);var n=r(5),s=r(180),a=r.n(s),c=(r(189),r(10)),i=r(11),o=r(20),l=r(19),u=r(181),d=r.n(u),h=(r(200),r(12)),j=r(80),b=r(184),p=r(182),f=r.n(p),m=[{$id:"/golos/transaction",type:"array",minItems:1,items:[{$ref:"/golos/operation"}]},{$id:"/golos/account",type:"string",pattern:"^[a-z][-\\.a-z\\d]{2,15}[a-z\\d]$"},{$id:"/golos/asset",type:"string",pattern:"^[0-9]+\\.[0-9]{3} (GOLOS|GBG)$"},{$id:"/golos/permlink",type:"string",pattern:"^.{1,256}$"},{$id:"/golos/public_key",type:"string",pattern:"^GLS[0-9a-zA-Z]{50}$"},{$id:"/golos/percent",type:"integer",minimum:0,maximum:1e4},{$id:"/golos/operation",type:"array",minItems:2,maxLength:2,items:[{type:"string",enum:["vote","comment","transfer","transfer_to_vesting","withdraw_vesting","limit_order_create","limit_order_cancel","feed_publish","convert","account_create","account_update","witness_update","account_witness_vote","account_witness_proxy","pow","custom","report_over_production","delete_comment","custom_json","comment_options","set_withdraw_vesting_route","limit_order_create2","challenge_authority","prove_authority","request_account_recovery","recover_account","change_recovery_account","escrow_transfer","escrow_dispute","escrow_release","pow2","escrow_approve","transfer_to_savings","transfer_from_savings","cancel_transfer_from_savings","custom_binary","decline_voting_rights","reset_account","set_reset_account","delegate_vesting_shares","account_create_with_delegation","account_metadata","proposal_create","proposal_update","proposal_delete","chain_properties_update","break_free_referral","delegate_vesting_shares_with_interest","reject_vesting_shares_delegation","worker_request","worker_request_delete","worker_request_vote"]},{type:"object"}]}],_=r(100),v=r.n(_),O={owner:0,active:1,posting:2,memo:3};function g(e){return e.sort((function(e,t){return O[t]-O[e]}))}var x=new f.a({schemas:m,verbose:!0}).getSchema("/golos/transaction"),w=function(){function e(t){if(Object(c.a)(this,e),!x(t))throw x.errors;this.raw_transaction=Object(b.a)(t),this.ops=[],this.readOps()}return Object(i.a)(e,[{key:"required_wif",get:function(){if(0===this.ops.length)return null;var e,t=[],r=Object(j.a)(this.ops);try{for(r.s();!(e=r.n()).done;){var n=e.value;t.push(n.role)}}catch(s){r.e(s)}finally{r.f()}return g(t)[0]}},{key:"readOps",value:function(){var e,t=Object(j.a)(this.raw_transaction);try{for(t.s();!(e=t.n()).done;){var r=e.value;this.ops.push(new y(r[0],r[1]))}}catch(n){t.e(n)}finally{t.f()}}}]),e}(),y=function(){function e(t,r){Object(c.a)(this,e),this.name=t,this.body=r;var n,s=Object(j.a)(v.a);try{for(s.s();!(n=s.n()).done;){var a=n.value;a.operation===this.name&&(this.roles=g(a.roles))}}catch(i){s.e(i)}finally{s.f()}}return Object(i.a)(e,[{key:"role",get:function(){return this.roles[0]}}]),e}();var N,k=r(13),S=r(79),C=r(24),$=r.n(C),q=r(54),G=r(252),I="password",L="wif",z="websocket",W="wss://golos.lexai.host/ws";N={},Object(k.a)(N,W,"Lex"),Object(k.a)(N,"wss://golos.viz.media/ws","Solox"),Object(k.a)(N,"wss://api-golos.blckchnd.com/ws","Blockchained"),Object(k.a)(N,"wss://api.aleksw.space/ws","alexw");function A(){return localStorage.getItem(z)||W}function B(){var e=A();try{G.api.stop()}catch(t){}G.config.set(z,e)}function E(){return(E=Object(q.a)($.a.mark((function e(t,r,n,s){var a,c,i,o,l,u,d,h;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(),a=t.raw_transaction,c=t.required_wif,i=J(r,n,s,c),o={extensions:[],operations:a},l=Object(k.a)({},c,i),e.next=7,G.broadcast._prepareTransaction(o);case 7:return u=e.sent,d=G.auth.signTransaction(u,l),e.next=11,G.api.broadcastTransactionSynchronousAsync(d);case 11:return h=e.sent,e.abrupt("return",h);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t,r,n){switch(e){case I:return G.auth.getPrivateKeys(t,r,[n])[n];default:return r}}function P(){return(P=Object(q.a)($.a.mark((function e(t){var r,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0430\u0440\u043e\u043b\u0435\u043c");case 2:return e.next=4,G.api.getAccountsAsync([t]);case 4:if(r=e.sent,n=Object(S.a)(r,1),n[0]){e.next=9;break}return e.abrupt("return","\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!");case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e,t,r,n){return E.apply(this,arguments)},T=r(0),U={"Expected version":"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u0435\u043c, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442, \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0439 \u0437\u043d\u0430\u043a",3020100:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043b\u0438\u0431\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u043b\u0438\u0431\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0430\u0443\u0442\u043e\u0440\u0438\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",202e4:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",308e4:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0432 \u0431\u043b\u043e\u043a\u0435",203e4:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c",1020400:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",4020100:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0435\u043b\u043e\u0432",301e4:"\u041e\u0448\u0438\u0431\u043e\u0447\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0432 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"};function M(e){for(var t in U)if(e.match(t))return U[t];return null}var D=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"extractErrorMessage",value:function(){var e=this.props.error;console.error("error",e);var t=[Object(T.jsx)("h4",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"},"head")];if(e.message)for(var r=e.message.split("\n"),n=0;n<r.length;n++)if(r[n]&&!r[n].match(/for the full error payload/)){t.push(Object(T.jsx)("p",{className:"mb-0",children:r[n]},"error-text"));var s=M(r[n]);s&&t.push(Object(T.jsx)("small",{className:"mb-0",children:s},"error-desc"))}return t}},{key:"extractUsefulInfos",value:function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("h4",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"}),Object(T.jsxs)("p",{className:"mb-0",children:["\u041d\u043e\u043c\u0435\u0440 \u0431\u043b\u043e\u043a\u0430: ",this.props.result.block_num]}),Object(T.jsxs)("p",{className:"mb-0",children:["ID \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438: ",this.props.result.id]}),this.props.redirect&&Object(T.jsxs)("p",{className:"mt-2",children:["\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0430\u0434\u0440\u0435\u0441 ",Object(T.jsx)("strong",{children:this.props.redirect}),"..."]})]})}},{key:"render",value:function(){var e=!!this.props.error,t=e?"danger":"success",r=e?this.extractErrorMessage():this.extractUsefulInfos();return Object(T.jsx)("div",{className:"mt-5 mb-5 alert alert-"+t,role:"alert",children:r})}}]),r}(n.Component),K=r(101),R=r.n(K);function V(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),r=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(q.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://raw.githubusercontent.com/golos-blockchain/golos-links/main/api-nodes.json").then((function(e){return e.json()})).then((function(e){return s(e)}),(function(e){return console.log("unable to load nodes from hithub")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.map((function(e){return Object(T.jsx)("option",{value:e.url,children:e.name},e.url)}))}var Z=function(e){var t=A();return Object(T.jsxs)("div",{className:"form-group  input-group-sm",children:[Object(T.jsx)("label",{htmlFor:"selectNode",children:"\u041d\u043e\u0434\u0430"}),Object(T.jsx)("select",{className:"form-control",id:"selectNode",defaultValue:t,onChange:function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;try{G.api.stop()}catch(t){}G.config.set(z,e),localStorage.setItem(z,e)}(e.target.value)},children:Object(T.jsx)(V,{})})]})};function H(e){switch(e){case"owner":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430";case"active":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043b\u044e\u0447";case"posting":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u043f\u043e\u0441\u0442\u0438\u043d\u0433 \u043a\u043b\u044e\u0447";case"memo":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u043a\u043b\u044e\u0447 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0442\u043e\u043a";default:return null}}var Q=function(e){var t=e.wif_error?" is-invalid":"";return Object(T.jsx)("input",{id:e.id,name:e.id,value:e.wif,onChange:function(t){return e.onChange("wif",t.target.value)},type:"password",className:"form-control"+t,"aria-describedby":"wif-help",required:!0})},X=function(e){return Object(T.jsx)("div",{className:"form-group input-group-sm",children:Object(T.jsx)("button",{type:"button",id:"sign-botton",className:"btn btn-primary",onClick:e.onSign,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})},Y=function(e){var t=e.transaction,r=e.form_class,n=e.wif_error;return Object(T.jsxs)("form",{id:"sign-form",className:r,children:[Object(T.jsx)(Z,{}),Object(T.jsxs)("div",{className:"form-group input-group-sm",children:[Object(T.jsx)("label",{htmlFor:"wif",children:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447"}),Object(T.jsx)(Q,Object(h.a)({id:"wif"},e)),Object(T.jsxs)("small",{id:"wif-help",className:"form-text text-muted",children:["\u0414\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c ",Object(T.jsx)("strong",{children:H(t.required_wif)})]}),Object(T.jsx)("div",{className:"invalid-feedback",children:n})]}),Object(T.jsx)(X,Object(h.a)({},e))]})},ee=function(e){var t=e.form_class,r=e.onChange,n=e.account,s=e.account_error,a=e.wif_error,c=s?" is-invalid":"";return Object(T.jsxs)("form",{id:"sign-form",className:t,children:[Object(T.jsx)(Z,{}),Object(T.jsxs)("div",{className:"form-group input-group-sm",children:[Object(T.jsx)("label",{htmlFor:"account",children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(T.jsx)("input",{id:"account",name:"account",value:n,onChange:function(e){return r("account",e.target.value)},type:"text",className:"form-control"+c,placeholder:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0435 golos",required:!0}),Object(T.jsx)("div",{className:"invalid-feedback",children:s})]}),Object(T.jsxs)("div",{className:"form-group input-group-sm",children:[Object(T.jsx)("label",{htmlFor:"wif",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(T.jsx)(Q,Object(h.a)({id:"password"},e)),Object(T.jsx)("div",{className:"invalid-feedback",children:a})]}),Object(T.jsx)(X,Object(h.a)({},e))]})},te=function(e){switch(e.sign_type){case L:return Object(T.jsx)(Y,Object(h.a)({},e));default:return Object(T.jsx)(ee,Object(h.a)({},e))}},re=r(102),ne=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={wif:"",account:e.user||"",error:null,result:null,sign_type:L,account_error:null,sending:!1,redirect:null},n}return Object(i.a)(r,[{key:"send",value:function(){var e=this;F(this.props.transaction,this.state.sign_type,this.state.account,this.state.wif).then((function(t){return e.onSuccess(t)})).catch((function(t){return e.setState({result:null,error:t,account_error:null,sending:!1})})),this.setState({sending:!0,error:null,result:null})}},{key:"onSuccess",value:function(e){this.setState({result:e,error:null,account_error:null,sending:!1}),this.redirect()}},{key:"redirect",value:function(){var e=this;this.props.redirect&&setTimeout((function(){window.location=e.props.redirect}),5e3)}},{key:"onSign",value:function(){var e=this;switch(this.state.sign_type){case I:var t=null;this.state.wif||(t="\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"),function(e){return P.apply(this,arguments)}(this.state.account).then((function(r){r||t?e.setState({account_error:r,wif_error:t}):e.send()})).catch((function(t){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"),e.setState({account_error:"\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})}));break;default:if(!this.state.wif)return void this.setState({wif_error:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"});this.send()}}},{key:"onChange",value:function(e,t){var r;this.setState((r={},Object(k.a)(r,e,t),Object(k.a)(r,"wif_error",null),Object(k.a)(r,"account_error",null),r))}},{key:"render",value:function(){var e=this,t=this.props,r=t.nowif,n=t.redirect,s=function(t){var r=t.sign_type,n=e.state.sign_type===r?" active ":"";return Object(T.jsx)("li",{className:"nav-item",children:Object(T.jsx)("button",{type:"button",className:"btn btn-block nav-link "+n,onClick:function(){return e.setState({sign_type:r})},children:t.label})})},a=function(t){if(r){var n=e.state.sign_type===I,s=n?Object(T.jsx)(re.a,{}):Object(T.jsx)(re.b,{}),a=n?L:I,c=n?"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u043e\u043c":"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c";return Object(T.jsx)("button",{type:"button",title:c,className:"btn-outline-primary float-right btn btn-sm btn-primary",onClick:function(){return e.setState({sign_type:a})},children:s})}return null};return Object(T.jsxs)("div",{className:"clearfix border p-2 m-2",children:[!r&&Object(T.jsx)("div",{className:" mb-3",children:!this.state.sending&&!this.state.result&&Object(T.jsxs)("div",{children:[Object(T.jsx)(R.a,{minWidth:425,children:Object(T.jsxs)("ul",{className:"nav nav-tabs",children:[Object(T.jsx)(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u043e\u043c",sign_type:L},L),Object(T.jsx)(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c",sign_type:I},I)]})}),Object(T.jsx)(R.a,{maxWidth:420,children:Object(T.jsxs)("ul",{className:"nav nav-pills nav-justified",children:[Object(T.jsx)(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u0435\u043c",sign_type:L},L),Object(T.jsx)(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c",sign_type:I},I)]})})]})}),(this.state.error||this.state.result)&&Object(T.jsx)(D,{error:this.state.error,result:this.state.result,redirect:n}),this.state.sending&&Object(T.jsx)("div",{className:"mt-5 mb-5 alert alert-warning",role:"alert",children:Object(T.jsx)("h4",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430..."})}),!this.state.sending&&!this.state.result&&Object(T.jsx)(te,Object(h.a)(Object(h.a)({onChange:function(t,r){return e.onChange(t,r)},onSign:function(){return e.onSign()},form_class:"needs-validation"},this.state),this.props)),!this.state.sending&&!this.state.result&&Object(T.jsx)(a,{})]})}}]),r}(n.Component);function se(e){switch(e.name){case"transfer":return Object(T.jsxs)("div",{className:"md-2 border-bottom",children:[Object(T.jsx)("strong",{children:"\u041e\u0442"})," ",e.body.from,", ",Object(T.jsx)("strong",{children:"\u041a\u043e\u043c\u0443"})," ",e.body.to,", ",Object(T.jsx)("strong",{children:"\u0421\u0443\u043c\u043c\u0430"})," ",e.body.amount,Object(T.jsx)("br",{}),Object(T.jsx)("strong",{children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430"})," ",(""+e.body.memo||"").substring(0,50)]});default:return Object(T.jsx)("pre",{children:JSON.stringify(e.body,null,2)})}}var ae={vote:"\u0410\u043f\u0432\u043e\u0443\u0442",comment:"\u041f\u043e\u0441\u0442/\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",transfer:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434",transfer_to_vesting:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0432 \u0421\u0413",withdraw_vesting:"\u041f\u043e\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0421\u0413",limit_order_create:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0440\u0434\u0435\u0440",limit_order_cancel:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0440\u0434\u0435\u0440",feed_publish:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0444\u0438\u0434",convert:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c GBG \u0432 GOLOS",account_create:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442",account_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442",witness_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430",account_witness_vote:"\u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c \u0437\u0430 \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430",account_witness_proxy:"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0433\u043e",pow:"Proof of Work",custom:"custom",report_over_production:"\u041d\u0430\u0441\u0442\u0443\u0447\u0430\u0442\u044c",delete_comment:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442 \u0438\u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",custom_json:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f",comment_options:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u0441\u0442/\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",set_withdraw_vesting_route:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u043f\u043e\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0421\u0413",limit_order_create2:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0440\u0434\u0435\u0440 2",challenge_authority:"challenge_authority",prove_authority:"prove_authority",request_account_recovery:"request_account_recovery",recover_account:"recover_account",change_recovery_account:"change_recovery_account",escrow_transfer:"escrow_transfer",escrow_dispute:"escrow_dispute",escrow_release:"escrow_release",pow2:"Proof of Work 2",escrow_approve:"escrow_approve",transfer_to_savings:"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432 \u0441\u0435\u0439\u0444",transfer_from_savings:"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u0438\u0437 \u0441\u0435\u0439\u0444\u0430",cancel_transfer_from_savings:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0438\u0437 \u0441\u0435\u0439\u0444\u0430",custom_binary:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f (\u0431\u0438\u043d.)",decline_voting_rights:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f (\u043d\u0435\u043e\u0431\u0440\u0430\u0442\u0438\u043c\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f!)",reset_account:"reset_account",set_reset_account:"set_reset_account",delegate_vesting_shares:"delegate_vesting_shares",account_create_with_delegation:"account_create_with_delegation",account_metadata:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",proposal_create:"proposal_create",proposal_update:"proposal_update",proposal_delete:"proposal_delete",chain_properties_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0442\u0438",break_free_referral:"\u041e\u0442\u043a\u0443\u043f\u0438\u0442\u044c\u0441\u044f",delegate_vesting_shares_with_interest:"\u0414\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 \u043e\u0442\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430",reject_vesting_shares_delegation:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0434\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"};function ce(e){var t=ae[e.name];return t||(t=e.name),Object(T.jsx)("span",{className:"label label-default",children:t})}var ie=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).status={},n}return Object(i.a)(r,[{key:"render",value:function(){return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("div",{className:"row ",children:Object(T.jsx)("div",{className:"col-sm-12",children:Object(T.jsx)(ne,Object(h.a)({},this.props))})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-sm-12",children:Object(T.jsxs)("div",{className:" border m-2 p-2",children:[Object(T.jsx)("div",{className:"alert alert-info",role:"alert",children:Object(T.jsx)("h4",{children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435"})}),Object(T.jsx)("div",{className:"container",children:this.props.transaction.ops.map((function(e,t){return Object(T.jsxs)("div",{className:"row",children:[Object(T.jsxs)("div",{className:"col-sm-3",children:[Object(T.jsx)("div",{className:"font-weight-bold",children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f"}),ce(e),Object(T.jsx)("div",{children:Object(T.jsx)("small",{children:e.name})})]}),Object(T.jsxs)("div",{className:"col-sm-9",children:[Object(T.jsx)("div",{className:"font-weight-bold",children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),se(e)]})]},t)}))})]})})})]})}}]),r}(n.Component),oe=(r(428),function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(T.jsx)("h4",{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0430\u044f \u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"})}),Object(T.jsxs)("table",{className:"table table-sm",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"\u0422\u0438\u043f \u043e\u0448\u0438\u0431\u043a\u0438"}),Object(T.jsx)("th",{children:"\u041c\u0435\u0441\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(T.jsx)("th",{children:"\u0421\u0445\u0435\u043c\u0430"}),Object(T.jsx)("th",{children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})]})}),Object(T.jsx)("tbody",{children:this.props.errors.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:e.keyword}),Object(T.jsx)("td",{children:e.dataPath}),Object(T.jsx)("td",{children:e.schemaPath}),Object(T.jsx)("td",{children:e.message})]},t)}))})]})]})}}]),r}(n.Component)),le=r(183),ue=function(e){return Object(T.jsx)("div",{className:"mt-5 mb-5 alert alert-danger",role:"alert",children:Object(T.jsx)("h4",{children:e.error})})},de=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={transaction:null,errors:null,error:null},n}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=d.a.parse(window.location.search),t=e.title||"\u041f\u0438\u0441\u0430\u0440\u044c",r=e.subtitle,n=Object.keys(e).includes("nowif"),s=e.user,a=Object(le.sanitizeUrl)(e.redirect||"");"about:blank"===a&&(a=null);var c=e.tr;if(!c)return console.error("\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d URL \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 tr"),void this.setState({title:t,subtitle:r,error:"\u0412\u044b\u0437\u043e\u0432 \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"});try{var i=null;try{i=JSON.parse(c)}catch(l){return console.error("not valid json",c),void this.setState({title:t,subtitle:r,error:"\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u043c JSON"})}var o=new w(i);this.setState({transaction:o,title:t,subtitle:r,user:s,nowif:n,redirect:a})}catch(u){console.error("found errors",u),this.setState({errors:u})}}},{key:"render",value:function(){var e=null;return this.state.transaction?e=Object(T.jsx)(ie,{redirect:this.state.redirect,nowif:this.state.nowif,user:this.state.user,transaction:this.state.transaction}):this.state.error?e=Object(T.jsx)(ue,{error:this.state.error}):this.state.errors&&(e=Object(T.jsx)(oe,{errors:this.state.errors})),Object(T.jsxs)("div",{className:"container App",children:[Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-sm-12",children:Object(T.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(T.jsxs)("div",{className:"mr-auto",children:[Object(T.jsx)("h3",{children:this.state.title}),this.state.subtitle&&Object(T.jsx)("h5",{children:this.state.subtitle}),Object(T.jsx)("br",{}),Object(T.jsxs)("small",{children:["\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 GOLOS",Object(T.jsxs)("a",{rel:"noopener noreferrer",target:"_blank",href:"http://golos.io/@ropox/sign",children:["\xa0",Object(T.jsx)("span",{className:"rounded-circle bg-info text-white font-weight-bold",children:"\xa0?\xa0"})]})]})]})})})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-sm-12",children:e})})]})}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));B(),a.a.render(Object(T.jsx)(de,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[429,1,2]]]);
//# sourceMappingURL=main.2aed07e2.chunk.js.map