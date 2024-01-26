import{d as E,l as J,k as O,b as c,I as ee,n as te,a$ as se,r as h,p as W,e as Z,o as i,c as _,a as n,t as g,u as a,q as T,C as P,w as r,f as o,_ as v,A,z as I,v as L,i as ae,F as U,s as D,a3 as ne,M as le,bZ as oe,b_ as re,b4 as ie,ae as ce,b7 as de,b$ as ue,m as fe,a5 as pe,an as he}from"./index-f389b6b2.js";const me={class:"relative flex justify-center"},xe={class:"w-full flex flex-col items-center max-w-screen-4xl p-4 lg:p-6"},ge={class:"mb-2 mt-8 text-center text-3xl font-extrabold text-[#5A91FC] dark:text-[var(--primary-color-dark)] lg:text-4xl"},ve={class:"flex justify-center text-base text-small mb-4 mt-4 text-center text-gray-700 dark:text-gray-400 lg:text-lg"},_e={class:"mt-3 flex flex-col justify-center w-full items-center overflow-hidden"},ye={class:"sticky left-0 mt-3 right-0 top-0 flex max-w-screen-4xl items-center z-50 w-full bg-white dark:bg-gray-900"},be={class:"flex mt-3 items-center space-x-3 whitespace-nowrap"},we=["onClick"],ke={class:"w-full flex items-center"},Ce={class:"w-16 h-16 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]"},Ae=["src"],Ie={class:"css-0 mb-2 line-clamp-1 break-all text-lg font-semibold tracking-wide text-[#333] dark:text-[#ffffff]"},Me={class:"line-clamp-2 break-all overflow-hidden text-gray-400 w-full text-xs"},$e={class:"w-full flex justify-between mt-1"},je=E({__name:"index",emits:["run-app"],setup(G,{emit:B}){var V;const{isMobile:M}=J(),x=O(),u=((V=x.globalConfig)==null?void 0:V.siteRobotName)||"AI Tools",$=c(()=>x.globalConfig.appMenuHeaderTips);c(()=>x.globalConfig.appMenuHeaderBgUrl);const f=ee(),y=te(),b=se(),m=h(""),j=h([]),q=c(()=>b.catId),l=h([]),p=h([]),w=c(()=>b.mineApps),S=h([]),d=h(0);function N(e){return w.value.some(s=>s.appId===e.id)}async function z(){var s;const e=await re();l.value=(s=e==null?void 0:e.data)==null?void 0:s.rows.map(t=>(t.loading=!1,t)),p.value=l.value}const R=c(()=>m.value?l.value.filter(e=>e.name.includes(m.value)):d.value===0?l.value:l.value.filter(e=>e.catId===d.value));async function k(e){e.loading=!0;try{const s=await ie({appId:e.id});y.success(s.data),await b.queryMineApps(),e.loading=!1}catch{e.loading=!1}}async function C(e){const s=await ce(),{modelMaps:t}=s.data;if(!t[1])return y.warning("管理员未配置特定应用模型、请联系管理员配置~");f.push({path:"/chat",query:{appId:e.id}})}async function K(){var t;const e=await de(),s={id:0,name:"全部分类"};S.value=[s,...(t=e==null?void 0:e.data)==null?void 0:t.rows]}async function X(){const e=await ue({menuPlatform:1});e.success&&(j.value=e.data)}function F(e){return j.value.filter(s=>s.menuPath===e).length}function Y(e){d.value=e}W(q,e=>{e?p.value=l.value.filter(s=>s.catId===e):p.value=l.value});function H(e){f.push(e)}return Z(()=>{K(),z(),X()}),(e,s)=>(i(),_("div",me,[n("div",xe,[n("div",ge,g(a(u)),1),n("div",ve,g(a($)||"探索无限可能，与AI一同开创智慧未来！"),1),n("div",{class:T(["w-full flex justify-center my-3",a(M)?"space-x-1":"space-x-5"])},[F("/chat")?(i(),P(a(I),{key:0,trong:"",secondary:"",type:"primary",round:"",onClick:s[0]||(s[0]=t=>H("/chat"))},{default:r(()=>[o(a(v),{icon:"carbon:chat",class:"text-2xl mr-2"}),A(" AI 对话 ")]),_:1})):L("",!0),F("/midjourney")?(i(),P(a(I),{key:1,trong:"",secondary:"",type:"primary",round:"",onClick:s[1]||(s[1]=t=>H("/midjourney"))},{default:r(()=>[o(a(v),{icon:"ph:pencil-slash-duotone",class:"text-2xl mr-2"}),A(" AI 绘画 ")]),_:1})):L("",!0),F("/mind")?(i(),P(a(I),{key:2,trong:"",secondary:"",type:"primary",round:"",onClick:s[2]||(s[2]=t=>H("/mind"))},{default:r(()=>[o(a(v),{icon:"ri:mind-map",class:"text-2xl mr-2"}),A(" 思维导图 ")]),_:1})):L("",!0)],2),n("div",_e,[o(a(ae),{value:m.value,"onUpdate:value":s[3]||(s[3]=t=>m.value=t),class:"!max-w-screen-4xl",round:"",placeholder:"搜索应用名称、快速查找应用..."},{suffix:r(()=>[o(a(v),{icon:"iconamoon:search-thin",class:"text-base"})]),_:1},8,["value"])]),n("div",ye,[o(a(ne),{"x-scrollable":"",class:"!h-[60px]"},{default:r(()=>[n("div",be,[(i(!0),_(U,null,D(S.value,(t,Q)=>(i(),P(a(I),{key:Q,size:"small",round:"",type:d.value===t.id?"primary":"default",onClick:Le=>Y(t.id)},{default:r(()=>[A(g(t.name),1)]),_:2},1032,["type","onClick"]))),128))])]),_:1})]),o(a(oe),{delay:0,y:50,duration:350},{default:r(()=>[n("div",{class:T(["w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 gap-6 py-4",a(M)?"px-4":""])},[(i(!0),_(U,null,D(a(R),t=>(i(),_("div",{key:t.id,class:"bg-white dark:bg-[#18181c] custom-card cursor-pointer space-y-2 border-[#e0e0e0] dark:border-neutral-800 p-4 pt-4 border rounded-md flex flex-col justify-center items-center hover:bg-neutral-100 dark:hover:bg-[#24272e] select-none min-h-[150px]",onClick:Q=>C(t)},[n("div",ke,[n("span",Ce,[n("img",{src:t.coverImg,class:"w-14 h-14 mb-1",alt:""},null,8,Ae)]),n("span",Ie,g(t.name),1)]),n("p",Me,g(t.des),1),n("div",$e,[o(a(I),{class:"join",size:"tiny",ghost:"",disabled:t.loading,onClick:le(Q=>k(t),["stop"])},{icon:r(()=>[o(a(v),{icon:N(t)?"iconamoon:sign-minus-bold":"mi:add",class:"text-base"},null,8,["icon"])]),default:r(()=>[A(" "+g(N(t)?"取消收藏":"加入个人工作台"),1)]),_:2},1032,["disabled","onClick"]),o(a(v),{icon:"codicon:run-all",class:"run-icon text-xl text-[#5A91FC]"})])],8,we))),128))],2)]),_:1})])]))}});const Se={class:"h-full dark:bg-gray-900 transition-all"},Ne={key:0,class:"h-full"},Pe={class:"flex flex-col w-full"},qe=E({__name:"index",setup(G){const B=fe();pe();const M=O(),{isMobile:x}=J();c(()=>M.isLogin),c(()=>B.siderCollapsed);const u=h(null),$=c(()=>B.theme);let f=null;const y=h({});function b(l){y.value=l}W($,()=>m());function m(){const{innerWidth:l,innerHeight:p}=window;u.value.width=l-0,u.value.height=p-0,f=u.value.getContext("2d");const[w,S]=[u.value.width,u.value.height],d=20,N=Math.floor(w/d),z=Math.floor(S/d),R=$.value==="light"?"#00000080":"#ffffff66";for(let k=0;k<z;k++)for(let C=0;C<N;C++)j({x:C*d+20,y:k*d+20},R)}function j({x:l,y:p},w){f.fillStyle=w,f.beginPath(),f.rect(l,p,1,1),f.fill()}c(()=>Object.keys(y.value).length>0);const q=c(()=>x.value?["rounded-none","shadow-none"]:["rounded-md","shadow-md","dark:border-neutral-800"]);return Z(()=>m()),(l,p)=>(i(),_("div",Se,[n("div",{class:T(["h-full overflow-hidden flex flex-col",a(q)])},[o(a(he),{class:"transition flex-1 h-full w-full","has-sider":""},{default:r(()=>[n("canvas",{ref_key:"grid",ref:u,class:"absolute left-0 right-0 bottom-0 top-0 z-0 bg-white dark:bg-gray-900"},null,512),a(x)?L("",!0):(i(),_("div",Ne)),n("div",Pe,[o(je,{onRunApp:b})])]),_:1})],2)]))}});export{qe as default};
