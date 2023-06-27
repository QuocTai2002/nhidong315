import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./mapTabs.scss";

const MapTabs = (props) => {
  const {mapAddress} = useSelector(state => state.homeReducer) 
  const [valueLinkMap, setValueLinkMap] = useState('')
  const [isActive, setIsActive] = useState(null);
  const handlChangeMap = (link) => {
    setValueLinkMap(link);
  };
  //Đổi màu từng item
  const changeColorItem = (id) => {
    document.getElementById(isActive).classList.remove(props?.valueActiveStyle);
    setIsActive(id);
    document.getElementById(id).classList.add(props?.valueActiveStyle);
  };
  useEffect(() => {
    setIsActive(mapAddress[0]?.maPhongKHam)
    // console.log(mapAddress[0]?.maPhongKHam);
    // document.getElementById(isActive).classList.add(props?.valueActiveStyle);
  }, [mapAddress[0]?.maPhongKHam]);
  useEffect(()=>{
setValueLinkMap(mapAddress[0]?.linMap)
  },[mapAddress[0]?.linMap])
  return (
    <div className="flex max-[820px]:flex-col-reverse items-center justify-center px-4 pb-4  gap-3">
      <div className="w-2/5 mt-4 max-[820px]:w-full" style={{ backgroundColor: "#fafafa" }}>
        <div
          className={`${props?.color} max-[820px]:w-full w-100 text-center text-white rounded-t-lg py-1  font-semibold`}
        >
          <h2 className=" ">Hệ thống phòng khám {props?.text} 315</h2>
        </div>
        <div
          className="border-solid border-x-2 border-b-2 rounded-b-lg"
          style={{ height: 500, overflow: "auto" }}
        >
          {mapAddress?.map((items,index) => (
            <div
              key={items.maPhongKHam}
              className={`card_tabs`}
              id={items.maPhongKHam}
              onClick={() => {
                handlChangeMap(items.linMap);
                changeColorItem(items.maPhongKHam);
              }}
            >
              <p>
                <span className="text-gray-400 font-medium">
                  Phòng Khám: {items.SoTT}:
                </span>{" "}
                Nhi Đồng 315
              </p>
              {items.statusFull ? <>
                <p>
                <span className="text-gray-400 font-medium">
                  Giờ làm việc:{}
                </span>
                T2-CN: Sáng: {items.gioLamViecSang}
              </p>
              <p className="ml-28">Chiều:{items.gioLamViecChieu}</p>
              </>:
              <>
              <p>
                <span className="text-gray-400 font-medium">
                  Giờ làm việc: {}
                </span>
                T2-T6: {items.gioLamViecSang}
              </p>
              <p className="ml-16">T7-CN:{items.gioLamViecChieu}</p>
              </>
              }
              
              <p className="text-red-500 font-medium">
                <span className="text-gray-400 font-medium">Hotline:</span>
                <a href={`tel:${items.SDT}`}> {items.SDT} {items.comingSoon ? ' - Coming soon' :''}</a>
              </p>
              <p>
                <span className="text-gray-400 font-medium">Địa Chỉ: </span>
                {items.diaChi}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/5 max-[820px]:w-full ">
        <iframe
          src={valueLinkMap}
          className="w-full rounded-lg h-514 max-[820px]:h-64"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapTabs;
