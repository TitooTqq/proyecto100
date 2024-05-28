const menu = [
    // Array de objetos que representan elementos del menú
    {
        id: 1,
        title: "Hotcakes con crema batida",
        category: "Desayunos",
        price: 199.99,
        img: "item-1.jpeg",
        desc: `Es una orden de 7 hotcakes con caramelo de su preferemcia y con crema batida.`,
    },
    {
        id: 2,
        title: "Hamburguesa doble ",
        category: "Lonches",
        price: 249.99,
        img: "item-2.jpeg",
        desc: `Es una hamburguesa con carne doble, verduras, aderezos y papas a la francesa.`,
        },
    {
        id: 3,
        title: "Malteada especial",
        category: "Batidos",
        price: 129.99,
        img: "item-3.png",
        desc: `Es una malteada ya sea de fresa, vainilla o chocolate con crema batida, trozos de galleta y chispas de dulce depende del sabor.`,
    },
    {
        id: 4,
        title: "Huevos al gusto",
        category: "Desayunos",
        price: 139.99,
        img: "item-4.jpg",
        desc: `Son huevos revueltos al gusto ya sea con (jamon, salchicha, chorizo o a la mexicana) lleva incluido dos rebanada de pan.`,
    },
    {
        id: 5,
        title: "Torta de pierna",
        category: "Lonches",
        price: 229.99,
        img: "item-5.jpg",
        desc: `Es una torta de pierna adobada y rebanada que lleva verduras, crema y chiles`,
    },
    {
        id: 6,
        title: "Batido de oreo",
        category: "Batidos",
        price: 129.99,
        img: "item-6.jpeg",
        desc: `Es un batido de leche con oreo y hershey con un escarchado de galletas oreo y una fresa de decoracion.`,
    },
    {
        id: 7,
        title: "Tostada",
        category: "Desayunos",
        price: 169.99,
        img: "item-7.jpeg",
        desc: `Son dos tostadas con una cama de guacamole, otra cama de atún y un cuarto de huevo duro.`,
    },
    {
        id: 8,
        title: "Hamburguesa simple",
        category: "Lonches",
        price: 199.99,
        img: "item-8.jpeg",
        desc: `Es una hamburguesa con una sola carne, queso americano, jitomate, cebolla y pepinillos acompañada con papas a la francesa.`,
    },
    {
        id: 9,
        title: "Malteada de fresa",
        category: "Batidos",
        price: 399.99,
        img: "item-9.jpg",
        desc: `Es un batido de leche, fresa y endulzante de tu preferencia, con decoaracion de unas fresas frezcas.`,
    },
    {
        id: 10,
        title: "Filete de res",
        category: "Comidas",
        price: 399.99,
        img: "item-10.jpg",
        desc: `Es un corte de carne asado con terminacion al gusto acompañado con una ensalada de lechuga con algunas verduras y un poco de aceite de oliva.`,
    },
    {
        id: 11,
        title: "Corte New York",
        category: "Comidas",
        price: 499.99,
        img: "item-11.jpg",
        desc: `Es un corte de carne New York en mantequilla con una anchura de 6cm al termino que guste acompañado con unas papas en gajos.`,
    },
    {
        id: 12,
        title: "Salmón al horno",
        category: "Comidas",
        price: 399.99,
        img: "item-12.jpg",
        desc: `Es un filete de salmon cocido en un horno de pierdra acompañado con una ensalada de tocino y vinagreta de balsámico.`,
    },
    ];
// Seleccionar elementos del DOM
  // Selecciona el primer elemento del documento con la clase "section-center"
// y lo asigna a la variable 'sectionCenter'.
// 'section-center' podría ser una sección del sitio web donde se muestran elementos dinámicos.
const sectionCenter = document.querySelector(".section-center");

// Selecciona el primer elemento del documento con la clase "btn-container"
// y lo asigna a la variable 'btnContainer'.
// 'btn-container' podría ser un contenedor para botones de filtro, navegación, etc.
const btnContainer = document.querySelector(".btn-container");


// Mostrar todos los elementos del menú cuando la página carga
    // Escucha el evento 'DOMContentLoaded', que se dispara cuando el HTML inicial
    // del documento ha sido completamente cargado y analizado.
    window.addEventListener("DOMContentLoaded", function () {
    // Llama a la función 'diplayMenuItems' pasando como argumento 'menu',
    // que probablemente es una lista o un arreglo de elementos del menú.
    diplayMenuItems(menu);
    // Llama a la función 'displayMenuButtons', que probablemente se encarga de mostrar
    //los botones de filtrado o navegación del menú.
    displayMenuButtons();
});

