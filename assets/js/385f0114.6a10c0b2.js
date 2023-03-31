"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[980],{3905:(e,i,t)=>{t.d(i,{Zo:()=>s,kt:()=>v});var r=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,r,a=function(e,i){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var i=r.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},s=function(e){var i=p(e.components);return r.createElement(l.Provider,{value:i},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},m=r.forwardRef((function(e,i){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return t?r.createElement(v,o(o({ref:i},s),{},{components:t})):r.createElement(v,o({ref:i},s))}));function v(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=m;var c={};for(var l in i)hasOwnProperty.call(i,l)&&(c[l]=i[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<n;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1110:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const n={sidebar_position:1},o="Introduzione pratica a JavaScript",c={unversionedId:"javascript-i/introduzione",id:"javascript-i/introduzione",title:"Introduzione pratica a JavaScript",description:"Intro",source:"@site/docs/javascript-i/introduzione.md",sourceDirName:"javascript-i",slug:"/javascript-i/introduzione",permalink:"/javascript-from-scratch/docs/javascript-i/introduzione",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Javascript I",permalink:"/javascript-from-scratch/docs/category/javascript-i"},next:{title:"Elementi di base di JavaScript",permalink:"/javascript-from-scratch/docs/javascript-i/elementi-di-base"}},l={},p=[{value:"Intro",id:"intro",level:2},{value:"Come eseguire codice Javascript",id:"come-eseguire-codice-javascript",level:2},{value:"Esercizio",id:"esercizio",level:2}],s={toc:p},u="wrapper";function d(e){let{components:i,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduzione-pratica-a-javascript"},"Introduzione pratica a JavaScript"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"JavaScript \xe8 un linguaggio di programmazione dinamico utilizzato principalmente per la creazione di applicazioni web interattive. "),(0,a.kt)("p",null,"\xc8 stato creato da ",(0,a.kt)("a",{parentName:"p",href:"https://it.wikipedia.org/wiki/Brendan_Eich"},"Brendan Eich")," nel 1995 e viene utilizzato da milioni di sviluppatori in tutto il mondo."),(0,a.kt)("p",null,"JavaScript \xe8 importante per la creazione di applicazioni web poich\xe9 consente di creare interazioni dinamiche con l'utente. Ad esempio, puoi utilizzare JavaScript per creare pulsanti che cambiano colore quando l'utente passa il mouse sopra di essi o per creare formulari che validano automaticamente le informazioni inserite dall'utente."),(0,a.kt)("p",null,"Per iniziare a programmare in JavaScript, hai bisogno di un ambiente di sviluppo. Ci sono molti editor di testo disponibili, ma ti consigliamo di utilizzare ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),", che \xe8 gratuito e molto potente."),(0,a.kt)("p",null,"Per eseguire il codice JavaScript, utilizzeremo ",(0,a.kt)("a",{parentName:"p",href:"https://runjs.app/"},"RunJS"),", un'interfaccia utente grafica che ti consente di inserire ed eseguire codice JavaScript in un ambiente isolato. RunJS ti consente di testare il tuo codice in tempo reale e di vedere i risultati immediatamente."),(0,a.kt)("h2",{id:"come-eseguire-codice-javascript"},"Come eseguire codice Javascript"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h2",{id:"esercizio"},"Esercizio"),(0,a.kt)("p",null,"Ecco un esempio di codice JavaScript che puoi inserire in RunJS per testare il tuo ambiente di sviluppo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// questo \xe8 un commento, viene ignorato dal programma\n// Qui sotto utilizziamo la funzione console.log per stampare il messaggio "Ciao, mondo!" nella console\nconsole.log("Ciao, mondo!"); \n')),(0,a.kt)("p",null,"Per eseguire il codice sopra in RunJS, segui questi passaggi:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Apri RunJS"),(0,a.kt)("li",{parentName:"ol"},'Inserisci il codice sopra nella finestra di sinistra (chiamata "Editor").'),(0,a.kt)("li",{parentName:"ol"},'Nella finestra di destra (chiamata "Console"), vedrai il messaggio "Ciao, mondo!" stampato.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"helloWorld",src:t(2608).Z,width:"1124",height:"338"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulazioni! \ud83c\udf89")," "),(0,a.kt)("p",null,"Hai appena eseguito il tuo primo codice JavaScript utilizzando RunJS."))}d.isMDXComponent=!0},2608:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/exercise-0-256e6d0263d6edacec94bbe565d0ac61.png"}}]);