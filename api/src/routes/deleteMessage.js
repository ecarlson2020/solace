// utils
const { sql } = require("../utils");

const newMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await sql("DELETE FROM solace where id=?", [id]);
    res.status(200).json("deleted");
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

module.exports = newMessage;
