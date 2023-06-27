import React from "react";
import { Link } from "react-router-dom";
import "./footerStyle.css";
const Footers = () => {
  return (
    <div className="footer_background">
      <footer className="container mx-auto max-[820px]:w-11/12 w-3/5">
        <div className="flex max-[391px]:flex-col  justify-around gap-6">
          <div className="w-2/6 max-[391px]:flex max-[391px]:w-full">
            <img
              className="w-36 max-[391px]:w-28 max-[391px]:h-28"
              src="images/logo_nhidong315.png"
              alt="nhi đồng 315"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cupiditate reprehenderit inventore dolor temporibus fuga quam
              aperiam vitae, obcaecati sit velit eos dicta ducimus neque modi
              pariatur. Sequi, quaerat velit?
            </p>
          </div>
          <div className=" w-1/6 max-[391px]:w-full ml-5">
            <h2 className="mb-6 text-xl  max-[391px]:mb-0 max-[391px]:-translate-x-4 ">liên Kết</h2>
            <ul className="list-disc  max-[391px]:flex ">
              <div >
              <li className="pb-2 hover:translate-x-3 duration-500">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="pb-2 hover:translate-x-3 duration-500">
                <Link to="/Doctor">Bác sĩ</Link>
              </li>
              <li className="pb-2 hover:translate-x-3 duration-500">
                <Link to="/Library">Thư viện</Link>
              </li>
              <li className="pb-2 hover:translate-x-3 duration-500">
                <Link to="/blog">Bài viết</Link>
              </li>
              </div>
              <div className="max-[391px]:ml-16">
              <li className="pb-2 hover:translate-x-3 duration-500">
                <Link to="/Q&A">Hỏi đáp</Link>
              </li>
              <li className="pb-2 hover:translate-x-3 duration-500">
                <Link to="/Introduce">Giới thiệu</Link>
              </li>
              <li className="pb-2 hover:translate-x-3 duration-500">
                <Link to="/Contact">Liên hệ</Link>
              </li>
              </div>
              
              
            </ul>
          </div>
          <div className="w-2/6  max-[391px]:w-full ">
            <h2 className="mb-6 text-xl  max-[391px]:mb-0 ">Liên hệ</h2>
            <ul className="">
              <li className="pb-2 footer_phone">
                <span>
                  <i class="fa fa-phone"></i> Điện thoại:{" "}
                </span>
                <a href="tel:0901315315" data-replace="0901.315.315">
                  <span> 0901.315.315</span>
                </a>
              </li>
              <li className="pb-2 footer_email">
                <span>
                  <i class="fa fa-envelope"></i> Email:{" "}
                </span>
                <a
                  href="mailto:marketing@nhidong315.com"
                  data-replace="marketing@nhidong315.com"
                >
                  <span> marketing@nhidong315.com</span>
                </a>
              </li>
              <li className="pb-2 footer_address">
                <span>
                  <i class="fa fa-home"></i> Văn phòng Chính:{" "}
                </span>
                <a
                  href="https://www.google.com/maps/place/207B+Ho%C3%A0ng+V%C4%83n+Th%E1%BB%A5,+Ph%C6%B0%E1%BB%9Dng+8,+Ph%C3%BA+Nhu%E1%BA%ADn,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.7996402,106.6692164,17z/data=!3m1!4b1!4m6!3m5!1s0x31752928c2be7997:0xa25a4d15c48d9313!8m2!3d10.7996402!4d106.6717913!16s%2Fg%2F11csh95j1f"
                  data-replace="207B Hoàng Văn Thụ, phường 8, Phú Nhuận, Thành phố Hồ Chí Minh"
                  target="blank"
                >
                  <span>
                    207B Hoàng Văn Thụ, phường 8, Phú Nhuận, Thành phố Hồ Chí
                    Minh
                  </span>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/6  max-[391px]:w-4/5 max-[391px]:flex  max-[391px]:gap-5 max-[391px]:text-center max-[391px]:items-center ">
            <h2 className="mb-6 max-[391px]:mb-0 text-xl">Follow Us</h2>
            <ul className="flex items-center  max-[391px]:gap-5 justify-between">
              <li className="text-center  ">
                <a href="https://www.facebook.com/hethongphongkhamnhidong315" target="blank">
                  <i class="w-10 h-10 bg-white hover:border-white border  hover:scale-125 hover:text-white duration-500 hover:bg-black text-blue-500 leading-10 text-xl rounded-full fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="text-center  ">
                {" "}
                <a href="https://www.youtube.com/@hethongphongkhamnhiong3159" target="blank">
                  <i class="w-10 h-10 bg-white hover:scale-125 border hover:border-white hover:text-white duration-500 hover:bg-black text-red-500 leading-10 text-xl rounded-full fab fa-youtube"></i>
                </a>
              </li>
              <li className="text-center ">
                <a href="" target="blank">
                  <i class="w-10 h-10 bg-white  hover:scale-125 border hover:border-white hover:text-white duration-500 hover:bg-black text-red-500 leading-10 text-xl rounded-full fab fa-google-plus-g"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
