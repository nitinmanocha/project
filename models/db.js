const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NodeDB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
