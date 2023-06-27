import React, { useRef } from "react";
import { Carousel, Rate } from "antd";
import "./style.scss";
const Feedback = () => {
  const ref = useRef();
  return (
    <>
    <h2 className="max-[820px]:text-2xl absolute text-3xl font-semibold feedBack_h2" >PHẢN HỒI KHÁCH HÀNG</h2>
      <div className="feedBack_container">
        <Carousel
          autoplay
          className="w-3/5 max-[820px]:w-4/5 container mx-auto"
          ref={ref}
        >
          <div>
            <div className="item">
              <div className="img ">
                <img
                  src="https://st.315healthcare.com//sr/display?op=resize&h=165&path=feedback/profile/avatar/20211015/ch%E1%BB%8B%20Tr%C3%A2m.jpg"
                  alt="#"
                />
              </div>

              <div className="content ">
                <h3>Quế Trâm</h3>
                <div>
                <i class="fa fa-quote-left"></i> 
                <p> 
                  Mình đã cho bé đến khám nhiều lần tại Nhi Đồng 315 và thực sự
                  hài lòng về dịch vụ khám; đặc biệt rất yên tâm vì các bác sĩ
                  khám trực tiếp cho bé đều là các bác sĩ có kinh nghiệm lâu năm
                </p>
                <i class="fa fa-quote-right"></i>
                </div>
                
                <div className="rate">
                  <Rate disabled defaultValue={5} /> 5.0
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="img ">
                <img
                  src="https://st.315healthcare.com//sr/display?op=resize&h=165&path=feedback/profile/avatar/20210824/0f3b42abb65a5a04034b.jpg"
                  alt="#"
                />
              </div>

              <div className="content ">
                <h3>Dương Thị Mỹ Lan</h3>
                <div>
                <i class="fa fa-quote-left"></i> 
                <p> 
                Mình rất an tâm khi khám chữa bệnh cho trẻ tại đây. Đội ngũ bác sĩ rất chuyên nghiệp và tận tâm, lại có chuỗi phòng khám ở các quận, rất thuận tiện. 
                </p>
                <i class="fa fa-quote-right"></i>
                </div>
                
                <div className="rate">
                  <Rate disabled defaultValue={5} /> 5.0
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="img ">
                <img
                  src="https://st.315healthcare.com//sr/display?op=resize&h=165&path=feedback/profile/avatar/20210804/screenshot_1628062161.png"
                  alt="#"
                />
              </div>

              <div className="content ">
                <h3>Duy Nhất</h3>
                <div>
                <i class="fa fa-quote-left"></i> 
                <p> 
                Dịch vụ và chất lượng phòng khám tốt, sạch sẽ, thoáng mát. Các bác sĩ tư vấn nhiệt tình và giải đáp các thắc mắc triệt để để mình có thể tự tin hơn khi chăm sóc cho bé tại nhà.
                </p>
                <i class="fa fa-quote-right"></i>
                </div>
                
                <div className="rate">
                  <Rate disabled defaultValue={5} /> 5.0
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="img ">
                <img
                  src="https://st.315healthcare.com//sr/display?op=resize&h=165&path=feedback/profile/avatar/20211015/ch%E1%BB%8B%20Tr%C3%A2m.jpg"
                  alt="#"
                />
              </div>

              <div className="content ">
                <h3>Quế Trâm</h3>
                <div>
                <i class="fa fa-quote-left"></i> 
                <p> 
                  Mình đã cho bé đến khám nhiều lần tại Nhi Đồng 315 và thực sự
                  hài lòng về dịch vụ khám; đặc biệt rất yên tâm vì các bác sĩ
                  khám trực tiếp cho bé đều là các bác sĩ có kinh nghiệm lâu năm.
                </p>
                <i class="fa fa-quote-right"></i>
                </div>
                
                <div className="rate">
                  <Rate disabled defaultValue={5} /> 5.0
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        <button
        className="btn_prev"
          onClick={() => {
            ref.current.prev();
          }}
        >
          <i class="fa fa-angle-double-left"></i>
        </button>
        <button
        className="btn_next"
          onClick={() => {
            ref.current.next();
          }}
        >
          <i class="fa fa-angle-double-right"></i>
        </button>
      </div>
    </>
  );
};

export default Feedback;
