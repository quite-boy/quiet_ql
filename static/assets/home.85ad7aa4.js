import{s as t,r as e,t as a,a as n,b as r,o as i,c as s,d as u,w as o,F as l,m as d,e as c,u as f,v as h,U as m,x as v,y as $,i as g,z as p,B as y,h as S}from"./vendor.369772f2.js";import"./stringify.3cefea90.js";import{g as M,e as _,a as w,b as D,c as b,d as O}from"./index.3331cc21.js";var k={exports:{}},x=k.exports=function(){var t=1e3,e=6e4,a=36e5,n="millisecond",r="second",i="minute",s="hour",u="day",o="week",l="month",d="quarter",c="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,a){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(a)+t},p={s:g,z:function(t){var e=-t.utcOffset(),a=Math.abs(e),n=Math.floor(a/60),r=a%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(r,2,"0")},m:function t(e,a){if(e.date()<a.date())return-t(a,e);var n=12*(a.year()-e.year())+(a.month()-e.month()),r=e.clone().add(n,l),i=a-r<0,s=e.clone().add(n+(i?-1:1),l);return+(-(n+(a-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:u,D:f,h:s,m:i,s:r,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",S={};S[y]=$;var M=function(t){return t instanceof b},_=function(t,e,a){var n;if(!t)return y;if("string"==typeof t)S[t]&&(n=t),e&&(S[t]=e,n=t);else{var r=t.name;S[r]=t,n=r}return!a&&n&&(y=n),n||!a&&y},w=function(t,e){if(M(t))return t.clone();var a="object"==typeof e?e:{};return a.date=t,a.args=arguments,new b(a)},D=p;D.l=_,D.i=M,D.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function $(t){this.$L=_(t.locale,null,!0),this.parse(t)}var g=$.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,a=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var r=n[2]-1||0,i=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(t,e){var a=w(t);return this.startOf(e)<=a&&a<=this.endOf(e)},g.isAfter=function(t,e){return w(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<w(t)},g.$g=function(t,e,a){return D.u(t)?this[e]:this.set(a,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var a=this,n=!!D.u(e)||e,d=D.p(t),h=function(t,e){var r=D.w(a.$u?Date.UTC(a.$y,e,t):new Date(a.$y,e,t),a);return n?r:r.endOf(u)},m=function(t,e){return D.w(a.toDate()[t].apply(a.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),a)},v=this.$W,$=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(d){case c:return n?h(1,0):h(31,11);case l:return n?h(1,$):h(0,$+1);case o:var y=this.$locale().weekStart||0,S=(v<y?v+7:v)-y;return h(n?g-S:g+(6-S),$);case u:case f:return m(p+"Hours",0);case s:return m(p+"Minutes",1);case i:return m(p+"Seconds",2);case r:return m(p+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var a,o=D.p(t),d="set"+(this.$u?"UTC":""),h=(a={},a[u]=d+"Date",a[f]=d+"Date",a[l]=d+"Month",a[c]=d+"FullYear",a[s]=d+"Hours",a[i]=d+"Minutes",a[r]=d+"Seconds",a[n]=d+"Milliseconds",a)[o],m=o===u?this.$D+(e-this.$W):e;if(o===l||o===c){var v=this.clone().set(f,1);v.$d[h](m),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[D.p(t)]()},g.add=function(n,d){var f,h=this;n=Number(n);var m=D.p(d),v=function(t){var e=w(h);return D.w(e.date(e.date()+Math.round(t*n)),h)};if(m===l)return this.set(l,this.$M+n);if(m===c)return this.set(c,this.$y+n);if(m===u)return v(1);if(m===o)return v(7);var $=(f={},f[i]=e,f[s]=a,f[r]=t,f)[m]||1,g=this.$d.getTime()+n*$;return D.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,a=this.$locale();if(!this.isValid())return a.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$H,s=this.$m,u=this.$M,o=a.weekdays,l=a.months,d=function(t,a,r,i){return t&&(t[a]||t(e,n))||r[a].substr(0,i)},c=function(t){return D.s(i%12||12,t,"0")},f=a.meridiem||function(t,e,a){var n=t<12?"AM":"PM";return a?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:D.s(u+1,2,"0"),MMM:d(a.monthsShort,u,l,3),MMMM:d(l,u),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,o,2),ddd:d(a.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(i),HH:D.s(i,2,"0"),h:c(1),hh:c(2),a:f(i,s,!0),A:f(i,s,!1),m:String(s),mm:D.s(s,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(v,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,f,h){var m,v=D.p(f),$=w(n),g=($.utcOffset()-this.utcOffset())*e,p=this-$,y=D.m(this,$);return y=(m={},m[c]=y/12,m[l]=y,m[d]=y/3,m[o]=(p-g)/6048e5,m[u]=(p-g)/864e5,m[s]=p/a,m[i]=p/e,m[r]=p/t,m)[v]||p,h?y:D.a(y)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return S[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var a=this.clone(),n=_(t,e,!0);return n&&(a.$L=n),a},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},$}(),O=b.prototype;return w.prototype=O,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",u],["$M",l],["$y",c],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=_,w.isDayjs=M,w.unix=function(t){return w(1e3*t)},w.en=S[y],w.Ls=S,w.p={},w}();const Y=["innerHTML"],I={key:0,class:"login_info"},A=g(" 当前用户尚未登录,请点击下方登录 "),C={class:"login_info"},H=g("获取登录二维码"),R=g("唤醒App添加"),T={class:"login_info"},U=["src"],L={key:1},N={class:"choose"},j=g(" 请选择账号 "),W={class:"userDetail"},J={style:{"margin-right":"20px"}},E=g("修改备注"),z=g("删除账号"),F={setup(t){e("");const k=a("reload");let F=e(localStorage.getItem("USERARRAY")?JSON.parse(localStorage.getItem("USERARRAY")):[]);const Z=e(!1),V=e(!1),q=e(null),B=e(null);let P=e(0),Q=n({}),G=e(""),K=e({});const X=e(!1),tt=e(!0);let et=e(null);e("");let at=e(JSON.parse(sessionStorage.getItem("INFO")));const nt=async()=>{Z.value=!0;const t=await w();200==t.status&&(q.value=t.data.data.QRCode,Q=t.data.data,Z.value=!1,clearInterval(B.value),B.value=setInterval((()=>{rt()}),2500))},rt=async()=>{const t=await D(Q);if(200==t.status){if(0==t.data.data.errcode){clearInterval(B.value);let e={eid:t.data.data.eid,name:t.data.data.nickName},a=localStorage.getItem("USERARRAY")?JSON.parse(localStorage.getItem("USERARRAY")):[],n=!1;return a.forEach((t=>{t.name==e.name&&(t.eid=e.eid,n=!0)})),n||a.push(e),localStorage.setItem("USERARRAY",JSON.stringify(a)),d.success(t.data.message),void k()}if(176==t.data.data.errcode)return;return d.error(t.data.message),void clearInterval(B.value)}},it=async(t,e)=>{G.value=t.key;const{data:a}=await b({eid:t.key});a&&a.code?d.error(a.message):(K.value=a.data.env,K.value.timestamp=x(K.value.timestamp).format("YYYY-MM-DD HH:mm:ss"),tt.value=!1,et.value=K.value.remarks)},st=async()=>{const{data:t}=await _({eid:G.value,remark:et.value});d.info(t.message),X.value=!1},ut=async()=>{V.value=!0;const t=await w();Q=t.data.data;const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${t.data.data.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e,V.value=!1,clearInterval(B.value),B.value=setInterval((()=>{rt()}),2500)},ot=async()=>{const t=await O({eid:K.value._id});d.info(t.data.message)};return(async()=>{const t=await M();P.value=t.data.data})(),(t,e)=>{const a=r("a-alert"),n=r("a-button"),d=r("a-badge"),M=r("a-menu-item"),_=r("a-menu"),w=r("a-dropdown-button"),D=r("a-descriptions-item"),b=r("a-popconfirm"),O=r("a-descriptions"),k=r("a-card"),x=r("a-input"),B=r("a-form-item"),Q=r("a-modal");return i(),s(l,null,[u(k,null,{default:o((()=>[u(a,{type:"warning"},{message:o((()=>[c("div",{innerHTML:f(at).quiet.LOG},null,8,Y)])),_:1}),0==f(F).length?(i(),s("div",I,[A,c("div",C,[u(d,{count:f(P).marginCount,"overflow-count":99},{default:o((()=>[u(n,{type:"primary",danger:"",loading:Z.value,onClick:nt},{default:o((()=>[H])),_:1},8,["loading"])])),_:1},8,["count"]),u(n,{type:"primary",loading:V.value,onClick:ut,style:{"margin-left":"20px"}},{default:o((()=>[R])),_:1},8,["loading"])]),c("div",T,[c("img",{src:q.value,alt:""},null,8,U)])])):(i(),s("div",L,[c("div",N,[u(w,null,{overlay:o((()=>[u(_,{onClick:it},{default:o((()=>[(i(!0),s(l,null,h(f(F),(t=>(i(),S(M,{key:t.eid},{default:o((()=>[u(f(m)),g(" "+p(t.name),1)])),_:2},1024)))),128))])),_:1})])),icon:o((()=>[u(f(m))])),default:o((()=>[j])),_:1})]),v(c("div",W,[u(O,{title:"账号详情",bordered:"",column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1}},{default:o((()=>[u(D,{label:"用户id"},{default:o((()=>[g(p(f(K)._id),1)])),_:1}),u(D,{label:"cookie"},{default:o((()=>[g(p(f(K).value),1)])),_:1}),u(D,{label:"是否禁用"},{default:o((()=>[g(p(f(K).status?"禁用":"未禁用"),1)])),_:1}),u(D,{label:"是否到期"},{default:o((()=>[g(p(f(K).userStatus),1)])),_:1}),u(D,{label:"更新时间"},{default:o((()=>[g(p(f(K).timestamp),1)])),_:1}),u(D,{label:"备注"},{default:o((()=>[c("span",J,p(f(K).remarks?f(K).remarks:"无备注"),1),u(n,{type:"primary",size:"small",onClick:e[0]||(e[0]=t=>X.value=!0)},{default:o((()=>[E])),_:1}),u(b,{title:"确认删除此账号吗","ok-text":"是的","cancel-text":"劳资点错了",onConfirm:ot,onCancel:t.cancel},{default:o((()=>[u(n,{type:"primary",size:"small",danger:"",style:{"margin-left":"20px"}},{default:o((()=>[z])),_:1})])),_:1},8,["onCancel"])])),_:1})])),_:1})],512),[[$,!tt.value]])]))])),_:1}),u(Q,{visible:X.value,"onUpdate:visible":e[2]||(e[2]=t=>X.value=t),title:"修改备注",onOk:st},{default:o((()=>[u(B,{label:"修改备注"},{default:o((()=>[u(x,{value:f(et),"onUpdate:value":e[1]||(e[1]=t=>y(et)?et.value=t:et=t)},null,8,["value"])])),_:1})])),_:1},8,["visible"])],64)}}};export{F as default};
