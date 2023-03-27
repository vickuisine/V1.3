function cl(dat) {
  console.log(dat);
}
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var receta = urlParams.get("receta");
console.log(receta);

function preparado(datos) {
  datos.forEach((element) => {
    if (element.nombre == receta) {
      graficarElemento(element);
    }
  });
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
obtenerDatos();

function graficarElemento(dato) {
  const titulo1 = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-3b34dc5.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-5bacf00 > div > div.elementor-element.elementor-element-b979db3.elementor-widget__width-inherit.elementor-widget.elementor-widget-heading > div > h2"
  );
  const titulo = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-6acc6ba.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-3e9779e > div > div.elementor-element.elementor-element-86c5589.elementor-widget__width-inherit.elementor-widget.elementor-widget-heading > div > h2"
  );
  titulo.textContent = dato.nombre;
  titulo1.textContent = dato.nombre;
  const desc = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-6acc6ba.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-3e9779e > div > div.elementor-element.elementor-element-b63b6a6.elementor-widget.elementor-widget-text-editor > div > div > div"
  );
  const desc2 = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-3b34dc5.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-5bacf00 > div > div.elementor-element.elementor-element-80aad2f.elementor-widget.elementor-widget-text-editor > div > p"
  );
  desc.textContent = dato.descripcion;
  desc2.textContent = dato.descripcion;

  const img = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-6acc6ba.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-6870ef0 > div > div > div > img"
  );
  const img2 = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-3b34dc5.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-b2f657b > div > div > div > img"
  );
  const datoDeImagen = "../img/" + dato.imagen + ".jpg";
  img.src = datoDeImagen;
  img2.src = datoDeImagen;

  cl(dato);
  const listaM = document.createElement("UL");

  for (const key in dato.Ingredientes) {
    // ingredientes = [];
    lista = document.createElement("UL");
    lista.textContent = key;

    if (typeof dato.Ingredientes[key] == "string") {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      li.textContent = key + "  " + dato.Ingredientes[key];
      ul.appendChild(li);
      lista.appendChild(ul);
      listaM.appendChild(lista);
    } else {
      const ul = document.createElement("ul");

      for (const ky in dato.Ingredientes[key]) {
        const li = document.createElement("li");
        li.innerText = `${ky}: ${dato.Ingredientes[key][ky]}`;
        ul.appendChild(li);
        lista.appendChild(ul);
        listaM.appendChild(lista);
      }
    }
  }

  const titular = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-dd3ff82.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-f2dbe12.elementor-widget.elementor-widget-heading"
  );
  titular.appendChild(listaM);

  const desci = document.querySelector(
    "body > div > div:nth-child(3) > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-42232ca.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-61f693a.elementor-widget.elementor-widget-text-editor > div > p"
  );

  desci.textContent = dato.procedimiento;
}
