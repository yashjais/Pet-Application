"use strict";

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("./config/database"));

var _routes = _interopRequireDefault(require("./config/routes"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

dotenv.config();
var port = process.env.PORT || 3020;
var app = (0, _express["default"])();
(0, _database["default"])();
var corsOptions = {
  exposedHeaders: 'x-auth'
};
app.use((0, _cors["default"])(corsOptions));
app.use(_express["default"].json());
app.use('/', _routes["default"]);
app.listen(port, function () {
  console.log('listening on the port', port);
});