# PEC 7 

* **Login UOC:** nologa
* **Nombre y apellidos de la alumna:** Noèlia López Galiana 
* **Descripción:** Partiendo del proyecto de la PEC anterior, hemos creado un login y register, con token para comprobar de manera local que estos se guardan. Además,  hemos creado rutas para que en la barra de direcciones apartezca la ruta en la que nos encontramos. En caso de entrar en el detalle de los artículos sin *loguear* no funciona. Este último punto, no está bien resuelto del todo. En el app-routing.module la línea de código que debería posibilitar esto no funciona. Al quitarla, vemos que sí que está intentando entrar donde debería pero al dejarla para que funcione solo si estamos logeados, no funciona. Por último, hemos implementado un *lazy loading* para optimizar la carga de nuestro proyecto. 