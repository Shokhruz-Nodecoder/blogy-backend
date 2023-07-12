const { v4: uuid } = require("uuid");

const pg = require("../../libs/pg");
const path = require("path");

const create = async (req, res) => {
  const { image } = req.files;
  const { text } = req.body;

  const imageName = `${uuid()}${path.extname(image.name)}`;
  image.mv(process.cwd() + "/uploads/" + imageName);
  const newTravel = await pg(
    "insert into travel (image,text) values($1,$2)",
    imageName,
    text
  );

  res.status(200).json({ message: "success" });
};

module.exports = {create};
