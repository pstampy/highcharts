(function(){var e,t=this;window.AcquiaLiftJS=function(){function n(t,r,i){var s,o,u,a,f,l,c,h,p,d,v,m,g,y=this;this.owner=t,this.apikey=r,this.opts=i!=null?i:{},this.send=function(e,t,r){return t==null&&(t={}),n.prototype.send.apply(y,arguments)},this.goal=function(e,t,r){return n.prototype.goal.apply(y,arguments)},this.decision=function(e,t,r){return t==null&&(t={}),r==null&&(r=null),n.prototype.decision.apply(y,arguments)},(h=(s=this.opts).server)==null&&(s.server="//api.lift.acquia.com"),(p=(o=this.opts).timeout)==null&&(o.timeout=5e3),(d=(u=this.opts).cookies)==null&&(u.cookies={ttl:2592e3,path:"/"}),(v=(a=this.opts).scodestore)==null&&(a.scodestore=CookieLite),(m=(f=this.opts).session)==null&&(f.session=typeof (l=this.opts).scodestore=="function"?l.scodestore("mpid"):void 0),(g=(c=this.opts).transport)==null&&(c.transport=e)}var t;return n.prototype.decision=function(e,t,n){var r,i,s,o,u;t==null&&(t={}),n==null&&(n=null),s=[e,"decisions"],r=null;if(t.choices!=null){u=t.choices;for(i in u){o=u[i];if((o!=null?o.join:void 0)==null)continue;s.push(""+i+":"+o.join(",")),r==null&&(r={}),r[i]||(r[i]={code:o[0]})}delete t.choices}return this.send(s,t,function(e){var t,i;if(n==null)return;return t=(i=e!=null?e.decisions:void 0)!=null?i:r,n(t,e!=null?e.session:void 0)})},n.prototype.goal=function(e,t,n){var r;return r=[e,"goal"],t.goal!=null&&(r.push(t.goal),delete t.goal),this.send(r,t,function(e){var t;if(n==null)return;return t=(e!=null?e.session:void 0)!=null,n(t,e!=null?e.session:void 0)})},n.prototype.send=function(e,n,r){var i=this;return n==null&&(n={}),n.apikey=this.apikey,this.opts.session!=null&&(n.session=this.opts.session),n._t=(new Date).getTime(),e=""+this.opts.server+"/"+this.owner+"/"+e.join("/")+"?"+t(n),new this.opts.transport(e,this.opts.timeout,function(e){var t,n;try{t=JSON.parse(e),r(t)}catch(s){r(null)}if((t!=null?t.session:void 0)!=null&&i.opts.cookies!=null)return i.opts.session=t.session,typeof (n=i.opts).scodestore=="function"?n.scodestore("mpid",t.session,i.opts.cookies):void 0})},t=function(e){var t,n,r;n="";for(t in e)r=e[t],n+="&"+t+"="+escape(r);return n},n}(),e=function(){function t(t,n,r){var i;i=e(t);if(i==null)return r(null);typeof n=="number"&&(i.timeout=n),i.onload=function(){return r(i.responseText)},i.onerror=i.ontimeout=function(){return r(null)},i.send()}var e;return e=function(e){var t;return typeof XMLHttpRequest!="undefined"&&XMLHttpRequest!==null&&(t=new XMLHttpRequest),(t!=null?t.withCredentials:void 0)!=null?t.open("GET",e,!0):typeof XDomainRequest!="undefined"&&XDomainRequest!==null?(t=new XDomainRequest,t.open("GET",e)):t=null,t},t}()}).call(this);