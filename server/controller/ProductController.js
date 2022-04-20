const Product = require("../models/product");
const Classify = require("../models/classify");

class ProductController {
  //update lai một trường dữ liệu trong sản phẩm
  updateProduct(id, Obj) {
    return Product.updateOne({ _id: id }, { ...Obj });
  }

  //lấy ra sản phẩm theo id
  getProductById(id) {
    return Product.findById(id);
  }

  // kiểm tra thương hiệu đó có tồn tại không
  checkClassify(classify) {
    return Classify.findOne({ name: classify }).then((data) => {
      if (Boolean(data)) {
        return false;
      }
      return true;
    });
  }

  // lấy ra tất cả sản phẩm của thương hiệu bất kỳ
  async getProductByClassify(classify) {
    const check = await this.checkClassify(classify);
    if (!check) {
      const data = await Product.find({ classify });
      return {
        err: false,
        data,
      };
    }
    return {
      err: true,
      data: [],
    };
  }

  // lấy dữ liệu trang home
  async getHome() {
    const arr = await Classify.find();
    const classifys = arr.map((item) => item.name);
    const promises = classifys.map((item) =>
      this.getProductByClassify(classifys).limit(2)
    );
    return Promise.all(promises);
  }
}

module.exports = new ProductController();
