const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");
const corsOptions = {
  // origin: "http://localhost:8080",
  // origin: "https://generasiunggul.com",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// Require API routes
const users = require("./routes/users");
const laptop = require("./routes/laptop");

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

// UPLOAD
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
// Import API Routes
app.use(users);
app.use(laptop);

// Start standalone server if directly running
// module.exports = app;

// if (require.main === module) {
//   const port = process.env.PORT || 3002;
//   app.listen(port, () => {
//     console.log(`API server listening on port ${port}`);
//   });
// }

// PRODUCTION MERGE WITH NUXT
module.exports = {
  path: "/api",
  handler: app,
};
