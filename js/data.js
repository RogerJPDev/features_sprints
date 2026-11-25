const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    state: "Dominada",
    level: "intermedio",
    description: "Estructura semántica y accesible para aplicaciones web.",
    tags: ["Semantic HTML", "Accessibility", "SEO"]
  },
  {
    name: "CSS",
    icon: "https://cdn.simpleicons.org/css/663399",
    state: "Dominada",
    level: "intermedio",
    description: "Estilos modernos y diseño responsive para interfaces web.",
    tags: ["Flexbox", "Grid", "Responsive Design"]
  },
  {
    name: "APIs (Postman)",
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
    state: "Dominada",
    level: "intermedio",
    description: "Pruebas, documentación y consumo de APIs REST.",
    tags: ["REST", "HTTP", "Testing"]
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    state: "padawan",
    level: "padawan",
    description: "Entorno de ejecución de JavaScript del lado del servidor.",
    tags: ["JavaScript", "npm", "Backend"]
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    state: "padawan",
    level: "padawan",
    description: "Interfaces de usuario basadas en componentes reutilizables.",
    tags: ["Components", "Hooks", "SPA"]
  },
  {
    name: "Express",
    icon: "https://cdn.simpleicons.org/express/000000",
    state: "padawan",
    level: "padawan",
    description: "Framework minimalista de Node.js para crear servidores y APIs.",
    tags: ["Routing", "Middleware", "REST API"]
  },
  {
    name: "SQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
    state: "padawan",
    level: "padawan",
    description: "Consultas y modelado de bases de datos relacionales.",
    tags: ["Queries", "Joins", "Relational DB"]
  },
  {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb/47A248",
    state: "padawan",
    level: "padawan",
    description: "Base de datos NoSQL orientada a documentos.",
    tags: ["NoSQL", "Mongoose", "CRUD"]
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    state: "Dominada",
    level: "intermedio",
    description: "Control de versiones para gestionar el historial del código.",
    tags: ["Version Control", "Branching", "Merge"]
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/181717",
    state: "Dominada",
    level: "intermedio",
    description: "Alojamiento de repositorios y trabajo colaborativo.",
    tags: ["Pull Requests", "Collaboration", "GitHub Pages"]
  },
  {
    name: "Jinja",
    icon: "https://cdn.simpleicons.org/jinja/B41717",
    state: "Dominada",
    level: "intermedio",
    description: "Motor de plantillas de Python para generar contenido dinámico.",
    tags: ["Templating", "Python", "Dynamic Content"]
  },
  {
    name: "Liquid",
    icon: "https://cdn.simpleicons.org/shopify/7AB55C",
    state: "Dominada",
    level: "intermedio",
    description: "Lenguaje de plantillas para contenido dinámico en Shopify y emails.",
    tags: ["Templating", "Shopify", "Personalization"]
  },
  {
    name: "AMPscript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    state: "padawan",
    level: "padawan",
    description: "Lenguaje de scripting de Salesforce Marketing Cloud para emails personalizados.",
    tags: ["Marketing Cloud", "Email Personalization", "Data Extensions"]
  },
  {
    name: "Handlebars",
    icon: "https://cdn.simpleicons.org/handlebarsdotjs/000000",
    state: "Dominada",
    level: "intermedio",
    description: "Plantillas lógicas mínimas para renderizar HTML dinámico.",
    tags: ["Templating", "Helpers", "Partials"]
  }
];

const cheatsheet = [
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    link: "/cheatsheet_HTML.html"
  },

  {
    name: "CSS3",
    icon: "https://cdn.simpleicons.org/css/3178C6",
    link: "/cheatsheet_CSS.html"
  },

    {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    link: "/cheatsheet_JS.html",
  }


]

