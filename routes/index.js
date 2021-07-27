var express = require("express");
var router = express.Router();
var { sendFCM } = require("../function/sendFCM");
var { SelectStoreToken } = require("../function/database/store");

router.get("/", function (req, res, next) {
  res.render("index");
});

// QS_020 주문알림
router.post("/send", function (req, res, next) {
  console.log("1. send 시작 > ", req.body, "-", Date());
  SelectStoreToken(req.body.UserPayId)
    .then((resSelectStoreToken) => {
      console.log("2. SelectStoreToken success -", Date());
      sendFCM(resSelectStoreToken.Token, resSelectStoreToken.StoreId )
        .then(() => {
          res.json({ success: true,info: resSelectStoreToken.StoreId });
          console.log("3. sendFCM success - /send 완료", Date());
          console.log();
        })
        .catch((err) => {
          res.json({ success: false, msg: 'fcm error' });
          console.log("3. sendFCM catch > ", err, "- /send 완료", Date());
          console.log();
        });
    })
    .catch((err) => {
      res.json({ success: false, msg: err });
      console.log("2. SelectStoreToken catch > ", err, "- /send 완료", Date());
      console.log();
    });
});

module.exports = router;
