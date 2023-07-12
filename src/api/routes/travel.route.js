const {Router} = require("express")
const isAuth = require("../middlewares/isAuth")
const { create } = require("../controllers/travel.controlles")

const router = new Router()
router.post("/addTravel", isAuth, create)



module.exports = router
