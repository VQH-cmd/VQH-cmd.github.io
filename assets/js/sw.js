!function(){"use strict";self.addEventListener("install",(function(t){t.waitUntil(caches.open("VQH-cmd").then((function(t){return t.addAll(["/","/assets/css/style.css","/assets/js/script.js"])})))})),self.addEventListener("fetch",(function(t){t.respondWith(caches.match(t.request).then((function(e){return e||fetch(t.request)})))}))}();