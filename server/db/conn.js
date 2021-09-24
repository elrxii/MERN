var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./jobs.db');

db.each("SELECT * FROM Jobs", function(err, row) {
    console.log(row.company_name, row.location, row.link);
});