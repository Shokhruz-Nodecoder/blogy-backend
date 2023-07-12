const { v4: uuid } = require("uuid");
const pg = require("../../libs/pg");
const path = require("path");

const create = async (req, res) => {
  const { image } = req.files;
  const { title, text } = req.body;
  const imageName = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imageName);
  const newBusiness = await pg(
    "insert into business(image, title, text) values($1,$2,$3)",
    imageName,
    title,
    text
  );

  res.status(200).json({ message: "Success!" });
};

module.exports = { create };
