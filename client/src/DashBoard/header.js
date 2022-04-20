import { memo } from "react";

import "./header.scss";

function Header() {
  console.log("Header admin re-render");
  return (
    <>
      <div id="admin_header--bar">
        <label htmlFor="control_form" id="admin_header--user">
          <div id="admin_header--icon-user">
            <ion-icon name="people-outline"></ion-icon>
          </div>
          <div id="admin_header--icon-down">
            <ion-icon name="caret-down-outline"></ion-icon>
          </div>
          <input type="checkbox" name="" id="control_form" hidden />
          <ul id="admin_header--control">
            <li className="admin_header--control-item">Cài đặt</li>
            <li className="admin_header--control-item">Hoạt động</li>
            <li className="admin_header--control-item">Đăng xuất</li>
          </ul>
        </label>
      </div>
    </>
  );
}

export default memo(Header);
