const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'html');
app.use('/views', express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', (req, res, next) => {
  try {
    res.status(200).send('Hello World');
  } catch(err) {
    res.status(500).send('Server Error');
  }
});

const server = http.createServer(app);

server.listen(9000, () => {console.log('server listen 9000')});

