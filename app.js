var express = require('express');
var app  = express();

// Routes to handle Parameters and Query Strings

// get method is declared having car as a path
app.get('/car', function(req, res){
    res.json({ querystring_color: req.query.color });
});
// get method is declared having shirt as a path
app.get('/shirt', function(req, res){
    res.json({ querystring_size: req.query.size });
});

app.listen(3000, () => console.log('server is running'));