var propiedadesJSON = [
    {
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        rooms: 2,
        src: "assets/img/2.jpeg",

        m: 170
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src:
            "assets/img/3.jpeg",
        rooms: 2,
        m: 130
    },
    {
        name: "Casa en el centro",
        description: `Ten cerca de ti todo lo que necesitas`,
        src:
            "assets/img/4.jpeg",
        rooms: 1,
        m: 80
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada ",
        src:
            "assets/img/5.jpeg",
        rooms: 1,
        m: 6
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src:
            "assets/img/6.jpeg",
        rooms: 3,
        m: 200
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en tu mansión  ",
        src:
        "assets/img/descarga4.jpeg",
        rooms: 5,
        m: 500
    }
];

// Variables para almacenar los datos de cada objeto
const nombre = document.getElementById("nombre1");
const descripcion = document.getElementById("my-31");
const imagen = document.getElementById("img_21");
const habitacion = document.getElementById("hab2");
const metros = document.getElementById("metraje2");
const resul = document.getElementById("ul");
const total = document.getElementById("py-400");
const formulario = document.getElementById("formulario");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const btnnoFiltrar = document.getElementById("noFiltrar");
const btnfiltrar = document.getElementById("filtrar");
const mensaje = document.getElementById("py-500");






// Pintando el arreglo en el Documento
const ordenaArregloObjetos = (Array) => {
var html="";
// Iteración el arreglo de Objetos
for (var i = 0; i <(Array).length; i++) {
//Asignacion de valores Objetos a la estructura Html
html +=`<li>
<div class="propiedad">
<div class="imagen">
    <img src ="./${(Array)[i].src}">
</div>
<section>
    <h5 class="nombre">${(Array)[i].name}</h5>
    <div class="d-flex justify-content-between">
        <p id="hab"> Hab:<br> ${(Array)[i].rooms}</p>
        <p id="metraje">Metros: <br>${(Array)[i].m}</p>
    </div>
    <p class="my-3">${(Array)[i].description}</p>
    <button class="btn btn-info ">Ver más</button>
</section>
</div>
</li>`
}
resul.innerHTML=html
total.innerHTML =  propiedadesJSON.length
}

ordenaArregloObjetos(propiedadesJSON);   

btnnoFiltrar.addEventListener("click", ()  => {
ordenaArregloObjetos(propiedadesJSON)
input1.value=""; 
input2.value ="";
input3.value="";
mensaje.innerHTML="";});


btnfiltrar.addEventListener("click", () => {
    const nHab = parseInt(input1.value);
    const minimo = parseInt(input2.value);
    const maximo = parseInt(input3.value);
    const arrayFiltrado = [];

 
    if ((nHab <= 0) || (minimo <= 0) || (maximo <= 0)) {
        mensaje.innerHTML = "Ingrese solo números y debe llenar todos los campos prara hacer la busqueda";
        return;
      }

    if (isNaN(nHab) || isNaN(minimo) || isNaN(maximo)) {
        mensaje.innerHTML = "Ingrese solo números y debe llenar todos los campos prara hacer la busqueda";
        return;
      }

        
      for (let propie of propiedadesJSON) {
        if (propie.m >= minimo && propie.m <= maximo && propie.rooms >= nHab ) {
          arrayFiltrado.push(propie);
           
        }else{
            mensaje.innerHTML ="Lo siento no hay registros para su busqueda, Intentelo Nuevamente"
        }
        

    }
        ordenaArregloObjetos(arrayFiltrado);
        total.innerHTML = arrayFiltrado.length
        
    }
);

