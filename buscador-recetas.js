function cl(dat) {
  console.log(dat);
}

function preparado(datos) {
  const arr = [];
  for (let index = 0; index < datos.length; index++) {
    const element = datos[index].nombre.toLowerCase();

    graficarAislado(datos[index]);
  }
}

function obtenerDatos() {
  const xmlh = new XMLHttpRequest();
  xmlh.open("GET", "../datos.json", true);
  xmlh.send();

  xmlh.onreadystatechange = function (e) {
    if (e.target.readyState == 3) {
      const datosJSON = this.responseText;
      const datos = JSON.parse(datosJSON);

      return preparado(datos);
    } else {
      return cl("nmo");
    }
  };
}

function graficarAislado(dato) {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches("#wp-block-search__input-5")) {
      cl(e.target.value);
      dato.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        ? cl(dato.nombre)
        : cl("");
    }
  });
  cl(dato);
}
obtenerDatos();
