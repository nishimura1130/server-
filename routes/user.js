const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

// router.use(mylogger);


router.get("/", mylogger ,(req, res) => {
  res.send("user001");
});

router.get("/info", (req, res) => {
  res.send("user002");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました。`);
});
router.post("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました。`);
});
router.delete("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました。`);
});

// ミドルウェア(中間の)
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// 仕様の変更がある。
//postメソッド
//patchメソッド
// deleteメソッド

module.exports = router;


