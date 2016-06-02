# Curso definitivo de Java Script

Desarrollaremos una aplicación (single page aplication) denominada _"Platzigram"_ con **HTML5**, **CSS** y **JavaScript**.

**Jade** es un “template engine”(motor de plantillas) de alto performance, enfocado en permitir escribir código HTML de forma rápida. Podríamos decir que se trata de un pre-procesador de código html; similar a stylus, sass o less con respecto a css.
El objetivo no es hacer el html y luego el Jade, Sacha explica una introducción a Jade el cual puede tomar como ejemplo para utilizarlo como preprocesador como les comentaba anteriormente.
Mas info en [Aprende Jade](http://learnjade.com/)

## Herraminetas

- Node.js
- Express
- Pug (Jade)
- Browserify
- Sass
- Gulp

## Clases

### Gulp

Vamos a crear una nueva tarea en Gulp, en este ocasión todos los recursos que tengamos en una carpeta los vamos a generar de manera automática en otra carpeta, esto incluye imágenes y código de css resultante. Igual vemos por primera vez los fav-icons, optimizados para todos los dispositivos.

### Babel y Browserify

Hemos hecho un poco de JavaScript del lado del servidor: ¿Cómo nos preparamos para el front-end?, muy sencillo nos apoyaremos de Browserify, Babel y Gulp. La combinación de estas herramientas nos permitirán ejecutar código de ECMAScript 6 para todos los navegadores desde ya. Por lo cual, aprovecharemos todas esas nuevas ventajas que nos da el nuevo standard.

### Vinyl-Source-Stream

Necesario para cambiar el código que genera *browserify* a un código que entienda *gulp*.

### ECMAScript 6

Nueva sintaxsis de JavaScript no está disponible al 100% en todos los navegadoes para eso usaremos *Babel*.
Un ejemplo de la antigua sintaxsis la vemos aquí a continuación.
```javascript
var numeros = [400, 200, 1, -23];

var numerosMasUno = numeros.map(function (numero) {
  return numero +1;
})

console.log(numerosMasUno);
```

Ahora la nueva sintaxsis para el mismo procedimiento.

```javascript
var numeros = [400, 200, 1, -23];

var otroNumerosMasUno = numeros.map( n => n +1);

console.log(otroNumerosMasUno);
```
Hay mucho mas que las funciones flecha (arrow).

Templates streams:

```javascript
var nombre = 'Sacha';
var mensaje = `Hola ${nombre}`;
console.log(mensaje);
```


### Page

Uno de los elementos por lo que se distingue un single page application es la navegación. Muy similar a las rutas de express, page.js nos ayuda a crear esta funcionalidad desde el lado del cliente.

### Automatizar el build

Vamos a mejorar nuestro entorno de desarrollo gracias al uso de “scripts” en nuestro package.json, gulp  y watchify. Podemos crear un comando que haga desde ejecutar las tareas de construcción de proyecto hasta levantar el servidor. Imagina poder escuchar los cambios en cualquier archivo y observar de inmediato los cambios, seguro será tu entorno favorito.

### Yo-yo

Yo-yo sigue un poco la filosofía de React (Orientado a componentes) : Nos ayuda a trabajar con templates y volverlos objetos del DOM, además, de actualizarlos según se requiera, muy sencillo y del lado del cliente. También usaremos los Templates Strings, funcionalidad que ganamos gracias a ECMAScript 6.

### Empty-Element

Librería que nos facilita limpiar un elemento del DOM y posteriormente añadirle el nuevo código HTML.
