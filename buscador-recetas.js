function cl(dat) {
  console.log(dat);
}
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var busqueda = urlParams.get("s");

function preparado(datos) {
  const arr = [];
  for (let index = 0; index < datos.length; index++) {
    const element = datos[index].nombre.toLowerCase();

    if (element == busqueda) {
      cl("hopla");
      graficarAislado(datos[index]);
    }
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
  cl(dato);
  const div = document.createElement("DIV");
  div.classList.add(
    "div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-3a99bb2"
  );
  const img = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-e089fa6.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-3a99bb2 > div > div > div > img"
  );

  const datoDeImagen = "img/" + dato.imagen + ".jpg";
  img.src = datoDeImagen;
  titular = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-e089fa6.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-3803200 > div > div.elementor-element.elementor-element-c9d77d5.elementor-widget.elementor-widget-heading > div > h2"
  );
  titular.textContent = dato.nombre;
  const desc = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-e089fa6.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-3803200 > div > div.elementor-element.elementor-element-98195ff.elementor-widget.elementor-widget-heading > div > h4"
  );
  desc.textContent = dato.descripcion;
  const enl = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-e089fa6.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-3803200 > div > div.elementor-element.elementor-element-73f13bf.elementor-align-left.elementor-widget__width-inherit.elementor-widget.elementor-widget-button > div > div > a"
  );
  enl.href = "/receta/?receta=" + dato.nombre;
}
obtenerDatos();
