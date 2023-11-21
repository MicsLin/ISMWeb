import{_ as M,u as A,a as z,c as v,r as N,o as E,w as T,b as O,d,e as u,f as e,g,h as b,p as H,i as D,j as G,t as p,F as I,k as L,n as P,l as F,m as B,q,s as X,v as K,x as R,y as j,z as W,A as Y,B as J,C as U,D as m}from"./index.0f8b10ec.js";var Q="./assets/background.0bf38246.jpg";const Z=f=>(H("data-v-61d007a4"),f=f(),D(),f),ee={class:"Section Banner mainPaddingX flex justify-between bg-blue-background"},te=Z(()=>e("img",{class:"BackGroundImg opacity-100",src:Q,alt:""},null,-1)),se={class:"z-50 h-full flex items-center text-4xl"},oe={class:"z-50 w-full h-full text-center",id:"TheBanner"},ne={class:"w-full h-5/6 grid grid-cols-1"},le=["innerHTML"],ae={class:"m-auto","data-aos":"fade-up","data-aos-duration":"1000"},ce=["src"],ie=["innerHTML"],re={class:"z-50 h-full flex items-center text-4xl"},de={setup(f){const y=A(),k=z(),_=v(()=>k.bannerInfos),h=v(()=>y.globleInfos.language),C=y.fileFolderPath.getUrl,$=v(()=>{if(_.value.length==0)return[];let t=_.value.filter(c=>c.BI_Visible&&c.BI_Visible=="1");return t.sort((c,l)=>c.BI_Sort-l.BI_Sort),t}),a=N(0),r=v(()=>{let t=$.value[a.value];if(!t)return{title:"",content:"",picUrl:""};let c=`BI_Title_${h.value}`,l=`BI_Content_${h.value}`;return{title:t[c]||"",content:t[l]||"",picUrl:C("imgs",t.BI_Pic)}}),o=()=>{let t=$.value.length;if(t!=0){if(a.value==t-1)return a.value=0;a.value++}},n=()=>{let t=$.value.length;if(t!=0){if(a.value==0)return a.value=t-1;a.value--}},s=()=>{let t=document.querySelector("#TheBanner");t.innerHTML=`
        <div class="w-full h-5/6 grid grid-cols-1">
            <div class="text-4xl py-4" data-aos="fade-down" data-aos-duration="2000">${r.value.title}</div>
            <div class="m-auto" data-aos="fade-up" data-aos-duration="1000">
                <img src="${r.value.picUrl}" alt="">
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">${r.value.content}</div>
        </div>
    `};return E(()=>{}),T(()=>a.value,t=>s()),T(()=>h.value,()=>s()),(t,c)=>{const l=O("font-awesome-icon");return d(),u("div",ee,[te,e("div",se,[e("button",{onClick:n},[g(l,{icon:"fa-chevron-left"})])]),e("div",oe,[e("div",ne,[e("div",{class:"text-4xl py-4",innerHTML:b(r).title,"data-aos":"fade-down","data-aos-duration":"2000"},null,8,le),e("div",ae,[e("img",{src:b(r).picUrl,alt:""},null,8,ce)]),e("div",{innerHTML:b(r).content,"data-aos":"fade-up","data-aos-duration":"2000"},null,8,ie)])]),e("div",re,[e("button",{onClick:o},[g(l,{icon:"fa-chevron-right"})])])])}}};var ue=M(de,[["__scopeId","data-v-61d007a4"]]),_e="./assets/background.cd30c58d.png";const pe=f=>(H("data-v-1282462c"),f=f(),D(),f),ve={class:"Section About lg:mainPaddingX overflow-hidden"},fe=pe(()=>e("img",{class:"BackGroundImg",src:_e,alt:""},null,-1)),he={class:"Title"},ge={class:"flex gap-5 lg:block"},$e={class:"w-full","data-aos":"fade-right"},be={class:"WhyUs ImgHeight w-10/12 lg:w-full flex justify-center items-center"},ye={class:"w-full lg:py-5"},ke={class:"text-3xl text-gray-700"},xe={class:"py-2 text-xl text-gray-600"},Ce={class:"text-gray-500"},we=["onClick"],Se={class:"flex items-center gap-5 cursor-pointer"},Ie={class:"text-blue-600 text-2xl"},Le={class:"text-lg"},Ae={setup(f){const y=G(),k=A(),_=v(()=>y.aboutInfos.filter(l=>l&&l.At_Visible=="1")[0]||{}),h=v(()=>{var c;return(c=k.globleInfos)==null?void 0:c.language}),C=v(()=>`At_Subject_${h.value}`),$=v(()=>`At_Subtopic_${h.value}`),a=v(()=>`At_Message_${h.value}`),o=N(((c=0)=>Array.from({length:c},(l,w)=>({no:`0${w+1}`,title:"",introduction:"",isOpened:!1})))(4)),n=c=>{o.value.map((l,w)=>{c==w?l.isOpened=!l.isOpened:l.isOpened=!1})},s=()=>{o.value.map((c,l)=>{let w=`At_Title0${l+1}_${h.value}`,i=`At_Intro0${l+1}_${h.value}`;c.title=_.value[w],c.introduction=_.value[i]})};s(),T(()=>_.value,()=>s()),T(()=>h.value,()=>s());const t=()=>{var l;let c=(l=_.value)==null?void 0:l.At_Youtube;window.open(c)};return(c,l)=>{const w=O("font-awesome-icon");return d(),u("div",ve,[fe,e("h2",he,p(c.$t("LinkList.About")),1),e("div",ge,[e("div",$e,[e("div",be,[e("div",{class:"p-4 rounded-full bg-blue-700 bg-opacity-80 cursor-pointer",onClick:t},[g(w,{icon:"fa-circle-play",size:"2xl",beat:""})])])]),e("div",ye,[e("h3",ke,[e("strong",null,p(b(_)[b(C)]),1)]),e("p",xe,[e("strong",null,p(b(_)[b($)]),1)]),e("p",Ce,p(b(_)[b(a)]),1),e("div",null,[(d(!0),u(I,null,L(o.value,(i,x)=>(d(),u("div",{key:"aboutList"+x,class:"p-5 mb-5 bg-gray-400 bg-opacity-20 rounded-lg",onClick:S=>n(x),"data-aos":"fade-up-left"},[e("h4",{class:P(["flex justify-between items-center cursor-pointer",[i.isOpened?"text-blue-600":"text-black hover:text-blue-600"]])},[e("p",Se,[e("strong",Ie,p(i==null?void 0:i.no),1),e("span",Le,p(i==null?void 0:i.title),1)]),e("p",null,[g(w,{icon:"fa-angle-down",rotation:i!=null&&i.isOpened?180:null},null,8,["rotation"])])],2),e("p",{class:P(["text-black",[i.isOpened?"block":"hidden"]])},p(i==null?void 0:i.introduction),3)],8,we))),128))])])])])}}};var Be=M(Ae,[["__scopeId","data-v-1282462c"]]);const Te=f=>(H("data-v-2e4cfed4"),f=f(),D(),f),Pe={class:"Section"},Ne={class:"Title"},Oe={class:"flex flex-wrap justify-center gap-5 mb-5"},Ue=["onClick"],me={class:"ServiceCardContainer"},Me={class:"w-full h-full"},He={class:"ServiceCardTitle"},De={key:0,class:"text-center"},Ve={key:0},ze={key:1},Ee={key:1,class:"text-center"},Ge=Te(()=>e("div",{class:"m-auto w-11/12 h-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 TheDiv"},null,-1)),Fe={class:"py-2 px-4"},qe={class:"ServiceCardListDiv"},Xe={class:"flexCenter text-blue-700"},Ke=B(" :"),Re=["onClick"],je={class:"ServiceCardListDiv"},We={class:"flexCenter text-blue-700"},Ye=B(" :"),Je={class:"ServiceCardListDiv"},Qe={class:"flexCenter text-blue-700"},Ze=B(" :"),et={class:"ServiceCardListDiv"},tt={class:"flexCenter text-blue-700"},st=B(" :"),ot={class:"ServiceCardListDiv"},nt={class:"flexCenter text-blue-700"},lt=B(" :"),at={class:"ServiceCardListDiv"},ct={class:"flexCenter text-blue-700"},it=B(" :"),rt={setup(f){const y=A(),k=F(),_=v(()=>y.globleInfos.language);v(()=>y.fileFolderPath.getUrl);const h=N([{title:"All",key:"All",isClicked:!0},{title:"Africa",key:"AF",isClicked:!1},{title:"Americas",key:"AM",isClicked:!1},{title:"Asia",key:"AS",isClicked:!1},{title:"Europe",key:"EU",isClicked:!1},{title:"Oceania",key:"OC",isClicked:!1}]),C=o=>{h.value.map((n,s)=>{o==s?n.isClicked=!0:n.isClicked=!1})},$=v(()=>{let o=k.serviceCenterInfos,s=h.value.filter(t=>t.isClicked)[0].key;return s=="All"?o.filter(t=>(t==null?void 0:t.visibility)=="1"):o.filter(t=>{if(t.visibility==1&&t.Continent==s)return t})}),a=v(()=>`CountryName_${_.value}`),r=o=>{let n=o==null?void 0:o.Address;if(n){const s=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n)}`;window.open(s,"_blank")}};return(o,n)=>{const s=O("font-awesome-icon");return d(),u("div",Pe,[e("h2",Ne,p(o.$t("LinkList.ServiceCenter")),1),e("div",Oe,[(d(!0),u(I,null,L(h.value,(t,c)=>(d(),u("button",{key:"buttonList"+c,class:P(["py-2 px-4",[t!=null&&t.isClicked?"ButtonList":"text-black hover:ButtonList"]]),onClick:l=>C(c)},p(o.$t(`ServiceCenter.${t.title}`)),11,Ue))),128))]),e("div",me,[(d(!0),u(I,null,L(b($),(t,c)=>(d(),u("div",{key:"serviceCenterInfos"+c,class:"ServiceCard relative","data-aos":"flip-down"},[e("div",Me,[e("h3",He,[(t==null?void 0:t.CompanyMajor)=="1"?(d(),u("strong",De,[b(_)=="zh"?(d(),u("span",Ve,"\u6C38\u8F1D\u8208\u96FB\u6A5F\u5DE5\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8")):(d(),u("span",ze,p(t==null?void 0:t.CompanyName),1)),g(s,{icon:"fa-building",class:"text-blue-700"})])):(d(),u("strong",Ee,p(t==null?void 0:t.CompanyName),1))]),Ge,e("div",Fe,[e("div",qe,[e("p",Xe,[g(s,{icon:"fa-earth"}),Ke]),e("p",null,[B(p(t[b(a)])+" ",1),e("span",{class:"text-red-600 cursor-pointer",onClick:l=>r(t)},[g(s,{icon:"fa-location-dot"})],8,Re)])]),e("div",je,[e("p",We,[g(s,{icon:"fa-user"}),Ye]),e("p",null,p(t==null?void 0:t.ContactPerson),1)]),e("div",Je,[e("p",Qe,[g(s,{icon:"fa-phone"}),Ze]),e("p",null,p(t==null?void 0:t.Tel),1)]),e("div",et,[e("p",tt,[g(s,{icon:"fa-envelope"}),st]),e("p",null,p(t==null?void 0:t.Email),1)]),e("div",ot,[e("p",nt,[g(s,{icon:"fa-fax"}),lt]),e("p",null,p(t==null?void 0:t.Fax),1)]),e("div",at,[e("p",ct,[g(s,{icon:"fa-clock"}),it]),e("p",null,p(t==null?void 0:t.OfficeHour),1)])])])]))),128))])])}}};var dt=M(rt,[["__scopeId","data-v-2e4cfed4"]]);const ut={class:"Section mainPaddingX"},_t={class:"Title"},pt={class:"flex justify-center gap-5 sm:gap-0 mb-5"},vt=["onClick"],ft={class:"CardContainer"},ht=["onClick"],gt={class:"w-full h-full"},$t=["src"],bt={class:"infoDiv px-2 w-full h-20 bg-blue-600 rounded"},yt={class:"py-1 text-xl"},kt=["innerHTML"],xt={setup(f){const y=q(),k=A(),_=X(),h=K(),C=R(),$=v(()=>_.productsInfos),a=v(()=>k.globleInfos.language),r=v(()=>k.fileFolderPath.getUrl),o=N([{title:"All",key:"visibility",isClicked:!0},{title:"New",key:"new",isClicked:!1},{title:"Hot",key:"hot",isClicked:!1},{title:"Recommend",key:"recommend",isClicked:!1}]),n=l=>{o.value.map((w,i)=>{l==i?w.isClicked=!0:w.isClicked=!1})},s=v(()=>{let w=o.value.filter(x=>x.isClicked)[0].key,i=$.value.reduce((x,S)=>{let{visibility:V}=S;return V=="1"&&S[w]=="1"&&x.push(S),x},[]);return i.sort(function(x,S){return(x==null?void 0:x.sort)-(S==null?void 0:S.sort)}),i}),t=v(()=>`${a.value}_content`),c=async l=>{C.activedHeader_id="Product",h.setActive_cid(l==null?void 0:l.c_id),_.setProductInfo(l),await y.push("/product_info"),window.scroll({top:0,left:0,behavior:"smooth"})};return(l,w)=>(d(),u("div",ut,[e("h2",_t,p(l.$t("LinkList.Product")),1),e("div",pt,[(d(!0),u(I,null,L(o.value,(i,x)=>(d(),u("button",{key:"buttonList"+x,class:P(["py-2 px-4",[i!=null&&i.isClicked?"ButtonList":"text-black hover:ButtonList"]]),onClick:S=>n(x)},p(l.$t(`Product.${i.title}`)),11,vt))),128))]),e("div",ft,[(d(!0),u(I,null,L(b(s),(i,x)=>(d(),u("div",{key:"productList"+x,class:"Card","data-aos":"flip-left",onClick:S=>c(i)},[e("div",gt,[e("img",{src:b(r)("imgs",i.pic1),alt:"",class:"w-full h-full"},null,8,$t)]),e("div",bt,[e("h3",yt,[e("strong",null,p(i.title),1)]),e("p",{innerHTML:i[b(t)]},null,8,kt)])],8,ht))),128))])]))}},Ct={class:"Section mt-5 mainPaddingX py-5 bg-blue-200 bg-opacity-20"},wt={class:"Title"},St={class:"w-full"},It=["onClick"],Lt={class:"flex items-center gap-5 cursor-pointer"},At={class:"text-lg"},Bt=["innerHTML"],Tt={setup(f){const y=A(),k=j(),_=v(()=>{var r;return(r=y.globleInfos)==null?void 0:r.language}),h=v(()=>k.newsInfos),C=N([]),$=(r=h.value)=>{let o=`Ns_Title_${_.value}`,n=`Ns_Content_${_.value}`;C.value=r.map(s=>({id:s.Ns_ID,title:s[o],content:s[n],sort:s.Ns_Sort,visible:s.Ns_Visible,pic:s.Ns_Pic,isOpened:!1}))};$(),T(()=>h.value,()=>$()),T(()=>_.value,()=>$());const a=r=>{C.value.map((o,n)=>{r==n?o.isOpened=!o.isOpened:o.isOpened=!1})};return(r,o)=>{const n=O("font-awesome-icon");return d(),u("div",Ct,[e("h2",wt,p(r.$t("LinkList.News")),1),e("div",St,[(d(!0),u(I,null,L(C.value,(s,t)=>(d(),u("div",{key:"newsList"+t,class:"p-5 mb-5 bg-gray-400 bg-opacity-20 rounded-lg",onClick:c=>a(t),"data-aos":"fade-down"},[e("h4",{class:P(["flex justify-between items-center cursor-pointer",[s.isOpened?"text-blue-600":"text-black hover:text-blue-600"]])},[e("p",Lt,[g(n,{class:"text-blue-600",size:"xl",icon:"fa-newspaper"}),e("span",At,p(s==null?void 0:s.title),1)]),e("p",null,[g(n,{icon:"fa-angle-down",rotation:s!=null&&s.isOpened?180:null},null,8,["rotation"])])],2),e("p",{class:P(["text-black",[s.isOpened?"block":"hidden"]]),innerHTML:s==null?void 0:s.content},null,10,Bt)],8,It))),128))])])}}},Pt={class:"Section mainPaddingX"},Nt={class:"Title"},Ot={class:"py-5 flex justify-center bg-gray-100 rounded-lg"},Ut={class:"grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10"},mt={setup(f){const y=A(),k=W(),_=v(()=>k.partnersInfos),h=y.fileFolderPath.getUrl,C=v(()=>{let $=_.value.reduce((a,r)=>{let{Pa_Title:o,Pa_Pic:n,sort:s,visibility:t}=r;return t=="1"&&a.push({title:o,url:h("imgs",n),sort:s}),a},[]);return $.sort(function(a,r){return(a==null?void 0:a.sort)-(r==null?void 0:r.sort)}),$});return($,a)=>(d(),u("div",Pt,[e("h2",Nt,p($.$t("LinkList.Partner")),1),e("div",Ot,[e("ul",Ut,[(d(!0),u(I,null,L(b(C),(r,o)=>(d(),u("li",{key:"partnerList"+o},[e("div",{style:Y(`background-image:url(${r.url})`),class:"w-32 h-14 bg-contain bg-no-repeat bg-center"},null,4)]))),128))])])]))}};var Mt="./assets/background.801271e1.png";const Ht=f=>(H("data-v-a31590b4"),f=f(),D(),f),Dt={class:"Section mainPaddingX"},Vt={class:"Title"},zt={class:"w-full h-full relative"},Et=Ht(()=>e("img",{class:"BackGroundImg",src:Mt,alt:""},null,-1)),Gt={class:"w-full h-full flex lg:block py-24 lg:py-4"},Ft={class:"w-full"},qt={class:"w-1/6 flex justify-center items-center"},Xt={class:"w-10 h-10 rounded-full flex justify-center items-center bg-blue-contact"},Kt={class:"w-5/6"},Rt={class:"text-xl text-blue-title"},jt={class:"whitespace-normal text-black"},Wt={class:"w-full"},Yt={action:"",class:"flex flex-wrap gap-5 justify-center"},Jt={class:"w-full flex gap-5 sm:flex-wrap"},Qt=["placeholder"],Zt=["placeholder"],es=["placeholder"],ts=["placeholder"],ss={setup(f){const y=J(),k=A(),_=v(()=>y.headquartersInfos);v(()=>k.globleInfos.serverURL);const h=v(()=>k.globleInfos.language),C=()=>{var n,s;return((n=_.value)==null?void 0:n.CountryIso3)=="TWN"&&h.value=="zh"?"40753 \u53F0\u4E2D\u5E02\u897F\u5C6F\u5340\u5927\u6CB3\u91CC\u6C38\u8F1D\u8DEF55\u865F":((s=_.value)==null?void 0:s.Address)||""},$=v(()=>{var o,n;return[{icon:"fa-location-dot",title:"Address",introduction:C()},{icon:"fa-envelope",title:"Email",introduction:((o=_.value)==null?void 0:o.Email)||""},{icon:"fa-phone",title:"TEL",introduction:((n=_.value)==null?void 0:n.Tel)||""}]}),a=N({name:"",email:"",subject:"",message:""}),r=()=>{};return(o,n)=>{const s=O("font-awesome-icon");return d(),u("div",Dt,[e("h2",Vt,p(o.$t("LinkList.Contact")),1),e("div",zt,[Et,e("div",Gt,[e("div",Ft,[(d(!0),u(I,null,L(b($),(t,c)=>(d(),u("div",{key:"leftItems"+c,class:"flex items-center mb-10"},[e("div",qt,[e("div",Xt,[g(s,{icon:t==null?void 0:t.icon,size:"lg"},null,8,["icon"])])]),e("div",Kt,[e("h3",Rt,[e("strong",null,p(o.$t(`Contact.${t.title}`)),1)]),e("p",jt,p(t==null?void 0:t.introduction),1)])]))),128))]),e("div",Wt,[e("form",Yt,[e("div",Jt,[U(e("input",{type:"text",placeholder:o.$t("Contact.Name"),class:"Input","onUpdate:modelValue":n[0]||(n[0]=t=>a.value.name=t)},null,8,Qt),[[m,a.value.name]]),U(e("input",{type:"text",placeholder:o.$t("Contact.Email"),class:"Input","onUpdate:modelValue":n[1]||(n[1]=t=>a.value.email=t)},null,8,Zt),[[m,a.value.email]])]),U(e("input",{type:"text",placeholder:o.$t("Contact.Subject"),class:"Input","onUpdate:modelValue":n[2]||(n[2]=t=>a.value.subject=t)},null,8,es),[[m,a.value.subject]]),U(e("textarea",{type:"text",placeholder:o.$t("Contact.Message"),class:"Input h-40","onUpdate:modelValue":n[3]||(n[3]=t=>a.value.message=t)},null,8,ts),[[m,a.value.message]]),e("button",{class:"ContactSubmit py-2 px-6 font-semibold text-blue-contact border border-blue-contact hover:bg-blue-contact hover:text-white",onClick:r},p(o.$t("GENERAL.Submit")),1)])])])])])}}};var os=M(ss,[["__scopeId","data-v-a31590b4"]]);const ns={id:"Banner"},ls={id:"About",class:"test break-words"},as={id:"Product"},cs={id:"News"},is={id:"Partner"},rs={id:"ServiceCenter"},ds={id:"Contact"},_s={setup(f){return(y,k)=>(d(),u("section",null,[e("article",ns,[g(ue)]),e("article",ls,[g(Be)]),e("article",as,[g(xt)]),e("article",cs,[g(Tt)]),e("article",is,[g(mt)]),e("article",rs,[g(dt)]),e("article",ds,[g(os)])]))}};export{_s as default};
