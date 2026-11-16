const btnHamburger = document.getElementById('botonMenu')
const listaNavegacion = document.querySelector('.listaNavegacion')
const navLinks = document.querySelectorAll('.link')

btnHamburger.addEventListener('click', function (){
    botonMenu.classList.toggle('open')

})

navLinks.forEach(function (link){
    link.addEventListener('click', function (){
        listaNavegacion.classList.remove('open')
    })
}
document.addEvenetListener('click', function (event){
    if (
        !listaNavegacion.contains(event.target) &&
        !btnHamburger.contains(event.target)
    ) {
        listaNavegacion.classList.remove('open')
    }
})

export const header = 

    <header class="encabezado">
     <nav class="listaMenu">
      <a class="home" href="index.html">RJP</a>
        <button id="theme-toggle" aria-label="Toggle night mode">
          // * -- sol 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-medium preview-icon">
            <circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/></svg>
          //* -- luna 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </button>
        <button class="botonMenu" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="menuNavegacion">
          <span class="botonMenuLinea"></span>
          <span class="botonMenuLinea"></span>
          <span class="botonMenuLinea"></span>
        </button>
     <ul class="listaMenuNavegacion" id="menuNavegacion">
        <li><a class="link" href="about.html">About</a></li>
        <li><a class="link" href="#skills">Skills</a></li>
        <li><a class="link" href="#proyectos">Proyectos en Progreso</a></li>
        <li><a class="link" href="#recursos">Recursos</a></li>
        <li><a class="link" href="#cheatsheets">Cheatsheet</a></li>
        <li><a class="link" href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>;

export const footer = 

 <footer class="pieDePagina">
      <section>
        <p class="derechos"> © ${year} Roger Joan Pinazo - Marketing Automation & eComm Technology Consultant y aprendiz de Fullstack Developer</p>
      </section>
    </footer>
    ;
