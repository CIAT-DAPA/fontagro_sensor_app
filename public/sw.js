let cacheData="cacheData1";
this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/',
                'https://code.jquery.com/jquery-3.2.1.slim.min.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
                '/data',
                './favicon.ico',
                './logo192.png',
                '/manifest.json',
                '/personaldata',
                '/static/js/bundle.js',
                '/static/media/background-home.8e1b3c8572e5a46c114f.jpg',
                '/static/media/logo-fontagro1.42a941919fbc6a9f7cae.png',
                '/static/media/background-data-user.dba68cb1ca080ea9860a.jpg',
                '/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
                '/build/react_devtools_backend.js',
                '/npm/popper.js@1.12.9/dist/umd/popper.min.js',
                './index.html'
               
            ])
        })
    )
})


this.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp){
                return resp
            }
        })
    )
})