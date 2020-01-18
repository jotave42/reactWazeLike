const express = require("express");

const app = express();
app.get("/",( request, respsone ) =>{

    return respsone.json( { message : "hello world" } );

});

app.listen(3333);
