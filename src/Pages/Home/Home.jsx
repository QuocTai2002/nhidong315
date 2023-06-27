import React, { useEffect, useState } from "react";
import LayoutWed from "../../HOCs/LayoutWeb";
import { Select } from "antd";
import "./style.scss";
import MapTabs from "./Component/MapTabs/MapTabs";
import * as data from "../../Data/map";
import Blog from "./Component/Blog/Blog";
import Feedback from "./Component/feedBack/Feedback";
import Card from "./Component/Card/Card";
import Doctor from "./Component/Doctor/Doctor";
import Service from "./Component/Service/Service";
import Introduce from "./Component/Introduce/Introduce";
import Carousels from "./Component/Carousel/Carousel";
import BackToTop from "../../Componens/BackToTop/BackToTop";
import { useDispatch, useSelector } from "react-redux";
import { postDataMap } from "../../Redux/Thunk";
const Home = () => {
  const [valueCity, setValueCity] = useState(null);
  const dispatch = useDispatch();
  const [valueColor, setColor] = useState("bg-nhiDong-315");
  const [valueText, SetValueText] = useState("Nhi Đồng");
  const [valueActiveStyle, setValueActiveStyle] = useState("active_nhiDong");
  const [valueQuan, setValueQuan] = useState(data.QuanHCM)
  // const [chiNhanh,setChiNhanh] = useState()
  // set thay đổi màu sắt phần tử cảu mỗi chi nhánh
  const changeColor = (color, text, activeStyle) => {
    setColor(color);
    SetValueText(text);
    setValueActiveStyle(activeStyle);
  };
  const changeColorSelector = (value) =>{
    switch (value) {
      case 'nhidong315':
        changeColor("bg-nhiDong-315", "Nhi Đồng", "active_nhiDong");
        break;
        case 'tiemchung315':
          changeColor("bg-tiemChung-315", "Tiêm Chủng", "active_tiemChung");
        break;
        case 'phusan315':
          changeColor("bg-phuSan-315", "Phụ Sản", "active_phuSan");
        break;
        case 'dakhoa315':
          changeColor("bg-daKhoa-315", "Đa Khoa", "active_daKhoa");
        break;
        case 'mat315':
          changeColor("bg-mat-315", "Mắt", "active_mat");
        break;
        case 'laokhoa315':
          changeColor("bg-LaoKhoa-315", "Lão Khoa", "active_laoKhoa");
        break;
    
      default:
        break;
    }
  }
  ///thay đổi quận huyện trong tỉnh thành
  const changeQuanHuyen = async (value) => {
    console.log(value);
    const arr1 = [];
    
    await valueCity.map((items) => {
      const text = items.diaChi.trim().toLowerCase(); //lọc tìm kiếm không có khoản cách trống và đưa về chữ thương
      if (text.includes(value)) return arr1.push(items); // lọc tìm kím push vào mãng arr và dispatch vào store
    });
    dispatch(postDataMap(arr1));
  };
  // thay đổi tỉnh thành phố
  const changecity = async (value) => {
    value !== 'hồ chí minh' ? setValueQuan(data.QuanThuaThienHue): setValueQuan(data.QuanHCM)
    const arr = [];
    setValueCity(value);
    await data.map.map((items) => {
      const text = items.diaChi.trim().toLowerCase(); //lọc tìm kiếm không có khoản cách trống và đưa về chữ thương
      if (text.includes(value)) return arr.push(items); // lọc tìm kím push vào mãng arr và dispatch vào store
    });
    setValueCity(arr)
    dispatch(postDataMap(arr));
  };
  useEffect(() => {
    changecity('hồ chí minh')
    // window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutWed>
      <section>
        <Carousels />
      </section>
      <section>
        <Introduce />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Doctor />
      </section>
      <section>
        <Card />
      </section>
      <section className="relative">
        <Feedback />
      </section>
      <section className="max-[820px]:w-11/12 w-3/5 container mx-auto">
        <Blog />
      </section>
      <div className="map_container container  mx-auto max-[820px]:w-full max-[820px]:m-0 w-3/5">
        <div className="btn_map">
          <button
            onClick={() => {
              changeColor("bg-nhiDong-315", "Nhi Đồng", "active_nhiDong");
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
        <div className="text-center  btn_map_v2 px-2 py-3 flex items-center">
          <h3 className="font-semibold inline-block pr-2">PHÒNG KHÁM: </h3>
          <Select 
          defaultValue='nhidong315'
          style={{width:170}}
          onChange={changeColorSelector}
          options={[
            {
              label: <>
              <h2 className="text-nhiDong-315 font-semibold">NHI ĐỒNG 315</h2>
              </>,
              value:'nhidong315',
            },
            {
              label: <>
              <h2 className="text-tiemChung-315 font-semibold">TIÊM CHỦNG 315</h2>
              </>,
              value: "tiemchung315",
            },
            {
              label: <>
              <h2 className="text-phuSan-315 font-semibold">PHỤ SẢN 315</h2>
              </>,
              value: "phusan315",
            },
            {
              label: <>
              <h2 className="text-daKhoa-315 font-semibold">ĐA KHOA 315</h2>
              </>,
              value: "dakhoa315",
            },
            {
              label: <>
              <h2 className="text-mat-315 font-semibold">MẮT 315</h2>
              </>,
              value: "mat315",
            },
            {
              label: <>
              <h2 className="text-LaoKhoa-315 font-semibold">LÃO KHOA 315</h2>
              </>,
              value: "laokhoa315",
            },
          ]}
          />
        </div>
        <div className="max-[641px]:pt-0 max-[391px]:rounded-xl max-[391px]:border-b-2 max-[391px]:mb-5 pl-4 pt-4 max-[391px]:pl-0 max-[820px]:flex max-[820px]:justify-center max-[820px]:py-5 ">
          <div className="flex items-center">
            <div className="flex max-[641px]:items-start items-center mr-5 max-[641px]:flex-col">
              <h2 className="pr-3 text-base font-semibold">
                <i class="fa fa-map-marker-alt text-nhiDong-315"></i> Tỉnh/Thành
                Phố
              </h2>
              <Select
              className="w-52 max-[375px]:w-44"
                onChange={changecity}
                options={[
                  {
                    label: "TP. Hồ Chí Minh",
                    value: "hồ chí minh",
                  },
                  {
                    label: "Thừa Thiên Huế",
                    value: "thừa thiên huế",
                  },
                ]}
              />
            </div>
            <div className="flex max-[641px]:items-start items-center max-[641px]:flex-col">
              <h2 className="py-2 max-[641px]:py-0 pr-3 text-base font-semibold">
                <i class="fa fa-city text-nhiDong-315"></i> Quận/Huyện
              </h2>
              <Select
              className="w-40 max-[375px]:w-32"
                onChange={changeQuanHuyen}
                placeholder="Vui lòng chọn"
                options={valueQuan}
              />
            </div>
          </div>
        </div>
        <section>
          <MapTabs
            color={valueColor}
            text={valueText}
            valueActiveStyle={valueActiveStyle}
          />
        </section>
      </div>
      <BackToTop />
    </LayoutWed>
  );
};

export default Home;
