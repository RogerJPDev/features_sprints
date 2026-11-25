import { resources } from "./data.js";

const toggleButton = document.getElementById('toggle');
const btnHamburger = document.getElementById('botonMenu')
const listaNavegacion = document.querySelector('.listaMenuNavegacion')
const navLinks = document.querySelectorAll('.link')


if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

btnHamburger.addEventListener('click', function (){
    listaNavegacion.classList.toggle('abierto')

})

navLinks.forEach(function (link){
    link.addEventListener('click', function (){
        listaNavegacion.classList.remove('abierto')
    })
})
document.addEventListener('click', function (event){
    if (
        !listaNavegacion.contains(event.target) &&
        !btnHamburger.contains(event.target)
    ) {
        listaNavegacion.classList.remove('abierto')
    }
})

const contenedorTabs = document.getElementById("recursosTabs");
const panelRecursos = document.getElementById("recursosPanel");


function pintarTabs() {
  contenedorTabs.innerHTML = resources
    .map((grupo, indice) => `
      <button
        type="button"
        class="tabRecurso"
        role="tab"
        aria-selected="false"
        data-indice="${indice}">
        ${grupo.category}
      </button>
    `)
    .join("");
}


function pintarRecursos(indice) {
  const grupo = resources[indice];

  panelRecursos.innerHTML = grupo.items
    .map((item) => `
      <a class="tarjetaRecurso" href="${item.url}" target="_blank" rel="noopener noreferrer">
        <h3 class="tarjetaRecursoTitulo">${item.title}</h3>
        <p class="tarjetaRecursoNota">${item.note}</p>
        <span class="tarjetaRecursoUrl">${new URL(item.url).hostname} ↗</span>
      </a>
    `)
    .join("");
}

function activarTab(indice) {
  const tabs = contenedorTabs.querySelectorAll(".tabRecurso");

  tabs.forEach((tab, i) => {
    const esActiva = i === indice;
    tab.classList.toggle("tabActiva", esActiva);
    tab.setAttribute("aria-selected", esActiva);
  });

  pintarRecursos(indice);
}

if (contenedorTabs && panelRecursos) {

  contenedorTabs.addEventListener("click", (evento) => {
    const tab = evento.target.closest(".tabRecurso");
    if (!tab) return;
    activarTab(Number(tab.dataset.indice));
  });

   pintarTabs();
  activarTab(0);
}