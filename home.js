function cl(dat) {
  console.log(dat);
}
window.addEventListener("load", function () {
  obtenerTodosLosDatos();
});

// function preparado(datos) {
//   datos.forEach((element) => {
//     graficarElemento(element);
//   });
// }

function obtenerTodosLosDatos() {
  obtenerParam();
}
function obtenerParam() {
  const xmlh = new XMLHttpRequest();
  xmlh.open("GET", "home.json", true);
  xmlh.send();

  xmlh.onreadystatechange = function (e) {
    cl(e.target.readyState);
    if (e.target.readyState == 3) {
      const datosJSON = this.responseText;
      const datosParam = JSON.parse(datosJSON);
      return obtenerDatos(datosParam);
    } else {
      return cl("nmo");
    }
  };
}

function obtenerDatos(datosParam) {
  const xmlh = new XMLHttpRequest();
  xmlh.open("GET", "datos.json", true);
  xmlh.send();
  xmlh.onreadystatechange = function (e) {
    cl(e.target.readyState);
    if (e.target.readyState == 3) {
      const datosJSON = this.responseText;
      const datos = JSON.parse(datosJSON);

      return preparado(datos, datosParam);
    } else {
      return cl("nmo");
    }
  };
}
function buscarPortadaY_Populares(d, dp) {
  const elemento = Object.values(dp);
  for (let index = 0; index < 7; index++) {
    const nombre = elemento[index].nombre;
    const popular = elemento[index].popular;
    const receta = elemento[index].receta;

    for (let i = 0; i < d.length; i++) {
      const element = d[i];

      if (nombre == element.nombre && (index >= 0 || index <= 3)) {
        graficarPortada(element);
      }
      if (popular == element.nombre && (index >= 3 || index <= 6)) {
        graficarPopulares(element);
      }
      if (receta == element.nombre) {
        graficarAislado(element);
      }
    }
  }
}
function preparado(datos, datosParam) {
  buscarPortadaY_Populares(datos, datosParam);
  buscarRecientes(datos);
}
function buscarRecientes(datos) {
  for (let index = 0; index < 8; index++) {
    const element = datos[index];
    if (index >= 0 && index <= 3) {
      graficarColumnaRecientes(element);
    } else {
      cl(element);
      graficarColumnaRecientes2(element);
    }
  }
}
function graficarAislado(dato) {
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
function graficarColumnaRecientes(dato) {
  const mainSect = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-b6684f7.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default"
  );
  const div = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-b6684f7.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div"
  );
  const div1 = document.createElement("DIV");
  div1.classList.add(
    "elementor-column",
    "elementor-col-25",
    "elementor-top-column",
    "elementor-element",
    "elementor-element-5345f5f"
  );
  const div2 = document.createElement("DIV");
  div2.classList.add("elementor-widget-wrap", "elementor-element-populated");
  const div3Img = document.createElement("DIV");
  div3Img.classList.add(
    "elementor-element",
    "elementor-element-051e7fd",
    "elementor-widget",
    "elementor-widget-image"
  );
  const div3Img1 = document.createElement("DIV");
  div3Img1.classList.add("elementor-widget-container");
  const img = document.createElement("IMG");
  img.classList.add("elementor-widget-container");
  const datoDeImagen = "../img/" + dato.imagen + ".jpg";
  img.src = datoDeImagen;
  img.setAttribute("width", 247);

  const div3p = document.createElement("DIV");
  div3p.classList.add(
    "elementor-element",
    "elementor-element-44e62c7",
    "elementor-widget",
    "elementor-widget-text-editor"
  );
  const div3p1 = document.createElement("DIV");
  div3p1.classList.add("elementor-widget-container");

  const p = document.createElement("P");
  p.textContent = dato.nombre;
  p.classList.add("elementor-13");

  const enlace = document.createElement("A");
  enlace.href = "/receta/?receta=" + dato.nombre;
  enlace.classList.add("enlace");

  mainSect.appendChild(div);
  div.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3Img);

  div3Img.appendChild(div3Img1);
  div3Img1.appendChild(enlace);
  div3Img1.appendChild(img);

  div2.appendChild(div3p);
  div3p.appendChild(div3p1);
  div3p1.appendChild(p);
}
function graficarColumnaRecientes2(dato) {
  const mainSect = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1bbf25e.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default"
  );
  const div = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1bbf25e.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div"
  );
  const div1 = document.createElement("DIV");
  div1.classList.add(
    "elementor-column",
    "elementor-col-25",
    "elementor-top-column",
    "elementor-element",
    "elementor-element-5345f5f"
  );
  const div2 = document.createElement("DIV");
  div2.classList.add("elementor-widget-wrap", "elementor-element-populated");
  const div3Img = document.createElement("DIV");
  div3Img.classList.add(
    "elementor-element",
    "elementor-element-051e7fd",
    "elementor-widget",
    "elementor-widget-image"
  );
  const div3Img1 = document.createElement("DIV");
  div3Img1.classList.add("elementor-widget-container");
  const img = document.createElement("IMG");
  img.classList.add("elementor-widget-container");
  const datoDeImagen = "../img/" + dato.imagen + ".jpg";
  img.src = datoDeImagen;
  img.setAttribute("width", 247);

  const div3p = document.createElement("DIV");
  div3p.classList.add(
    "elementor-element",
    "elementor-element-44e62c7",
    "elementor-widget",
    "elementor-widget-text-editor"
  );
  const div3p1 = document.createElement("DIV");
  div3p1.classList.add("elementor-widget-container");

  const p = document.createElement("P");
  p.textContent = dato.nombre;
  p.classList.add("elementor-13");

  const enlace = document.createElement("A");
  enlace.href = "/receta/?receta=" + dato.nombre;
  enlace.classList.add("enlace");

  mainSect.appendChild(div);
  div.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3Img);

  div3Img.appendChild(div3Img1);
  div3Img1.appendChild(enlace);
  div3Img1.appendChild(img);

  div2.appendChild(div3p);
  div3p.appendChild(div3p1);
  div3p1.appendChild(p);
}

