var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
});

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Platzigram'});
})

app.get('/signup', function (req, res) {
  res.render('index', {title: 'Platzigram | Signup'});
})

app.get('/signin', function (req, res) {
  res.render('index', {title: 'Platzigram | Signin'});
})

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
});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).send("Error uploading file");
    }
    res.send('File uploaded');
  })
})


app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})
