const {Router} = require("express")
const {deleteBusiness,deleteCulture, deletePolitics, deleteTravel} = require("../controllers/delete.controller")

const router = new Router()


router.delete("/deleteBusiness/:id", deleteBusiness)
router.delete("/deleteCulture/:id", deleteCulture)
router.delete("/deletePolitics/:id", deletePolitics)
router.delete("/deleteTravel/:id", deleteTravel)
module.exports = router