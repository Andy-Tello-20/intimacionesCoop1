
//? Este codigo redirecciona la pagina hacia el login de forma automatica despues de 70 segundos

let URLweb = "https://proyectointimacionesagua2-production.up.railway.app/login"
let localhost = "http://localhost:8080/login"




setTimeout(function() {
    //! cambiar a window.location.href = "http://localhost:8080/login" para desarrollar
    console.log("hola2")
    window.location.href = (URLweb)
}, 70000);