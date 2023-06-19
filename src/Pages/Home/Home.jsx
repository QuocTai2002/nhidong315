import React, { useState } from "react";
import LayoutWed from "../../HOCs/LayoutWeb";
import { Select } from "antd";
import "./style.scss";
import MapTabs from "./Component/MapTabs/MapTabs";
import * as data from '../../Data/map'
import Blog from "./Component/Blog/Blog";
import Feedback from "./Component/feedBack/Feedback";
import Card from "./Component/Card/Card";
import Doctor from "./Component/Doctor/Doctor";
import Service from "./Component/Service/Service";
import Introduce from "./Component/Introduce/Introduce";
import Carousels from "./Component/Carousel/Carousel";
import BackToTop from "../../Componens/BackToTop/BackToTop";
const Home = () => {
  const [valueColor, setColor] = useState("bg-nhiDong-315");
  const [valueText, SetValueText] = useState("Nhi Đồng");
  const [valueActiveStyle, setValueActiveStyle] = useState("active_nhiDong");
  const [chiNhanh,setChiNhanh] = useState(data.Quan)
  const changeColor = (color, text, activeStyle,data) => {
    setColor(color);
    SetValueText(text);
    setValueActiveStyle(activeStyle);
    setChiNhanh(data)
  };

  return (
    <LayoutWed>
      <section><Carousels/></section>
      <section><Introduce/></section>
      <section><Service/></section>
      <section><Doctor/></section>
      <section><Card/></section>
      <section className="relative"><Feedback/></section>
      <section className="w-3/5 container mx-auto"><Blog/></section>
      <div className="map_ctner container mx-auto w-3/5">
        <div className="btn_map">
          <button
            onClick={() => {
              changeColor("bg-nhiDong-315", "Nhi Đồng", "active_nhiDong",data.Quan);
            }}
            className="bg-nhiDong-315 btn_123"
          >
            Nhi Đồng 315
          </button>
          <button
            onClick={() => {
              changeColor("bg-tiemChung-315", "Tiêm Chủng", "active_tiemChung");
            }}
            className="bg-tiemChung-315"
          >
            Tiêm Chủng 315
          </button>
          <button
            onClick={() => {
              changeColor("bg-phuSan-315", "Phụ Sản", "active_phuSan");
            }}
            className="bg-phuSan-315"
          >
            Phụ Sản 315
          </button>
          <button
            onClick={() => {
              changeColor("bg-daKhoa-315", "Đa Khoa", "active_daKhoa");
            }}
            className="bg-daKhoa-315"
          >
            Đa Khoa
          </button>
          <button
            onClick={() => {
              changeColor("bg-LaoKhoa-315", "Lão Khoa", "active_laoKhoa");
            }}
            className="bg-LaoKhoa-315"
          >
            Lão Khoa 315
          </button>
          <button
            onClick={() => {
              changeColor("bg-mat-315", "Mắt", "active_mat");
            }}
            className="bg-mat-315"
          >
            Mắt 315
          </button>
        </div>
        <div className="pl-4 pt-4">
          <div className="flex items-center">
            <div className="flex items-center mr-5">
              <h2 className="pr-3 text-base font-semibold">
                <i class="fa fa-map-marker-alt text-nhiDong-315"></i> Tỉnh/Thành
                Phố
              </h2>
              <Select
                defaultValue="HCM"
                style={{ width: 200 }}
                options={[
                  {
                    label: "TP. Hồ Chí Minh",
                    value: "HCM",
                  },
                  {
                    label: "Tây Ninh",
                    value: "TayNinh",
                  },
                  {
                    label: "Đà Nẳng",
                    value: "DaNang",
                  },
                ]}
              />
            </div>
            <div className="flex items-center">
              <h2 className="py-2 pr-3 text-base font-semibold">
                <i class="fa fa-city text-nhiDong-315"></i> Quận/Huyện
              </h2>
              <Select
                placeholder="Vui lòng chọn"
                style={{ width: 150 }}
                options={[
                  {
                    label: "Quận 1",
                    value: "Quan1",
                  },
                  {
                    label: "Quận 2",
                    value: "Quan2",
                  },
                  {
                    label: "Quận 3",
                    value: "Quan3",
                  },
                  {
                    label: "Quận 4",
                    value: "Quan4",
                  },
                  {
                    label: "Quận 5",
                    value: "Quan5",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <section> 
          <MapTabs
          color={valueColor}
          text={valueText}
          valueActiveStyle={valueActiveStyle}
          data={chiNhanh}
        /></section>
       
      </div>
      <BackToTop/>
    </LayoutWed>
  );
};

export default Home;