// Función para mostrar los elementos del menú en el DOM
function diplayMenuItems(menuItems) {
    // 'menuItems' es un arreglo de objetos, cada uno representando un elemento del menú.
    // La función 'map' itera sobre cada elemento del arreglo 'menuItems' y transforma cada uno en un nuevo formato.
    let displayMenu = menuItems.map(function (item) {
        // Para cada elemento 'item' en 'menuItems', devuelve una cadena de texto HTML
        // que representa un elemento del menú.
        return `
            <article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo" />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>
        `;
    });

    // 'displayMenu' es ahora un arreglo de cadenas de texto HTML.
    // Usamos 'join' para convertir este arreglo en una sola cadena de texto.
    displayMenu = displayMenu.join("");
    // Selecciona el contenedor en el DOM donde se van a mostrar los elementos del menú.
    const sectionCenter = document.querySelector(".section-center");
    // Asigna la cadena de texto HTML al contenido interno del contenedor.
    sectionCenter.innerHTML = displayMenu;
}
// Función para mostrar los botones de filtro
    function displayMenuButtons() {
    // Suponemos que 'menu' es una lista de objetos de menú, cada uno con una propiedad 'category'.
    // Creamos un nuevo conjunto con las categorías únicas extraídas del 'menu'.
         // Obtener todas las categorías únicas del menú
        const categories = menu.reduce(
            function (values, item) {
                // Si la categoría del ítem no está en 'values', la añadimos.
                if (!values.includes(item.category)) {
                    values.push(item.category);
                }
                return values;
            },
            // Iniciamos el conjunto con la categoría 'all'.
            ['Todo']
        );

// Crear botones de filtro para cada categoría
// 'categories' es un arreglo que contiene nombres de categorías.
// Usamos el método 'map' para iterar sobre cada elemento en 'categories'
const categoryBtns = categories
.map(function (category) {
    // Para cada 'category' en 'categories', retornamos una cadena de texto que representa un botón HTML.
    // El botón tiene un atributo 'type' con el valor 'button', una clase 'filter-btn',
    // y crear un nuevo arreglo de cadenas de texto HTML.
    // y un atributo 'data-id' que contiene el nombre de la categoría.
    return `<button type="button" class="filter-btn" data-id=${category}>
        ${category}
        </button>`;
})
// El método 'join' convierte el arreglo de cadenas de texto en una sola cadena de texto.
// Al pasar una cadena vacía (""), los elementos del arreglo se concatenan sin separadores entre ellos.
.join("");


// Mostrar los botones de filtro en el contenedor
    // 'btnContainer' es una referencia al elemento del DOM que actúa
    //como el contenedor para los botones de categorías.
    //Asignamos la cadena de texto HTML generada 'categoryBtns' al contenido interno del contenedor.
    btnContainer.innerHTML = categoryBtns;

    // Agregar event listeners a los botones de filtro
    // Selecciona todos los elementos dentro de 'btnContainer' que tienen la clase 'filter-btn'.
    // 'btnContainer' es el contenedor de botones de categorías que hemos actualizado previamente.
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    // Imprime la lista de elementos seleccionados en la consola del navegador.
    // Esto se utiliza para verificar que los botones de filtro se han seleccionado correctamente.
    console.log(filterBtns);

    // Itera sobre cada elemento en 'filterBtns', que es una NodeList de botones de filtro.
filterBtns.forEach(function (btn) {
    // Añade un evento 'click' a cada botón de filtro.
    btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
             // Obtener la categoría seleccionada
        const category = e.currentTarget.dataset.id;
            // Filtrar los elementos del menú por categoría y mostrarlos
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
             // Si la categoría del ítem del menú coincide con la categoría seleccionada, lo incluye en el arreglo filtrado.
    if (menuItem.category === category) {
        return menuItem;
    }
});
// Comprueba si la categoría seleccionada es "Todo".
    if (category === "Todo") {
    // Si la categoría es "Todo", muestra todos los ítems del menú.
    diplayMenuItems(menu);
    } else {
    // Si la categoría no es "Todo", muestra solo los ítems filtrados por la categoría seleccionada.
    diplayMenuItems(menuCategory);
    }
        });
    });
    }