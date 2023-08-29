// utils
const { sql } = require("../utils");

const updateMessage = async (req, res) => {
  try {
    const { content, title } = req.body;
    const { id } = req.params;
    await sql("UPDATE solace SET content=?, title=? WHERE id=?", [
      content,
      title,
      id,
    ]);
    res.status(200).json("updated");
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

module.exports = updateMessage;
