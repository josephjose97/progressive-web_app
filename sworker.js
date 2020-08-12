self.addEventListener("install",e=>{

// console.log("service worked change")
// console.log("service worked updation")
e.waitUntil(
    caches.open("static").then(cache=>{
        return cache.addAll(["./","./style.css","./images/logo641.png","./images/logo64.png"]);
    })
)
})
self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )

})