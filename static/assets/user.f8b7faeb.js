import{r as e,a3 as a,a4 as t,o as l,c as s,e as i,d as n,w as r,F as d,D as o,a6 as u,u as c,j as v,J as m,a7 as g,N as p,E as y,x as f,P as x,a8 as k,W as _,a5 as I,Y as b,Z as h,a2 as j}from"./vendor.a8d130d5.js";/* empty css              *//* empty css              */import"./dayjs.min.57897a4b.js";/* empty css              *//* empty css              */import{l as w,k as C,d as S,m as E}from"./index.8d574cbe.js";const $={key:0},R={style:{"text-align":"right","margin-bottom":"20px"}},z=v("检测失效"),D=v("一键删除"),U={key:1},F=v("登录"),J={style:{"text-align":"center"}},N={setup(N){let P=e([]),T=e(!1),W=e(!1),Y=e(!1),Z=e(1),q=e(null);const A=e(!1);let B=e([]),G=e(!!sessionStorage.getItem("flag")&&sessionStorage.getItem("flag")),H=e([]);const K=[{title:"序号",dataIndex:"index",align:"center",ellipsis:!0,slots:{customRender:"index"}},{title:"变量名",dataIndex:"name",align:"center",ellipsis:!0},{title:"cookie",dataIndex:"value",ellipsis:!0,align:"center"},{title:"备注",dataIndex:"remarks",align:"center",ellipsis:!0},{title:"ID",dataIndex:"_id",align:"center",ellipsis:!0},{title:"状态",dataIndex:"maturity",align:"center",ellipsis:!0,slots:{customRender:"maturity"}},{title:"操作",dataIndex:"delete",align:"center",slots:{customRender:"delete"}}],L=e=>{Z.value=e.current},M=async()=>{W.value=!0;const{data:e}=await E({key:sessionStorage.getItem("key")});P.value=e.data,W.value=!1},O=a((()=>({pageSize:20,current:Z.value,showTotal:e=>`共 ${e} 条`}))),Q=async()=>{if(200==(await w({key:q.value})).data.data.code)return G.value=!0,f.success("登录成功"),sessionStorage.setItem("flag",!0),sessionStorage.setItem("key",q.value),void M();f.error("登录失败")},V=async()=>{T.value=!0,W.value=!0,B.value=[];const{data:e}=await C({key:sessionStorage.getItem("key")});H.value=e.data,0!=H.value.length?H.value.forEach((e=>{P.value.forEach(((a,t)=>{if(a._id==e)return a.maturity="到期",void B.value.push({index:t+1,remarks:a.remarks,id:a._id});a.maturity="正常"}))})):P.value.forEach((e=>{e.maturity="正常"})),T.value=!1,W.value=!1,f.success("检测完毕"),0!=B.value.length&&(A.value=!0)},X=()=>{Y.value=!0,W.value=!0,H.value.forEach((async(e,a)=>{await S({eid:e})})),P.value=P.value.filter((e=>"正常"==e.maturity)),Y.value=!1,W.value=!1,f.success("删除完毕")};return t((()=>{G&&M()})),(e,a)=>{const t=x,f=k,w=_,C=I,S=b,E=h,N=j,H=o,M=u;return l(),s(d,null,[i("div",null,[n(H,null,{default:r((()=>[c(G)?(l(),s("div",$,[i("div",R,[n(t,{type:"primary",style:{"margin-right":"30px"},loading:c(T),onClick:V},{default:r((()=>[z])),_:1},8,["loading"]),n(t,{type:"primary",danger:"",loading:c(Y),onClick:X},{default:r((()=>[D])),_:1},8,["loading"])]),n(C,{columns:K,"row-key":e=>e._id,"data-source":c(P),pagination:c(O),loading:c(W),bordered:"",size:"middle",align:"center",onChange:L},{maturity:r((({text:e})=>[n(f,{color:"到期"==e?"#f50":"#87d068"},{default:r((()=>[v(m(e),1)])),_:2},1032,["color"])])),delete:r((({record:a})=>[n(w,{title:"确认删除此账号吗","ok-text":"是的","cancel-text":"劳资点错了",onConfirm:e=>(async e=>{})(a._id),onCancel:e.cancel},{default:r((()=>[n(c(g),{style:{cursor:"pointer"}})])),_:2},1032,["onConfirm","onCancel"])])),index:r((({index:e})=>[v(m(20*(c(Z)-1)+(e+1)),1)])),_:1},8,["row-key","data-source","pagination","loading"])])):(l(),s("div",U,[n(H,null,{default:r((()=>[n(N,{"wrapper-col":{span:10},"label-col":{span:3}},{default:r((()=>[n(E,{label:"登录key",style:{"text-align":"center"}},{default:r((()=>[n(S,{value:c(q),"onUpdate:value":a[0]||(a[0]=e=>p(q)?q.value=e:q=e)},null,8,["value"]),n(t,{type:"primary",style:{"margin-top":"30px"},onClick:Q},{default:r((()=>[F])),_:1})])),_:1})])),_:1})])),_:1})]))])),_:1})]),i("div",null,[n(M,{title:"失效账号",placement:"right",closable:!1,visible:A.value,"onUpdate:visible":a[1]||(a[1]=e=>A.value=e)},{default:r((()=>[(l(!0),s(d,null,y(c(B),(e=>(l(),s("div",{class:"border_box",key:e.id},[i("p",null,m(`第${e.index}个账号失效`),1),i("p",null,m(`备注: ${e.remarks?e.remarks:"无备注"}`),1),i("p",null,m(e.id),1)])))),128)),i("p",J,m(`共计${c(B).length}个账号`),1)])),_:1},8,["visible"])])],64)}}};export{N as default};
