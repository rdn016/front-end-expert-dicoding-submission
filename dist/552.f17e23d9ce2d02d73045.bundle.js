(self.webpackChunkowanrestaurant=self.webpackChunkowanrestaurant||[]).push([[552],{552:(t,e,i)=>{var a,n,r;!function(s,o){s&&(o=o.bind(null,s,s.document),t.exports?o(i(879)):(n=[i(879)],void 0===(r="function"==typeof(a=o)?a.apply(e,n):a)||(t.exports=r)))}("undefined"!=typeof window?window:0,(function(t,e,i){"use strict";if(t.addEventListener){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,n=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,r=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,s=/^picture$/i,o=i.cfg,c={getParent:function(e,i){var a=e,n=e.parentNode;return i&&"prev"!=i||!n||!s.test(n.nodeName||"")||(n=n.parentNode),"self"!=i&&(a="prev"==i?e.previousElementSibling:i&&(n.closest||t.jQuery)&&(n.closest?n.closest(i):jQuery(n).closest(i)[0])||n),a},getFit:function(t){var e,i,a=getComputedStyle(t,null)||{},s=a.content||a.fontFamily,o={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!o.fit&&s&&(e=s.match(n))&&(o.fit=e[1]),o.fit?(!(i=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&s&&(e=s.match(r))&&(i=e[1]),o.parent=c.getParent(t,i)):o.fit=a.objectFit,o},getImageRatio:function(e){var i,n,r,c,u,d,l,f=e.parentNode,g=f&&s.test(f.nodeName||"")?f.querySelectorAll("source, img"):[e];for(i=0;i<g.length;i++)if(n=(e=g[i]).getAttribute(o.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",r=e._lsMedia||e.getAttribute("media"),r=o.customMedia[e.getAttribute("data-media")||r]||r,n&&(!r||(t.matchMedia&&matchMedia(r)||{}).matches)){(c=parseFloat(e.getAttribute("data-aspectratio")))||((u=n.match(a))?"w"==u[2]?(d=u[1],l=u[3]):(d=u[3],l=u[1]):(d=e.getAttribute("width"),l=e.getAttribute("height")),c=d/l);break}return c},calculateSize:function(t,e){var i,a,n,r=this.getFit(t),s=r.fit,o=r.parent;return"width"==s||("contain"==s||"cover"==s)&&(a=this.getImageRatio(t))?(o?e=o.clientWidth:o=t,n=e,"width"==s?n=e:(i=e/o.clientHeight)&&("cover"==s&&i<a||"contain"==s&&i>a)&&(n=e*(a/i)),n):e}};i.parentFit=c,e.addEventListener("lazybeforesizes",(function(t){if(!t.defaultPrevented&&t.detail.instance==i){var e=t.target;t.detail.width=c.calculateSize(e,t.detail.width)}}))}}))}}]);
//# sourceMappingURL=552.f17e23d9ce2d02d73045.bundle.js.map