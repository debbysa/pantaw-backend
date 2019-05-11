const express = require("express");
const app = express();

app.use(express.json());

// include router /admin
app.use("/admin", require("./routes/adminRouter"));

// include router /pemateri
app.use("/pemateri", require("./routes/pemateriRouter"));

// include router /workshop
app.use("/workshop", require("./routes/workshopRouter"));

//include router /status
app.use("/status", require("./routes/statusRouter"));

// include router /autentikasi
app.use("/autentikasi", require("./routes/autentikasiRouter"));

app.listen(3000, function() {
  console.log("server running");
});
