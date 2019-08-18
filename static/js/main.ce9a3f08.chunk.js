(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){e.exports=a(335)},143:function(e,t,a){},150:function(e,t,a){},270:function(e,t){},282:function(e,t){},284:function(e,t){},299:function(e,t){},335:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(132),o=a.n(s),c=(a(143),a(4)),l=a(5),i=a(11),u=a(10),m=a(12),d=a(133),p=a.n(d),h=(a(150),a(136)),f=a(134),_=a.n(f),v=[{$id:"/golos/transaction",type:"array",minItems:1,items:[{$ref:"/golos/operation"}]},{$id:"/golos/account",type:"string",pattern:"^[a-z][-\\.a-z\\d]{2,15}[a-z\\d]$"},{$id:"/golos/asset",type:"string",pattern:"^[0-9]+\\.[0-9]{3} (GOLOS|GBG)$"},{$id:"/golos/permlink",type:"string",pattern:"^.{1,256}$"},{$id:"/golos/public_key",type:"string",pattern:"^GLS[0-9a-zA-Z]{50}$"},{$id:"/golos/percent",type:"integer",minimum:0,maximum:1e4},{$id:"/golos/operation",type:"array",minItems:2,maxLength:2,items:[{type:"string",enum:["vote","comment","transfer","transfer_to_vesting","withdraw_vesting","limit_order_create","limit_order_cancel","feed_publish","convert","account_create","account_update","witness_update","account_witness_vote","account_witness_proxy","pow","custom","report_over_production","delete_comment","custom_json","comment_options","set_withdraw_vesting_route","limit_order_create2","challenge_authority","prove_authority","request_account_recovery","recover_account","change_recovery_account","escrow_transfer","escrow_dispute","escrow_release","pow2","escrow_approve","transfer_to_savings","transfer_from_savings","cancel_transfer_from_savings","custom_binary","decline_voting_rights","reset_account","set_reset_account","delegate_vesting_shares","account_create_with_delegation","account_metadata","proposal_create","proposal_update","proposal_delete","chain_properties_update","break_free_referral","delegate_vesting_shares_with_interest","reject_vesting_shares_delegation"]},{type:"object"}]}],g=a(66),b=a.n(g),E={owner:0,active:1,posting:2,memo:3};function w(e){return e.sort(function(e,t){return E[t]-E[e]})}var y=new _.a({schemas:v,verbose:!0}).getSchema("/golos/transaction"),O=function(){function e(t){if(Object(c.a)(this,e),!y(t))throw y.errors;this.raw_transaction=Object(h.a)(t),this.ops=[],this.readOps()}return Object(l.a)(e,[{key:"readOps",value:function(){var e=!0,t=!1,a=void 0;try{for(var r,n=this.raw_transaction[Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var s=r.value;this.ops.push(new N(s[0],s[1]))}}catch(o){t=!0,a=o}finally{try{e||null==n.return||n.return()}finally{if(t)throw a}}}},{key:"required_wif",get:function(){if(0==this.ops.length)return null;var e=[],t=!0,a=!1,r=void 0;try{for(var n,s=this.ops[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var o=n.value;e.push(o.role)}}catch(c){a=!0,r=c}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}return w(e)[0]}}]),e}(),N=function(){function e(t,a){Object(c.a)(this,e),this.name=t,this.body=a;var r=!0,n=!1,s=void 0;try{for(var o,l=b.a[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var i=o.value;i.operation===this.name&&(this.roles=w(i.roles))}}catch(u){n=!0,s=u}finally{try{r||null==l.return||l.return()}finally{if(n)throw s}}}return Object(l.a)(e,[{key:"role",get:function(){return this.roles[0]}}]),e}();var k,j=a(14),S=a(137),x=a(33),W=a.n(x),C=a(67),A=a(186),I={PASSWORD:"password",WIF:"wif"},P="websocket",$="wss://golos.lexa.host/ws",D=(k={},Object(j.a)(k,$,"Lex"),Object(j.a)(k,"wss://golos.solox.world/ws","Solox"),Object(j.a)(k,"wss://api.golos.blckchnd.com/ws","Blockchained"),k);function R(){return localStorage.getItem(P)||$}function q(){var e=R();A.api.stop(),A.config.set(P,e)}function F(){return(F=Object(C.a)(W.a.mark(function e(t,a,r,n){var s,o,c,l,i,u,m,d;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return q(),s=t.raw_transaction,o=t.required_wif,c=G(a,r,n,o),l={extensions:[],operations:s},i=Object(j.a)({},o,c),e.next=7,A.broadcast._prepareTransaction(l);case 7:return u=e.sent,m=A.auth.signTransaction(u,i),e.next=11,A.api.broadcastTransactionSynchronousAsync(m);case 11:return d=e.sent,e.abrupt("return",d);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}function G(e,t,a,r){switch(e){case I.PASSWORD:return A.auth.getPrivateKeys(t,a,[r])[r];default:return a}}function L(){return(L=Object(C.a)(W.a.mark(function e(t){var a,r;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0430\u0440\u043e\u043b\u0435\u043c");case 2:return e.next=4,A.api.getAccountsAsync([t]);case 4:if(a=e.sent,r=Object(S.a)(a,1),r[0]){e.next=9;break}return e.abrupt("return","\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!");case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}var z=function(e,t,a,r){return F.apply(this,arguments)},B={"Expected version":"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u0435\u043c, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442, \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0439 \u0437\u043d\u0430\u043a",3020100:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043b\u0438\u0431\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u043b\u0438\u0431\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0430\u0443\u0442\u043e\u0440\u0438\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",2020000:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",3080000:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0432 \u0431\u043b\u043e\u043a\u0435",2030000:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c",1020400:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",4020100:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0435\u043b\u043e\u0432",3010000:"\u041e\u0448\u0438\u0431\u043e\u0447\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0432 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"};function J(e){for(var t in B)if(e.match(t))return B[t];return null}var T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"extractErrorMessage",value:function(){var e=this.props.error;console.log("error",e);var t=[n.a.createElement("h4",{key:"head"},"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438")];if(e.message)for(var a=e.message.split("\n"),r=0;r<a.length;r++)if(a[r]&&!a[r].match(/for the full error payload/)){t.push(n.a.createElement("p",{key:"error-text",className:"mb-0"},a[r]));var s=J(a[r]);s&&t.push(n.a.createElement("small",{key:"error-desc",className:"mb-0"},s))}return t}},{key:"extractUsefulInfos",value:function(){return console.log("ret",this.props.result),n.a.createElement("div",null,n.a.createElement("h4",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"),n.a.createElement("p",{className:"mb-0"},"\u041d\u043e\u043c\u0435\u0440 \u0431\u043b\u043e\u043a\u0430: ",this.props.result.block_num),n.a.createElement("p",{className:"mb-0"},"ID \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438: ",this.props.result.id),this.props.redirect&&n.a.createElement("p",{className:"mt-2"},"\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0430\u0434\u0440\u0435\u0441 ",n.a.createElement("strong",null,this.props.redirect),"..."))}},{key:"render",value:function(){var e=!!this.props.error,t=e?"danger":"success",a=e?this.extractErrorMessage():this.extractUsefulInfos();return n.a.createElement("div",{className:"mt-5 mb-5 alert alert-"+t,role:"alert"},a)}}]),t}(r.Component),U=a(68),M=a.n(U),K=function(e){var t=R();return n.a.createElement("div",{className:"form-group  input-group-sm"},n.a.createElement("label",{for:"selectNode"},"\u041d\u043e\u0434\u0430"),n.a.createElement("select",{className:"form-control",id:"selectNode",onChange:function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$;A.api.stop(),A.config.set(P,e),localStorage.setItem(P,e)}(e.target.value)}},Object.keys(D).map(function(e){return n.a.createElement("option",{value:e,selected:e===t},D[e])})))};var Z=function(e){var t=e.wif_error?" is-invalid":"";return n.a.createElement("input",{id:e.id,name:e.id,value:e.wif,onChange:function(t){return e.onChange("wif",t.target.value)},type:"password",className:"form-control"+t,"aria-describedby":"wif-help",required:!0})},H=function(e){return n.a.createElement("div",{className:"form-group input-group-sm"},n.a.createElement("button",{type:"button",id:"sign-botton",className:"btn btn-primary",onClick:e.onSign},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))},Q=function(e){var t=e.transaction,a=e.form_class,r=e.wif_error;return n.a.createElement("form",{id:"sign-form",className:a},n.a.createElement(K,null),n.a.createElement("div",{className:"form-group input-group-sm"},n.a.createElement("label",{htmlFor:"wif"},"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447"),n.a.createElement(Z,Object.assign({id:"wif"},e)),n.a.createElement("small",{id:"wif-help",className:"form-text text-muted"},"\u0414\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c ",n.a.createElement("strong",null,function(e){switch(console.log("translate role",e),e){case"owner":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430";case"active":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043b\u044e\u0447";case"posting":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u043f\u043e\u0441\u0442\u0438\u043d\u0433 \u043a\u043b\u044e\u0447";case"memo":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u043a\u043b\u044e\u0447 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0442\u043e\u043a";default:return null}}(t.required_wif))),n.a.createElement("div",{className:"invalid-feedback"},r)),n.a.createElement(H,e))},V=function(e){var t=e.form_class,a=e.onChange,r=e.account,s=e.account_error,o=e.wif_error,c=s?" is-invalid":"";return n.a.createElement("form",{id:"sign-form",className:t},n.a.createElement(K,null),n.a.createElement("div",{className:"form-group input-group-sm"},n.a.createElement("label",{htmlFor:"account"},"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),n.a.createElement("input",{id:"account",name:"account",value:r,onChange:function(e){return a("account",e.target.value)},type:"text",className:"form-control"+c,placeholder:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0435 golos",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},s)),n.a.createElement("div",{className:"form-group input-group-sm"},n.a.createElement("label",{htmlFor:"wif"},"\u041f\u0430\u0440\u043e\u043b\u044c"),n.a.createElement(Z,Object.assign({id:"password"},e)),n.a.createElement("div",{className:"invalid-feedback"},o)),n.a.createElement(H,e))},X=function(e){switch(e.sign_type){case I.WIF:return n.a.createElement(Q,e);default:return n.a.createElement(V,e)}},Y=a(69),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={wif:"",account:e.user||"",error:null,result:null,sign_type:I.PASSWORD,account_error:null,sending:!1,redirect:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"send",value:function(){var e=this;z(this.props.transaction,this.state.sign_type,this.state.account,this.state.wif).then(function(t){return e.onSuccess(t)}).catch(function(t){return e.setState({result:null,error:t,account_error:null,sending:!1})}),this.setState({sending:!0,error:null,result:null})}},{key:"onSuccess",value:function(e){this.setState({result:e,error:null,account_error:null,sending:!1}),this.redirect()}},{key:"redirect",value:function(){var e=this;this.props.redirect&&setTimeout(function(){window.location=e.props.redirect},5e3)}},{key:"onSign",value:function(){var e=this;switch(this.state.sign_type){case I.PASSWORD:var t=null;this.state.wif||(t="\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"),function(e){return L.apply(this,arguments)}(this.state.account).then(function(a){a||t?e.setState({account_error:a,wif_error:t}):e.send()}).catch(function(t){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"),e.setState({account_error:"\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})});break;default:if(!this.state.wif)return void this.setState({wif_error:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"});this.send()}}},{key:"onChange",value:function(e,t){var a;console.log("onChange",e,t),this.setState((a={},Object(j.a)(a,e,t),Object(j.a)(a,"wif_error",null),Object(j.a)(a,"account_error",null),a))}},{key:"render",value:function(){var e=this,t=this.props,a=t.nowif,r=t.redirect,s=function(t){var a=t.sign_type,r=e.state.sign_type===a?" active ":"";return n.a.createElement("li",{className:"nav-item"},n.a.createElement("button",{type:"button",className:"btn btn-block nav-link "+r,onClick:function(){return e.setState({sign_type:a})}},t.label))};return n.a.createElement("div",{className:"clearfix border p-2 m-2"},!a&&n.a.createElement("div",{className:" mb-3"},!this.state.sending&&!this.state.result&&n.a.createElement("div",null,n.a.createElement(M.a,{minWidth:425},n.a.createElement("ul",{className:"nav nav-tabs"},n.a.createElement(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c",sign_type:I.PASSWORD}),n.a.createElement(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u043e\u043c",sign_type:I.WIF}))),n.a.createElement(M.a,{maxWidth:420},n.a.createElement("ul",{className:"nav nav-pills nav-justified"},n.a.createElement(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c",sign_type:I.PASSWORD}),n.a.createElement(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u0435\u043c",sign_type:I.WIF}))))),(this.state.error||this.state.result)&&n.a.createElement(T,{error:this.state.error,result:this.state.result,redirect:r}),this.state.sending&&n.a.createElement("div",{className:"mt-5 mb-5 alert alert-warning",role:"alert"},n.a.createElement("h4",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...")),!this.state.sending&&!this.state.result&&n.a.createElement(X,Object.assign({onChange:function(t,a){return e.onChange(t,a)},onSign:function(){return e.onSign()},form_class:"needs-validation"},this.state,this.props)),!this.state.sending&&!this.state.result&&n.a.createElement(function(t){if(a){var r=e.state.sign_type===I.PASSWORD,s=r?n.a.createElement(Y.a,null):n.a.createElement(Y.b,null),o=r?I.WIF:I.PASSWORD,c=r?"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u043e\u043c":"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c";return n.a.createElement("button",{type:"button",title:c,className:"btn-outline-primary float-right btn btn-sm btn-primary",onClick:function(){return e.setState({sign_type:o})}},s)}return null},null))}}]),t}(r.Component);var te={vote:"\u0410\u043f\u0432\u043e\u0443\u0442",comment:"\u041f\u043e\u0441\u0442/\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",transfer:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434",transfer_to_vesting:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0432 \u0421\u0413",withdraw_vesting:"\u041f\u043e\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0421\u0413",limit_order_create:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0440\u0434\u0435\u0440",limit_order_cancel:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0440\u0434\u0435\u0440",feed_publish:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0444\u0438\u0434",convert:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c GBG \u0432 GOLOS",account_create:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442",account_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442",witness_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430",account_witness_vote:"\u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c \u0437\u0430 \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430",account_witness_proxy:"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0433\u043e",pow:"Proof of Work",custom:"custom",report_over_production:"\u041d\u0430\u0441\u0442\u0443\u0447\u0430\u0442\u044c",delete_comment:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442 \u0438\u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",custom_json:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f",comment_options:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u0441\u0442/\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",set_withdraw_vesting_route:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u043f\u043e\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0421\u0413",limit_order_create2:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0440\u0434\u0435\u0440 2",challenge_authority:"challenge_authority",prove_authority:"prove_authority",request_account_recovery:"request_account_recovery",recover_account:"recover_account",change_recovery_account:"change_recovery_account",escrow_transfer:"escrow_transfer",escrow_dispute:"escrow_dispute",escrow_release:"escrow_release",pow2:"Proof of Work 2",escrow_approve:"escrow_approve",transfer_to_savings:"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432 \u0441\u0435\u0439\u0444",transfer_from_savings:"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u0438\u0437 \u0441\u0435\u0439\u0444\u0430",cancel_transfer_from_savings:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0438\u0437 \u0441\u0435\u0439\u0444\u0430",custom_binary:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f (\u0431\u0438\u043d.)",decline_voting_rights:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f (\u043d\u0435\u043e\u0431\u0440\u0430\u0442\u0438\u043c\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f!)",reset_account:"reset_account",set_reset_account:"set_reset_account",delegate_vesting_shares:"delegate_vesting_shares",account_create_with_delegation:"account_create_with_delegation",account_metadata:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",proposal_create:"proposal_create",proposal_update:"proposal_update",proposal_delete:"proposal_delete",chain_properties_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0442\u0438",break_free_referral:"\u041e\u0442\u043a\u0443\u043f\u0438\u0442\u044c\u0441\u044f",delegate_vesting_shares_with_interest:"\u0414\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 \u043e\u0442\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430",reject_vesting_shares_delegation:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0434\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"};var ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).status={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(ee,this.props))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:" border m-2 p-2"},n.a.createElement("div",{className:"alert alert-info",role:"alert"},n.a.createElement("h4",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435")),n.a.createElement("div",{className:"container"},this.props.transaction.ops.map(function(e,t){return n.a.createElement("div",{className:"row",key:t},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"font-weight-bold"},"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f"),function(e){var t=te[e.name];return t||(t=e.name),n.a.createElement("span",{className:"label label-default"},t)}(e),n.a.createElement("div",null,n.a.createElement("small",null,e.name))),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("div",{className:"font-weight-bold"},"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),function(e){switch(e.name){case"transfer":return n.a.createElement("div",{className:"md-2 border-bottom"},n.a.createElement("strong",null,"\u041e\u0442")," ",e.body.from,", ",n.a.createElement("strong",null,"\u041a\u043e\u043c\u0443")," ",e.body.to,", ",n.a.createElement("strong",null,"\u0421\u0443\u043c\u043c\u0430")," ",e.body.amount,n.a.createElement("br",null),n.a.createElement("strong",null,"\u0417\u0430\u043c\u0435\u0442\u043a\u0430")," ",(""+e.body.memo||"").substring(0,50));default:return n.a.createElement("pre",null,JSON.stringify(e.body,null,2))}}(e)))}))))))}}]),t}(r.Component),re=(a(334),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-danger",role:"alert"},n.a.createElement("h4",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0430\u044f \u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0448\u0438\u0431\u043a\u0438")),n.a.createElement("table",{className:"table table-sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u0422\u0438\u043f \u043e\u0448\u0438\u0431\u043a\u0438"),n.a.createElement("th",null,"\u041c\u0435\u0441\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u044b\u0445"),n.a.createElement("th",null,"\u0421\u0445\u0435\u043c\u0430"),n.a.createElement("th",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"))),n.a.createElement("tbody",null,this.props.errors.map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.keyword),n.a.createElement("td",null,e.dataPath),n.a.createElement("td",null,e.schemaPath),n.a.createElement("td",null,e.message))}))))}}]),t}(r.Component)),ne=a(135),se=a.n(ne),oe=function(e){return n.a.createElement("div",{className:"mt-5 mb-5 alert alert-danger",role:"alert"},n.a.createElement("h4",null,e.error))},ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={transaction:null,errors:null,error:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=p.a.parse(window.location.search),t=e.title||"\u041f\u0438\u0441\u0430\u0440\u044c",a=e.subtitle,r=Object.keys(e).includes("nowif"),n=e.user,s=se.a.sanitizeUrl(e.redirect||"");"about:blank"===s&&(s=null);var o=e.tr;if(!o)return console.log("\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d URL \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 tr"),void this.setState({title:t,subtitle:a,error:"\u0412\u044b\u0437\u043e\u0432 \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"});try{var c=null;try{c=JSON.parse(o)}catch(i){return console.log("not valid json",o),void this.setState({title:t,subtitle:a,error:"\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u043c JSON"})}var l=new O(c);this.setState({transaction:l,title:t,subtitle:a,user:n,nowif:r,redirect:s})}catch(u){console.log("found errors",u),this.setState({errors:u})}}},{key:"render",value:function(){var e=null;return this.state.transaction?e=n.a.createElement(ae,{redirect:this.state.redirect,nowif:this.state.nowif,user:this.state.user,transaction:this.state.transaction}):this.state.error?e=n.a.createElement(oe,{error:this.state.error}):this.state.errors&&(e=n.a.createElement(re,{errors:this.state.errors})),n.a.createElement("div",{className:"container App"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},n.a.createElement("div",{className:"mr-auto"},n.a.createElement("h3",null,this.state.title),this.state.subtitle&&n.a.createElement("h5",null,this.state.subtitle),n.a.createElement("br",null),n.a.createElement("small",null,"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 GOLOS",n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://golos.io/@ropox/sign"},"\xa0",n.a.createElement("span",{className:"rounded-circle bg-info text-white font-weight-bold"},"\xa0?\xa0"))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},e)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[138,1,2]]]);
//# sourceMappingURL=main.ce9a3f08.chunk.js.map