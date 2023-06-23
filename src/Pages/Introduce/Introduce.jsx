import React, { useEffect } from "react";
import LayoutWeb from "../../HOCs/LayoutWeb";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";

// import required modules
import { Navigation, Autoplay } from "swiper";
import BackToTop from "../../Componens/BackToTop/BackToTop";
const img_background =
  "https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-blue-glow-background-business-card-design-template-image_132608.jpg";
const Introduce = () => {
  useEffect(() => {
    // window.scroll(0,0)
  }, []);
  return (
    <LayoutWeb>
      <section className="mt-16">
        <div className="flex ">
          <img
            className="w-1/2 h-96"
            src="images/tap_the_bacSi.jpg"
            alt="#"
          />
          <div className="w-1/2">
            <div
              className="p-10 pr-72 h-full text-white"
              style={{
                backgroundImage: `url(${img_background})`,
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h2 className="py-5 font-semibold text-2xl">
                TIÊU CHÍ CỦA HỆ THỐNG 315
              </h2>
              <p className="text-lg">
                Mục tiêu đem lại sức khỏe cho người dân là nhiệm vụ trọng tâm
                của mình, hệ thống phòng khám 315 đã không ngừng phấn đấu và cải
                thiện chất lượng dịch vụ từng ngày. Có thể nói sức khỏe, sự yên
                tâm và hài lòng của khách hàng là thước đo chính xác nhất cho
                chất lượng của hệ thống phòng khám 315.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container w-4/5 mx-auto flex">
          <div className="w-1/2 flex items-center justify-center ">
            <img
              style={{ border: "5px solid #007dc1" }}
              className="rounded-ss-3xl rounded-ee-3xl "
              src="https://315healthcare.com/images/home/intro.png"
              alt="phòng khám 315"
            />
          </div>
          <div className="w-1/2 ">
            <h2 className="font-bold text-2xl text-center py-5">
              HỆ THỐNG PHÒNG KHÁM 315
            </h2>
            <p className="text-lg">
              Trong vô số các cơ sở y tế lớn nhỏ trên địa bàn thành phố Hồ Chí
              Minh hiện nay thì hệ thống phòng khám 315, được xem là địa chỉ uy
              tín nhận được nhiều sự tín nhiệm của đông đảo bệnh nhân mỗi khi có
              nhu cầu khám chữa bệnh bởi sự chất lượng từ dịch vụ khám và điều
              trị mà phòng khám mang lại. Hệ thống Phòng khám 315 được Sở Y tế
              thành phố thành phố Hồ Chí Minh cấp phép đi vào hoạt động từ nhiều
              năm nay. Đến nay hệ thống phòng khám 315 đã trải qua một quãng
              đường dài phát triển, lượng bệnh nhân ghé thăm phòng khám ngày một
              đông.
            </p>
            <div className="text-center py-9">
              <button className="py-2 px-5 bg-title-315 text-white rounded-lg font-semibold">
                Đặt lịch khám ngay
              </button>
            </div>

            <div className=" mt-7 flex justify-between items-end gap-3">
              <img
                className="w-48 rounded-lg h-32"
                src="images/daKhoa.jpg"
                alt="#"
              />
              <img
                className="w-48 rounded-lg"
                src="images/pk_nhi_san.jpg"
                alt="#"
              />
              <img
                className="w-48 rounded-lg"
                src="images/khamNhi.jpg"
                alt="#"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12" style={{ backgroundColor: "#00adef" }}>
        <div className="w-4/5 container mx-auto flex">
          <div className="w-1/2 flex items-center">
            <img className="w-40" src="images/logo_nhidong315.png" alt="" />
            <h2 className="text-white font-bold text-3xl">
              ĐỘI NGŨ BÁC SĨ <br />
              GIÀU KINH NGHIỆM
            </h2>
          </div>
          <div className="w-1/2">
            <p className="font-semibold text-lg text-white">
              Khi đến với phòng khám bạn sẽ được tiếp đón thân thiện, nhiệt tình
              và niềm nở bởi đội ngũ bác sĩ và nhân viên y tế giỏi, có kiến thức
              chuyên môn sâu với nhiều năm kinh nghiệm trong nghề. Các bác sĩ
              tại Hệ Thống Phóng Khám 315 không chỉ khiến người bệnh an tâm bởi
              trình độ chuyên môn cao, từng làm việc ở các bệnh viện đầu ngành
              mà họ còn là những người có tinh thần trách nhiệm, luôn hết lòng
              vì sức khỏe của bệnh nhân
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="flex mx-auto container w-4/5 gap-5">
          <div className="w-1/2">
            <h2 className="text-center py-5 font-bold text-2xl">
              CƠ SỞ VẬT CHẤT HIỆN ĐẠI <br /> THIẾT BỊ Y TẾ TỐI TÂN
            </h2>
            <p className="text-lg">
              Hệ thống phóng khám 315 còn đầu tư đầy đủ hệ thống máy móc, trang
              thiết bị y khoa tiên tiến được nhập khẩu từ các nước phát triển
              trên thế giới. Tất cả các máy móc tại đây được vận hành dưới sự
              kiểm tra nghiêm ngặt của các chuyên gia nhằm giúp bác sĩ chẩn đoán
              chính xác mức độ phát triển của bệnh lý.
            </p>
            <p className="pt-5 text-lg">
              Bệnh nhân cũng được bác sĩ thăm khám, tư vấn một cách kỹ lưỡng,
              tận tình trước khi bắt đầu tiến hành quá trình điều trị. Việc làm
              này là bước đệm để kết quả điều trị được nâng cao, thời gian điều
              trị được rút ngắn, nhằm giúp tiết kiệm tối đa chi phí cho người
              bệnh.
            </p>
          </div>
          <div className="w-1/2 introduce_img">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="images/ThietBi_01.jpg" alt="thietbi" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/ThietBi_02.jpg" alt="thietbi" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/ThietBi_03.jpg" alt="thietbi" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/ThietBi_04.jpg" alt="thietbi" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/ThietBi_05.jpg" alt="thietbi" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <BackToTop />
    </LayoutWeb>
  );
};

export default Introduce;
