const { v4: uuid } = require("uuid");
const pg = require("../../libs/pg");
const path = require("path");

const create = async (req, res) => {
  const { image } = req.files;
  const { title, by_who, text } = req.body;

  const imageName = `${uuid()}${path.extname(image.name)}`;
  image.mv(process.cwd() + "/uploads/" + imageName);

  const newPolitics = await pg(
    "insert into politics(image,title,by_who,text) values ($1,$2,$3,$4)",
    imageName,
    title,
    by_who,
    text
  );

  res.status(200).json({message: "Success!"})
};


module.exports = {create}