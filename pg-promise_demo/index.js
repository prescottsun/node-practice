const db = require("./conn.js");

db.query(
    "Select * from ceos"
    ).then(function(response){
    response.map(function(ceo) {
        console.log(ceo.name);
    });
});