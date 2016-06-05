# Curso definitivo de Java Script

Desarrollaremos una aplicación (single page aplication) denominada _"Platzigram"_ con **HTML5**, **CSS** y **JavaScript**.

**Jade** es un “template engine”(motor de plantillas) de alto performance, enfocado en permitir escribir código HTML de forma rápida. Podríamos decir que se trata de un pre-procesador de código html; similar a stylus, sass o less con respecto a css.
El objetivo no es hacer el html y luego el Jade, Sacha explica una introducción a Jade el cual puede tomar como ejemplo para utilizarlo como preprocesador como les comentaba anteriormente.
Mas info en [Aprende Jade](http://learnjade.com/)

## Herramientas

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

## 17 - Modularizando nuestro proyecto

Parte de hacer buen código en JavaScript es modularizar cada funcionalidad. Para convertir cada archivo js en un módulo usamos module.exports, y para usar dicho módulo en otra parte de nuestra aplicación usamos requiere (Si, justo como las librerías importadas con NPM). Notarás que el resultado del ejercicio es tener un código más legible y modular.

### Operaciones

Vamos a crear una carpeta en el directorio `src/` para cada página. Así tendremos una para **"homepage"** y otra para **"signup"**, etc...

Cada carpeta debe contener un **_index.js_** que será el punto de entrada. Ademas contendrá los templates necesarios para renderizar dichas páginas correctamente.

## 18 - Agregando la página de **_signin/_**

Vamos a repasar lo aprendido hasta ahora creando una nueva funcionalidad a nuestra aplicación: Crear la pagina de login. Además, aprendemos cómo gracias a watchify, podemos mostrar un error en la consola de forma automática en cuanto esto suceda.

### Operaciones

Crearemos una nueva página para hacer login en el caso de que ya estemos registrados y tengamos un nombre de *usuario* y un *password*. Esta página la llamaremos `signin`. Básicamente será como lo que hemos creado hasta ahora para `signup`.

Creamos una carpeta con el nombre de `signin` que contendrá los archivos `index.js` y `template.js`.

Ahora bien, no es necesario modificar toda la página. Hay una parte que será común a ambas páginas y que llamaremos `landing`, está será una página de base donde pondremos solo lo que cambie de `signup` a `signin` y viceversa.

En el `index.js` de `landing` pondremos lo que es común y habilitamos en la plantilla una "*caja*" (`${box}`) que será la que recoja el código que diferencia a una página de otra.

Ahora el `index.js` de `src/` debe contener todas las rutas:

```javascript
  var page = require('page');

  require('./homepage');
  require('./signup');
  require('./signin');

  page();
```

También incluimos en el archivo `Gulpfile.js` una evento para controlar cuando se produzca un error que nos de información del mismo.

```javascript
...
  function rebundle() {
    bundle
      .transform(babel)
      .bundle()
      .on('error', function (err) { console.log(err); this.emit('end'); })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }
  ...
```

## 19 - Cambiando el Título de la página

Algo que aporta mucho a la usabilidad del usuario es el poder mostrar en el Title el mensaje correcto de acuerdo a la vista en la que estemos, para eso nos vamos a apoyar de algunos cambios desde el backend además de una nueva librería llamada title, para asegurar que el title cambia de acuerdo a la ruta que elijamos.

## 20 - Agregando un timeline para los usuarios

Creamos un nuevo módulo de nuestra aplicación. A diferencia del primer repaso, esta vista tendrá un nuevo agregado: Fuente de iconos. Incluirlos en nuestro proyecto es muy sencillo, incluimos el CDN respectivo en nuestro template y podemos disponer de ellos gracias a un tag y una clase predeterminada.

## 23 - Agragando la fecha de publicación

[Moment.js]() es una librería que nos ofrece diferentes formas de agregar fechas, desde el tradicional formato 24 horas hasta las fechas relativas (Hace x tiempo). Platzigram usa fechas relativas, por lo tanto, solo necesitamos pasar como parámetro la fecha actual ( se puede usar new Date() ) y la librería se encarga del resto.

``` shell
 $ npm i --save moment
```

Nosotros estamos utilizando *Browserify* y para que no de problemas tenemos que poner en el `index.js` de nuestra aplicación, en el raiz.


```javascript
var moment = require('moment');

require('moment/locale/es');

moment.locale('es');

```

Para utilizarlo en nuestro código:

```javascript
var moment = require('moment');
...
<small class="right time">${moment(pic.createdAt).fromNow()}</small>
```

También se añade un nuevo campo con la fecha en el archivo `inex.js` de la `homepage`.


```javascript
...
url: 'office.jpg',
likes: 2,
liked: true,
createdAt: new Date().setDate(new Date().getDate() - 10)
...
```

## 24 - Utilizando FormaJS para internacionalizar las fechas

Soportar múltiples idiomas es un requerimiento básico en el desarrollo de aplicaciones modernas. Gracias a  una librería llamada [FormatJS](formatjs.io), podemos disponer de traducción de fecha y textos del lado del cliente. Además, usaremos un polyfill para asegurar la compatibilidad en todos los navegadores. Esta librería es mas estandar que `moment.js` y ademas es soportada nativamente por todos los navegadores, excepto en **Safari**. Esta librería aprovecha la variable definida en los navegadores como `Intl`.

``` shell
 $ npm i --save intl-relativeformat
```

Siguiendo la documentación, lo que debemos hacer es *requerir* la en nuestro archivo `indes.js`

```javascript
...
var moment = require('moment');
var IntlRelativeFormat = require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var rf = new IntlRelativeFormat('es');
...
```

Para **Safari** hay que añadir antes de requerir la librería:

```javascript
...
if (!window.Intl) {
    window.Intl = require('intl'); // polyfill for `Intl`
    req('intl-relativeformat/dist/locale-data/en.js')
    req('intl-relativeformat/dist/locale-data/es.js')
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var rf = new IntlRelativeFormat('es');
...
```

Eliminamos la librería `moment.js` que ya no necesitaremos ya que la hemos sustituido por `Format.JS`

## 25 - Utilizando FormatJS para internacionalizar los textos

Completando el ejercicio anterior, ahora usaremos `FormarJS` para cambiar los textos de la aplicación. Dependiendo de los diferentes valores de configuración que pasemos por parámetro, será el resultado mostrado. Para ello siguiendo con esta librería usaremos `IntlMessageFormat`. También la utilizaremos para traducir todos los textos para poder crear sitios multi-lenguaje.

Debemos instalar la librería `Intl-MessageFormat`.

``` shell
$ npm i --save intl-messageformat
```

Vamos a crear un nuevo módulo `translate` donde colocaremos toda la lógica de internazionalización y traducción. En el `index.js` pondremos todo el código que anteriormente habíamos añadido en `picture-card` para usar la librería `Intl-RelativeFormat`. Ahí añadimos el `require` para `Itnl-MessageFormat`.

```javascript
...
if (!window.Intl) {
  window.Intl = require('intl'); // polyfill for `Intl`
  req('intl-relativeformat/dist/locale-data/en.js')
  req('intl-relativeformat/dist/locale-data/es.js')
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var rf = new IntlRelativeFormat('es');
...
```

Y en su lugar en el archivo `index.js` de `picture-card` pondremos:

```javascript
...
var translate = require('../translate');
...
```
