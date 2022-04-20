const bcrypt = require("bcrypt");
const saltRounds = 10;

const Account = require("../models/account");

class AccountController {
  async findAccount(Obj) {
    return await Account.findOne({ ...Obj }).then((data) => {
      return data;
    });
  }

  // Xử lý đăng ký tài khoản
  create_account(req, res) {
    const username = req.body.username;
    this.findAccount({ username, role: "USER_ROLE" }).then((data) => {
      if (!Boolean(data)) {
        // mã hóa password
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
          const newAccount = new Account({
            ...req.body,
            password: hash,
            role: "USER_ROLE",
          });
          newAccount.save();
          return res.json({
            err: false,
            information: {
              ...newAccount["_doc"],
            },
          });
        });
      } else {
        return res.json({
          err: true,
          information: {},
        });
      }
    });
  }

  // xử lý login cho user và admin
  login_page(req, res) {
    const username = req.body.username;
    const role = Boolean(req.body.role) ? req.body.role : "USER_ROLE";
    // return res.json({ role });
    this.findAccount({ username, role }).then((data) => {
      if (Boolean(data)) {
        bcrypt.compare(
          req.body.password,
          data.password,
          function (err, result) {
            if (result) {
              return res.json({
                err: false,
                data,
              });
            } else {
              return res.json({
                err: true,
                data: {},
              });
            }
          }
        );
      } else {
        return res.json({
          err: true,
          data: {},
        });
      }
    });
  }
}

module.exports = new AccountController();
