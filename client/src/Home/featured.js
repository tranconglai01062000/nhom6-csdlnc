import { Link } from "react-router-dom";

import styles from "./index.module.scss";

export default function FeaturedProduct() {
  return (
    <>
      <div id={styles.content}>
        <div id={styles.header_title}>
          <h1>Sản phẩm nổi bật</h1>
        </div>
        <div id={styles.list_product}>
          <div className={styles.list_product_item}>
            <div className={styles.classify}>
              <span>Nike</span>
            </div>
            <div className={styles.product_item}>
              <Link to="" className={styles.items}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg')`,
                  }}
                ></div>
                <div className={styles.product_information}>
                  <div className={styles.product_name}>
                    <span>Tên sản phẩm</span>
                  </div>
                  <div className={styles.product_price}>
                    <span>1.000.000đ</span>
                  </div>
                </div>
                <div className={styles.details_btn}>
                  <span>Chi tiết</span>
                </div>
              </Link>
              <Link to="" className={styles.items}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg')`,
                  }}
                ></div>
                <div className={styles.product_information}>
                  <div className={styles.product_name}>
                    <span>Tên sản phẩm</span>
                  </div>
                  <div className={styles.product_price}>
                    <span>1.000.000đ</span>
                  </div>
                </div>
                <div className={styles.details_btn}>
                  <span>Chi tiết</span>
                </div>
              </Link>
              <Link to="" className={styles.items}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg')`,
                  }}
                ></div>
                <div className={styles.product_information}>
                  <div className={styles.product_name}>
                    <span>Tên sản phẩm</span>
                  </div>
                  <div className={styles.product_price}>
                    <span>1.000.000đ</span>
                  </div>
                </div>
                <div className={styles.details_btn}>
                  <span>Chi tiết</span>
                </div>
              </Link>
            </div>
            <div className={styles.views_all_product}>
              <Link to="">Tất Cả sản phẩm</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
