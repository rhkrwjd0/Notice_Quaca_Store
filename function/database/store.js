var conn = require("./connection");

// 매장토큰 가져오기
const SelectStoreToken = (UserPayId) => {
  return new Promise((resolve, reject) => {
    let query =
      "SELECT Token,StoreId FROM MUser WHERE StoreId=(SELECT StoreId FROM UserPay WHERE UserPayId=?)";
    console.log("SelectStoreToken SELECT data > " + UserPayId);
    conn.connection.query(query, [UserPayId], (error, rows) => {
      if (error) {
        console.log(UserPayId + " > SelectStoreToken error - ", Date());
        console.log(error);
        console.log("errno > " + error.errno);
        console.log("sqlMessage > " + error.sqlMessage);
        reject(error.sqlMessage);
      } else {
        console.log(UserPayId + " > SelectStoreToken success - ", Date());
        resolve(rows[0]);
      }
    });
  });
};

exports.SelectStoreToken = SelectStoreToken;
