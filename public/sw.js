let CACHE_NAME= 'codepwa'
var urlCache= [
    '/',
    'https://cdn.jsdelivr.net/npm/papaparse@5.3.2/papaparse.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js',
   'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
   'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
   'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js',
   'https://tufincastats.open-aeps.org/static/media/background-data-user.dba68cb1ca080ea9860a.jpg',
   'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
   'https://tufincastats.open-aeps.org/static/css/main.3c5029eb.css',
   'https://tufincastats.open-aeps.org/static/js/main.81ffde22.js',
   'https://tufincastats.open-aeps.org/static/media/logo-visualiti.c86e53ae15dea7aab9cf.png',
   'https://tufincastats.open-aeps.org/static/media/ubicaci%C3%B3n.05c360e939642f59feba.png',
   'https://tufincastats.open-aeps.org/static/media/colombia.0a557c5eba997e0e7a74.png',
   'https://tufincastats.open-aeps.org/static/media/nica.7c6eb28b77a68ad354e0.png',
   'https://tufincastats.open-aeps.org/static/media/sensor.dc6d14c071e6de1f165a.jpeg',
   'https://tufincastats.open-aeps.org/static/media/honduras.babd8cb8d2770b8994de.png',
   'https://tufincastats.open-aeps.org/static/media/Ciat-logo.b0acafbbbf3c040756aa.png',
   'https://tufincastats.open-aeps.org/static/media/logo-fontagro1.42a941919fbc6a9f7cae.png'
   
]
this.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
           return cache.addAll(urlCache)
        })
    )
})
//fetch cahe data
this.addEventListener('fetch',(e)=>{
    if(!navigator.onLine){
        console.log('fuiste offline')
        
        e.respondWith(
            caches.match(e.request)
            .then((response)=>{
                if(response){
                    return response
                }
                /* let fUrl= e.request.clone() 
                fetch(fUrl) */
            })
           
        )
    }
})