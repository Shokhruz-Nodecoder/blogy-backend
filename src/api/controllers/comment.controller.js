const pg = require("../../libs/pg")

const createComment = async (req,res)=>{
    const {name,email,website,message} = req.body

    await pg("insert into comment (name,email,website,message) values ($1,$2,$3,$4)", name, email, website, message)

    res.status(200).json({message: "success"})
}


module.exports = {createComment}