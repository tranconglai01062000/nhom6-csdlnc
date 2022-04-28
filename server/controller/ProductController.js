const Product = require("../models/product");
const Classify = require("../models/classify");
import Product from '../models/product';
import formidable from 'formidable';
import fs from 'fs';
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
//thêm sản phẩm 
 export const creat = (req, res) => {
	 let form = new formidable.IncomingForm();
	 form.keepExtensions = true;
	 form.parse(req,(err ,fields,files) => {
		if(err){
			return res.status(400).json({
				error:"Thêm sản phẩm không thành công"
			})
		} 
		const (name, description,price) = fields;
		if(!name || !description || !price) {
			return res.status(400).json({
				error: "Bạn cần nhập đầy đủ thông tin"
			})
			
		}
		let product = new Product(fields);
		if (files.photo) {
			if(files.photo.size > 100000){
				res.status(400).json({
					error: "Bạn nên upload ảnh dưới 1MB"
				});
			}	
			product.photo.data = fs.readFileSync(file.photo.path);
			product.photo.type =files.photo.path;
		}
		product.save((err, data)=>{
			if(err){
				res.status(400).json({
					error: "Khong them duoc san pham"
				});
			}
			res.json(data);
		});
		
	 });
 }
