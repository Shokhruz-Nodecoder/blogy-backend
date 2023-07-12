const {Router} = require("express")
const isAuth = require("../middlewares/isAuth")
const { create } = require("../controllers/culture.controller")

const router = new Router()

router.post("/addCulture", isAuth, create)


module.exports = router