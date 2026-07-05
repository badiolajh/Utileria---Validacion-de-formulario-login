//Esta funcion se encarga de validar que el correo no este vacio y que temga el formato solicitado
function ValidarCorreo() {
  let Vemail = document.forms["emailForm"]["femail"].value;

  //Envia mensaje de que el input esta vacio
  if (Vemail == "") {
    alert("El correo esta vacio");
    return false;
  }

  // revisa que el correo tenga el formato adecuado
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(Vemail);
}

//Valida que el input no este vacio y acepta Mayuscula, minusculas y Vocales acentuadas retornandotruw
function SoloLetras() {
  let Vletra = document.forms["nameForm"]["fnombre"].value;

  //Acepta mayusculas, minusculas,volcales acentuadas y tambien espacios
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (Vletra == "") {
    alert("El nombre esta vacio");
    return false;
  } else if (!regex.test(Vletra)) {
    alert("El campo no es valido");
    return false;
  } else {
    return true;
  }
}

//VAlida la longitud del telefono, debe tener exactamente 10 digitos al final retorna true
function validarLongitud() {
  let Vlong = document.forms["telForm"]["ftelefono"].value;

  //retorna verdadero por que es un requisito opcional
  if (Vlong == "") {
    return true;
  }

  //quita los guiones, para poder ver el length sin ellos
  Vlong = Vlong.replace(/-/g, "");

  if (Vlong.length != 10) {
    alert("El numero debe tener exactamente 10 digitos");
    return false;
  } else {
    return true;
  }
}

//Funcion para calcular la edad
function calcularEdad() {
  // AÑO, MES Y DIA ACTUAL
  const DateActual = new Date();
  const YearActual = DateActual.getFullYear();
  const MonthActual = DateActual.getMonth() + 1;
  const DayActual = DateActual.getDate();

  //AÑO, MES Y DIA ingresado por el usuario
  let Vedad = document.forms["edadForm"]["fbirthday"].value;

  const YearUS = parseInt(String(Vedad).substring(0, 4));
  const MonthUS = parseInt(String(Vedad).substring(5, 7));
  const DayUS = parseInt(String(Vedad).substring(8, 10));

  //Calculo de edad del usuario
  let edad = YearActual - YearUS;

  if (Vedad === "") {
    alert("Debes ingresar tu fecha de nacimiento");
    return false;
  }
  //Verifica que el mes actual sea menor al mes ingresado
  if (MonthActual < MonthUS) {
    edad--;

    //En caso contrario, si el mes actual es exactamente igual al mes ingresado
  } else if (MonthActual === MonthUS) {
    if (DayActual < DayUS) {
      edad--;
    }
  }

  //Si es menor de edad, mandara un mensaje de aviso, caso contrario retorna true
  if (edad < 18) {
    alert("No eres mayor de edad, no puedes entrar al sitio");
    return false;
  }
  return true;
}

function validarPassword() {
  let Vpass = document.forms["passwordForm"]["fpassword"].value;

  //Caracteres aceptados para la contraseña y tambien establece la longitud
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //valida que no este vacio
  if (Vpass == "") {
    alert("Falta introducir contraseña");
    return false;
    //Valida que tenga los caracteres admitidos
  } else if (!regex.test(Vpass)) {
    alert(
      "El password solo acepta Mayusculas, Minusculas, numero o algun caracter especial",
    );
    return false;
  }
  return true;
}

//Funcion para el boton, donde llamara a todas las funciones y si todo esta bien podras ingresar al sitio
function Calc() {
  if (!SoloLetras()) return;

  if (!ValidarCorreo()) return;

  if (!validarPassword()) return;

  if (!validarLongitud()) return;

  if (!calcularEdad()) return;

  alert("Ingresaste exitosamente al sitio");
}
