var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/apiRoutes"))

require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://fitnesstracker:6Apples@ds057244.mlab.com:57244/heroku_slsrv8x9", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});