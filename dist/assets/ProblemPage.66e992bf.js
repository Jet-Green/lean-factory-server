import{aO as S,aP as F,D as I,c as R,r as g,t as C,E as s,G as c,H as l,J as h,k as n,L as e,K as i,N as D,O as N,F as B,R as a,P as d,U as m,M as v,Q as x,aQ as b,aM as U,aR as L,aS as E,aT as M}from"./index.ea346bf0.js";import{a as O}from"./VAutocomplete.4002592f.js";const Q=_=>(E("data-v-f26b0984"),_=_(),M(),_),j={style:{"overflow-wrap":"break-word"}},q=Q(()=>a("br",null,null,-1)),z={__name:"ProblemPage",setup(_){const V=F(),p=I(),P=V.query._id,k=R(()=>p.fetchedProblemTypes);let u=g(null),t=g({});function w(){p.sendProblemToFix({problemId:P,action:{status:"sent_to_fix",respEmpl:u.value,date:Date.now()}}),u.value=null}let r=g();async function T(){await p.fixProblem(t.value._id,r.value),r.value=""}return C(async()=>{let{data:y}=await p.getFullProblem(P);console.log(y),t.value=y}),(y,f)=>(s(),c(h,{type:"flex",justify:"center"},{default:l(()=>[n(i,{cols:"12",md:"8"},{default:l(()=>[e(t)._id?(s(),c(h,{key:0},{default:l(()=>[n(i,{cols:"12",md:"6"},{default:l(()=>[(s(!0),D(B,null,N(e(t).photos,o=>(s(),c(L,{src:o},null,8,["src"]))),256))]),_:1}),n(i,{cols:"12",md:"6",style:{"font-size":"16px"}},{default:l(()=>[a("div",null,[d(" \u041C\u0435\u0441\u0442\u043E: "),a("b",null,m(e(t).fullPlace.place),1)]),a("div",null,[d(" \u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439: "),a("b",null,m(e(t).fullPlace.emplName),1)]),a("div",j,[d(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0444\u043E\u0442\u043E: "),q,a("b",null,m(e(t).commentToPhoto),1)])]),_:1}),e(t).actions[e(t).actions.length-1].status=="created"?(s(),c(i,{key:0,cols:"12"},{default:l(()=>[d(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0442\u0438\u043F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B "),n(O,{modelValue:e(u),"onUpdate:modelValue":f[0]||(f[0]=o=>v(u)?u.value=o:u=o),"hide-no-data":"",variant:"solo",placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435",items:e(k),"item-title":"type","item-value":"empl",clearable:""},null,8,["modelValue","items"]),n(x,{onClick:w},{default:l(()=>[d("\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435")]),_:1})]),_:1})):b("",!0),e(t).actions[e(t).actions.length-1].status=="sent_to_fix"&&e(p).employee.hierarchy.up.length?(s(),c(i,{key:1,cols:"12"},{default:l(()=>[n(U,{variant:" solo",label:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",modelValue:e(r),"onUpdate:modelValue":f[1]||(f[1]=o=>v(r)?r.value=o:r=o)},null,8,["modelValue"]),n(x,{onClick:T,color:"success"},{default:l(()=>[d("\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C")]),_:1})]),_:1})):b("",!0),e(t).actions[e(t).actions.length-1].status=="fixed"?(s(),c(i,{key:2,cols:"12"},{default:l(()=>[a("b",null," \u0417\u0430\u0434\u0430\u0447\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 "+m(new Date(e(t).actions[e(t).actions.length-1].date).toLocaleDateString("ru-RU",{month:"long",day:"numeric"}))+" "+m(" "+new Date(e(t).actions[e(t).actions.length-1].date).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})),1),a("div",null,m(e(t).actions[e(t).actions.length-1].comment),1)]),_:1})):b("",!0)]),_:1})):b("",!0)]),_:1})]),_:1}))}},H=S(z,[["__scopeId","data-v-f26b0984"]]);export{H as default};