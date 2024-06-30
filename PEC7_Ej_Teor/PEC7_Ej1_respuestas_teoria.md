# Ejercicio 1 – Preguntas teóricas

## a. ¿Qué es y cómo funciona el elemento `<RouterOutlet>`?
El `<RouterOutlet>` es un elemento de en Angular que actúa como marcador de posición dinámico para los componentes asociados a las rutas definidas en la aplicación. Funciona insertando el componente correspondiente según la ruta activa en ese momento. Es decir, cuando el usuario navega a una ruta específica, el componente que tenemos asociado a esa ruta se renderiza dentro del **`<RouterOutlet>`**.

## b. ¿Para qué se utilizan las directivas `routerLink` y `routerLinkActive`? ¿Existen más directivas relacionadas con el router?
- **routerLink**: Es una directiva que usamos para navegar entre diferentes vistas dentro de una aplicación Angular. Sustituye a  `href`, `routerLink` y es útil porque enlaza directamente a una ruta definida en el enrutador de Angular, de manera que no necesitamos recargar la vista completa de la página. 
- **routerLinkActive**: Esta directiva la hacemos servir para aplicar una clase CSS a un elemento HTML activo, resaltando visualmente el enlace que corresponde a la ruta activa.

## c. ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios?
**Router** se usa para gestionar la navegación dentro de la aplicación Angular. Proporciona métodos como `navigate` para navegar a una ruta específica y `navigateByUrl` para navegar a una URL completa. Por su parte, **ActivatedRoute** proporciona información sobre la ruta activa en el contexto de un componente asociado a esa ruta. Permite acceder a los parámetros de la ruta a los datos estáticos y a los observables de cambios en la ruta. 

## d. ¿Qué son las Route Guards? ¿Para qué sirven y cómo se implementan en Angular?
Las *Route Guards* son funciones en Angular que permiten controlar y proteger la navegación a ciertas rutas en la aplicación. Se utilizan para realizar acciones específicas antes de activar una ruta, después de activarla o al desactivarla. Se implementan mediante interfaces como **`CanActivate`**, **`CanDeactivate`**, **`CanLoad`**, que se configuran en las definiciones de ruta (**`AppRoutingModule`**), asegurando así que solo los usuarios autorizados accedan a ciertas partes de la aplicación.

## e. ¿Qué es la carga Lazy de los módulos de Angular? ¿Para qué sirve y cómo se configura en una aplicación?
La carga *Lazy* de módulos en Angular (y en las aplicaciones web en general) es una técnica de optimización que consiste en cargar los módulos de manera diferida, es decir, solo cuando se accede a una ruta específica que requiere dicho módulo. Esto mejora el rendimiento inicial de la aplicación al reducir el tamaño de la solicitud que realiza el navegador. Para configurarla, se utiliza la propiedad **`loadChildren`** en la definición de ruta dentro del **`RouterModule`**, indicando la ubicación del módulo y sus componentes asociados que se cargarán de forma *Lazy*.

## f. ¿Qué son y cómo se utilizan los middlewares en el contexto de Node.js? ¿Dónde se aplican en nuestra aplicación?
Los *middlewares* en Node.js son funciones que se ejecutan durante el procesamiento de una solicitud HTTP, permitiendo realizar acciones intermedias como la autenticación, validación de datos o manejo de errores. Son útiles para modularizar y reutilizar funcionalidades comunes en una aplicación web. 
En nuestra aplicación, los middlewares se utilizan principalmente en el backend para gestionar la autenticación de usuarios, validar las solicitudes entrantes y manejar errores antes de que lleguen a las rutas definidas.
