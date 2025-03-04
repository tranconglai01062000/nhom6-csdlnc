import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import LoginPage from "./loginForm";
import RegisterPage from "./registerForm";

import styles from "./index.module.scss";

import logo from "./logo.png";
export default function Header() {
  const [isloginPage, setIsLoginPage] = useState(true);
  // xử lý việc đóng mở form
  function handleOpenOrCloseForm(display) {
    document.querySelector(`#${styles.overlay}`).style.display = `${display}`;
  }

  useEffect(() => {
    const close_icon = document.querySelector(`#${styles.close_icon}`);
    const overlay = document.querySelector(`#${styles.overlay}`);
    const form_input = document.querySelector(`#${styles.form_input}`);
    const btn_sub = document.querySelector(`#${styles.btn_sub}`);
    //xử lý đóng form
    close_icon.addEventListener("click", () => {
      handleOpenOrCloseForm("none");
    });

    overlay.addEventListener("click", (e) => {
      handleOpenOrCloseForm("none");
    });

    //Ngăn chặn sự kiện click vào form
    form_input.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // mở form
    const open = document.querySelector(`#${styles.form}`);
    open.addEventListener("click", () => {
      handleOpenOrCloseForm("block");
    });
  }, []);

  console.log("re-render", isloginPage);
  return (
    <>
      <div id={styles.header}>
        <div className={styles.header_item}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className={styles.header_item}>
          <ul id={styles.nav_bar}>
            <li className={styles.nav_bar_item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                Trang chủ
              </NavLink>
            </li>
            <li className={styles.nav_bar_item}>
              <NavLink
                to="gioi-thieu"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                Giới thiệu
              </NavLink>
            </li>
            <li className={styles.nav_bar_item}>
              <NavLink
                to="san-pham"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                Sản phẩm
              </NavLink>
            </li>
            <li className={styles.nav_bar_item}>
              <NavLink
                to="lien-he"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>

          <div id={styles.user}>
            <div id={styles.form}>
              <span to="user">
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </div>
            <div id={styles.cart}>
              <NavLink to="cart">
                <ion-icon name="cart-outline"></ion-icon>
              </NavLink>
              <div id={styles.amount}>0</div>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.overlay}>
        <div id={styles.form_input}>
          <div id={styles.close_icon}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
          <div className={styles.form_item}>
            <img
              src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
              alt=""
            />
          </div>
          {isloginPage ? (
            <LoginPage
              ischeck={{
                isloginPage,
                setIsLoginPage,
              }}
            ></LoginPage>
          ) : (
            <RegisterPage
              ischeck={{
                isloginPage,
                setIsLoginPage,
              }}
            ></RegisterPage>
          )}
        </div>
      </div>
    </>
  );
}
