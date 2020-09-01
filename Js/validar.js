window.addEventListener("load", function () {
  const error = "Debe llenar todos los campos.";
  const div = document.getElementById("msj");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const celular = document.getElementById("celular");
  const mail = document.getElementById("correo");
  const pass1 = document.getElementById("pass1");
  const pass2 = document.getElementById("pass2");
  const btn = document.getElementById("send");
  const textPattern = /[A-Za-z]|\s/g;
  const namePattern = /^([A-Za-z]{2,}\s{0,1})+$/g;
  const numberPattern = /\d+/g;
  const mailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let name = false,
    lastname = false,
    cell = false,
    correo = false,
    passMatch = false;
  div.style.display = "none";
  nombre.onpaste = (e) => e.preventDefault();
  apellido.onpaste = (e) => e.preventDefault();
  pass1.onpaste = (e) => e.preventDefault();
  pass2.onpaste = (e) => e.preventDefault();
  nombre.addEventListener("keydown", function (e) {
    if (!e.key.match(textPattern)) {
      e.preventDefault();
    }
  });

  nombre.addEventListener("input", function (e) {
    if (!nombre.value.match(namePattern)) {
      nombre.style.backgroundColor = "#ff9e9e";
      name = false;
    } else {
      nombre.style.backgroundColor = "#a6ff9e";
      name = true;
    }
  });
  apellido.addEventListener("input", function (e) {
    if (!apellido.value.match(namePattern)) {
      apellido.style.backgroundColor = "#ff9e9e";
      lastname = false;
    } else {
      apellido.style.backgroundColor = "#a6ff9e";
      lastname = true;
    }
  });

  apellido.addEventListener("keydown", function (e) {
    if (!e.key.match(textPattern)) {
      e.preventDefault();
    }
  });

  celular.addEventListener("keydown", function (e) {
    if (!e.key.match(numberPattern) && e.keyCode != 8) e.preventDefault();
  });

  celular.addEventListener("input", function () {
    if (celular.value.length == 10) {
      celular.style.backgroundColor = "#a6ff9e";
      cell = true;
    } else {
      celular.style.backgroundColor = "#ff9e9e";
      cell = false;
    }
  });

  mail.addEventListener("input", function () {
    if (!mail.value.match(mailPattern)) {
      mail.style.backgroundColor = "#ff9e9e";
      correo = false;
    } else {
      correo = true;
      mail.style.backgroundColor = "#a6ff9e";
    }
  });
  pass1.addEventListener("input", function () {
    if (pass1.value.length < 4 && !passMatch) {
      pass1.style.backgroundColor = "#ff9e9e";
      pass2.style.backgroundColor = "#ff9e9e";
      passMatch = false;
    } else if (pass1.value != pass2.value) {
      error = "Las contraseñas deben coincidir";
      div.innerHTML = error;
      pass1.style.backgroundColor = "#ff9e9e";
      pass2.style.backgroundColor = "#ff9e9e";
      div.style.display = "block";
      passMatch = false;
    } else {
      passMatch = true;
      div.style.display = "none";
      pass2.style.backgroundColor = "#a6ff9e";
      pass1.style.backgroundColor = "#a6ff9e";
    }
  });
  pass2.addEventListener("input", function () {
    if (pass2.value.length < 4 && !passMatch) {
      pass2.style.backgroundColor = "#ff9e9e";
      pass1.style.backgroundColor = "#ff9e9e";
      passMatch = false;
    } else if (pass1.value != pass2.value) {
      error = "Las contraseñas deben coincidir";
      div.innerHTML = error;
      pass1.style.backgroundColor = "#ff9e9e";
      pass2.style.backgroundColor = "#ff9e9e";
      div.style.display = "block";
      passMatch = false;
    } else {
      passMatch = true;
      div.style.display = "none";
      pass2.style.backgroundColor = "#a6ff9e";
      pass1.style.backgroundColor = "#a6ff9e";
    }
  });
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (name && lastname && cell && correo && passMatch) {
      swal("Registrado", "Se ha registrado con éxito.", "success");
    } else {
      //   div.style.display = "block";
      swal("Error", "Debe llenar todos los campos como corresponde", "error");
    }
  });
});
