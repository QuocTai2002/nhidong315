import React, { useEffect } from "react";
import LayoutWeb from "../../HOCs/LayoutWeb";
import { Input } from "antd";
import './style.scss'
const Contact = () => {
  useEffect(()=>{
window.scroll(0,0)
  },[])
  return (
    <LayoutWeb>
      <main>
        <section className="mt-16 py-12 text-center font-bold text-white text-3xl " style={{backgroundColor:'#0084c6'}}>
          <h2 className="leading-10">HÃY LIÊN HỆ ĐẾN 315 CHÚNG TÔI SẼ HỔ TRỢ <br /> BẠN Ở MỌI LÚC, MỌI NƠI</h2>
        </section>
        <section className="background_contact">
          <div className="background_v2 py-12">
          <div className="flex rounded-xl  w-3/5 container mx-auto overflow-hidden " style={{boxShadow:'0 0 12px rgba(0, 0, 0, 0.12)'}}>
            <form className="w-1/2 py-5 px-7" style={{backgroundColor:'#0084c6'}}>
              <h2 className="font-bold text-2xl py-4 text-white" >Gửi lời nhắn cho chúng tôi</h2>
              <Input className="my-3" placeholder="Họ và tên"/>
              <Input className="my-3" placeholder="email"/>
              <Input className="my-3" placeholder="Số điện thoại"/>
              <Input.TextArea className="my-4" rows={4} placeholder="lời nhắn"/>
              <button className="font-semibold rounded-lg bg-white py-1 px-2 hover:bg-sky-200 hover:text-black duration-300 text-title-315" >Gửi lời nhắn</button>
            </form>
            <div className="content_contact w-1/2 p-5 bg-white">
              <h2 className="font-bold text-2xl py-4" >Liên hệ chúng tôi</h2>
              <ul>
                <li><i class="fa fa-map-marker-alt"></i><span> Địa chỉ: </span> <a href="https://www.google.com/maps/place/207B+Ho%C3%A0ng+V%C4%83n+Th%E1%BB%A5,+Ph%C6%B0%E1%BB%9Dng+8,+Ph%C3%BA+Nhu%E1%BA%ADn,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.7996402,106.6717913,17z/data=!3m1!4b1!4m6!3m5!1s0x31752928c2be7997:0xa25a4d15c48d9313!8m2!3d10.7996402!4d106.6717913!16s%2Fg%2F11csh95j1f?entry=ttu" target="blank">207B Hoàng Văn Thụ, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh, Vietnam</a></li>
                <li><i class="fa fa-phone"></i><span> Số điện thoại: </span> <a href="tel:+0901315315"> 0901.315.315</a></li>
                <li><i class="fa fa-envelope"></i><span>Email: </span> <a href="mailto:marketing@nhidong315.com"> marketing@nhidong315.com</a></li>
              </ul>
            </div>
          </div>
          </div>
         
        </section>
      </main>
    </LayoutWeb>
  );
};

export default Contact;
