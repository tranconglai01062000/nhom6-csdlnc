import axioisClient from "../axios";
import { useEffect } from "react";

import { useParams, Link } from "react-router-dom";

export default function Children() {
  const { slug } = useParams();

  // gọi api để lấy dữ liệu cho việc render
  // useEffect(() => {
  //   axioisClient.get(`/san-pham/${slug}`).then((res) => {
  //     console.log(res);
  //   });
  // }, [slug]);
  return (
    <>
      <div id="list_product">
        <div className="product_item">
          <Link to="" className="items">
            <div
              className="image"
              style={{
                backgroundImage: `url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg')`,
              }}
            ></div>
            <div className="product_information">
              <div className="product_name">
                <span>Tên sản phẩm</span>
              </div>
              <div className="product_price">
                <span>1.000.000đ</span>
              </div>
            </div>
            <div className="details_btn">
              <span>Chi tiết</span>
            </div>
          </Link>
        </div>
        <h1>{slug}</h1>
      </div>
    </>
  );
}
