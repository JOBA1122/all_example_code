var estudiante = {
  nombre: "",
  type: "estudiante"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('nombre').addEventListener("keyup", presionar);
}

function presionar(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  estudiante.nombre = document.getElementById('nombre').value;

  var totalNameValue = 0;
  for (var i = 0; i < estudiante.nombre.length; i++) {
    totalNameValue += estudiante.nombre.charCodeAt(i);
  }

  // Insert result into page
  var salida = "Total Numeric value of person's name is " + totalNameValue;
  document.getElementById('salida').innerText = salida;
}
