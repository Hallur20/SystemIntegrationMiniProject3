const sqlite3 = require('sqlite3').verbose();

11
	
// let db = new sqlite3.Database('feedback.db');
	
let db = new sqlite3.Database('feedback.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(`${err}`);
    }
});



db.run('CREATE TABLE if not exists people(name text)');
db.run(`insert into people (name) values (?);`, ["bob"])

let sql = `select name from people where name = ?;`;
db.each(sql, ["bob"], (err, row) => {
    console.log(row)
});

db.close();