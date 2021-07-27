const admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// fcm보내기!
const sendFCM = (Token,StoreId) => {
  return new Promise((resolve, reject) => {
    const message = {
      notification: {
        title: "주문알림",
        body: "신규주문이 들어왔습니다."
      },
      token: Token,
      data : {
        storeId : StoreId
      }
    };

    admin
      .messaging()
      .send(message)
      .then(function (response) {
        // Response is a message ID string.
        console.log("Successfully sent message:", response);
        resolve(true);
      })
      .catch((err) => {
        console.log("Error sending message:", err);
        reject(err);
      });
  });
};

exports.sendFCM = sendFCM;
