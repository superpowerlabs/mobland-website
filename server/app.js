const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const path = require("path");
const cookieParser = require("cookie-parser");
const Logger = require("./lib/Logger");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiV1 = require("./routes/apiV1");
const { applyAll } = require("@superpowerlabs/salus");
const { config } = require("./salus.config");
process.on("uncaughtException", function (error) {
  Logger.error(error.message);
  Logger.error(error.stack);
});

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

app.use("/api/v1", apiV1);

app.use("/index.html", function (req, res) {
  res.redirect("/");
});

app.use("/healthcheck", function (req, res) {
  res.send("ok");
});

app.use("/hello", function (req, res) {
  res.json({
    hello: "world",
    from: process.env.WHEREAMI,
  });
});

app.get("/assets/MoblandWhitepaper.pdf", function (req, res) {
  const pdfPath = path.resolve(
    __dirname,
    "../public/assets/MoblandWhitepaper.pdf"
  );
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(pdfPath);
});

app.use(
  "/",
  expressStaticGzip(path.resolve(__dirname, "../bundle"), {
    enableBrotli: true,
  })
);

applyAll(app, config);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      title: "Error",
      message: err.message,
      error: err,
    });
  });
}

// error handler
app.use(function (err, req, res, next) {
  if (err.status !== 404) {
    console.debug(err);
    console.debug(err.status);
    console.debug(err.message);
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: "Error" });
});

module.exports = app;
