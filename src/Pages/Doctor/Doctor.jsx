import React, { useEffect } from "react";
import LayoutWeb from "../../HOCs/LayoutWeb";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import BackToTop from "../../Componens/BackToTop/BackToTop";
const Bacsi = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <LayoutWeb>
      <section className="py-12 mt-16 text-center text-white bg-nhiDong-315 text-3xl font-semibold ">
        <h2>ĐỘI NGŨ BÁC SĨ HỆ THỐNG 315</h2>
      </section>
      <main className="container w-4/5 mx-auto">
        <section className="doctor py-12">
          <h2 className="inline-block py-1 my-5 px-3 bg-nhiDong-315 text-white text-lg font-semibold">
            Bác sĩ nhi đồng 315
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="doctor py-12">
          <h2 className="inline-block py-1 my-5 px-3 bg-phuSan-315 text-white text-lg font-semibold">
            Bác sĩ phụ sản 315
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="doctor py-12">
          <h2 className="inline-block py-1 my-5 px-3 bg-daKhoa-315 text-white text-lg font-semibold">
            Bác sĩ đa khoa 315
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* <section className="doctor py-12">
          <h2 className="inline-block py-1 my-5 px-3 bg-LaoKhoa-315 text-white text-lg font-semibold">
            Bác sĩ lão khoa 315
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section> */}
        {/* <section className="doctor py-12">
          <h2 className="inline-block py-1 my-5 px-3 bg-mat-315 text-white text-lg font-semibold">
            Bác sĩ nhãn khoa 315
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative ">
              <div className="img_doctor">
              <img className="h-20" src="https://st.315healthcare.com//sr/display?op=resize&w=350&path=doctorIntro/profile/avatar/20211025/bs_khanh_van.jpg" alt="#" />
              </div>
              <div className="content_doctor text-center mt-20" >
                <p className="font-normal py-4" >
                  <span className="font-semibold text-lg" > Đỗ Thị Khánh Vân</span> <br />
                  Thạc sĩ - Bác sĩ Chuyên Khoa I Nhi
                  </p>
                  <p > <i> Trưởng PK Nhi Đồng 315 - CN Tân Bình / Cựu Bs Bệnh viện Nhi Đồng 1</i></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section> */}
      </main>
      <BackToTop />
    </LayoutWeb>
  );
};

export default Bacsi;
