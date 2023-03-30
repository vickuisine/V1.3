function cl(dat) {
  console.log(dat);
}
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var tipoReceta = urlParams.get("tipo");
console.log(tipoReceta);

function preparado(datos) {
  const arr = [];
  for (let index = 0; index < datos.length; index++) {
    const element = datos[index].tipo;

    if (element == tipoReceta) {
      cl(datos[index]);
      arr.push(datos[index]);
      // graficarElemento(datos[index]);
    }
  }

  graficarDeACuatro(arr);
}
function graficarDeACuatro(arr) {
  cl(arr);
  for (let i = 0; i < arr.length; i += 4) {
    const grupo = arr.slice(i, i + 4);
    graficarElemento(grupo);
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
      cl(datos);
      return preparado(datos);
    } else {
      return cl("nmo");
    }
  };
}
function graficarElemento(dato) {
  titulo = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-69f0d66.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-504abce > div > div.elementor-element.elementor-element-a132cad.elementor-absolute.elementor-widget.elementor-widget-heading > div > h2"
  );
  titulo.textContent = tipoReceta;

  const masterDiv = document.querySelector(
    "body > div > div:nth-child(3) > div > div"
  );
  const section = document.createElement("SECTION");
  section.classList.add(
    "elementor-section",
    "elementor-top-section",
    "elementor-element",
    "elementor-element-69f0d66",
    "elementor-section-boxed",
    "elementor-section-height-default",
    "elementor-section-height-default"
  );
  const div = document.createElement("DIV");
  div.classList.add("elementor-container", "elementor-column-gap-default");

  dato.forEach((dt) => {
    const div1 = document.createElement("DIV");
    div1.classList.add(
      "elementor-column",
      "elementor-col-25",
      "elementor-top-column",
      "elementor-element",
      "elementor-element-504abce"
    );
    div1.setAttribute("data-element_type", "column");

    const div2 = document.createElement("DIV");
    div2.classList.add("elementor-widget-wrap", "elementor-element-populated");

    const div3img = document.createElement("DIV");
    div3img.classList.add(
      "elementor-element",
      "elementor-element-6ac9d6c",
      "elementor-widget",
      "elementor-widget-image"
    );

    const div3img1 = document.createElement("DIV");
    div3img1.classList.add("elementor-widget-container");

    const img = document.createElement("IMG");
    img.classList.add("attachment-large", "size-large", "wp-image-380");
    img.setAttribute("width", "819");
    img.setAttribute("height", "1024");
    if (dt.imagen == "") {
      dt.imagen = "no";
      img.classList.add("zoom");
    }
    const datoDeImagen = "../img/" + dt.imagen + ".jpg";
    cl(datoDeImagen);
    img.src = datoDeImagen;

    const div3p = document.createElement("DIV");
    div3p.classList.add(
      "elementor-element",
      "elementor-element-be76d5e",
      "elementor-widget",
      "elementor-widget-heading"
    );

    const div3p1 = document.createElement("DIV");
    div3p1.classList.add("elementor-widget-container");

    const h2 = document.createElement("H2");
    h2.classList.add("elementor-heading-title", "elementor-size-medium");
    h2.textContent = dt.nombre;

    const enlace = document.createElement("A");
    enlace.href = "/receta/?receta=" + dt.nombre;
    enlace.classList.add("enlace");

    div.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3img);
    div3img.appendChild(div3img1);
    div3img1.appendChild(enlace);
    div3img1.appendChild(img);

    div2.appendChild(div3p);
    div3p.appendChild(div3p1);
    div3p1.appendChild(h2);
  });

  masterDiv.appendChild(section);
  section.appendChild(div);

  cl(dato);
}
obtenerDatos();