function graficarPortada(dato) {
  const section = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-a3a77da.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > section > div:nth-child(1)"
  );
  const body1 = document.createElement("DIV");
  body1.classList.add(
    "elementor-column",
    "elementor-col-33",
    "elementor-inner-column",
    "elementor-element",
    "elementor-element-cd17b69"
  );
  body1.element_type = "column";
  const body2 = document.createElement("DIV");
  body2.classList.add("elementor-widget-wrap", "elementor-element-populated");

  const body3 = document.createElement("DIV");
  body3.classList.add(
    "elementor-element",
    "elementor-element-f2f1cb6",
    "elementor-widget",
    "elementor-widget-image"
  );
  const body4_img = document.createElement("DIV");
  body4_img.classList.add("elementor", "widget", "container");

  const img = document.createElement("IMG");
  img.classList.add("attachment-large", "size-large", "wp-image-381");
  const datoDeImagen = "img/" + dato.imagen + ".jpg";
  img.src = datoDeImagen;
  img.setAttribute("width", 247);

  const enlace = document.createElement("A");
  enlace.href = "/receta/?receta=" + dato.nombre;
  enlace.classList.add("enlace");

  const body4_p = document.createElement("DIV");
  body4_p.classList.add(
    "elementor-element",
    "elementor-element-cfa7f34",
    "elementor-widget",
    "elementor-widget-text-editor"
  );
  const body4_p1 = document.createElement("DIV");
  body4_p1.classList.add("elementor-widget-container");

  const p = document.createElement("P");
  p.textContent = dato.nombre;

  section.appendChild(body1);

  body1.appendChild(body2);
  body2.appendChild(body3);
  body3.appendChild(body4_img);

  body4_img.appendChild(enlace);
  body4_img.appendChild(img);

  body3.appendChild(body4_p);
  body4_p.appendChild(body4_p1);
  body4_p1.appendChild(p);
  body1.appendChild(p);

  // Graficar las primeras 3 fotos
}
function graficarPopulares(dato) {
  // Graficar las Fotos populares

  const section = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7d85f88d.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > section"
  );
  const div = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7d85f88d.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > section > div"
  );
  const div1 = document.createElement("DIV");
  div1.classList.add(
    "elementor-column",
    "elementor-col-33",
    "elementor-inner-column",
    "elementor-element",
    "elementor-element-421e8d76"
  );
  const div2 = document.createElement("DIV");
  div2.classList.add("elementor-widget-wrap", "elementor-element-populated");

  const div3Img = document.createElement("DIV");
  div3Img.classList.add(
    "elementor-element",
    "elementor-element-980ba07",
    "elementor-widget__width-inherit",
    "elementor-widget",
    "elementor-widget-image"
  );
  const div3Img1 = document.createElement("DIV");
  div3Img1.classList.add("elementor-widget-container");

  const img = document.createElement("IMG");
  img.classList.add("attachment-large", "size-large", "wp-image-274");
  const datoDeImagen = "img/" + dato.imagen + ".jpg";
  img.src = datoDeImagen;
  // Graficar las primeras 3 fotos

  const div3p = document.createElement("DIV");
  div3p.classList.add(
    "elementor-element",
    "elementor-element-052abe6",
    "elementor-widget",
    "elementor-widget-heading"
  );
  const div3p1 = document.createElement("DIV");
  div3p1.classList.add("elementor-widget-container");

  const p = document.createElement("P");
  p.classList.add("elementor-heading-title", "elementor-size-medium");
  p.textContent = dato.nombre;

  const enlace = document.createElement("A");
  enlace.href = "/receta/?receta=" + dato.nombre;
  enlace.classList.add("enlace");

  section.appendChild(div);
  div.appendChild(div1);
  div1.appendChild(div2);

  div2.appendChild(div3Img);
  div3Img.appendChild(div3Img1);
  div3Img.appendChild(enlace);
  div3Img.appendChild(img);

  div2.appendChild(div3p);
  div3p.appendChild(div3p1);
  div3p1.appendChild(p);
}
function graficarElemento(dato) {}
