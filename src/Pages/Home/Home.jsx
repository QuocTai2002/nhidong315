import React, { useState } from "react";
import LayoutWed from "../../HOCs/LayoutWeb";
import "./style.scss";
import MapTabs from "./Component/MapTabs/MapTabs";
const Home = () => {
  return (
    <LayoutWed>
      <div className="map_ctner container mx-auto w-3/5">
        <div className="btn_map">
          <button className="bg-blue-500 btn_123">Nhi Đồng 315</button>
          <button className="bg-green-500">Tiêm Chủng 315</button>
          <button className="bg-pink-500">Phụ Sản 315</button>
          <button className="bg-blue-800">Đa Khoa</button>
          <button className="bg-orange-500">Lão Khoa 315</button>
          <button className="bg-sky-800">Mắt 315</button>
        </div>
        <div className="pl-4 pt-4">
          <h2>
            <i class="fa fa-map-marker-alt"></i> TP. Hồ Chí Minh
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h2>
                <i class="fa fa-city"></i> Quận, Huyện
              </h2>
            </div>
            <div>
              <h2>Hệ thống phòng khám Nhi Đồng 315</h2>
            </div>
            <div>
              <h2>Chi nhánh:180 Hải Thượng Lãn, P.10, Q.5, TP. Hồ Chí Minh</h2>
            </div>
            
          </div>
          <MapTabs/>
        </div>
      </div>
    </LayoutWed>
  );
};

export default Home;
