const { v4: uuid } = require("uuid");

const pg = require("../../libs/pg");
const path = require("path");

const create = async (req, res) => {
  const { image } = req.files;
  const { title, description } = req.body;

  const imageName = `${uuid()}${path.extname(image.name)}`;
  image.mv(process.cwd() + "/uploads/" + imageName);

  const newDescription = await pg(
    "insert into culture(image,title,description) values($1,$2,$3)",
    imageName,
    title,
    description
  );
  res.status(200).json({ message: "Success!" });

};

module.exports = { create };
