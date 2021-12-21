class Estudiante {
  constructor(
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    edad,
    diaNacimiento,
    mesNacimiento,
    anioNacimiento,
    nivel
  ) {
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.edad = edad;
    this.diaNacimiento = diaNacimiento;
    this.mesNacimiento = mesNacimiento;
    this.anioNacimiento = anioNacimiento;
    this.nivel = nivel;
  }
  nivelCurso = () => {
    if (this.edad == 2) {
      this.nivel = "Nivel Menor";
    } else if (this.edad == 3 && edad <= 4) {
      this.nivel = "Nivel Mayor";
    } else {
      this.nivel = "Fuera de rango";
    }
  };
}

const listaEstudiantes = [];

function crearEstudiante() {
  let nombre = prompt("Cual es el Nombre del niño?");
  let apellidoPaterno = prompt("Cual es el apellido paterno del niño?");
  let apellidoMaterno = prompt("Cual es el apellido materno del niño?");
  let edad = parseInt(prompt("Cual es la edad del niño?"));
  let diaNacimiento = parseInt(
    prompt("Cual es el dia de nacimiento del niño?")
  );
  let mesNacimiento = prompt("En que mes nacio el niño?");
  let anioNacimiento = parseInt(prompt("En que año nacio el niño?"));

  const nuevoEstudiante = new Estudiante(
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    edad,
    diaNacimiento,
    mesNacimiento,
    anioNacimiento
  );
  nuevoEstudiante.nivelCurso();
  listaEstudiantes.push(nuevoEstudiante);
}

function ordenarEstudiantes() {
  listaEstudiantes.sort((a, b) => {
    if (a.apellidoPaterno < b.apellidoPaterno) {
      return -1;
    } else if (a.apellidoPaterno > b.apellidoPaterno) {
      return 1;
    } else return 0;
  });
}
