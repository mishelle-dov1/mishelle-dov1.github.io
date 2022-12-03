//alert("Hola, Bienvenido a mi página <3 ");
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app,{
    loop: true,
    delay: 75,
})

typewriter
.pauseFor(2500)
.typeString('Desarrollo sitios web,escribo artículos y consejos sobre programación,redes y soporte tecnico')
.pauseFor(200)
.deleteChars(10)
.start(); 