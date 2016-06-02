var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

var main = document.getElementById('main-container')

page('/', function (ctx, next) {
  main.innerHTML = '<a href="/Signup">Signup</a>';
})

page('/signup', function (ctx, next) {
  var el = yo `    <div class="container">
        <div class="row">
          <div class="col s10 push-s1">
            <div class="row">
              <div class="col m5 hide-on-small-only">
                <img class="iphone" src="iPhone.png" alt="">
              </div>
              <div class="col s12 m7">
                <div class="row">
                  <div class="signup-box">
                    <h1 class="platzigram">Platzigram</h1>
                    <form action="" class="signup-form">
                      <h2>Regístrate para ver fotos de tus amigos estudiando en Platzi</h2>
                      <div class="section">
                        <a href="" class="btn btn-fb waves-effect hide-on-small-only">Iniciar sesión con Facebook</a>
                        <a href="" class="btn btn-fb waves-effect hide-on-med-and-up">Iniciar sesión</a>
                      </div>
                      <div class="divider"></div>
                      <div class="section">
                        <input type="email" name="email" value="" placeholder="Correo electrónico">
                        <input type="text" name="name" value="" placeholder="Nombre completo">
                        <input type="password" name="password" value="" placeholder="Contraseña">
                        <input type="text" name="username" value="" placeholder="Nombre de usuario">
                        <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row">
                  <div class="login-box">
                    ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  empty(main).appendChild(el);
})

page();
