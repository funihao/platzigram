<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Curso definitivo de Java Script](#curso-definitivo-de-java-script)
	- [Herramientas](#herramientas)
	- [Clases](#clases)
		- [Gulp](#gulp)
		- [Babel y Browserify](#babel-y-browserify)
		- [Vinyl-Source-Stream](#vinyl-source-stream)
		- [ECMAScript 6](#ecmascript-6)
		- [Page](#page)
		- [Automatizar el build](#automatizar-el-build)
		- [Yo-yo](#yo-yo)
		- [Empty-Element](#empty-element)
	- [17 - Modularizando nuestro proyecto](#17-modularizando-nuestro-proyecto)
		- [Operaciones](#operaciones)
	- [18 - Agregando la página de **_signin/_**](#18-agregando-la-pgina-de-signin)
		- [Operaciones](#operaciones)
	- [19 - Cambiando el Título de la página](#19-cambiando-el-ttulo-de-la-pgina)
	- [20 - Agregando un timeline para los usuarios](#20-agregando-un-timeline-para-los-usuarios)
	- [23 - Agragando la fecha de publicación](#23-agragando-la-fecha-de-publicacin)
	- [24 - Utilizando FormaJS para internacionalizar las fechas](#24-utilizando-formajs-para-internacionalizar-las-fechas)
	- [25 - Utilizando FormatJS para internacionalizar los textos](#25-utilizando-formatjs-para-internacionalizar-los-textos)
	- [26 - Cambiando el idioma y almacenándolo en localStorage](#26-cambiando-el-idioma-y-almacenndolo-en-localstorage)
	- [27 - Obteniendo una respuesta del servidor con Superagent](#27-obteniendo-una-respuesta-del-servidor-con-superagent)
		- [Modificando el comportamiento del header](#modificando-el-comportamiento-del-header)

<!-- /TOC -->

***

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

## 26 - Cambiando el idioma y almacenándolo en localStorage

Añadimos todas las cadenas de traducción en los archivos `es.js` y `en.js`. Estas cadenas se referencian ahora en el código como:

```javascript
...
<input type="text" name="username" placeholder="${translate.message('username')}" />
<input type="password" name="password" placeholder="${translate.message('password')}" />
...
```
Pero en el `footer` incluido en el la `view` que habíamos realizado con `Jade` tenemos también texto que debe ser remplazo pero no podemos hacerlo aquí, así que vamos a sacar todo el footer a un archivo `index.js` que vamos a crear en `footer`.

```javascript
var yo = require('yo-yo');
var translate = require('../translate');

var el = yo `<foter class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align">
        <a href="#" data-activates="dropdown1" class="dropdown-button btn">
          ${translate.message('language')}
        </a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#">${translate.message('spanish')}</a></li>
          <li><a href="#">${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">© 2016 Platzigram</div>
    </div>
  </div>
</foter>`;

document.body.appendChild(el);
```

Ahora si, ya tenemos todo preparado para traducirlo al idioma que elijamos. Se puede comprobar que si cambiamos en el archivo `index.js` de `translate` la variable `locale`:

Textos en Esapñol.
```javascript
...
var locale = 'es';

module.exports = {
...
}
```

Textos en Inglés.
```javascript
...
var locale = 'en-US';

module.exports = {
...
}
```

Pero lo que queremos es automatizarlo según la elección del menú de `idioma`. Así que en `footer/index.js` vamos a añadir un evento que llame a la función `lang`, de esta forma:

```javascript
...
var el = yo `<foter class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align">
        <a href="#" data-activates="dropdown1" class="dropdown-button btn">
          ${translate.message('language')}
        </a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#" onclick=${lang.bind(null, 'es')}>${translate.message('spanish')}</a></li>
          <li><a href="#" onclick=${lang.bind(null, 'en-US')}>${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">© 2016 Platzigram</div>
    </div>
  </div>
</foter>`;

function lang(locale) {
  localStorage.locale = locale;
  location.reload();
}

document.body.appendChild(el);

```

Ademas vamos a guardar la selección en `localStorage.locale` y cambiamos la forma en que inicializamos la variable `locale` en `translate/index.js`:

```javascript
...
var locale = localStorage.locale || 'es';

module.exports = {
  ...
}
```

## 27 - Obteniendo una respuesta del servidor con Superagent

Nuestra aplicación tendrá que tener almacenadas las diferentes `pictures` en algún sitio. Habotalmente esto se realiza mediante una bases de datos que reside en el lado del servidor y al cuál dirigimos nuestras peticiones para que nos devuelva las `pictures` que estamos buscando, o para que guarde las nuevas que estamos cargando.

Estas peticiones se realizan mediante **AJAX** y para ello se usa de forma mayoritaria **JQuery** pero también existen otras librerias que facilitan el trabajo. Una de estas es [Superagent](https://github.com/visionmedia/superagent). Vamos a usar esta librería para realizar estas operaciones.

Instalamos la librería:

```shell
  $ npm i --save superagent
```

Pasaremos el array que contiene todas las `pictures` al `server.js`. Aquí crearemos una nueva ruta `/api/pictures`, a donde dirigiremos nuestra petición `GET`.

```javascript
...
app.get('/api/pictures', function (req, res) {
  var pictures = [
    {
      user: {
        username: 'jjpalacios',
        avatar: 'https://scontent.fmad3-2.fna.fbcdn.net/v/t1.0-1/1972521_10201354093120395_628733009_n.jpg?oh=acdb3db08b86f518d6e0c42e02d21a40&oe=57C68D61'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'jjpalacios',
        avatar: 'https://scontent.fmad3-2.fna.fbcdn.net/v/t1.0-1/1972521_10201354093120395_628733009_n.jpg?oh=acdb3db08b86f518d6e0c42e02d21a40&oe=57C68D61'
      },
      url: 'office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)

    },
    {
      user: {
        username: 'jjpalacios',
        avatar: 'https://scontent.fmad3-2.fna.fbcdn.net/v/t1.0-1/1972521_10201354093120395_628733009_n.jpg?oh=acdb3db08b86f518d6e0c42e02d21a40&oe=57C68D61'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function () {
    res.send(pictures);
  }, 1000)
})
  ...
```

Nuestro `homepage/index.js` queda de la siguiente forma, una vez que hemos añadido `superagent`.

```javascript
var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');

page('/', loadPictures, function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  empty(main).appendChild(template(ctx.pictures));
})

function loadPictures(ctx, next) {
  request
    .get('/api/pictures')
    .end(function (err, res) {
      if (err) return console.log(err);

      ctx.pictures = res.body;
      next();
    })
}
```

La función `loadPictures` se encarga de realizar la petición asíncrona. Hacemos un `request` a la dirección `/api/pictures`. Cuando obtenemos una respuesta, comprobamos si se ha producido algún error, en caso contrario devolvemos la respuesta en la variable de contexto, `ctx.pictures` y damos paso a la siguiente función.

### Modificando el comportamiento del header
Vamos a modificar el comportamiento de nuestra página del `home`. Esta página cada vez que la actualizamos se borra la cabecera con la navegación y se vuelve a mostrar una vez hemos obtenido todas las `pictures`. Un mejor comportamiento sería que cuando se actualiza solo se borre las `pictures` pero no la cabecera y el footer. También cuando se carga or primera vez debe mostrar primero la cabecera y el footer y luego cuando ya se han obtenido las pictures se insertan estas.

Para eso vamos a pasar el header a una carpeta nueva, es decir, vamos a crear un nuevo módulo para ella. Ahí meteremos todo el código. Entonces el archivo `header/index.js` quedara como sigue.

```javascript
var yo = require('yo-yo');
var translate = require('../translate');

var el = yo `
    <nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 offset-m1">
              <a href="/" class="brand-logo platzigram">Platzigram</a>
            </div>
            <div class="col s2 m6 push-s10 push-m10">
              <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                <i class="fa fa-user" aria-hidden="true"></i>
              </a>
            </div>
            <ul id="drop-user" class="dropdown-content">
              <li><a href="#">${translate.message('logout')}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `;

document.getElementById('header-container').appendChild(el);

```

Necesitamos también un nuevo contenedor en nuestra vista que hemos definido como `#header-container`. El archivo `views/index.pug` quedará como sigue.

```jade
...
body
  section#header-container
  section#main-container

...
```
Pero en las páginas de `/signin` y `/signup` no debría aparecer la cabecera ya todavía no nos hemos logado.
Por ello vamos a modificar el archivo `header/index.js` para convertirlo en un middleware.

```javascript

module.exports = function (ctx, next) {
  var container = document.getElementById('header-container');
  empty().appendChild(el);
  next();
}
```
Sacaremos el `require('/header')` del `src/index,js` y vamos a añadir antes que nada este middleware en `home/index.js`

```javascript
...

var request = require('superagent');
var header = require('../header');

page('/', header, loadPictures, function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  empty(main).appendChild(template(ctx.pictures));
})

...
```

## 28 - Obteniendo una respuesta del servdor con Axios

Otra forma de resolver las peticiones al servidor de forma asíncrona es mediante `promesas`.

Las promesas es una novedosa forma de implementar y encadenar peticiones asíncronas. Pensemos que si necesitamos realizar varias peticiones al servidor, por ejemplo, pedimos primero el listado de `pictures ` que tenemos, una vez lo tengamos vamos a pedir el detalle de una de ellas y cuando lo tengamos necesitamos pedir todos los comentarios que se han añadido a esta. Incluso podríamos seleccionar un comentario y pedir nuevamente detalles de es comentario. Y así, sucesivamente.

El anterior ejemplo resulto mediante callbacks nos crearía un código horizontal con un callback que anida otro, que anida otro, que ... y así sucesivamente. Con lo que eso supone en cuanto a tratamiento de errores, etc..

El uso de promesas por contra nos crea un código vertical y al final una función que captura todos los errores.

Veamos como. Primero instalamos la librería.

```shell
 $ npm i --save Axios
```

Y ahora modificamos el código de `loadPictures` en `homepage/index,js` de acuerdo a la nueva librería.

```javascript

function loadPicturesAxios(ctx, next) {
  axios
  .get('/api/pictures')
  .then(function (res) {
    ctx.pictures = res.data;
    next();
  })
  .catch(function (err) {
    console.log(err);
  })
}
```

La diferencia con `superagent` es que hemos sacado el tratamiento de errores del callback que hace la petición. La función asícrona o prmesa se llama `then()` y la que captura los errores `catch()`. Podemos encadenar tantas funciones `then()` como necesitemos y al final una única función `catch()` tendrá el error de la promesa que falló.

## 29 - Obteniendo una respuesta del servidor con  Fech API

Fecth es una implementación nativa en los navegadores, por tanto no necesitamos incorporar ñibrería alguna. Desafortunadamente no todos los navegadores soportan a día de hoy `fecth`. En [Can I use](http://caniuse.com/) podemos comprobar que navegadores soportan esta característica de forma nativa. ***Firefox*** y ***Chrome*** desde la versión 45 y ***Opera*** desde la versión 37.

Para los navegadores que no soportan `window.fetch` existe un [***window.fetch polyfill***](https://github.com/github/fetch).

Veamos como sería la sintaxsis.

```javascript
```