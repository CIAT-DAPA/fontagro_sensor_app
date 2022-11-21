export default function ServiceWorker(){
    let swUrl= `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl)
    .then((response)=>{
        console.log('response',response)
    })

    /* if(`serviceWorker` in navigator){
        window.addEventListener('load',()=>{
            navigator.serviceWorker.register(swUrl)
            .then(function(registration){
                console.log('worker registrator is sucessfull',registration.scope)
            },function(){
                console.log('fallo')
            })
            .catch(function(err){
                console.log(err)
            })
        })
    }else{
        console.log('no soportado')
    }
} */
}