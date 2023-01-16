!function(){"use strict";var e={895:function(){try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}},913:function(){try{self["workbox:core:6.5.3"]&&_()}catch(e){}},550:function(){try{self["workbox:expiration:6.5.3"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(a!==undefined)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const n=new Set;const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||r(a.precache),c=e=>e||r(a.runtime);function o(e,t){const s=new URL(e);for(const n of t)s.searchParams["delete"](n);return s.href}let h;function l(e){e.then((()=>{}))}class u{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const d=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");function f(e,t){const s=t();return e.waitUntil(s),s}async function p(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,c=function(){if(h===undefined){const t=new Response("");if("body"in t)try{new Response(t.body),h=!0}catch(e){h=!1}h=!1}return h}()?a.body:await a.blob();return new Response(c,i)}let g,w;const m=new WeakMap,y=new WeakMap,_=new WeakMap,b=new WeakMap,v=new WeakMap;let R={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_.get(e);if("store"===t)return s.objectStoreNames[1]?undefined:s.objectStore(s.objectStoreNames[0])}return E(e[t])},set(e,t,s){return e[t]=s,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function x(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(w||(w=[IDBCursor.prototype.advance,IDBCursor.prototype["continue"],IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(L(this),t),E(m.get(this))}:function(...t){return E(e.apply(L(this),t))}:function(t,...s){const n=e.call(L(this),t,...s);return _.set(n,t.sort?t.sort():[t]),E(n)}}function C(e){return"function"==typeof e?x(e):(e instanceof IDBTransaction&&function(e){if(y.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));y.set(e,t)}(e),t=e,(g||(g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,R):e);var t}function E(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(E(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&m.set(t,e)}))["catch"]((()=>{})),v.set(t,e),t}(e);if(b.has(e))return b.get(e);const t=C(e);return t!==e&&(b.set(e,t),v.set(t,e)),t}const L=e=>v.get(e);const q=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],U=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(U.get(t))return U.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=D.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!q.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),a&&r.done]))[0]};return U.set(t,r),r}R=(e=>({...e,get:(t,s,n)=>k(t,s)||e.get(t,s,n),has:(t,s)=>!!k(t,s)||e.has(t,s)}))(R);s(550);const N="cache-entries",T=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class I{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(N,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),E(s).then((()=>undefined))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=T(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(N,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(N,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(N).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n["continue"]()}const i=[];for(const c of a)await s["delete"](N,c.id),i.push(c.url);return i}_getId(e){return this._cacheName+"|"+T(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,t),c=E(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(E(i.result),e.oldVersion,e.newVersion,E(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),c.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))}))["catch"]((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class K{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new I(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const n of t)await s["delete"](n,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,l(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return t===undefined||t<s}return!1}async"delete"(){this._rerunRequested=!1,await this._timestampModel.expireEntries(Infinity)}}class M{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);l(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(c){0}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){n.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===c())throw new t("expire-custom-caches-only");let s=this._cacheExpirations.get(e);return s||(s=new K(e,this._config),this._cacheExpirations.set(e,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches["delete"](e),await t["delete"]();this._cacheExpirations=new Map}}s(977);function P(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}class A{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class S{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}s(873);function O(e){return"string"==typeof e?new Request(e):e}class W{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let n=O(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(i){if(i instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?undefined:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(c){throw a&&await this.runCallbacks("fetchDidFail",{error:c,event:s,originalRequest:a.clone(),request:r.clone()}),c}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=O(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||undefined;return s}async cachePut(e,s){const a=O(e);var r;await(r=0,new Promise((e=>setTimeout(e,r))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:d(i.url)});const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),f=this.hasCallback("cacheDidUpdate"),p=f?await async function(e,t,s,n){const a=o(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const c of i)if(a===o(c.url,s))return e.match(c,n)}(u,i.clone(),["__WB_REVISION__"],l):null;try{await u.put(i,f?c.clone():c)}catch(g){if(g instanceof Error)throw"QuotaExceededError"===g.name&&await async function(){for(const e of n)await e()}(),g}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:h,oldResponse:p,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=O(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||undefined,s=!0,!t)break;return s||t&&200!==t.status&&(t=undefined),t}}class B{constructor(e={}){this.cacheName=c(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:undefined,a=new W(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(e,s,n){await e.runCallbacks("handlerWillStart",{event:n,request:s});let a=undefined;try{if(a=await this._handle(s,e),!a||"error"===a.type)throw new t("no-response",{url:s.url})}catch(r){if(r instanceof Error)for(const t of e.iterateCallbacks("handlerDidError"))if(a=await t({error:r,event:n,request:s}),a)break;if(!a)throw r}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class j extends B{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(j.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=a.integrity,r=e.integrity,i=!r||r===t;if(n=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||t:undefined})),t&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,n.clone());0}}return n}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(e);if(!(await s.cachePut(e,n.clone())))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==j.copyRedirectedCacheableResponsesPlugin&&(n===j.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(j.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}j.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},j.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await p(e):e}};class F{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new j({cacheName:i(e),plugins:[...t,new S({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&n.revision===undefined&&s.push(n.url);const{cacheKey:e,url:a}=P(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return f(e,(async()=>{const t=new A;this.strategy.plugins.push(t);for(const[a,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(a),n=new Request(a,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return f(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e["delete"](a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}return undefined}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let H;const V=()=>(H||(H=new F),H);s(80);const $=e=>e&&"object"==typeof e?e:{handle:e};class G{constructor(e,t,s="GET"){this.handler=$(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=$(e)}}class Q extends G{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class J{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(l){o=Promise.reject(l)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o["catch"]((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:a})}catch(r){r instanceof Error&&(n=r)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=undefined),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,$(e))}setCatchHandler(e){this._catchHandler=$(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let z;const X=()=>(z||(z=new J,z.addFetchListener(),z.addCacheListener()),z);function Y(e,s,n){let a;if("string"==typeof e){const t=new URL(e,location.href);0;a=new G((({url:e})=>e.href===t.href),s,n)}else if(e instanceof RegExp)a=new Q(e,s,n);else if("function"==typeof e)a=new G(e,s,n);else{if(!(e instanceof G))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return X().registerRoute(a),a}class Z extends G{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams["delete"](s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}function ee(e){V().precache(e)}class te extends B{async _handle(e,s){let n=await s.cacheMatch(e),a=undefined;if(n)0;else{0;try{n=await s.fetchAndCachePut(e)}catch(r){r instanceof Error&&(a=r)}0}if(!n)throw new t("no-response",{url:e.url,error:a});return n}}const se={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class ne extends B{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(se)}async _handle(e,s){const n=s.fetchAndCachePut(e)["catch"]((()=>{}));s.waitUntil(n);let a,r=await s.cacheMatch(e);if(r)0;else{0;try{r=await n}catch(i){i instanceof Error&&(a=i)}}if(!r)throw new t("no-response",{url:e.url,error:a});return r}}var ae;s(895);class re{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class ie{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new re(e)}}self.addEventListener("activate",(()=>self.clients.claim())),self.skipWaiting(),ee([{'revision':'20f1a821566f2dbeddc894185249233e','url':'404.html'},{'revision':'0b7b01b638cae3cc9cf5e380d6cdf147','url':'about.html'},{'revision':'92b4e7a2499a29138b5575955115eb8c','url':'app/calc/index.html'},{'revision':'8c5afa91d57f4615ffcdb80955fd93c7','url':'app/calc/percent.html'},{'revision':'f047cf50ee810faf85dd8b8165a8c6c6','url':'app/calc/ratio.html'},{'revision':'171e4c580536490b1b78301e093035fa','url':'app/index.html'},{'revision':'f69646db89cd3a95e8788bbb1c29dcf5','url':'app/pw.html'},{'revision':'ed32b356827dff8d35c1aef46d8f6d42','url':'app/qr/decode.html'},{'revision':'a45d942c91472f87757c535700d1634c','url':'app/qr/gen.html'},{'revision':'7c98148b467df4523dde73ef7b10c250','url':'app/qr/index.html'},{'revision':'fd980fcc2724c9d5b48de33af5b69532','url':'assets/css/client.css'},{'revision':'db9f4533754ce28129fbf9507c9b1240','url':'assets/fonts/lg.svg'},{'revision':'13e892a28dda2567a981344188df5567','url':'assets/fonts/lg.ttf'},{'revision':'ba38ec746a64d70d0a68e838664d3418','url':'assets/fonts/lg.woff'},{'revision':'6d51beed3e04fc77a601da05002367d5','url':'assets/fonts/lg.woff2'},{'revision':'d5538a0f5084f4ceec32dee0d0b810fc','url':'assets/js/chunk/123.js'},{'revision':'8c902c67e2f371f32d16a90a6f35439a','url':'assets/js/chunk/147.js'},{'revision':'ff38d454fbc6a01ce3f42041543d2ea1','url':'assets/js/chunk/173.js'},{'revision':'ca4239450434ad86124e753ffa519448','url':'assets/js/chunk/226.js'},{'revision':'0826bd4da8f80bc5d2b4db3e67ce0321','url':'assets/js/chunk/247.js'},{'revision':'d621ce55772a8b8634504e7c6ecd0f9b','url':'assets/js/chunk/326.js'},{'revision':'713516b6fc727ef5f6dff5a60dc9f768','url':'assets/js/chunk/38.js'},{'revision':'0dd6189acdc4449cabdee6dc073c6fe8','url':'assets/js/chunk/391.js'},{'revision':'402bd4b1931464ceb2e7d079f71005d0','url':'assets/js/chunk/415.js'},{'revision':'f39a80d64c6b8261adb81fff7ff7b16b','url':'assets/js/chunk/450.js'},{'revision':'1b8c4caf0369356a29121e5802043273','url':'assets/js/chunk/505.js'},{'revision':'734ab5b617e4c7f674c15c3d37faa0d5','url':'assets/js/chunk/525.js'},{'revision':'579fc7a05ccf817ff564c3d60b6985a7','url':'assets/js/chunk/642.js'},{'revision':'5135f106266e1dc25443dcdc4feb3963','url':'assets/js/chunk/660.js'},{'revision':'f931a89d1e7ba52dd5a60457f27f0961','url':'assets/js/chunk/7.js'},{'revision':'f389dd4dcd64e3d4ed804f3f60c4a363','url':'assets/js/chunk/736.js'},{'revision':'81afe316c3be7e92a4fe603aa650470b','url':'assets/js/chunk/794.js'},{'revision':'e4ce4c2befe2b3c81c8a4722543dfad6','url':'assets/js/chunk/835.js'},{'revision':'59f491527cf0308672926823fa9891fc','url':'assets/js/chunk/853.js'},{'revision':'9c97f50d1bf5ae4c879944b898ec777a','url':'assets/js/chunk/912.js'},{'revision':'58774fe1e97114fab154585932681353','url':'assets/js/chunk/935.js'},{'revision':'56589d0e394b535ae306ea4f7fcf469a','url':'assets/js/chunk/959.js'},{'revision':'6b77861cec5016bcb14f1760b44dd1a8','url':'assets/js/chunk/990.js'},{'revision':'f3737296d71cea924b6a4e41e91b0a58','url':'assets/js/client.js'},{'revision':'d99f6ec69d2d0403da8773678a74ad77','url':'assets/js/legacy.js'},{'revision':'b150db5cbe376b397b43e92fa0bf5a5b','url':'assets/media/base/favicon/114x114.png'},{'revision':'f4f147d78bbab3a9a421ada392b26d3c','url':'assets/media/base/favicon/120x120.png'},{'revision':'4e35f5e88d7356f0a2bcc3199976fd65','url':'assets/media/base/favicon/144x144.png'},{'revision':'6afb241e7d213c5b3f3996746310cf1b','url':'assets/media/base/favicon/150x150.png'},{'revision':'386b6310f9b9b3318c5cdee9771a26a2','url':'assets/media/base/favicon/152x152.png'},{'revision':'8a7f714239d054efd23baaf0cab4c2e9','url':'assets/media/base/favicon/16x16.png'},{'revision':'dde8d82722bd35d15af3db010c52ad9a','url':'assets/media/base/favicon/16x16.svg'},{'revision':'abf907a8a32fc0307cee1d8a9e27331b','url':'assets/media/base/favicon/180x180.png'},{'revision':'c1ec50f2338704c45655b08bdd56d796','url':'assets/media/base/favicon/192x192.png'},{'revision':'bbd28f075dc1ea7bd6ae5b8dead70313','url':'assets/media/base/favicon/256x256.png'},{'revision':'746ee42e69730d125953550ebf4c4dd5','url':'assets/media/base/favicon/310x310.png'},{'revision':'a8ede83ce754e8b483dcf3122df91fe9','url':'assets/media/base/favicon/32x32.png'},{'revision':'3f62596292cb024a8802963dcd64d156','url':'assets/media/base/favicon/36x36.png'},{'revision':'81026008d53ecd79cbc45234235988a2','url':'assets/media/base/favicon/384x384.png'},{'revision':'09ba791ae16002ab97af368da4393896','url':'assets/media/base/favicon/48x48.png'},{'revision':'cee132c8c9e1b6ca21bea13bfbec42c2','url':'assets/media/base/favicon/512x512.png'},{'revision':'7ec1f6ac2573206be707cf2ac2ac7204','url':'assets/media/base/favicon/57x57.png'},{'revision':'53317218a12c0ea2ff819562a4ca6238','url':'assets/media/base/favicon/60x60.png'},{'revision':'b01682a74512c71a0f432e9e59e550e1','url':'assets/media/base/favicon/70x70.png'},{'revision':'f92a5ce40cb3482bbc6c448c33d5d621','url':'assets/media/base/favicon/72x72.png'},{'revision':'b77c84b2067c23532e45aebb2c029264','url':'assets/media/base/favicon/76x76.png'},{'revision':'39ff52d44574806a2065ab86162a376d','url':'assets/media/base/favicon/96x96.png'},{'revision':'40c316da7471b3ffe6bf266ceedbf975','url':'assets/media/base/logo.png'},{'revision':'e404999493a2a9cc1885fd6c153d2f35','url':'assets/media/base/og/default.png'},{'revision':'e1b0eaee4c277ee7d27fee45ef6848cf','url':'assets/media/base/screenshot.jpeg'},{'revision':'00eb0e60a2a088ccc0f7ba2d0de27540','url':'assets/media/bg/01.jpg'},{'revision':'72aff43ef9b17f70ef200e012b23f266','url':'assets/media/bg/02.jpg'},{'revision':'77b5465d94077eb8dcbf1c135c138f79','url':'assets/media/loading.svg'},{'revision':'0ef11ce096706bcafc520aee12162ae4','url':'assets/webfonts/fa-brands-400.ttf'},{'revision':'e2f5b365c7d3d4497da73148ddfae997','url':'assets/webfonts/fa-brands-400.woff2'},{'revision':'40e6df55734232692408d76ad5f9c34a','url':'assets/webfonts/fa-regular-400.ttf'},{'revision':'4b162098158528431aeb5636116777f0','url':'assets/webfonts/fa-regular-400.woff2'},{'revision':'c0bf087a238488d351270a35c8f0cca0','url':'assets/webfonts/fa-solid-900.ttf'},{'revision':'328a9d0f59f0ebb55cddac6f39995bea','url':'assets/webfonts/fa-solid-900.woff2'},{'revision':'36818ecc50af8ea6c4cbef88d0b2baad','url':'assets/webfonts/fa-v4compatibility.ttf'},{'revision':'6ddaf31a1e0e05490f6919cbb3347e9d','url':'assets/webfonts/fa-v4compatibility.woff2'},{'revision':'88f3890bdd90ee0281420d1d74325e6a','url':'checkout.html'},{'revision':'a618645a42aeb51e7bade3bddc4e02b0','url':'components.html'},{'revision':'72edb5896294705613e658f320f9b841','url':'contact.html'},{'revision':'45c9c794e7584c92da87ba29df91f382','url':'credit.html'},{'revision':'ae5549be940bbe4a9a62373a009fc594','url':'index.html'},{'revision':'d0651ea022838e41ff6dc05c4f77e1f4','url':'order.html'},{'revision':'f8cba5e92298348ae58a45b93e8209cb','url':'privacy.html'},{'revision':'8469a3678e8f6d2d90aa64fa2717eee7','url':'service.html'},{'revision':'654830a09ac1829aa8a7e3dc9c258c43','url':'sitemap.xml'},{'revision':'afa14286c31f5e249c2b00831757f5c9','url':'terms.html'}]||[]),function(e){const t=V();Y(new Z(t,e))}(ae);for(var ce=["404","aaa","about","common","app-pw","app-qr","app-calc","app","client","components","contact","credit","form","privacy","service","terms"],oe=[],he=0,le=["vi","en"];he<le.length;he++)for(var ue=le[he],de=0,fe=ce;de<fe.length;de++){var pe=fe[de];oe.push({url:"i18n/".concat(ue,"/").concat(pe,".json"),revision:(new Date).getTime()})}ee(oe),Y((function(e){return"https://fonts.googleapis.com"===e.url.origin}),new ne({cacheName:"google-fonts-stylesheets"})),Y((function(e){return"https://fonts.gstatic.com"===e.url.origin}),new te({cacheName:"google-fonts-webfonts",plugins:[new ie({statuses:[0,200]}),new M({maxAgeSeconds:31536e3,maxEntries:30})]})),Y((function(e){return"image"===e.request.destination}),new te({cacheName:"images",plugins:[new ie({statuses:[0,200]}),new M({maxEntries:60,maxAgeSeconds:2592e3})]})),Y((function(e){var t=e.request;return"script"===t.destination||"style"===t.destination}),new ne({cacheName:"static-resources"}))}()}();