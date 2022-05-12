let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let dato4 = document.getElementById("dato4");

let btnSuma = document.getElementById("btnSuma");
btnSuma.addEventListener("click", () => {
  let tiempoUno: number = Number(dato1.value);
  let tiempoDos: number = Number(dato2.value);
  let tiempoTres: number = Number(dato3.value);
  let tiempoCuatro: number = Number(dato4.value);
  console.log(
    "El tiempo total es ",
    tiempoUno + tiempoDos + tiempoTres + tiempoCuatro
  );
});
let btnPromedio = document.getElementById("btnPromedio");
btnPromedio.addEventListener("click", () => {
  let tiempoUno: number = Number(dato1.value);
  let tiempoDos: number = Number(dato2.value);
  let tiempoTres: number = Number(dato3.value);
  let tiempoCuatro: number = Number(dato4.value);
  let suma: number = tiempoUno + tiempoDos + tiempoTres + tiempoCuatro;
  console.log("El promedio de vuelta es ", suma / 4);
});
