const express = require('express');
const app = express();

const port = 3000;

//middlewares
app.use(express.json());


//routes
app.use(require('./routes/index'));

app.listen(port, () => {
    console.log('En el puerto: ' + port);
});

