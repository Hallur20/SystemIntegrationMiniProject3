const sqlite3 = require('sqlite3').verbose();
const backend = require('./backend')
	
// let db = new sqlite3.Database('feedback.db');

backend.initialSetup();

backend.createFeedback('asdasd', 3, {
    description : 'noice',
    gender : 'nothing',
    countryName : 'dk',
    upperAge : 6,
    lowerAge : '1asas'
});
	
// let db = new sqlite3.Database('feedback.db');
// console.log(db);


// db.run('CREATE TABLE if not exists people(name text)');

// db.run(`insert into people (name) values (?);`, ["bob"])

// let sql = `select name from people where name = ?;`;
// db.each(sql, ["bob"], (err, row) => {
//     console.log(row)
// });

// db.close();