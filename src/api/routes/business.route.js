const {Router} = require("express")
const isAuth = require("../middlewares/isAuth")
const { create } = require("../controllers/business.controller")
const router = new Router()


router.post("/business",isAuth,create)


module.exports = router