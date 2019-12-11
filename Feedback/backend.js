const sqlite3 = require('sqlite3').verbose();
const dbName = 'feedback.db';

class DBError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'DBError';
    }
}
class ArgumentError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'ArgumentError';
    }
}
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'NotFoundError';
    }
}

const initialSetup = () => {
    db = new sqlite3.Database(dbName, (err)=> {
        if (err)
            throw new DBError(`Failed to create database ${dbName}: ${err}`);
    });
    db.run(`
    create table if not exists feedback(
        id integer primary key,
        foodId integer not null,
        rating integer not null,
        description text,
        gender text,
        countryName text,
        upperAge integer,
        lowerAge integer
    );
    `);
    console.log(db);
    db.close()
};

const connect = () => {
    db = new sqlite3.Database(dbName, (err) => {
        if (err)
            throw new DBError(`Failed to connect to database ${dbName}: ${err}`);
    });
    console.log(db);
    return db;
};

const convertToInt = (value, arguName) => {
    const intVal = parseInt(value);
    if (isNaN(intVal)) throw new ArgumentError(`${arguName} must be an int. Actual: ${value}`);
    return intVal;
}

const createFeedback = (rating, foodId, info = {}) => {
    rating = convertToInt(rating, 'rating');
    if (rating < 1 || rating > 5) {
        throw new ArgumentError(`rating must be in range 1-5. Actual: ${rating}`);
    }

    foodId = convertToInt(foodId, 'foodId');

    if (info.upperAge) info.upperAge = convertToInt(info.upperAge, 'upperAge');
    if (info.lowerAge) info.lowerAge = convertToInt(info.lowerAge, 'lowerAge');

    const sql = `
    insert into feedback 
    (foodId, rating, description, gender, countryName, upperAge, lowerAge) 
    values (?, ?, ?, ?, ?, ?, ?);
    `;
    const db = connect();
    db.run(sql, [
        foodId, 
        rating, 
        info.description, 
        info.gender, 
        info.countryName, 
        info.upperAge, 
        info.lowerAge, 
    ]).close();
};

const readFeedbackById = (id) => {
    id = convertToInt(id, 'id');
    const sql = `select * from feedback where id = ?;`;
    const db = connect();

    let feedback = {};
    db.get(sql, [id], (err, row) => {
        console.log(row);
    }).close();
    return feedback;
};
const readFeedbackByFoodId = (foodId) => {
    foodId = convertToInt(foodId, 'foodId');
    const sql = `select * from feedback where foodId = ?;`;
    const db = connect();
    let feedback = [];
    db.all(sql, [foodId], (err, row) => {
        console.log(row);
    }).close();
    return feedback;
};
const updateFeedback = (id, rating, foodId, info = {}) => {
    id = convertToInt(id, 'id');
    rating = convertToInt(rating, 'rating');
    if (rating < 1 || rating > 5) {
        throw new ArgumentError(`rating must be in range 1-5. Actual: ${rating}`);
    }

    foodId = convertToInt(foodId, 'foodId');

    if (info.upperAge) info.upperAge = convertToInt(info.upperAge, 'upperAge');
    if (info.lowerAge) info.lowerAge = convertToInt(info.lowerAge, 'lowerAge');

    const sql = `
    update feedback 
        set foodId = ?, 
        rating = ?, 
        description = ?, 
        gender = ?, 
        countryName = ?, 
        upperAge = ?, 
        lowerAge = ? 
    where id = ?;
    `;
    const db = connect();
    db.run(sql, [
        foodId, 
        rating, 
        info.description, 
        info.gender, 
        info.countryName, 
        info.upperAge, 
        info.lowerAge, 
        id, 
    ]).close();
}

const deleteFeedback = (id) => {
    id = convertToInt(id, 'id');
    const sql = `delete from feedback where id = ?;`;
    const db = connect();
    db.run(sql, [id]).close();
};




exports.DBError = 'DBError';
exports.ArgumentError = 'ArgumentError';
exports.NotFoundError = 'NotFoundError';
exports.initialSetup = initialSetup;
exports.createFeedback = createFeedback;
exports.readFeedbackById = readFeedbackById;
exports.readFeedbackByFoodId = readFeedbackByFoodId;
exports.updateFeedback = updateFeedback;
exports.deleteFeedback = deleteFeedback;