// var api = fetch('https://api.datos.gob.mx/v1/calidadAire')
//     .then(response => response.json())
//     .then(json => console.log(json));

// let nombre = api.results;
// console.log(nombre);
var opcion = document.getElementById("selecNombre");
var din = document.getElementById("tabla");

const datos = fetch("https://api.datos.gob.mx/v1/calidadAire");
console.log(datos);
async function agregarOptions() {
  datos
    .then((resp) => resp.json())
    .then((resultados) => {
      if (resultados) {
        var result = resultados;
        console.log(resultados);
        for (let i = 0; i < resultados.results.length; i++) {
          let id = resultados.results[i].stations[0].id;
          var nombre = resultados.results[i].stations[0].name;
          let valor = resultados.results[i].stations[0].indexes[0].value;
          let escala = resultados.results[i].stations[0].indexes[0].scale;

          // console.log(valor);
          // console.log(nombre);
          // console.log(id);
          // console.log(escala);
          //document.getElementById("nombre").innerHTML = nombre;
          din.innerHTML += `
             <tr>
             <td>${id}</td>
             <td>${nombre}</td>
             <td>${valor}</td>
             <td>${escala}</td>
             </tr>
             `;
        }
      }
    });
}

function cargarNombre() {
  let name = [
    "Águilas",
    "Atemajac",
    "Centro",
    "Loma Dorada",
    "Oblatos",
    "Tlaquepaque",
    "Vallarta",
    "Las Pintas",
    "Santa Fe",
  ];
  for (let i = 0; i < name.length; i++) {
    opcion.innerHTML += `
             <option> ${name[i]} </option>
            `;
  }
  // datos
  //     .then((resp) => resp.json())
  //     .then((resultados) => {
  //         if (resultados) {
  //             console.log(resultados);
  //             for (let i = 0; i < resultados.results.length; i++) {
  //                 var nombre = resultados.results[i].stations[0].name;
  //                 console.log(nombre);
  //                 opcion.innerHTML += `
  //                  <option> ${nombre} </option>
  //                  `;

  //             }
  //         }
  //     });
}

function nombres() {
    console.log(opcion.value);
  datos
    .then((resp) => resp.json())
    .then((resultados) => {
      if (resultados) {
        for (let i = 0; i < resultados.results.length; i++) {
          let id = resultados.results[i].stations[0].id;
          var nombre = resultados.results[i].stations[0].name;
          let valor = resultados.results[i].stations[0].indexes[0].value;
          let escala = resultados.results[i].stations[0].indexes[0].scale;

          if (opcion.value == nombre) {
            din.innerHTML += `
         <tr>
         <td>${i}</td>
         <td>${id}</td>
         <td>${nombre}</td>
         <td>${valor}</td>
         <td>${escala}</td>
         </tr>
         `;
          }
        }
      }
    });
}

function reset() {
   //opcion.remove()
    //din.remove()
    //datos.remove()
    //delete opcion
   // delete din
    location.reload();
}
