const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Konfigurasi aplikasi
app.set('port', (process.env.PORT || 5000));

// Mempersiapkan aplikasi ekspress
app.use(morgan('dev')); // Mencatat tiap request ke konsol
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json()); 

// rute aplikasi
require('./routes/webhook_verify')(app);

// proses menjalankan engine
app.listen(app.get('port'), function() {
  const url = 'http://localhost:' + app.set('port');
  console.log('Application running on port: ', app.get('port'));
});