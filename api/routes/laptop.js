const { Router } = require("express");
const db = require("../config/db.js");
const router = Router();
const fs = require("fs");

router.get("/laptop", (req, res) => {
  db.query("SELECT * FROM laptop ORDER BY id desc", (err, rows) => {
    if (err) {
      return res.status(400).send({
        msg: err,
      });
    } else {
      //render ke view posts index
      return res.status(200).send({
        data: rows, // <-- data posts
      });
    }
  });
});

// STORE IMG
const index = function (req, res) {
  if (req.method == "POST") {
    var post = req.body;

    var merk = post.merk;
    var seri = post.seri;
    var content = post.content;
    var harga = post.harga;
    var stock = post.stock;

    if (!req.files) return res.status(400).send("No files were uploaded.");
    // console.log(nilai);
    var laptop = req.files.img;

    var lapName = Date.now() + laptop.name;
    var dir = `api/public/images`;
    // var dir = `public/images`
    laptop.mv(dir + lapName, (err) => {
      if (err) {
        return res.status(500).send({ error: err, msg: "fail move Laptop" });
      }

      var sql =
        "INSERT INTO `laptop`(`merk`,`seri`,`content`,`harga`,`stock`,`img`) VALUES ('" +
        merk +
        "','" +
        seri +
        "','" +
        content +
        "','" +
        harga +
        "','" +
        stock +
        "','" +
        lapName +
        "')";

      db.query(sql, (err, result) => {
        if (err) {
          return res.status(400).send({
            msg: err,
          });
        }
        return res.status(201).send({
          msg: "Data Saved",
          data: result,
        });
      });
    });
  } else {
    res.send("Laptop tersimpan");
  }
};

router.post("/laptop", index);

module.exports = router;
