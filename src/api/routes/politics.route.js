const {Router} = require("express")
const isAuth = require("../middlewares/isAuth")
const { create } = require("../controllers/politics.controller")

const router = new Router()
router.post("/addPolitics", isAuth, create)

module.exports = router