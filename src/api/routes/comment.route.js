const {Router} = require("express")
const isAuth = require("../middlewares/isAuth")
const { createComment } = require("../controllers/comment.controller")

const router = new Router()
router.post("/comment", isAuth, createComment)


module.exports = router