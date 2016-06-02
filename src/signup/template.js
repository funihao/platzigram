var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo `<div class="col s12 m7">
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
            </div>`;

module.exports = landing(signupForm);
