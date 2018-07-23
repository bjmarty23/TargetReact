let express = require('express');
let app = express();
let item = require('.routes/item.router.js');
let bodyParser = requires('body-parser');
let port = process.env.PORT || 5000;

//---------Middleware
app.use(express.static('build'));

//----------express routes
app.use('/item', item);

//----------start server
app.listen(port, function () {
    console.log('listening on Port: ', port);
});