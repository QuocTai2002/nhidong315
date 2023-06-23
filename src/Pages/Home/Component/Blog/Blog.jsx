import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";
import "./style.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
const data = [{
  tieuDe:'Viêm xoang gây nên những biến chứng nghiêm trọng gì',
  hinhAnh:'https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/gfgf-01.png',
  text:'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  tieuDe:'Viêm xoang gây nên những biến chứng nghiêm trọng gì',
  hinhAnh:'https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/gfgf-01.png',
  text:'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  tieuDe:'Viêm xoang gây nên những biến chứng nghiêm trọng gì',
  hinhAnh:'https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/gfgf-01.png',
  text:'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  tieuDe:'Viêm xoang gây nên những biến chứng nghiêm trọng gì',
  hinhAnh:'https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/gfgf-01.png',
  text:'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  tieuDe:'Viêm xoang gây nên những biến chứng nghiêm trọng gì',
  hinhAnh:'https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/gfgf-01.png',
  text:'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  tieuDe:'Viêm xoang gây nên những biến chứng nghiêm trọng gì',
  hinhAnh:'https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/gfgf-01.png',
  text:'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
]
const Blog = () => {
 const Navigate = useNavigate()
  return (
    <>
      <div className="py-10">
        <h1 className="text-center font-bold text-3xl">BÀI VIẾT MỚI NHẤT</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper py-10"
        >
          {
            data?.map((items)=>{
              
            return <SwiperSlide>
            <div>
              <img
                src={items.hinhAnh}
                alt="#"
              />
              <h2>{items.tieuDe}</h2>
              <p>{items.text}</p>
            </div>
            <div className="blog_transition">
                <div>
                <button onClick={()=>{Navigate('/blog/content')}} >Đọc Thêm</button>
                </div>
                
            </div>
          </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </>
  );
};

export default Blog;
