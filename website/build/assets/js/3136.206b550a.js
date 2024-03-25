"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3136],{47211:(e,t,n)=>{n.d(t,{Z:()=>b});n(67294);var a=n(36905),s=n(35281),r=n(65130),i=n(95999),l=n(85893);function o(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return(0,l.jsx)(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function c(e){var t=e.lastUpdatedBy;return(0,l.jsx)(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function d(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return(0,l.jsxs)("span",{className:s.k.common.lastUpdated,children:[(0,l.jsx)(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(o,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,l.jsx)(c,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var u=n(84881),m=n(86233);const h={lastUpdated:"lastUpdated_vwxv"};function v(e){return(0,l.jsx)("div",{className:(0,a.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(m.Z,Object.assign({},e))})})}function f(e){var t=e.editUrl,n=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return(0,l.jsxs)("div",{className:(0,a.Z)(s.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(u.Z,{editUrl:t})}),(0,l.jsx)("div",{className:(0,a.Z)("col",h.lastUpdated),children:(n||r)&&(0,l.jsx)(d,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:r})})]})}function b(){var e=(0,r.k)().metadata,t=e.editUrl,n=e.lastUpdatedAt,i=e.formattedLastUpdatedAt,o=e.lastUpdatedBy,c=e.tags,d=c.length>0,u=!!(t||n||o);return d||u?(0,l.jsxs)("footer",{className:(0,a.Z)(s.k.docs.docFooter,"docusaurus-mt-lg"),children:[d&&(0,l.jsx)(v,{tags:c}),u&&(0,l.jsx)(f,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:i})]}):null}},55698:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});n(67294);var a=n(10833),s=n(65130),r=n(85893);function i(){var e,t=(0,s.k)(),n=t.metadata,i=t.frontMatter,l=t.assets;return(0,r.jsx)(a.d,{title:n.title,description:n.description,keywords:i.keywords,image:null!=(e=l.image)?e:i.image})}var l=n(36905),o=n(87524),c=n(95999),d=n(32244);function u(e){var t=e.previous,n=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(d.Z,Object.assign({},t,{subLabel:(0,r.jsx)(c.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,r.jsx)(d.Z,Object.assign({},n,{subLabel:(0,r.jsx)(c.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function m(){var e=(0,s.k)().metadata;return(0,r.jsx)(u,{previous:e.previous,next:e.next})}var h=n(52263),v=n(33692),f=n(80143),b=n(35281),p=n(60373),x=n(74477);var g={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,r.jsx)(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,r.jsx)(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function j(e){var t=g[e.versionMetadata.banner];return(0,r.jsx)(t,Object.assign({},e))}function k(e){var t=e.versionLabel,n=e.to,a=e.onClick;return(0,r.jsx)(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(v.Z,{to:n,onClick:a,children:(0,r.jsx)(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function C(e){var t,n=e.className,a=e.versionMetadata,s=(0,h.Z)().siteConfig.title,i=(0,f.gA)({failfast:!0}).pluginId,o=(0,p.J)(i).savePreferredVersionName,c=(0,f.Jo)(i),d=c.latestDocSuggestion,u=c.latestVersionSuggestion,m=null!=d?d:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return(0,r.jsxs)("div",{className:(0,l.Z)(n,b.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(j,{siteTitle:s,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(k,{versionLabel:u.label,to:m.path,onClick:function(){return o(u.name)}})})]})}function w(e){var t=e.className,n=(0,x.E)();return n.banner?(0,r.jsx)(C,{className:t,versionMetadata:n}):null}function L(e){var t=e.className,n=(0,x.E)();return n.badge?(0,r.jsx)("span",{className:(0,l.Z)(t,b.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(c.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var y=n(87237),N=n(86043),E=n(93743),S=n(63366);const I={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var T=["collapsed"];function Z(e){var t=e.collapsed,n=(0,S.Z)(e,T);return(0,r.jsx)("button",Object.assign({type:"button"},n,{className:(0,l.Z)("clean-btn",I.tocCollapsibleButton,!t&&I.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const _={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function A(e){var t=e.toc,n=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,N.u)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,l.Z)(_.tocCollapsible,!o&&_.tocCollapsibleExpanded,n),children:[(0,r.jsx)(Z,{collapsed:o,onClick:c}),(0,r.jsx)(N.z,{lazy:!0,className:_.tocCollapsibleContent,collapsed:o,children:(0,r.jsx)(E.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const H={tocMobile:"tocMobile_ITEo"};function U(){var e=(0,s.k)(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(A,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,l.Z)(b.k.docs.docTocMobile,H.tocMobile)})}var M=n(39407);function R(){var e=(0,s.k)(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(M.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var O=n(92503),B=n(10700);function D(e){var t,n,a,i,o=e.children,c=(t=(0,s.k)(),n=t.metadata,a=t.frontMatter,i=t.contentTitle,a.hide_title||void 0!==i?null:n.title);return(0,r.jsxs)("div",{className:(0,l.Z)(b.k.docs.docMarkdown,"markdown"),children:[c&&(0,r.jsx)("header",{children:(0,r.jsx)(O.Z,{as:"h1",children:c})}),(0,r.jsx)(B.Z,{children:o})]})}var F=n(2488),$=n(48596),V=n(44996);function P(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const q={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function z(){var e=(0,V.Z)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(v.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(P,{className:q.breadcrumbHomeIcon})})})}const J={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function G(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?(0,r.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,r.jsx)(v.Z,{className:a,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:a,children:t})}function Y(e){var t=e.children,n=e.active,a=e.index,s=e.addMicrodata;return(0,r.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,r.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function K(){var e=(0,F.s1)(),t=(0,$.Ns)();return e?(0,r.jsx)("nav",{className:(0,l.Z)(b.k.docs.docBreadcrumbs,J.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(z,{}),e.map((function(t,n){var a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(Y,{active:a,index:n,addMicrodata:!!s,children:(0,r.jsx)(G,{href:s,isLast:a,children:t.label})},n)}))]})}):null}var Q=n(22212);const W={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function X(e){var t,n,a,i,c,d,u=e.children,h=(t=(0,s.k)(),n=t.frontMatter,a=t.toc,i=(0,o.i)(),c=n.hide_table_of_contents,d=!c&&a.length>0,{hidden:c,mobile:d?(0,r.jsx)(U,{}):void 0,desktop:!d||"desktop"!==i&&"ssr"!==i?void 0:(0,r.jsx)(R,{})}),v=(0,s.k)().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,l.Z)("col",!h.hidden&&W.docItemCol),children:[v&&(0,r.jsx)(Q.Z,{}),(0,r.jsx)(w,{}),(0,r.jsxs)("div",{className:W.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(K,{}),(0,r.jsx)(L,{}),h.mobile,(0,r.jsx)(D,{children:u}),(0,r.jsx)(y.Z,{})]}),(0,r.jsx)(m,{})]})]}),h.desktop&&(0,r.jsx)("div",{className:"col col--3",children:h.desktop})]})}function ee(e){var t="docs-doc-id-"+e.content.metadata.id,n=e.content;return(0,r.jsx)(s.b,{content:e.content,children:(0,r.jsxs)(a.FG,{className:t,children:[(0,r.jsx)(i,{}),(0,r.jsx)(X,{children:(0,r.jsx)(n,{})})]})})}},39407:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(63366),s=(n(67294),n(36905)),r=n(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(85893),o=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var t=e.className,n=(0,a.Z)(e,o);return(0,l.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(r.Z,Object.assign({},n,{linkClassName:c,linkActiveClassName:d}))})}},93743:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(63366),s=n(67294),r=n(86668),i=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var s=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,a.Z)(e,i);n>=0?t[n].children.push(r):s.push(r)})),s}function o(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function d(e,t){var n,a,s=t.anchorTopOffset,r=e.find((function(e){return c(e).top>=s}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,s.useRef)(0),t=(0,r.L)().navbar.hideOnScroll;return(0,s.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){var t=(0,s.useRef)(void 0),n=u();(0,s.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,r=e.minHeadingLevel,i=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],s=t;s<=n;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=d(l,{anchorTopOffset:n.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var h=n(33692),v=n(85893);function f(e){var t=e.toc,n=e.className,a=e.linkClassName,s=e.isChild;return t.length?(0,v.jsx)("ul",{className:s?void 0:n,children:t.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)(h.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(f,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)}))}):null}const b=s.memo(f);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function x(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,h=void 0===u?void 0:u,f=e.minHeadingLevel,x=e.maxHeadingLevel,g=(0,a.Z)(e,p),j=(0,r.L)(),k=null!=f?f:j.tableOfContents.minHeadingLevel,C=null!=x?x:j.tableOfContents.maxHeadingLevel,w=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,s.useMemo)((function(){return o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:k,maxHeadingLevel:C});return m((0,s.useMemo)((function(){if(d&&h)return{linkClassName:d,linkActiveClassName:h,minHeadingLevel:k,maxHeadingLevel:C}}),[d,h,k,C])),(0,v.jsx)(b,Object.assign({toc:w,className:i,linkClassName:d},g))}},22212:(e,t,n)=>{n.d(t,{Z:()=>h});n(67294);var a=n(36905),s=n(95999),r=n(35742),i=n(85893);function l(){return(0,i.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(r.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(35281),u=n(59047);function m(e){var t=e.className;return(0,i.jsx)(u.Z,{type:"caution",title:(0,i.jsx)(l,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,i.jsx)(o,{})})}function h(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(m,Object.assign({},e))]})}},65130:(e,t,n)=>{n.d(t,{b:()=>l,k:()=>o});var a=n(67294),s=n(4077),r=n(85893),i=a.createContext(null);function l(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(i.Provider,{value:n,children:t})}function o(){var e=(0,a.useContext)(i);if(null===e)throw new s.i6("DocProvider");return e}},74232:(e,t,n)=>{n.d(t,{Cc:()=>O,HN:()=>_,k8:()=>P});var a=n(67294),s=n(85893),r=n(73935);function i(e,t){if(!e||"$auto"===e)return t?.toString()||(typeof window<"u"?window.location.href:"/");if("$path"===e){"string"==typeof t&&(t=new URL(t));let e=t||(typeof window<"u"?window.location:void 0);return e?`${e.origin}${e.pathname}`:"/"}return e}var l="fbs-store";function o(e){return"contentId"in e?e.contentId:`${e.contentSetId}/${i(e.key)}`}var c,d,u=class{constructor(e){if(this.feelbacks=void 0,e??="local",typeof window>"u"&&(e="memory"),"local"===e)this.storage=window.localStorage;else if("session"===e)this.storage=window.sessionStorage;else{let e=()=>{};this.storage={getItem:e,setItem:e,removeItem:e,clear:e,key:e,length:0}}this.load()}add(e){let t=o(e.target),n=(this.feelbacks??=[]).findIndex((e=>e.key===t));n>=0&&this.feelbacks.splice(n,1),this.feelbacks.push({key:t,value:e.value,expire:e.expireIn&&e.expireIn>0?Math.floor(Date.now()/1e3)+e.expireIn:void 0,feelbackId:e.feelbackId,revokeToken:e.revokable?.token,revokeExpire:e.revokable?.expireAt&&Math.floor(new Date(e.revokable.expireAt).getTime()/1e3)||void 0}),this.save()}clear(){this.feelbacks?.splice(0,this.feelbacks.length),this.storage.removeItem(l)}remove(e){let t="string"==typeof e?this.feelbacks?.findIndex((t=>t.feelbackId===e)):(e=o(e),this.feelbacks?.findIndex((t=>t.key===e)));void 0!==t&&t>=0&&(this.feelbacks.splice(t,1),this.save())}getValue(e){return this.getFeelback(e)?.value}isRevokable(e){return!!this.getRevocable(e)}getRevocable(e){let t=this.getFeelback(e);if(t&&t.revokeToken&&!(t.revokeExpire&&t.revokeExpire<Date.now()/1e3))return{feelbackId:t.feelbackId,revokeToken:t.revokeToken}}load(e){if(this.feelbacks&&!e)return;let t;try{t=JSON.parse(this.storage.getItem(l))||[]}catch{t=[]}this.feelbacks=t.filter((e=>!e.expire||e.expire>Date.now()/1e3)),t.length!==this.feelbacks.length&&this.save()}save(){try{this.storage.setItem(l,JSON.stringify(this.feelbacks))}catch{}}getFeelback(e){let t="string"==typeof e?this.feelbacks?.find((t=>t.feelbackId===e)):(e=o(e),this.feelbacks?.find((t=>t.key===e)));if(!(t&&t.expire&&t.expire<Date.now()/1e3))return t;this.remove(t.feelbackId)}};function m(e){return e??=d||"local",c&&d===e?c:(d=e,c=new u(e))}async function h(e){if((e=await e).status>=400)throw new Error("[feelback] API error");if(204!==e.status)return await e.json()}var v={get:async function(e,...t){return t.length>0&&(e=`${e}?$p=${JSON.stringify(t)}`),await h(fetch(e,{method:"GET"}))},post:async function(e,...t){return await h(fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}))}},f="https://api.feelback.dev/v0";var b=(0,a.createContext)(void 0);function p(){return(0,a.useContext)(b)}var x=()=>{let e=(0,a.useRef)(!1);return(0,a.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),()=>e.current};function g(e=5e3,t,n){(0,a.useEffect)((()=>{if(t)return function(e,t){let n=setTimeout(t,e);return()=>clearTimeout(n)}(e,(()=>n(t)))}),[t])}function j(e=5e3,t=!1){let n=(0,a.useRef)(t),[s,r]=(0,a.useState)(),i=(0,a.useCallback)((()=>l(n.current)),[]),l=(0,a.useCallback)((e=>r(e??!0)),[]);return g(e,s,i),{value:s,set:l,reset:i}}function k(e,t){let n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(e&&t){let e=e=>{(!e.target||!n.current?.contains(e.target))&&(t(),e.stopPropagation(),e.preventDefault())};return document.addEventListener("click",e,{capture:!0}),()=>document.removeEventListener("click",e,{capture:!0})}}),[e]),n}var C={data:void 0,isLoading:!1,isCompleted:!1,isSuccess:!1,isError:!1,error:void 0};function w(e,t,n){let s=(0,a.useRef)(0),r=x(),i=!!n?.paused,l=!!t&&!i,[o,c]=(0,a.useReducer)(L,l,(e=>({...C,isLoading:e})));async function d(...t){let n=++s.current;try{o.isLoading||c({type:"LOADING"});let a=await e(...t);return r()&&n===s.current&&c({type:"SUCCESS",data:a}),L(o,{type:"SUCCESS",data:a})}catch(a){return r()&&n===s.current&&c({type:"ERROR",error:a}),L(o,{type:"ERROR",error:a})}}return(0,a.useEffect)((()=>{!i&&t&&d()}),[i,...t||[]]),{...o,call:d,exec:async(...e)=>{let t=await d(...e);if(t.error)throw t.error;return t.data},reset:()=>{c({type:"RESET"})}}}function L(e,t){switch(t.type){case"LOADING":return{...C,isLoading:!0,data:e.data};case"SUCCESS":return{...C,isCompleted:!0,isSuccess:!0,data:t.data};case"ERROR":return{...C,isCompleted:!0,error:t.error,isError:!0};case"RESET":return{...C};default:throw new Error("unknown action")}}function y(){let e=(0,a.useRef)("");return e.current||(e.current="i"+Math.random().toString().substring(2)),e.current}function N(e){if("function"==typeof e)return(0,a.createElement)(e);if("object"==typeof e&&"text"in e)return(0,a.createElement)(a.Fragment,void 0,[e.text]);if((0,a.isValidElement)(e))return e;throw console.error("Invalid icon",e),new Error("Invalid icon")}function E(e,t){return e&&t?function(){e.apply(this,arguments),t.apply(this,arguments)}:e||t}function S(e){let{count:t=!1,isActive:n=!1,isDisabled:a=!1,label:r,title:i,icon:l,onClick:o}=e;return(0,s.jsxs)("button",{title:i,className:`feelback-btn ${a?"disabled":""} ${n?"active":""}`,onClick:o,children:[l&&(Array.isArray(l)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"feelback-icon inactive",children:N(l[0])}),(0,s.jsx)("span",{className:"feelback-icon active",children:N(l[1])})]}):(0,s.jsx)("span",{className:"feelback-icon",children:N(l)})),r&&(0,s.jsx)("span",{className:"label",children:r}),!1!==t&&(0,s.jsx)("span",{className:"feelback-count",children:t})]})}function I(e){let{active:t,showCount:n=!1,showLabels:a=!1,showTitle:r=!a,hideZero:i=!1,hideZeroCount:l=!0,isDisabled:o=!1,items:c,counts:d,onClick:u}=e;return(0,s.jsx)("div",{className:"feelback-buttons"+(n&&c.length>1?" with-count":""),children:c.map((({value:e,icon:c,title:m},h)=>{let v=d?.[h]||(t===e?1:0);return i&&v<=0?null:(0,s.jsx)(S,{title:r&&m||void 0,label:a&&m||void 0,icon:c,count:n&&v||(l?void 0:0),isDisabled:o,isActive:t===e,onClick:()=>u?.(e)},e)}))})}function T(e){let{group:t,value:n,label:a,description:r,checked:i,onSelected:l}=e,o=`radio-${y()}`;return(0,s.jsxs)("div",{className:"feelback-radio-item",children:[(0,s.jsx)("input",{id:o,name:t,type:"radio",value:n,checked:i,onChange:e=>e.target.checked?l?.():void 0}),(0,s.jsxs)("div",{className:"feelback-radio-side",children:[a&&(0,s.jsx)("label",{htmlFor:o,children:a}),r&&(0,s.jsx)("span",{className:"feelback-text",children:r})]})]})}function Z(e){let{active:t,isDisabled:n=!1,items:a,onRenderAddon:r,onSelected:i}=e,l=`rg-${y()}`;return(0,s.jsx)("fieldset",{className:"feelback-radio-group",children:a.map((e=>(0,s.jsxs)("div",{className:"feelback-radio-item-wrap",children:[(0,s.jsx)(T,{group:l,checked:t===e.value,value:e.value,label:e.title,description:e.description,onSelected:()=>i?.(e.value)}),r?.({item:e,isSelected:t===e.value,isDisabled:n})||null]},e.value)))})}function _(e){let{text:t,...n}=e;return(0,s.jsxs)("div",{className:"feelback-q",children:[t&&"string"==typeof t&&(0,s.jsx)("span",{className:"feelback-text",children:t}),t&&(0,a.isValidElement)(t)&&t,(0,s.jsx)(I,{...n})]})}function A(e){let{text:t}=e;return(0,s.jsx)("div",{className:"feelback-a",children:(0,s.jsx)("span",{className:"feelback-text",children:t})})}var H=(0,a.forwardRef)(((e,t)=>{let{className:n,layout:r,label:i="Send feedback",textAnswer:l="Thanks for your feedback",revokable:o=!0,onClose:c,onSuccess:d,children:u,...m}=e,{call:h,isSuccess:v}=D(m),{value:f,set:b}=j(1e3),p=({value:e,metadata:t})=>{b(!0),h(e,{metadata:t,revokable:o}).then((({isSuccess:t})=>{t&&d?.({...m,value:e})}))};return(0,s.jsxs)("div",{ref:t,className:"feelback-container"+(n?" "+n:""),style:{pointerEvents:f?"none":void 0},children:[!v&&(()=>{switch(r){case"button-switch":return(0,s.jsx)(U,{label:i,behavior:"remove-when-open",children:e=>(0,a.cloneElement)(u,{onSubmit:p,onCancel:e})});case"button-dialog":return(0,s.jsx)(U,{label:i,behavior:"disable-when-open",children:e=>(0,s.jsx)(M,{onClose:e,children:(0,a.cloneElement)(u,{onSubmit:p,onCancel:e})})});case"radio-group-dialog":return(0,s.jsx)(M,{onClose:c,children:(0,a.cloneElement)(u,{onSubmit:p,onCancel:E(u.props.onCancel,c)})});default:return(0,a.cloneElement)(u,{onSubmit:p})}})(),v&&(0,s.jsx)(A,{text:l})]})}));function U(e){let{label:t,behavior:n="remove-when-open",children:r}=e,[i,l]=(0,a.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(!i||"remove-when-open"!==n)&&(0,s.jsx)("button",{className:"feelback-btn btn-action trigger-btn",disabled:i,onClick:()=>l(!0),children:t}),i&&r((()=>l(!1)))]})}function M(e){let{onClose:t,children:n}=e,i=k(!0,t);return(0,r.createPortal)((0,s.jsx)("div",{className:"feelback-style",children:(0,s.jsx)("div",{className:"dialog",children:(0,a.cloneElement)(n,{ref:i})})}),document.body)}var R=(0,a.forwardRef)(((e,t)=>{let{title:n="Send feedback",alignButton:a="right",showButton:r=!0,onCancel:i,onSubmit:l,onValidate:o,slots:c,children:d}=e;return(0,s.jsx)("div",{ref:t,className:"feelback-form",children:(0,s.jsxs)("div",{className:"content",children:[n&&(0,s.jsx)("span",{className:"feelback-text form-title",children:n}),d,r&&c?.BeforeFormButtons,r&&(0,s.jsxs)("div",{className:"form-buttons feelback-buttons "+("right"===a?"align-end":""),children:[(0,s.jsx)("button",{className:"feelback-btn btn-action",onClick:()=>{let e=o();void 0!==e&&l?.(e)},children:"Send"}),i&&(0,s.jsx)("button",{className:"feelback-btn btn-cancel",onClick:i,children:"Cancel"})]})]})})}));(0,a.forwardRef)(((e,t)=>{let{title:n="Send feedback",placeholder:r="Type your message",minLength:i,maxLength:l,withEmail:o,placeholderEmail:c="your@email.com"+(o&&"required"!==o?" (optional)":""),slots:d,onCancel:u,onSubmit:m}=e,h=(0,a.useRef)(null),v="required"===o,f=(0,a.useRef)(null);return(0,s.jsxs)(R,{slots:d,title:n,onCancel:u,onSubmit:m,ref:t,onValidate:()=>{let e=h.current?.value.trim()||void 0,t=f.current?.value?.trim()||void 0;if(e&&!(i&&i>0&&e.length<i)&&!(t&&!t.match(/^(.+)@(.+)$/)||v))return{value:e,metadata:t?{$user:t}:void 0}},children:[d?.BeforeMessage,(0,s.jsx)("textarea",{ref:h,required:!0,placeholder:r||void 0,minLength:i,maxLength:l}),o&&(0,s.jsxs)(s.Fragment,{children:[d?.BeforeEmail,(0,s.jsx)("input",{ref:f,type:"email",name:"email",required:v,placeholder:c||void 0})]})]})}));function O(e){let{layout:t="button-switch",label:n="Send feedback",revokable:a,preset:r,tags:i=r,active:l,title:o,placeholder:c,minLength:d,maxLength:u,textAnswer:m="Thanks for your feedback",showLabels:h=!1,style:v,withEmail:f,placeholderEmail:b,onCancel:p,onSuccess:x,slots:g,...j}=e;if(!i)return console.warn("Missing tags"),null;let k=v&&Array.isArray(v)?v.join(" "):v||void 0;return(0,s.jsx)(H,{className:`feelback-tagged-message layout-${t} ${k}`,layout:t,label:n,revokable:a,onSuccess:x,...j,children:(0,s.jsx)(B,{title:o,tags:i,showLabels:h,placeholder:c,minLength:d,maxLength:u,withEmail:f,placeholderEmail:b,onCancel:p,slots:g,layout:"reveal-message"===t?t:"radio-group"===t||"radio-group-dialog"===t?"radio-group":"form"})})}var B=(0,a.forwardRef)(((e,t)=>{let{layout:n,title:r="Send feedback",active:i,tags:l,showLabels:o=!0,placeholder:c="Type your message",minLength:d,maxLength:u,withEmail:m,placeholderEmail:h="your@email.com"+(m&&"required"!==m?" (optional)":""),slots:v,onCancel:f,onSubmit:b}=e,p=!!d&&d>0,x=(0,a.useRef)(null),g="required"===m,j=(0,a.useRef)(null),[k,C]=(0,a.useState)("$auto"===i?l[0].value:i),w=(0,s.jsxs)(s.Fragment,{children:[v?.BeforeMessage,(0,s.jsx)("textarea",{ref:x,required:p,placeholder:c||void 0,minLength:d,maxLength:u})]}),L=m&&(0,s.jsxs)(s.Fragment,{children:[v?.BeforeEmail,(0,s.jsx)("input",{ref:j,type:"email",name:"email",required:g,placeholder:h||void 0})]});return(0,s.jsxs)(R,{onCancel:f,onSubmit:b,ref:t,onValidate:()=>{let e=x.current?.value?.trim()||void 0,t=j.current?.value?.trim()||void 0;if(k&&(!p||e&&!(e.length<d))&&!(t&&!t.match(/^(.+)@(.+)$/)||g))return{value:{tag:k,message:e},metadata:t?{$user:t}:void 0}},title:"reveal-message"!==n&&r,showButton:"reveal-message"!==n||!!k,alignButton:"radio-group"===n?"left":"right",slots:v,children:["form"===n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(I,{items:l,showLabels:o,active:k,onClick:C}),w,L]}),"radio-group"===n&&(0,s.jsx)(Z,{items:l,active:k,onSelected:C,onRenderAddon:({isSelected:e})=>e&&(0,s.jsxs)(s.Fragment,{children:[w,L]})}),"reveal-message"===n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{text:r,items:l,showLabels:o,active:k,onClick:C}),k&&(0,s.jsxs)(s.Fragment,{children:[w,L]})]})]})}));function D(e){let t=p(),n=F(e);return w(((e,a)=>async function(e){let{endpoint:t=f,store:n="local",revokable:a=!0,value:s,metadata:r,expireIn:l=3600}=e,o="contentId"in e?{contentId:e.contentId}:{contentSetId:e.contentSetId,key:i(e.key)},c=n&&"none"!==n&&m(n)||void 0,d=a&&c?.getRevocable(o)||void 0,u=d?await v.post(`${t}/feelbacks/edit`,{...d,value:s}):await v.post(`${t}/feelbacks/create`,{...o,value:s,context:r,revokable:a});c?.add({...u,target:o,value:s,expireIn:l})}({endpoint:t?.endpoint,store:t?.store,...a,...n,value:e})))}function F(e){let t=(0,a.useRef)(e);return t.current!==e&&("contentId"in t.current&&"contentId"in e?t.current.contentId!==e.contentId&&t.current:"contentSetId"in t.current&&"contentSetId"in e?(t.current.contentSetId!==e.contentSetId||t.current.key!==e.key)&&(t.current=e):t.current=e),t.current}var $=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",fill:"currentColor",width:"1em",height:"1em",...e},a.createElement("g",null,a.createElement("path",{d:"M172.7,309.1c0-7.4-3-14.6-8.3-19.9s-12.4-8.3-19.9-8.3H74.4c-10.1,0-19.3,5.4-24.4,14.1c-5.1,8.7-5,19.5,0,28.1 s14.3,14.1,24.4,14.1h70.2c7.4,0,14.6-3,19.9-8.3S172.7,316.5,172.7,309.1L172.7,309.1z"}),a.createElement("path",{d:"M102.5,449.5h70.2c10.1,0,19.3-5.4,24.4-14.1c5-8.6,5-19.5,0-28.1s-14.3-14.1-24.4-14.1h-70.2c-10.1,0-19.3,5.4-24.4,14.1 c-5,8.6-5,19.5,0,28.1C83.2,444.1,92.5,449.5,102.5,449.5z"}),a.createElement("path",{d:"M53.2,224.9h83.3c18.8,0,36.4-9.4,46.8-24.9l95.7-143.6h5c11.6,0,22.5,5.7,29.2,15.1s8.6,21.6,5,32.5l-25.4,76.5 c-1.3,3.7-0.6,7.9,1.8,11.2c2.3,3.2,6.2,5.2,10.1,5.2h65.6c14.7-0.3,28.8,6.3,37.9,17.7c5.3,6.6,8.6,14.3,9.8,22.6 c1.3,8.3,0.3,16.7-2.7,24.5l-47.6,118.7c-1.5,3.9-4.3,7.2-7.6,9.5c-3.5,2.3-7.5,3.6-11.6,3.6h-61.8l0,0c-7.1-0.3-14.2,2.2-19.7,7 c-5.4,4.6-8.9,11.2-9.9,18.4c-0.8,7.9,1.9,15.8,7.1,21.7c5.4,5.9,12.9,9.2,20.9,9.2h63.3c15.5,0,30.5-4.6,43.2-13.3 c12.8-8.6,22.7-20.9,28.5-35.2l47.6-118.8c12.8-32.1,8.8-68.5-11-97c-19.7-28.5-52.1-45.3-86.8-44.6h-4.6l5.7-17 c5.2-14.8,6.7-30.6,4.3-46.2c-3.6-21.6-14.8-41.3-31.5-55.5s-37.9-22.1-60-22h-20c-9.4,0-18.2,4.6-23.3,12.5l-104,156H54.5 c-7.1-0.1-14.1,2.3-19.6,7c-5.5,4.7-8.9,11.2-9.8,18.3c-0.8,7.9,1.9,15.8,7.1,21.7C37.8,221.4,45.2,224.9,53.2,224.9L53.2,224.9z"}))),V=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",fill:"currentColor",width:"1em",height:"1em",...e},a.createElement("g",null,a.createElement("path",{d:"M327.3,190.8c0,7.3,2.9,14.6,8.3,19.8c5.3,5.3,12.4,8.3,19.8,8.3h70.2c10.1,0,19.4-5.4,24.4-14c5-8.6,5-19.5,0-28.1 c-5-8.6-14.3-14-24.4-14h-70.2c-7.3,0-14.6,2.9-19.8,8.3C330.3,176.3,327.3,183.4,327.3,190.8L327.3,190.8z"}),a.createElement("path",{d:"M397.5,50.4h-70.2c-10.1,0-19.4,5.4-24.4,14c-5,8.6-5,19.5,0,28.1c5,8.6,14.3,14,24.4,14h70.2c10.1,0,19.4-5.4,24.4-14 s5-19.5,0-28.1S407.6,50.4,397.5,50.4z"}),a.createElement("path",{d:"M446.8,275.1h-83.3c-18.8,0-36.3,9.5-46.8,25l-95.7,143.6h-5c-11.6,0-22.5-5.7-29.3-15.1c-6.8-9.4-8.6-21.6-5-32.5 l25.4-76.5c1.3-3.8,0.6-7.9-1.8-11.2c-2.3-3.2-6.2-5.1-10.1-5.1h-65.5c-14.7,0.3-28.7-6.3-38.1-17.7c-5.3-6.6-8.6-14.3-9.8-22.6 c-1.3-8.3-0.3-16.6,2.7-24.5l47.6-118.8c1.6-3.9,4.2-7.2,7.6-9.5c3.5-2.3,7.5-3.6,11.6-3.6h61.8l0,0c7.1,0.3,14.2-2.3,19.7-7 c5.4-4.7,8.9-11.3,9.9-18.4c0.7-7.9-1.9-15.8-7.1-21.7c-5.4-6-12.9-9.2-20.9-9.2h-63.3c-15.5,0-30.5,4.7-43.2,13.3 C95.7,72.4,85.8,84.7,80,99L32.4,217.8c-12.8,32.1-8.8,68.5,10.9,97.1c19.7,28.6,52.1,45.2,86.8,44.7h4.7l-5.7,17.1 c-5.1,14.9-6.7,30.6-4.2,46.2c3.6,21.6,14.9,41.3,31.5,55.4s37.9,21.8,59.8,21.7h20c9.5,0,18.2-4.7,23.3-12.5l104.1-156h82.1 c7.1,0.1,14-2.3,19.6-7c5.5-4.7,8.9-11.2,9.8-18.4c0.7-7.9-1.9-15.8-7.1-21.7C462.4,278.5,454.8,275.1,446.8,275.1L446.8,275.1z"}))),P=[{value:"y",icon:$,title:"Yes"},{value:"n",icon:V,title:"No"}]}}]);