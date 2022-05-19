const { Pool } = require ('pg');

// const pool = new Pool({
//     host: 'pruebast2022.cypym5wo7yt3.us-east-1.rds.amazonaws.com',
//     port: 5432,
//     user: 'servici1',
//     password: 'rdsAdmin*tiv2',
//     database: 'testProject'
// });

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'RMG2806',
    database: 'users'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.send('users');
}

module.exports = {
    getUsers
}