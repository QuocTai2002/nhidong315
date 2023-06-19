import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";
import "./style.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Blog = () => {
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
          <SwiperSlide>
            <div>
              <img
                src="https://st.315healthcare.com//sr/display?op=resize&h=196&path=post/profile/avatar/20210824/240571681_394336045373828_570637457227938515_n.jpg"
                alt="#"
              />
              <h2>Nên cho bé ăn gì để tốt cho sức khỏe răng miệng?</h2>
              <p>
                Táo, cam, lê, và dưa hấu tươi đều có vị thơm ngon và tốt cho
                răng, loại quả nào càng cần nhai nhiều thì càng tốt cho răng
                miệng. Đương nhiên, các chất đường trong trái cây vẫn có thể gây
                sâu răng nhưng chúng vẫn tốt hơn nhiều so với các loại đường hóa
                học chứa trong kẹo công nghiệp.
              </p>
            </div>
            <div className="blog_transition">
                <div>
                <button >Đọc Thêm</button>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://st.315healthcare.com//sr/display?op=resize&h=196&path=post/profile/avatar/20210824/240571681_394336045373828_570637457227938515_n.jpg"
                alt="#"
              />
              <h2>Nên cho bé ăn gì để tốt cho sức khỏe răng miệng?</h2>
              <p>
                Táo, cam, lê, và dưa hấu tươi đều có vị thơm ngon và tốt cho
                răng, loại quả nào càng cần nhai nhiều thì càng tốt cho răng
                miệng. Đương nhiên, các chất đường trong trái cây vẫn có thể gây
                sâu răng nhưng chúng vẫn tốt hơn nhiều so với các loại đường hóa
                học chứa trong kẹo công nghiệp.
              </p>
            </div>
            <div className="blog_transition">
                <div>
                <button >Đọc Thêm</button>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://st.315healthcare.com//sr/display?op=resize&h=196&path=post/profile/avatar/20210824/240571681_394336045373828_570637457227938515_n.jpg"
                alt="#"
              />
              <h2>Nên cho bé ăn gì để tốt cho sức khỏe răng miệng?</h2>
              <p>
                Táo, cam, lê, và dưa hấu tươi đều có vị thơm ngon và tốt cho
                răng, loại quả nào càng cần nhai nhiều thì càng tốt cho răng
                miệng. Đương nhiên, các chất đường trong trái cây vẫn có thể gây
                sâu răng nhưng chúng vẫn tốt hơn nhiều so với các loại đường hóa
                học chứa trong kẹo công nghiệp.
              </p>
            </div>
            <div className="blog_transition">
                <div>
                <button >Đọc Thêm</button>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://st.315healthcare.com//sr/display?op=resize&h=196&path=post/profile/avatar/20210824/240571681_394336045373828_570637457227938515_n.jpg"
                alt="#"
              />
              <h2>Nên cho bé ăn gì để tốt cho sức khỏe răng miệng?</h2>
              <p>
                Táo, cam, lê, và dưa hấu tươi đều có vị thơm ngon và tốt cho
                răng, loại quả nào càng cần nhai nhiều thì càng tốt cho răng
                miệng. Đương nhiên, các chất đường trong trái cây vẫn có thể gây
                sâu răng nhưng chúng vẫn tốt hơn nhiều so với các loại đường hóa
                học chứa trong kẹo công nghiệp.
              </p>
            </div>
            <div className="blog_transition">
                <div>
                <button >Đọc Thêm</button>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://st.315healthcare.com//sr/display?op=resize&h=196&path=post/profile/avatar/20210824/240571681_394336045373828_570637457227938515_n.jpg"
                alt="#"
              />
              <h2>Nên cho bé ăn gì để tốt cho sức khỏe răng miệng?</h2>
              <p>
                Táo, cam, lê, và dưa hấu tươi đều có vị thơm ngon và tốt cho
                răng, loại quả nào càng cần nhai nhiều thì càng tốt cho răng
                miệng. Đương nhiên, các chất đường trong trái cây vẫn có thể gây
                sâu răng nhưng chúng vẫn tốt hơn nhiều so với các loại đường hóa
                học chứa trong kẹo công nghiệp.
              </p>
            </div>
            <div className="blog_transition">
                <div>
                <button >Đọc Thêm</button>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://st.315healthcare.com//sr/display?op=resize&h=196&path=post/profile/avatar/20210824/240571681_394336045373828_570637457227938515_n.jpg"
                alt="#"
              />
              <h2>Nên cho bé ăn gì để tốt cho sức khỏe răng miệng?</h2>
              <p>
                Táo, cam, lê, và dưa hấu tươi đều có vị thơm ngon và tốt cho
                răng, loại quả nào càng cần nhai nhiều thì càng tốt cho răng
                miệng. Đương nhiên, các chất đường trong trái cây vẫn có thể gây
                sâu răng nhưng chúng vẫn tốt hơn nhiều so với các loại đường hóa
                học chứa trong kẹo công nghiệp.
              </p>
            </div>
            <div className="blog_transition">
                <div>
                <button >Đọc Thêm</button>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://st.315healthcare.com//sr/display?op=resize&h=196&path=post/profile/avatar/20210824/240571681_394336045373828_570637457227938515_n.jpg"
                alt="#"
              />
              <h2>Nên cho bé ăn gì để tốt cho sức khỏe răng miệng?</h2>
              <p>
                Táo, cam, lê, và dưa hấu tươi đều có vị thơm ngon và tốt cho
                răng, loại quả nào càng cần nhai nhiều thì càng tốt cho răng
                miệng. Đương nhiên, các chất đường trong trái cây vẫn có thể gây
                sâu răng nhưng chúng vẫn tốt hơn nhiều so với các loại đường hóa
                học chứa trong kẹo công nghiệp.
              </p>
            </div>
            <div className="blog_transition">
                <div>
                <button >Đọc Thêm</button>
                </div>
                
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Blog;
