import React from "react";
import "./style.scss";
import { Input } from "antd";
const From = () => {
  return (
    <div className="background_form text-center">
      <h2 className="font-semibold text-2xl pt-4 text-white">ĐĂNG KÍ TƯ VẤN</h2>
      <form>
        <Input placeholder="Họ Và tên" />
        <Input placeholder="Số điện thoại" type="number" />
        <Input placeholder="email" type="email" />
        <Input.TextArea placeholder="Lời nhắn"  className="mt-3 h-24"  />
      </form>
      <button className="font-semibold text-xl ">Đăng kí</button>
    </div>
  );
};

export default From;
