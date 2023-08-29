// utils
const { sql } = require("../utils");

const newMessage = async (req, res) => {
  try {
    console.log(req.params);
    res.status(200).json("updated");
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

module.exports = newMessage;
