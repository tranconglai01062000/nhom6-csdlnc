const Bill = require("../models/bill");
const Cart = require("../models/cart");

class BillController {
  // thanh toán
  payment(Obj) {
    try {
      const bill = new Bill(Obj);
      bill.save();
      return {
        err: false,
        message: "Success !!!",
      };
    } catch (error) {
      return {
        err: true,
        message: "there was an error during execution !!!",
      };
    }
  }

  // lấy ra những đơn hàng đã thanh toán
  getBillById(user_id) {
    return Bill.find({ user_id });
  }
}

module.exports = new BillController();
