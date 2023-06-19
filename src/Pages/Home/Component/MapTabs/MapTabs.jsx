import React, { useEffect, useState } from "react";
import "./mapTabs.scss";
// const Quan = [
//   {
//     maPhongKHam: "4",
//     linMap:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s",
//     gioLamViet: "8:00",
//     diaChi: "180 Hải Thượng Lãn Ông, Phường 10, Quận 5, TP.Hồ Chí Minh",
//   },
//   {
//     maPhongKHam: "5",
//     linMap:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.54230783143!2d106.630591!3d10.781752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ff48f4c792b%3A0xa87fa86475076e78!2zTmhpIMSQ4buTbmcgMzE1IHbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2sus!4v1686206475148!5m2!1svi!2sus",
//     gioLamViet: "10:30",
//     diaChi: "180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM",
//   },
//   {
//     maPhongKHam: "6",
//     linMap:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s",
//     gioLamViet: "10:30",
//     diaChi: "180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM",
//   },
//   {
//     maPhongKHam: "7",
//     linMap:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s",
//     gioLamViet: "10:30",
//     diaChi: "180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM",
//   },
//   {
//     maPhongKHam: "8",
//     linMap:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s",
//     gioLamViet: "10:30",
//     diaChi: "180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM",
//   },
//   {
//     maPhongKHam: "9",
//     linMap:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s",
//     gioLamViet: "10:30",
//     diaChi: "180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM",
//   },
// ];
const MapTabs = (props) => {
  const [valueLinkMap, setValueLinkMap] = useState(
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s"
  );
  const [isActive, setIsActive] = useState(props.data[0].maPhongKHam);

  const handlChangeMap = (link) => {
    setValueLinkMap(link);
  };
  //Đổi màu từng item
  const changeColorItem = (id) => {
    document.getElementById(isActive).classList.remove(props.valueActiveStyle);
    setIsActive(id);
    document.getElementById(id).classList.add(props.valueActiveStyle);
  };
  useEffect(() => {
    document.getElementById(isActive).classList.add(props.valueActiveStyle);
  }, []);
  return (
    <div className="flex items-center justify-center px-4 pb-4  gap-3">
      <div className="w-2/5 mt-4" style={{ backgroundColor: "#fafafa" }}>
        <div
          className={`${props.color} w-100 text-center text-white rounded-t-lg py-1  font-semibold`}
        >
          <h2 className=" ">Hệ thống phòng khám {props.text} 315</h2>
        </div>
        <div
          className="border-solid border-x-2 border-b-2 rounded-b-lg"
          style={{ height: 500, overflow: "auto" }}
        >
          {props.data?.map((items) => (
            <div
              className={`card_tabs`}
              id={items.maPhongKHam}
              onClick={() => {
                handlChangeMap(items.linMap);
                changeColorItem(items.maPhongKHam);
              }}
            >
              <h2>
                <span className="text-gray-400 font-medium">
                  Phòng Khám: {items.maPhongKHam}:
                </span>{" "}
                Nhi Đồng 315
              </h2>
              <h2>
                <span className="text-gray-400 font-medium">
                  Giờ làm việc:{" "}
                </span>
                T2-CN: Sáng: {items.gioLamViet}
              </h2>
              <p className="ml-32">Chiều: {items.gioLamViet}</p>
              <h2 className="text-red-500 font-medium">
                <span className="text-gray-400 font-medium">Hotline:</span>
                <a href={`tel:+0987627257`}> 0987627257 - Coming soon</a>
              </h2>
              <h2>
                <span className="text-gray-400 font-medium">Địa Chỉ: </span>
                {items.diaChi}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/5">
        <iframe
          src={valueLinkMap}
          className="w-full rounded-lg "
          style={{ height: 514 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapTabs;
