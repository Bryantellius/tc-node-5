const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const config = require("./config");
const router = require("./routes");

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());

app.use(morgan("dev"));

app.use(express.static(join(__dirname, "../client/public")));

app.use("/api/v1", router);

app.use("*", (req, res, next) => {
  try {
    res.status(404).sendFile(join(__dirname, "../client/views/notfound.html"));
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ err, server_msg: "Something went wrong on the server :(" });
});

app.listen(config.port || 3000, () =>
  console.log("Server listening on port: " + (config.port || 5000))
);
