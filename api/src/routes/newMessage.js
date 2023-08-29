// utils
const { sql } = require("../utils");

const newMessage = async (req, res) => {
  try {
    const { content, title } = req.body;
    await sql("INSERT INTO solace SET content=?, title=?", [content, title]);
    res.status(200).json("updated");
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

module.exports = newMessage;
