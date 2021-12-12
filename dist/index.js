import{combine as e,createStore as r,createEvent as i,sample as n,merge as o,guard as s,withFactory as t}from"effector";import{useStore as a}from"effector-react";const d={store:function({init:e,domain:i,existing:n}){return n||(i?i.store(e,{sid:"-ewhntl"}):r(e,{sid:"-ewhmbc"}))},event:function({domain:e,existing:r}){return r||(e?e.event({sid:"-z4urk8"}):i({sid:"-z4uqni"}))}};function l(r,i,n){var o,s,t,a,l,u,c,m,f,v,g;const h="function"==typeof i.init?i.init():i.init,x=d.store({domain:n,existing:null===(o=i.units)||void 0===o?void 0:o.$value,init:h},{name:"$value",sid:"yg99i6"}),E=d.store({domain:n,existing:null===(s=i.units)||void 0===s?void 0:s.$errors,init:[]},{name:"$errors",sid:"-y2xdpq"}),V=E.map((e=>e[0]?e[0]:null)),$=x.map((e=>e!==h)),p=d.store({domain:n,existing:null===(t=i.units)||void 0===t?void 0:t.$isTouched,init:!1},{name:"$touched",sid:"sulkei"}),y=d.event({domain:n,existing:null===(a=i.units)||void 0===a?void 0:a.onChange},{name:"onChange",sid:"-bvxucw"}),b=d.event({domain:n,existing:null===(l=i.units)||void 0===l?void 0:l.onBlur},{name:"onBlur",sid:"mo0ar0"}),T=d.event({domain:n,existing:null===(u=i.units)||void 0===u?void 0:u.changed},{name:"changed",sid:"bcod8v"}),k=d.event({domain:n,existing:null===(c=i.units)||void 0===c?void 0:c.addError},{name:"addError",sid:"3cou8n"}),w=d.event({domain:n,existing:null===(m=i.units)||void 0===m?void 0:m.validate},{name:"validate",sid:"-s3sqr5"}),F=d.event({domain:n,existing:null===(f=i.units)||void 0===f?void 0:f.resetErrors},{name:"resetErrors",sid:"z8u2jo"}),D=d.event({domain:n,existing:null===(v=i.units)||void 0===v?void 0:v.resetValue},{name:"resetValue",sid:"-x0qhaf"}),j=d.event({domain:n,existing:null===(g=i.units)||void 0===g?void 0:g.reset},{name:"reset",sid:"ocz45p"}),B=V.map((e=>null===e));return{changed:T,name:r,$value:x,$errors:E,$firstError:V,$isValid:B,$isDirty:$,$isTouched:p,$touched:p,$field:e({"ɔ":[{value:x,errors:E,firstError:V,isValid:B,isDirty:$,isTouched:p}],config:{name:"$field",sid:"-vj0i5c"}}),onChange:y,onBlur:b,addError:k,validate:w,set:y,reset:j,resetErrors:F,resetValue:D,filter:i.filter}}function u({$form:i,validateFormEvent:s,submitEvent:t,resetFormEvent:a,resetValues:d,field:l,rules:u,resetErrors:c,formValidationEvents:m,fieldValidationEvents:f}){const{$value:v,$errors:g,onBlur:h,changed:x,addError:E,validate:V,resetErrors:$,resetValue:p,reset:y}=l,b="function"==typeof u?r([],{name:"rulesSources",sid:"-9d7qjb"}):e({"ɔ":[u.map((({source:e})=>e||r(null,{name:"ɔ",sid:"-bexgiz"})))],config:{name:"rulesSources",sid:"-8w6454"}}),T=(k=u,(e,r,i)=>{const n=[],o="function"==typeof k?k(e,r):k;for(let s=0;s<o.length;s++){const t=o[s],a=i?i[s]:null,d=t.validator(e,r,a);"boolean"!=typeof d||d||n.push({rule:t.name,errorText:t.errorText,value:e}),"object"!=typeof d||d.isValid||n.push({rule:t.name,errorText:d.errorText,value:e})}return n});var k;const w=[...m,...f],F=[];if(w.includes("submit")){const r=n({"ɔ":[{source:e({"ɔ":[{fieldValue:v,form:i,rulesSources:b}],config:{name:"source",sid:"-k8128n"}}),clock:t}],config:{name:"validationTrigger",sid:"-6xbmu5"}});F.push(r)}w.includes("blur")&&F.push(n({"ɔ":[{source:e({"ɔ":[{fieldValue:v,form:i,rulesSources:b}],config:{name:"source",sid:"pucwwk"}}),clock:h}],config:{sid:"-m25isl"}})),w.includes("change")&&F.push(n({"ɔ":[{source:e({"ɔ":[{fieldValue:v,form:i,rulesSources:b}],config:{name:"source",sid:"-uicuuj"}}),clock:o([x,p,d],{name:"clock",sid:"wzy69w"})}],config:{sid:"-7dr8kk"}})),F.push(n({"ɔ":[{source:e({"ɔ":[{fieldValue:v,form:i,rulesSources:b}],config:{name:"source",sid:"-gb07m8"}}),clock:V}],config:{sid:"6tlenr"}})),F.push(n({"ɔ":[{source:e({"ɔ":[{fieldValue:v,form:i,rulesSources:b}],config:{name:"source",sid:"-2kp66l"}}),clock:s}],config:{sid:"kjwg3e"}}));const D=n({"ɔ":[{source:v,clock:E,fn:(e,{rule:r,errorText:i})=>({rule:r,value:e,errorText:i})}],config:{name:"addErrorWithValue",sid:"-vn5aoo"}});g.on(F,((e,{form:r,fieldValue:i,rulesSources:n})=>T(i,r,n))).on(D,((e,r)=>[r,...e])).reset($,a,y,c),w.includes("change")||g.reset(x)}function c({$value:e,$touched:r,onChange:i,changed:n,name:o,reset:t,resetValue:a,filter:d},l,u,c,m){r.on(n,(()=>!0)).reset(t,u,c),s({"ɔ":[{source:i,filter:d||(()=>!0),target:n}],config:{sid:"-ylchks"}}),e.on(n,((e,r)=>r)).on(l,((e,r)=>r.hasOwnProperty(o)?r[o]:e)).reset(t,a,m,u)}function m(r){const{filter:i,domain:o,fields:a,validateOn:m,units:f}=r,v={},g=[],h=[];for(const e in a){if(!a.hasOwnProperty(e))continue;const r=a[e],i=t({sid:"tpjlm9",fn:()=>l(e,r,o),name:"field",method:"createField"});v[e]=i,g.push(i.$isDirty),h.push(i.$touched)}const x=function(r){const i={};for(const e in r)r.hasOwnProperty(e)&&(i[e]=r[e].$value);return e({"ɔ":[i],config:{sid:"3r0gj3"}})}(v),E=function(r){const i=[];for(const e in r){if(!r.hasOwnProperty(e))continue;const{$firstError:n}=r[e];i.push(n)}return e({"ɔ":[i],config:{name:"$firstErrors",sid:"-1vosn1"}}).map((e=>e.every((e=>null===e))))}(v),V=i?e({"ɔ":[E,i,(e,r)=>e&&r],config:{name:"$isFormValid",sid:"-nxdol7"}}):E,$=e({"ɔ":[g],config:{name:"$isDirty",sid:"-ohut1z"}}).map((e=>e.some(Boolean))),p=e({"ɔ":[h],config:{name:"$touched",sid:"uloi2a"}}).map((e=>e.some(Boolean))),y=e({"ɔ":[{isValid:E,isDirty:$,touched:p}],config:{name:"$meta",sid:"1dcmsl"}}),b=d.event({domain:o,existing:null==f?void 0:f.validate},{name:"validate",sid:"xx8aor"}),T=d.event({domain:o,existing:null==f?void 0:f.submit},{name:"submitForm",sid:"-60rrrl"}),k=d.event({domain:o,existing:null==f?void 0:f.formValidated},{name:"formValidated",sid:"p6ye1x"}),w=d.event({domain:o,existing:null==f?void 0:f.setForm},{name:"setForm",sid:"-nwyjlh"}),F=d.event({domain:o,existing:null==f?void 0:f.reset},{name:"resetForm",sid:"-lfuri5"}),D=d.event({domain:o,existing:null==f?void 0:f.resetValues},{name:"resetValues",sid:"xirkf3"}),j=d.event({domain:o,existing:null==f?void 0:f.resetErrors},{name:"resetErrors",sid:"ro8q5u"}),B=d.event({domain:o,existing:null==f?void 0:f.resetTouched},{name:"resetTouched",sid:"w2ufsz"}),O=n({"ɔ":[x,T],config:{name:"submitWithFormData",sid:"-784yk9"}}),z=n({"ɔ":[x,b],config:{name:"validateWithFormData",sid:"qbhy92"}});for(const e in v){if(!v.hasOwnProperty(e))continue;const r=a[e],i=v[e];t({sid:"o35osu",fn:()=>c(i,w,F,B,D),name:"none",method:"bindChangeEvent"}),r.rules&&t({sid:"o4t2kx",fn:()=>u({$form:x,rules:r.rules,submitEvent:T,resetFormEvent:F,resetValues:D,resetErrors:j,validateFormEvent:b,field:i,formValidationEvents:m||["submit"],fieldValidationEvents:r.validateOn?r.validateOn:[]}),name:"none",method:"bindValidation"})}return s({"ɔ":[{source:O,filter:V,target:k}],config:{sid:"2fxgt5"}}),s({"ɔ":[{source:z,filter:V,target:k}],config:{sid:"2j88db"}}),{fields:v,$values:x,$eachValid:E,$isValid:E,$isDirty:$,$touched:p,$meta:y,submit:T,validate:b,resetTouched:B,reset:F,resetValues:D,resetErrors:j,setForm:w,set:w,formValidated:k}}function f(e){const{value:r,errors:i,firstError:n,isValid:o,isDirty:s,isTouched:t}=a(e.$field);return{name:e.name,value:r,errors:i,firstError:n,isValid:o,isDirty:s,touched:t,isTouched:t,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:()=>null!==n,errorText:e=>n?e&&e[n.rule]?e[n.rule]:n.errorText||"":""}}function v(e){const r={},i={};for(const n in e.fields){if(!e.fields.hasOwnProperty(n))continue;const o=f(e.fields[n]);r[n]=o,i[n]=o.value}const{isValid:n,isDirty:o,touched:s}=a(e.$meta);return{fields:r,values:i,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!n,eachValid:n,isValid:n,isDirty:o,isTouched:s,touched:s,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,reset:e.reset,errorText:(e,i)=>{const n=r[e];return n&&n.firstError?i&&i[n.firstError.rule]?i[n.firstError.rule]:n.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}}export{m as createForm,f as useField,v as useForm};
//# sourceMappingURL=index.js.map