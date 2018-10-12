const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.get('/peanut', (req,res) => {
    res.send( {name:"peanut"} );
})


const PORT = 4200;
app.listen(PORT);