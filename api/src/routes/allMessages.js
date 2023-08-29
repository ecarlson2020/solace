// utils
const { sql } = require("../utils");

const allMessages = async (req, res) => {
  try {
    const rows = await sql("SELECT * FROM ball_forum");
    res.status(200).json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

module.exports = allMessages;
