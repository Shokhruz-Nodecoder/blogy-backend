const auth = require("./auth.route");
const business = require("./business.route");
const culture = require("./culture.route");
const politics = require("./politics.route")
const travel = require("./travel.route")
const delete1 = require("./delete.route")
module.exports = [auth, business, culture,politics,travel,delete1];
