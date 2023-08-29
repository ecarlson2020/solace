const fs = require("fs");
const mysql = require("mysql2/promise");

// password
const password = fs.readFileSync("/home/ecarlson10/pw/0", "utf8").trim();

// db connection
const sql = async (query, fields) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "evroca_user",
    database: `evroca_db`,
    password,
  });
  const [rows] = await connection.execute(query, fields);
  connection.destroy();
  return rows;
};

module.exports = {
  sql,
};
