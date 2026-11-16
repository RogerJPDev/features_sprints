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