export const resources = [
  {
    category: "Documentación Oficial",
    items: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/es/", note: "La referencia de cabecera para HTML, CSS y JavaScript." },
      { title: "W3C Specifications", url: "https://www.w3.org/TR/", note: "Especificaciones oficiales de los estándares web." },
      { title: "Can I Use", url: "https://caniuse.com/", note: "Compatibilidad de cada funcionalidad entre navegadores." },
      { title: "DevDocs", url: "https://devdocs.io/", note: "Muchas documentaciones en una sola interfaz, también offline." },
      { title: "FormSubmit", url: "https://formsubmit.co/", note: "Envía formularios HTML a tu email sin backend." }
    ]
  },
  {
    category: "Aprendizaje",
    items: [
      { title: "freeCodeCamp", url: "https://www.freecodecamp.org/espanol/", note: "Cursos gratuitos y certificaciones con práctica guiada." },
      { title: "JavaScript.info", url: "https://es.javascript.info/", note: "Tutorial moderno de JavaScript, de lo básico a lo avanzado." },
      { title: "CSS-Tricks", url: "https://css-tricks.com/", note: "Artículos y guías de CSS, famosas las de Flexbox y Grid." },
      { title: "Web.dev", url: "https://web.dev/", note: "Guías de Google sobre rendimiento, buenas prácticas y CSS." },
      { title: "Frontend Masters", url: "https://frontendmasters.com/", note: "Cursos en vídeo en profundidad impartidos por expertos." }
    ]
  },
  {
    category: "Herramientas",
    items: [
      { title: "VS Code", url: "https://code.visualstudio.com/", note: "Editor de código gratuito con miles de extensiones." },
      { title: "GitHub", url: "https://github.com/", note: "Alojamiento de repositorios Git y colaboración." },
      { title: "CodePen", url: "https://codepen.io/", note: "Editor online para probar y compartir HTML, CSS y JS." },
      { title: "Figma", url: "https://www.figma.com/", note: "Diseño de interfaces y prototipos colaborativos." },
      { title: "Netlify", url: "https://www.netlify.com/", note: "Despliegue de webs estáticas directamente desde Git." }
    ]
  },
  {
    category: "Accesibilidad",
    items: [
      { title: "WCAG Guidelines", url: "https://www.w3.org/WAI/standards-guidelines/wcag/es", note: "Pautas oficiales de accesibilidad del contenido web." },
      { title: "WebAIM", url: "https://webaim.org/", note: "Artículos, checklists y verificador de contraste." },
      { title: "WAVE Tool", url: "https://wave.webaim.org/", note: "Evalúa la accesibilidad de una página de forma visual." },
      { title: "Axe DevTools", url: "https://www.deque.com/axe/devtools/", note: "Extensión del navegador para auditar accesibilidad." }
    ]
  },
  {
    category: "Blogs & Comunidades",
    items: [
      { title: "Smashing Magazine", url: "https://www.smashingmagazine.com/", note: "Artículos de calidad sobre desarrollo y diseño web." },
      { title: "A List Apart", url: "https://alistapart.com/", note: "Revista clásica sobre diseño, desarrollo y contenido web." },
      { title: "Dev.to", url: "https://dev.to/", note: "Comunidad de desarrolladores que comparten artículos." },
      { title: "Stack Overflow", url: "https://es.stackoverflow.com/", note: "Preguntas y respuestas para resolver dudas de código." },
      { title: "Frontend Focus", url: "https://frontendfoc.us/", note: "Newsletter semanal con novedades del mundo frontend." }
    ]
  },
  {
    category: "Inspiración & Design",
    items: [
      { title: "Awwwards", url: "https://www.awwwards.com/", note: "Premios y galería de las webs mejor diseñadas." },
      { title: "Dribbble", url: "https://dribbble.com/", note: "Comunidad de diseñadores con shots de UI e ilustración." },
      { title: "Behance", url: "https://www.behance.net/", note: "Portfolios creativos completos de diseñadores." },
      { title: "Coolors", url: "https://coolors.co/", note: "Generador rápido de paletas de colores." },
      { title: "Google Fonts", url: "https://fonts.google.com/", note: "Tipografías web gratuitas y fáciles de integrar." }
    ]
  }
];


const skillsToShow = document.querySelector('#skills-list');

const skillsDominada = skills.filter((skill) => skill.state === 'Dominada');

function showInScreenSkills (skillsDominada, skillsToShow){
  for (let n = 0; n < skillsDominada.length; n++){
    const box = document.createElement('div');
    box.classList.add('skill-card');

    const skillIcon = document.createElement('img');
    skillIcon.src = skillsDominada[n].icon;
    skillIcon.alt = `logo de ${skillsDominada[n].name}`;
    skillIcon.classList.add('skill-icon');

    const skillName = document.createElement('h3');
    skillName.textContent = skillsDominada[n].name;
    skillName.classList.add('skill-name');


    const skillLevel = document.createElement('h4');
    skillLevel.textContent = skillsDominada[n].state;
    skillLevel.classList.add('skill-level');

    const skillDescription = document.createElement('p');
    skillDescription.textContent = skillsDominada[n].description;
    skillDescription.classList.add('skill-description');
    
    const skillTagList = document.createElement('ul');
    skillTagList.classList.add('tag-list');

    for (let i = 0; i < skillsDominada[n].tags.length; i++){
      
        const skillTag = document.createElement('li');
        skillTag.textContent = skillsDominada[n].tags[i];
        skillTag.classList.add('tag')

        skillTagList.appendChild(skillTag);
    }
    box.append(skillIcon, skillName, skillLevel, skillDescription, skillTagList);

/*
    box.appendChild(skillIcon);
    box.appendChild(skillName);
    box.appendChild(skillLevel);
    box.appendChild(skillDescription);
    box.appendChild(skillTagList);
    */
    skillsToShow.appendChild(box);
  }
  
}
if (skillsToShow) {
  showInScreenSkills(skillsDominada, skillsToShow);
};

const cheatsheetsToShow = document.querySelector('#cheatsheet-list');

function showInScreenCheatsheets (cheatsheets, cheatsheetsToShow){
  cheatsheets.forEach(cheatsheet =>{
    const box = document.createElement('a');
    box.href = cheatsheet.link;
    box.target="_blank";
    box.rel="noopener noreferrer";
    box.classList.add('cheatsheet-card');
    
    const cheatsheetIcon = document.createElement('img');
    cheatsheetIcon.src = cheatsheet.icon;
    cheatsheetIcon.alt = `logo de ${cheatsheet.name}`;
    cheatsheetIcon.classList.add('cheatsheet-icon');

    const cheatsheetName = document.createElement('h3');
    cheatsheetName.textContent = cheatsheet.name;
    cheatsheetName.classList.add('cheatsheet-name');

    const cheatsheetDescription = document.createElement('p');
    cheatsheetDescription.textContent =`Guia rapida de referencia sobre ${cheatsheet.name}`;
    cheatsheetDescription.classList.add('cheatsheet-description');

  box.append(cheatsheetIcon, cheatsheetName, cheatsheetDescription);
  cheatsheetsToShow.appendChild(box)
  }

)}

if (cheatsheetsToShow) {
  showInScreenCheatsheets(cheatsheet, cheatsheetsToShow);
};