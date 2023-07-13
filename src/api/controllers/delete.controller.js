const pg = require("../../libs/pg");

const deleteBusiness = async (req, res) => {
  const { id } = req.params;

  try {
    const checkId = await pg("select id from business where id = $1", id);
    const result = await pg(`delete from business where id = $1`, id);
    console.log(result);
    if (checkId.length == 0) {
      return res.status(403).json({ message: "unsuccessful delete" });
    }
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: error.message });
  }
};

const deleteCulture = async (req, res) => {
  const { id } = req.params;
  try {
    const checkId = await pg("select id from culture where id = $1", id);

    const result = await pg(`delete from culture where id = '${id}'`);
    console.log(result);
    if (checkId.length == 0) {
      return res.status(403).json({ message: "unsuccessful delete" });
    }

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: error.message });
  }
};

const deletePolitics = async (req, res) => {
  const { id } = req.params;
  try {
    const checkId = await pg("select id from politics where id = $1", id);

    const result = await pg(`delete from politics where id = '${id}'`);
    console.log(result);
    if (checkId.length == 0) {
      return res.status(403).json({ message: "unsuccessful delete" });
    }

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: error.message });
  }
};

const deleteTravel = async (req, res) => {
  const { id } = req.params;
  try {
    const checkId = await pg("select id from travel where id = $1", id);

    const result = await pg(`delete from travel where id = '${id}'`);
    console.log(result);
    if (checkId.length == 0) {
      return res.status(403).json({ message: "unsuccessful delete" });
    }

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: error.message });
  }
};
module.exports = {
  deleteBusiness,
  deleteCulture,
  deletePolitics,
  deleteTravel,
};
