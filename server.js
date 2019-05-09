const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

//import middleware verify token
const verifyToken = require("./middleware/verifyToken");

app.use(express.json());

//authenticate admin
app.post("/autentikasi/admin", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    jwt.sign({ username: "admin" }, "randomStuff", function(err, token) {
      res.send({ success: true, token });
    });
  } else {
    res.send({ success: false });
  }
});

//implement middleware verify token
app.get("/", verifyToken, (req, res) => {
  res.json(req.user);
});

// include router /admin
app.use("/admin", require("./routes/adminRouter"));

// include router /pemateri
app.use("/pemateri", require("./routes/pemateriRouter"));

// include router /workshop
app.use("/workshop", require("./routes/workshopRouter"));

//include router /status
app.use("/status", require("./routes/statusRouter"));

app.listen(3000, function() {
  console.log("server running");
});
