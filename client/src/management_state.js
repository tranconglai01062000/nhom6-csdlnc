import axioisClient from "./axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

// Xử lý chuyển qua lại giữa login và register
function handleClick(isLoginPage, callback) {
  callback(!isLoginPage);
}

//Xử lý gửi form đăng nhập
function handleLogin(username, password, role = "USER_ROLE", redirect = "/") {
  if (!Boolean(username) || !Boolean(password)) {
    Swal.fire({
      icon: "error",
      text: "Vui lòng nhập đầy đủ thông tin....",
      timer: 1200,
    });
  } else {
    axioisClient
      .post("login", {
        username,
        password,
        role,
      })
      .then((res) => {
        if (res.err) {
          Swal.fire({
            icon: "error",
            text: "Tài khoản hoặc mật khẩu không đúng....",
            timer: 1200,
          });
        } else {
          Swal.fire({
            icon: "success",
            text: "Đăng nhập thành công...",
            timer: 1200,
          });
          setTimeout(() => {
            window.location.assign(`http://localhost:3000${redirect}`);
          }, 1200);
        }
        // console.log(res);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "Chưa thể xử lý....",
          timer: 1200,
        });
      });
  }
}

//Xử lý gửi form đăng ký
function handleRegsiter(
  username,
  password,
  confirmPassword,
  email,
  phone,
  address
) {
  if (
    username === "" ||
    password === "" ||
    confirmPassword === "" ||
    email === "" ||
    phone === "" ||
    address === ""
  ) {
    Swal.fire({
      icon: "error",
      text: "Vui lòng nhập đầy đủ thông tin....",
      timer: 1000,
    });
  } else if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      text: "Xác thực mật khẩu không đúng...",
      timer: 1000,
    });
  } else {
    axioisClient
      .post("register", {
        username,
        password,
        email,
        phone,
        address,
      })
      .then((res) => {
        if (res.err) {
          Swal.fire({
            icon: "error",
            text: "Tài khoản đã tồn tại...",
            timer: 1000,
          });
        } else {
          const time = 1200;
          Swal.fire({
            icon: "success",
            text: "Đăng ký thành công...",
            timer: time,
          });
          setTimeout(() => {
            window.location.assign("http://localhost:3000/");
          }, time);
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "Dữ liệu tại chưa được xử lý...",
          timer: 1000,
        });
      });
  }
}
export default {
  handleClick,
  handleLogin,
  handleRegsiter,
};
