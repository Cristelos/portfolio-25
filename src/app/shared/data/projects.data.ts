import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1750087944/portfolio/Captura_de_pantalla_2025-06-11_a_las_18.49.22_odaj7b.png',
    title: 'Copia de Pull&Bear con HTML y CSS',
    category: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
    ],
    url: 'https://cristelos.github.io/mi-tienda-flex/',
    git: 'https://github.com/Cristelos/mi-tienda-flex',
    description:
      'Una práctica de maquetación en la que repliqué la home de Pull&Bear usando solo HTML y CSS. Me sirvió para afinar la atención al detalle y trabajar la estructura visual desde cero.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684320386/portfolio/Captura_de_pantalla_2023-05-17_a_las_12.45.01_hseftl.png',
    title: 'Página de inicio de BMW',
    category: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
    ],
    url: 'https://cristelos.github.io/home-bmw/',
    git: 'https://github.com/Cristelos/home-bmw',
    description:
      'Otro ejercicio de maquetación pura. En este caso, recreé la portada de BMW para practicar posicionamiento, jerarquía visual y estilos más corporativos.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684320799/portfolio/Captura_de_pantalla_2023-05-17_a_las_12.53.00_uzotas.png',
    title: 'Slack Mobile: clon de la versión responsive',
    category: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
    ],
    url: 'https://www.linkedin.com/posts/patricia-fernandez-ruibal_el-%C3%BAltimo-ejercicio-del-m%C3%B3dulo-de-htmlcss-activity-7037808157183684609-gbZa?utm_source=share&utm_medium=member_desktop',
    git: 'https://github.com/Cristelos/slack',
    description:
      'Un proyecto donde copié la versión móvil de la home de Slack. Ideal para practicar responsive, media queries y estructura adaptada a dispositivos pequeños.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684321257/portfolio/Captura_de_pantalla_2023-05-17_a_las_13.00.45_elpjxk.png',
    title: 'Pokedex con la API de Pokémon',
    category: [{ id: 'javascript', name: 'Javascript' }],
    url: 'https://cristelos.github.io/pokeapi-todolist/index.html',
    git: 'https://github.com/Cristelos/pokeapi-todolist',
    description:
      'Una app sencilla pero muy útil para aprender a consumir APIs. Aquí se muestran los Pokémon en pantalla según la información que se va recibiendo desde la PokéAPI.',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684324839/portfolio/Captura_de_pantalla_2023-05-17_a_las_14.00.26_p6nnox.png',
    title: 'API de Películas con Node.js',
    category: [{ id: 'nodejs', name: 'Nodejs' }],
    url: 'https://www.linkedin.com/posts/patricia-fernandez-ruibal_hola-a-todos-hoy-os-comparto-el-resultado-activity-7044027938928738304-m6yo?utm_source=share&utm_medium=member_desktop',
    git: 'https://github.com/Cristelos/ejercicionode-movies',
    description:
      'En este proyecto construí una API desde cero con Node.js, con endpoints para gestionar películas y cines. Fue mi primera toma de contacto real con el backend.',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684325092/portfolio/Captura_de_pantalla_2023-05-17_a_las_14.04.33_wtkjww.png',
    title: 'API colaborativa en Node.js',
    category: [{ id: 'nodejs', name: 'Nodejs' }],
    url: 'https://www.linkedin.com/posts/sergio-bernabe-arahuetes_estos-d%C3%ADas-hemos-trabajado-con-nodejs-en-activity-7046818543010484224-02fS?utm_source=share&utm_medium=member_desktop',
    git: 'https://github.com/Serberar/proyecto-final-node',
    description:
      'Trabajo en grupo donde desarrollamos una API con autenticación, subida de archivos y gestión de datos. Fue una gran oportunidad para coordinarse en equipo y organizar bien los endpoints.',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684330786/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.39.35_fdjq2n.png',
    title: 'Formulario dinámico en Angular',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://cristelos-s3-ejercicios-angular.vercel.app/',
    git: 'https://github.com/Cristelos/Cristelos-s3-ejercicios-angular',
    description: 'Formulario con Angular que permite añadir nuevos elementos a la base de datos. Me ayudó a comprender mejor la gestión de formularios reactivos y el flujo de datos.',
  },
  {
    id: 8,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331051/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.44.02_j5jw3d.png',
    title: 'Shopéame: tienda online con Angular',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://shopeame-angular-weld.vercel.app/',
    git: 'https://github.com/Cristelos/shopeame-angular',
    description:
      'Una tienda online construida en Angular. Incluye navegación por categorías, detalles de producto y lógica para añadir al carrito. Fue un gran reto unir funcionalidad con diseño.',
  },
  {
    id: 9,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331268/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.47.38_ev8qzh.png',
    title: 'Clon de Netflix con Angular',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://netflix-practica.vercel.app/',
    git: 'https://github.com/Cristelos/netflix-practica',
    description:
      'Proyecto de práctica en el que recreé la interfaz de Netflix. El foco estuvo en el diseño responsive y la organización de los componentes visuales.',
  },
  {
    id: 10,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331532/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.52.01_thd9du.png',
    title: 'Mini juegos con Angular y TypeScript',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://games-angular.vercel.app/tresuare-finder',
    git: 'https://github.com/Cristelos/games-angular',
    description: 'Desarrollé distintos juegos en Angular, como buscadores de tesoros y desafíos de lógica. Ideal para practicar lógica de programación y estructura de componentes.',
  },
  {
    id: 11,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331729/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.55.18_ii9puq.png',
    title: 'Rick & Morty con Angular',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://practica-rickymortyangular.vercel.app/character',
    git: 'https://github.com/Cristelos/practica-rickymortyangular',
    description: 'App en Angular que consume la API de Rick y Morty. Ideal para trabajar rutas, filtros y consumo de datos en una interfaz visualmente atractiva.',
  },
  {
    id: 12,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684331978/portfolio/Captura_de_pantalla_2023-05-17_a_las_15.59.30_ihvi8z.png',
    title: 'Reloj, cronómetro y cuenta atrás en React',
    category: [{ id: 'react', name: 'React' }],
    url: 'https://my-clock-exercise.vercel.app/',
    git: 'https://github.com/Cristelos/my-clock-exercise',
    description:
      'Una pequeña app en React con varias funciones de tiempo: reloj en vivo, cuenta atrás y cronómetro. Muy útil para practicar hooks y estado.',
  },
  {
    id: 13,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684332197/portfolio/Captura_de_pantalla_2023-05-17_a_las_16.03.07_t6g85x.png',
    title: 'Trivial con React y API externa',
    category: [{ id: 'react', name: 'React' }],
    url: 'https://trivial-exercise.vercel.app/',
    git: 'https://github.com/Cristelos/trivial-exercise',
    description:
      'Juego de preguntas y respuestas usando React y una API de trivia. Ideal para trabajar estados, lógica de juego y control de flujo.',
  },
  {
    id: 14,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684332315/portfolio/Captura_de_pantalla_2023-05-17_a_las_16.05.00_um8syt.png',
    title: 'Gestor de productos con React',
    category: [{ id: 'react', name: 'React' }],
    url: 'https://create-products.vercel.app/',
    git: 'https://github.com/Cristelos/create-products',
    description:
      'Aplicación en React donde puedes crear, editar, eliminar y comentar productos. Un CRUD completo que refuerza el manejo del estado y la interacción entre componentes.',
  },
  {
    id: 15,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684332706/portfolio/Captura_de_pantalla_2023-05-17_a_las_16.11.32_f2lrge.png',
    title: 'Game of Thrones Fan App',
    category: [{ id: 'react', name: 'React' }],
    url: 'https://www.linkedin.com/posts/patricia-fernandez-ruibal_este-fin-de-semana-ha-tocado-hacer-el-proyecto-activity-7056161387571519488-qkR1?utm_source=share&utm_medium=member_desktop',
    git: 'https://github.com/Lur81/project-react',
    description:
      'Proyecto en equipo donde creamos una web para fans de Juego de Tronos a partir de una API. Nos organizamos como un equipo de trabajo real, repartiendo tareas y coordinando entregas.',
  },
  {
    id: 16,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1684332932/portfolio/Captura_de_pantalla_2023-05-17_a_las_16.14.40_ctgzab.png',
    title: 'Maleteo: proyecto final de bootcamp',
    category: [{ id: 'react', name: 'React' }],
    url: 'https://www.linkedin.com/posts/patricia-fernandez-ruibal_html5-css3-sass-activity-7063815957193928704-qW1E?utm_source=share&utm_medium=member_desktop',
    git: 'https://github.com/AlejandroPolskoy/proyecto-final-maletas',
    description:
      'Proyecto grupal donde desarrollamos el frontend y backend de una app de gestión de equipaje. Usamos React para el cliente y Node.js para el servidor. Un cierre perfecto para el bootcamp.',
  },
  {
    id: 17,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1752512723/todo-app_rbeysh.png',
    title: 'TODO App con Redux y Angular',
    category: [
      { id: 'angularjs', name: 'Angular' },
      { id: 'redux', name: 'Redux' },
    ],
    url: 'https://cristelos.github.io/todo-redux-app/',
    git: 'https://github.com/Cristelos/todo-redux-app',
    description:
      'Una lista de tareas sencilla pero ideal para empezar con Redux. Aprendí a gestionar el estado global y actualizarlo desde distintos componentes.',
  },
  {
    id: 18,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1752513173/portfolio/ingreso-egreso-app_zttr8y.png',
    title: 'Ingreso/Egreso App con Firebase',
    category: [
      { id: 'angularjs', name: 'Angular' },
      { id: 'redux', name: 'Redux' },
    ],
    url: 'https://ingreso-egreso-app-246ba.web.app/login',
    git: 'https://github.com/Cristelos/ingreso-egreso-app',
    description:
      'App para llevar el control de ingresos y gastos. Incluye autenticación y registro con Firebase. Un proyecto completo que toca muchas partes del stack.',
  },
  {
    id: 19,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1752513512/portfolio/calculadora_wyjzla.jpg',
    title: 'Calculadora moderna en Angular',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://calculadora-angular-inky.vercel.app/calculator',
    git: 'https://github.com/Cristelos/calculadora-angular',
    description:
      'Una calculadora donde pude experimentar con Angular Signals, Zoneless y pruebas unitarias. También usé Tailwind para el estilo. Me encantó probar estas nuevas features.',
  },
  {
    id: 20,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1752513734/portfolio/ssr-app_i5xsvm.png',
    title: 'SSR + SEO en Angular',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://ssr-app-livid.vercel.app/about',
    git: 'https://github.com/Cristelos/ssr-app',
    description:
      'Proyecto donde aprendí a implementar Server-Side Rendering (SSR) y generación estática (SSG) con Angular. Incluye rutas dinámicas, paginación y un routes.txt automatizado para mejorar el SEO.',
  },
  {
    id: 21,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1752513961/portfolio/github-issues_e1kexj.png',
    title: 'GitHub Issues con TanStack Query',
    category: [{ id: 'angularjs', name: 'Angular' }],
    git: 'https://github.com/Cristelos/github-issues',
    description:
      'Usando la API de GitHub, desarrollé una app para listar issues. Aprendí a usar TanStack Query: gestión de caché, revalidaciones, reintentos y control de estado.',
  },
  {
    id: 22,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1752514151/portfolio/layout-library_jk3cod.png',
    title: 'Librería de layouts en Angular',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://practicing-layoust.vercel.app/',
    git: 'https://github.com/Cristelos/practicing-layoust',
    description:
      'Creé una librería personalizada de layouts en Angular para poder reutilizar módulos en distintos proyectos. Aprendí sobre monorepos, publicación en npm y testing de paquetes.',
  },
  {
    id: 23,
    image:
      'https://res.cloudinary.com/dgguxcib9/image/upload/v1752514532/portfolio/i18n_atpjvj.png',
    title: 'Landing multilenguaje con i18n',
    category: [{ id: 'angularjs', name: 'Angular' }],
    url: 'https://i18n-app-swart.vercel.app/products',
    git: 'https://github.com/Cristelos/i18n-app',
    description:
      'Landing page en Angular con internacionalización (i18n). Permite cambiar de idioma y ver cómo se adapta el contenido automáticamente.',
  },
];
