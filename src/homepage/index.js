var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');


  var pictures = [
    {
      user: {
        username: 'jjpalacios',
        avatar: 'https://scontent.fmad3-2.fna.fbcdn.net/v/t1.0-1/1972521_10201354093120395_628733009_n.jpg?oh=acdb3db08b86f518d6e0c42e02d21a40&oe=57C68D61'
      },
      url: 'office.jpg',
      likes: 10,
      liked: true,
      createdAt: new Date()
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

  empty(main).appendChild(template(pictures));
})
