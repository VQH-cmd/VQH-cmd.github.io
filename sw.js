!function(){"use strict";var e={895:function(){try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}},913:function(){try{self["workbox:core:6.5.3"]&&_()}catch(e){}},550:function(){try{self["workbox:expiration:6.5.3"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(a!==undefined)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const n=new Set;const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||r(a.precache),c=e=>e||r(a.runtime);function o(e,t){const s=new URL(e);for(const n of t)s.searchParams["delete"](n);return s.href}let h;function l(e){e.then((()=>{}))}class u{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const d=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");function f(e,t){const s=t();return e.waitUntil(s),s}async function p(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,c=function(){if(h===undefined){const t=new Response("");if("body"in t)try{new Response(t.body),h=!0}catch(e){h=!1}h=!1}return h}()?a.body:await a.blob();return new Response(c,i)}let g,w;const m=new WeakMap,y=new WeakMap,_=new WeakMap,b=new WeakMap,v=new WeakMap;let R={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_.get(e);if("store"===t)return s.objectStoreNames[1]?undefined:s.objectStore(s.objectStoreNames[0])}return E(e[t])},set(e,t,s){return e[t]=s,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function x(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(w||(w=[IDBCursor.prototype.advance,IDBCursor.prototype["continue"],IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(L(this),t),E(m.get(this))}:function(...t){return E(e.apply(L(this),t))}:function(t,...s){const n=e.call(L(this),t,...s);return _.set(n,t.sort?t.sort():[t]),E(n)}}function C(e){return"function"==typeof e?x(e):(e instanceof IDBTransaction&&function(e){if(y.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));y.set(e,t)}(e),t=e,(g||(g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,R):e);var t}function E(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(E(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&m.set(t,e)}))["catch"]((()=>{})),v.set(t,e),t}(e);if(b.has(e))return b.get(e);const t=C(e);return t!==e&&(b.set(e,t),v.set(t,e)),t}const L=e=>v.get(e);const q=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],U=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(U.get(t))return U.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=D.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!q.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),a&&r.done]))[0]};return U.set(t,r),r}R=(e=>({...e,get:(t,s,n)=>k(t,s)||e.get(t,s,n),has:(t,s)=>!!k(t,s)||e.has(t,s)}))(R);s(550);const N="cache-entries",T=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class I{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(N,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),E(s).then((()=>undefined))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=T(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(N,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(N,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(N).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n["continue"]()}const i=[];for(const c of a)await s["delete"](N,c.id),i.push(c.url);return i}_getId(e){return this._cacheName+"|"+T(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,t),c=E(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(E(i.result),e.oldVersion,e.newVersion,E(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),c.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))}))["catch"]((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class K{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new I(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const n of t)await s["delete"](n,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,l(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return t===undefined||t<s}return!1}async"delete"(){this._rerunRequested=!1,await this._timestampModel.expireEntries(Infinity)}}class M{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);l(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(c){0}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){n.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===c())throw new t("expire-custom-caches-only");let s=this._cacheExpirations.get(e);return s||(s=new K(e,this._config),this._cacheExpirations.set(e,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches["delete"](e),await t["delete"]();this._cacheExpirations=new Map}}s(977);function P(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}class A{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class S{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}s(873);function O(e){return"string"==typeof e?new Request(e):e}class W{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let n=O(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(i){if(i instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?undefined:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(c){throw a&&await this.runCallbacks("fetchDidFail",{error:c,event:s,originalRequest:a.clone(),request:r.clone()}),c}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=O(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||undefined;return s}async cachePut(e,s){const a=O(e);var r;await(r=0,new Promise((e=>setTimeout(e,r))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:d(i.url)});const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),f=this.hasCallback("cacheDidUpdate"),p=f?await async function(e,t,s,n){const a=o(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const c of i)if(a===o(c.url,s))return e.match(c,n)}(u,i.clone(),["__WB_REVISION__"],l):null;try{await u.put(i,f?c.clone():c)}catch(g){if(g instanceof Error)throw"QuotaExceededError"===g.name&&await async function(){for(const e of n)await e()}(),g}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:h,oldResponse:p,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=O(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||undefined,s=!0,!t)break;return s||t&&200!==t.status&&(t=undefined),t}}class B{constructor(e={}){this.cacheName=c(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:undefined,a=new W(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(e,s,n){await e.runCallbacks("handlerWillStart",{event:n,request:s});let a=undefined;try{if(a=await this._handle(s,e),!a||"error"===a.type)throw new t("no-response",{url:s.url})}catch(r){if(r instanceof Error)for(const t of e.iterateCallbacks("handlerDidError"))if(a=await t({error:r,event:n,request:s}),a)break;if(!a)throw r}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class j extends B{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(j.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=a.integrity,r=e.integrity,i=!r||r===t;if(n=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||t:undefined})),t&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,n.clone());0}}return n}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(e);if(!(await s.cachePut(e,n.clone())))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==j.copyRedirectedCacheableResponsesPlugin&&(n===j.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(j.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}j.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},j.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await p(e):e}};class F{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new j({cacheName:i(e),plugins:[...t,new S({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&n.revision===undefined&&s.push(n.url);const{cacheKey:e,url:a}=P(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return f(e,(async()=>{const t=new A;this.strategy.plugins.push(t);for(const[a,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(a),n=new Request(a,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return f(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e["delete"](a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}return undefined}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let H;const V=()=>(H||(H=new F),H);s(80);const $=e=>e&&"object"==typeof e?e:{handle:e};class G{constructor(e,t,s="GET"){this.handler=$(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=$(e)}}class Q extends G{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class J{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(l){o=Promise.reject(l)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o["catch"]((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:a})}catch(r){r instanceof Error&&(n=r)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=undefined),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,$(e))}setCatchHandler(e){this._catchHandler=$(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let z;const X=()=>(z||(z=new J,z.addFetchListener(),z.addCacheListener()),z);function Y(e,s,n){let a;if("string"==typeof e){const t=new URL(e,location.href);0;a=new G((({url:e})=>e.href===t.href),s,n)}else if(e instanceof RegExp)a=new Q(e,s,n);else if("function"==typeof e)a=new G(e,s,n);else{if(!(e instanceof G))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return X().registerRoute(a),a}class Z extends G{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams["delete"](s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}function ee(e){V().precache(e)}class te extends B{async _handle(e,s){let n=await s.cacheMatch(e),a=undefined;if(n)0;else{0;try{n=await s.fetchAndCachePut(e)}catch(r){r instanceof Error&&(a=r)}0}if(!n)throw new t("no-response",{url:e.url,error:a});return n}}const se={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class ne extends B{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(se)}async _handle(e,s){const n=s.fetchAndCachePut(e)["catch"]((()=>{}));s.waitUntil(n);let a,r=await s.cacheMatch(e);if(r)0;else{0;try{r=await n}catch(i){i instanceof Error&&(a=i)}}if(!r)throw new t("no-response",{url:e.url,error:a});return r}}var ae;s(895);class re{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class ie{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new re(e)}}self.addEventListener("activate",(()=>self.clients.claim())),self.skipWaiting(),ee([{'revision':'1ae6acb3514426cd2b6076ec289a4bc6','url':'404.html'},{'revision':'c38a8088227d563a8d983ebc25c696e6','url':'about.html'},{'revision':'e5d250673fa35dccc964014eea596679','url':'app/calc/index.html'},{'revision':'34b7d9e29a92a1a387e687032bff1288','url':'app/calc/percent.html'},{'revision':'43f64f25365d6028036a6a2ff6dabdee','url':'app/calc/ratio.html'},{'revision':'7f4d3d1d2051c67a77da3c13bd201052','url':'app/index.html'},{'revision':'0b12b7ec758877d43d67ff5588053b91','url':'app/pw.html'},{'revision':'b17bc7f7a564ad64bfb70e73f4277190','url':'app/qr/decode.html'},{'revision':'b15573df4ba427991132257f935194ad','url':'app/qr/gen.html'},{'revision':'9bbad929c633111739fa47508cf3bf26','url':'app/qr/index.html'},{'revision':'95d2f6a82a7939c9186428e9170b8ca5','url':'assets/css/client.css'},{'revision':'db9f4533754ce28129fbf9507c9b1240','url':'assets/fonts/lg.svg'},{'revision':'13e892a28dda2567a981344188df5567','url':'assets/fonts/lg.ttf'},{'revision':'ba38ec746a64d70d0a68e838664d3418','url':'assets/fonts/lg.woff'},{'revision':'6d51beed3e04fc77a601da05002367d5','url':'assets/fonts/lg.woff2'},{'revision':'f7b93fd2e2c25ed781ec911e200b186a','url':'assets/js/chunk/123.js'},{'revision':'08381d54980134cd9f8a873e423b2bd8','url':'assets/js/chunk/147.js'},{'revision':'5dd94f636a9b327f2c6efd34675c0e39','url':'assets/js/chunk/173.js'},{'revision':'84b48d9170c1da35352cf75a6ecbe265','url':'assets/js/chunk/226.js'},{'revision':'4804123c08adf24dbf0d27fa7a43c49a','url':'assets/js/chunk/24.js'},{'revision':'b701aabdeee72d79e5b4449d6dbcf5a4','url':'assets/js/chunk/247.js'},{'revision':'41ed2d96c1f71e3c6e6c465303400863','url':'assets/js/chunk/340.js'},{'revision':'0dd6189acdc4449cabdee6dc073c6fe8','url':'assets/js/chunk/391.js'},{'revision':'bf850b3770c5d926ebd4bdaeefac57a5','url':'assets/js/chunk/415.js'},{'revision':'fec3a5a59f011da1d9db99fac9fd2c0c','url':'assets/js/chunk/431.js'},{'revision':'1b8c4caf0369356a29121e5802043273','url':'assets/js/chunk/505.js'},{'revision':'d4425c058e6f8e9a954c4d531604833f','url':'assets/js/chunk/518.js'},{'revision':'5d5d9e0654b60e0579b90ff6757c840a','url':'assets/js/chunk/539.js'},{'revision':'55dd1f19f9eb379b94525ec950c55724','url':'assets/js/chunk/642.js'},{'revision':'5135f106266e1dc25443dcdc4feb3963','url':'assets/js/chunk/660.js'},{'revision':'0ddcec2f476b323730db82bf43cf1569','url':'assets/js/chunk/680.js'},{'revision':'255ff08b109cd30094992f52b089e681','url':'assets/js/chunk/711.js'},{'revision':'4edec62aad36ffb161a8aa39adac9de5','url':'assets/js/chunk/736.js'},{'revision':'00a5451882f24337c8e75ec587ff0dba','url':'assets/js/chunk/794.js'},{'revision':'e29835602310b76617e23af457417000','url':'assets/js/chunk/835.js'},{'revision':'6d18fa1c998a19c43bffc2d7a664e45e','url':'assets/js/chunk/843.js'},{'revision':'92887c3a843a151bf82e5e90dfbd5b62','url':'assets/js/chunk/853.js'},{'revision':'58774fe1e97114fab154585932681353','url':'assets/js/chunk/935.js'},{'revision':'2925475f59c466832ed52a3b54643694','url':'assets/js/client.js'},{'revision':'d99f6ec69d2d0403da8773678a74ad77','url':'assets/js/legacy.js'},{'revision':'17336364d42ec4afd876f9c7651a6800','url':'assets/media/base/favicon/100x100.png'},{'revision':'8273b2a2f1c6b66600eb1e3d95c762bf','url':'assets/media/base/favicon/1024x1024.png'},{'revision':'d34760ee16fd7dca01c9826e2c88d9f8','url':'assets/media/base/favicon/107x107.png'},{'revision':'6a920b671bd5ba2b53f23781f1520716','url':'assets/media/base/favicon/114x114.png'},{'revision':'3cd4c2fac952c586274804d05ebf31bc','url':'assets/media/base/favicon/120x120.png'},{'revision':'2a573b946781de660d43ecd37740d3b4','url':'assets/media/base/favicon/1240x1240.png'},{'revision':'c3ec146fcb9954847ad421d130ed9084','url':'assets/media/base/favicon/1240x600.png'},{'revision':'9605de8d79d69bf45f3c57dc5373f724','url':'assets/media/base/favicon/128x128.png'},{'revision':'41f4e6800eda502963cba453e4f3e934','url':'assets/media/base/favicon/142x142.png'},{'revision':'0de65e3ae4d6aade56d391fc7c6a8d9b','url':'assets/media/base/favicon/144x144.png'},{'revision':'02abf45d3c67f243c244b3d924a0d94d','url':'assets/media/base/favicon/150x150.png'},{'revision':'a33b7315fce13efc8d5b98f41a8b3081','url':'assets/media/base/favicon/152x152.png'},{'revision':'29c24c232bd2ba82ec4e518b256b9638','url':'assets/media/base/favicon/167x167.png'},{'revision':'69b81ee0dacf7e47df9d1520c1ab1eae','url':'assets/media/base/favicon/16x16.png'},{'revision':'a9b2a7e025e50a20ab7f76b171f313fc','url':'assets/media/base/favicon/16x16.svg'},{'revision':'636850ceef3013e4a0043c39d5910a9d','url':'assets/media/base/favicon/176x176.png'},{'revision':'a2a6b5519df2a09e3ae6c70a3ad9e4b0','url':'assets/media/base/favicon/180x180.png'},{'revision':'b3f7c716afe2707a878b61f7122dcd55','url':'assets/media/base/favicon/188x188.png'},{'revision':'57ee5bdff254f4cb2043c30841b3bc60','url':'assets/media/base/favicon/192x192.png'},{'revision':'32abd0a1233c3adf37c7600401852474','url':'assets/media/base/favicon/200x200.png'},{'revision':'78b113001cd2480cf0d16d6ff2c309b3','url':'assets/media/base/favicon/20x20.png'},{'revision':'98f1bf9d8af77f650f3cc23d3c64ca81','url':'assets/media/base/favicon/225x225.png'},{'revision':'bcaff5db85646ce9d78325eea61756fe','url':'assets/media/base/favicon/2480x1200.png'},{'revision':'a8e57f8741a697d8defaa2d9739dbf94','url':'assets/media/base/favicon/24x24.png'},{'revision':'c9c52c3bec61efc15c58eb0c7cc8ddd7','url':'assets/media/base/favicon/256x256.png'},{'revision':'d1f65f6495992e7abbe3aac0efb040b3','url':'assets/media/base/favicon/284x284.png'},{'revision':'08ee1a000f3740fca5672c3b6b7e94f1','url':'assets/media/base/favicon/29x29.png'},{'revision':'82aa1e752c29c9eea0f9108abc318d3b','url':'assets/media/base/favicon/300x300.png'},{'revision':'c91baa17e38f009534f63b920365ef11','url':'assets/media/base/favicon/30x30.png'},{'revision':'4a731e5abea363b6a4ed4165efee94ef','url':'assets/media/base/favicon/310x150.png'},{'revision':'087cef4b8ab77f55b7d89bbdd610c829','url':'assets/media/base/favicon/310x310.png'},{'revision':'9fd7893a5e70058f000b135e763ae631','url':'assets/media/base/favicon/32x32.png'},{'revision':'6eee55659b5692fae3a93aa756a03725','url':'assets/media/base/favicon/36x36.png'},{'revision':'72711b4eea4c488434b7b6f32a45668f','url':'assets/media/base/favicon/384x384.png'},{'revision':'779967f8a1c4b99254c92025988f5c19','url':'assets/media/base/favicon/388x188.png'},{'revision':'b6dd37ec6af9862448999a906995ad71','url':'assets/media/base/favicon/388x388.png'},{'revision':'9505cfd7f081d9dd6f7a047485a08d49','url':'assets/media/base/favicon/40x40.png'},{'revision':'6e72c9a689a1570f14f3087550945430','url':'assets/media/base/favicon/44x44.png'},{'revision':'1db65c0dd07629ebe8e96569f33e3927','url':'assets/media/base/favicon/465x225.png'},{'revision':'f5549fae8cc60de2777e397c1399bc37','url':'assets/media/base/favicon/465x465.png'},{'revision':'f44324188c464a0b8c32c26664dbd9d0','url':'assets/media/base/favicon/48x48.png'},{'revision':'48a86f0bcfe026137ff9d47519b2704f','url':'assets/media/base/favicon/50x50.png'},{'revision':'995dce449b91fa7cfab7b0c982c644e8','url':'assets/media/base/favicon/512x512.png'},{'revision':'81435c2c52d8efd0e3380b4f6b119e87','url':'assets/media/base/favicon/55x55.png'},{'revision':'eee7533af1d75840ee38abf90474d453','url':'assets/media/base/favicon/57x57.png'},{'revision':'ca8a600c106324c901aaa34b91382c0f','url':'assets/media/base/favicon/58x58.png'},{'revision':'a71ac0a21408ece4332436428997d4e4','url':'assets/media/base/favicon/600x600.png'},{'revision':'2ec36a38e1608b49d541ea91531caa04','url':'assets/media/base/favicon/60x60.png'},{'revision':'72b0cbe232c86d9d4dc3c25fe504d774','url':'assets/media/base/favicon/620x300.png'},{'revision':'0fa4a92bcf201fa44f5de4451a9abc98','url':'assets/media/base/favicon/620x620.png'},{'revision':'89d8d32051788bc5b9461b4541f0a138','url':'assets/media/base/favicon/63x63.png'},{'revision':'f7e70fe6b1d6322d47e257cfc902003b','url':'assets/media/base/favicon/64x64.png'},{'revision':'5f22d3ea377058ef69ace68109bd78e7','url':'assets/media/base/favicon/66x66.png'},{'revision':'4fde66ce24aaadc5481ae88026ecd8ba','url':'assets/media/base/favicon/70x70.png'},{'revision':'1984cae21d937c491268cf03e096bc01','url':'assets/media/base/favicon/71x71.png'},{'revision':'5973335c601699a2db615d26a461885f','url':'assets/media/base/favicon/72x72.png'},{'revision':'14083da2db6a468e3a2fa8408ba74528','url':'assets/media/base/favicon/75x75.png'},{'revision':'697560911482da4de8842929d5c37a32','url':'assets/media/base/favicon/76x76.png'},{'revision':'c9395f34439422bc3bfe2737cfd71098','url':'assets/media/base/favicon/775x375.png'},{'revision':'10fe2b76af62b6f2e96eaa0312cab8a1','url':'assets/media/base/favicon/80x80.png'},{'revision':'e0e2e2141749aa90e3c1e246f3aed964','url':'assets/media/base/favicon/87x87.png'},{'revision':'8686f1623d71fe8e965e48129007f6fb','url':'assets/media/base/favicon/88x88.png'},{'revision':'a9b23e2f33b08bbfc978f541e0e14b1f','url':'assets/media/base/favicon/89x89.png'},{'revision':'97c16948b0f33e66ed8db87f1ae69634','url':'assets/media/base/favicon/930x450.png'},{'revision':'b8b5d8c8c72de70a43f60d374b48f003','url':'assets/media/base/favicon/96x96.png'},{'revision':'3d5731735aacd685349f1042dfdd187b','url':'assets/media/base/logo-wide.png'},{'revision':'2ccb7eb8b1c074067d8e4b227c09f593','url':'assets/media/base/logo.png'},{'revision':'d7df805b88bdcfe8fce2e2f9c7ba1055','url':'assets/media/base/og/default.png'},{'revision':'f0572c33bf3d5977a13e00f884b360d1','url':'assets/media/base/screenshot.jpeg'},{'revision':'7046c1a0512544e4c71e7685c4b78dd1','url':'assets/media/base/shortcut/about.png'},{'revision':'8728af9f313e76aafac9ab9349320d5a','url':'assets/media/base/shortcut/app.png'},{'revision':'9d1707db093af6d6ebff7df7ab792a29','url':'assets/media/base/shortcut/contact.png'},{'revision':'4e2dbdb1c4361d75208216ccd0499ca5','url':'assets/media/base/shortcut/service.png'},{'revision':'00eb0e60a2a088ccc0f7ba2d0de27540','url':'assets/media/bg/01.jpg'},{'revision':'72aff43ef9b17f70ef200e012b23f266','url':'assets/media/bg/02.jpg'},{'revision':'77b5465d94077eb8dcbf1c135c138f79','url':'assets/media/loading.svg'},{'revision':'0ef11ce096706bcafc520aee12162ae4','url':'assets/webfonts/fa-brands-400.ttf'},{'revision':'e2f5b365c7d3d4497da73148ddfae997','url':'assets/webfonts/fa-brands-400.woff2'},{'revision':'40e6df55734232692408d76ad5f9c34a','url':'assets/webfonts/fa-regular-400.ttf'},{'revision':'4b162098158528431aeb5636116777f0','url':'assets/webfonts/fa-regular-400.woff2'},{'revision':'c0bf087a238488d351270a35c8f0cca0','url':'assets/webfonts/fa-solid-900.ttf'},{'revision':'328a9d0f59f0ebb55cddac6f39995bea','url':'assets/webfonts/fa-solid-900.woff2'},{'revision':'36818ecc50af8ea6c4cbef88d0b2baad','url':'assets/webfonts/fa-v4compatibility.ttf'},{'revision':'6ddaf31a1e0e05490f6919cbb3347e9d','url':'assets/webfonts/fa-v4compatibility.woff2'},{'revision':'5fcb1bf84276c03d6c8e9273e0797280','url':'checkout.html'},{'revision':'eef31f4fb6d71aece40a74c1bbe3feec','url':'components.html'},{'revision':'61da7ebef9fe4ebcf7dad5cd5d0a4529','url':'contact.html'},{'revision':'31051c464d85f194a4472ad256041fba','url':'credit.html'},{'revision':'f89c5f756e77ed441a53b96c2154f272','url':'index.html'},{'revision':'a9bff19233942e2b96ecb69523ca2edf','url':'order.html'},{'revision':'c8dfe1b69184aa4e0d04b6f52c72f9a8','url':'privacy.html'},{'revision':'f3c6581c048fe46bf47b34c6cdc24f78','url':'service.html'},{'revision':'9cafa4621234c4c937a976f9bfd36d26','url':'sitemap.html'},{'revision':'b0a93a6af1b9545d8952a3ed86e12c16','url':'sitemap.xml'},{'revision':'61de712e1e02ba261cfe4ee7ca0a494c','url':'terms.html'}]||[]),function(e){const t=V();Y(new Z(t,e))}(ae);for(var ce=["404","aaa","about","common","app-pw","app-qr","app-calc","app","client","components","contact","credit","form","privacy","service","terms","sitemap"],oe=[],he=0,le=["vi","en"];he<le.length;he++)for(var ue=le[he],de=0,fe=ce;de<fe.length;de++){var pe=fe[de];oe.push({url:"i18n/".concat(ue,"/").concat(pe,".json")})}ee(oe),Y((function(e){return"https://fonts.googleapis.com"===e.url.origin}),new ne({cacheName:"google-fonts-stylesheets"})),Y((function(e){return"https://fonts.gstatic.com"===e.url.origin}),new te({cacheName:"google-fonts-webfonts",plugins:[new ie({statuses:[0,200]}),new M({maxAgeSeconds:31536e3,maxEntries:30})]})),Y((function(e){return"image"===e.request.destination}),new te({cacheName:"images",plugins:[new ie({statuses:[0,200]}),new M({maxEntries:60,maxAgeSeconds:2592e3})]})),Y((function(e){var t=e.request;return"script"===t.destination||"style"===t.destination}),new ne({cacheName:"static-resources"}))}()}();