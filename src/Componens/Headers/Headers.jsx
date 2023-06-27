import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "./headerStyle.css";
import { Drawer } from "antd";
const Headers = () => {
  const { t } = useTranslation("translation");
  const [open, setOpen] = useState(false);
  const  [service, setService] =useState(false)
  const changeMenuService = () =>{
    service ? setService(false) : setService(true)
  }
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  const titleDrawer = (
    <>
      {" "}
      <div className="flex items-center bg-title-315">
        <img className="w-20" src="images/logo_nhidong315.png" alt="nhidong315" />
        <h2 className="font-semibold text-xs text-center text-white">PHÒNG KHÁM 315</h2>
      </div>
    </>
  );
  return (
    <header className="header ">
      <div className="container mx-auto w-3/5 flex items-center justify-between max-[1365px]:w-4/5">
        <div className="flex items-center gap-5">
          <i
            class="font-semibold text-xl text-title-315 fa fa-bars lg:hidden "
            onClick={showDrawer}
          ></i>
          <img
            src="https://315healthcare.com/images/logo_new.jpg"
            alt="nhidong315"
            className="w-24"
          />
        </div>

        <div className="flex items-center ">
          <ul className="max-lg:hidden flex items-center justify-between gap-7" >
            <li>
              <NavLink
                to="/"
                className={(p) => {
                  if (p.isActive) return "text-sky-500 ";
                  return "hover:text-sky-500 ";
                }}
              >
                {t("Trang chủ")}
                
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Doctor"
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 duration-300";
                }}
              >
                {t("Bác sĩ")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Library"
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 duration-300";
                }}
              >
                {t("Dịch Vụ")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog"
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 duration-300";
                }}
              >
                {t("Bài viết")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.315vieclam.com/"
                target="_blank"
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 duration-300";
                }}
              >
                {t("Tuyển Dụng")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Introduce"
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 duration-300";
                }}
              >
                {t("Giới Thiệu")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 duration-300";
                }}
              >
                {t("Liên hệ")}
              </NavLink>
            </li>
          </ul>
          <select
            style={{ paddingBottom: 3 }}
            className="ml-5 "
            name="option"
            id="1"
            onChange={changeLanguage}
          >
            <option value="vie">Việt Nam</option>
            <option value="eng">English</option>
          </select>
        </div>
      </div>
      <Drawer
        title={titleDrawer}
        placement="left"
        onClose={onClose}
        open={open}
        width={250}
      >
        <ul className="flex flex-col items-center justify-between gap-5">
          <li className="border-b-2 w-full pb-2">
            <NavLink
              to="/"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-lg font-semibold";
                return "hover:text-sky-500 text-lg duration-300 font-semibold";
              }}
            >
              {t("Trang chủ")}
            </NavLink>
          </li>
          <li className="border-b-2 w-full pb-2">
            <NavLink
              to="/Doctor"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-lg font-semibold";
                return "hover:text-sky-500 duration-300 text-lg font-semibold";
              }}
            >
              {t("Bác sĩ")}
            </NavLink>
          </li>
          <li className="border-b-2 w-full pb-2">
           
           
              <div className="flex justify-between items-center " onClick={changeMenuService}>
              <p className="font-semibold text-lg" > {t("Dịch Vụ")} </p>
              {service ? <i class="text-lg fa fa-angle-up"></i> : <i class="text-lg fa fa-angle-down"></i>}
              </div>
             
              {service ? <ul className="ml-2 pt-1">
                <li>
                <NavLink
              to="/service"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-base font-semibold";
                return "hover:text-sky-500 duration-300 text-base font-semibold";
              }}
            >
             Nhi đồng 315
            </NavLink>
                </li>
                <li>
                <NavLink
              to="/service"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-lg font-semibold";
                return "hover:text-sky-500 duration-300 text-lg font-semibold";
              }}
            >
             Phụ sản 315
            </NavLink>
                </li>
                <li>
                <NavLink
              to="/service"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-base font-semibold";
                return "hover:text-sky-500 duration-300 text-base font-semibold";
              }}
            >
              Đa khoa quốc tế
            </NavLink>
                </li>
                <li>
                <NavLink
              to="/TheThanhVien/1"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-base font-semibold";
                return "hover:text-sky-500 duration-300 text-base font-semibold";
              }}
            >
             Thẻ Thành viên
            </NavLink>
                </li>
              
              </ul> :'' }
              
           
          </li>
          <li className="border-b-2 w-full pb-2">
            <NavLink
              to="/Blog"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-lg font-semibold";
                return "hover:text-sky-500 duration-300 text-lg  font-semibold";
              }}
            >
              {t("Bài viết")}
            </NavLink>
          </li>
          <li className="border-b-2 w-full pb-2">
            <NavLink
              to="https://www.315vieclam.com/"
              target="_blank"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-lg font-semibold";
                return "hover:text-sky-500 duration-300 text-lg font-semibold";
              }}
            >
              {t("Tuyển Dụng")}
            </NavLink>
          </li>
          <li className="border-b-2 w-full pb-2">
            <NavLink
              to="/Introduce"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-lg font-semibold";
                return "hover:text-sky-500 duration-300 text-lg font-semibold";
              }}
            >
              {t("Giới Thiệu")}
            </NavLink>
          </li>
          <li className="border-b-2 w-full pb-2">
            <NavLink
              to="/Contact"
              className={(p) => {
                if (p.isActive) return "text-sky-500 text-lg font-semibold";
                return "hover:text-sky-500 duration-300 text-lg font-semibold";
              }}
            >
              {t("Liên hệ")}
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center justify-between mt-5">
              <li className="text-center  ">
                <a href="https://www.facebook.com/hethongphongkhamnhidong315" target="blank">
                  <i class="w-10 h-10 bg-white  border   text-blue-500 leading-10 text-xl rounded-full fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="text-center  ">
                {" "}
                <a href="https://www.youtube.com/@hethongphongkhamnhiong3159" target="blank">
                  <i class="w-10 h-10 bg-white  border  text-red-500 leading-10 text-xl rounded-full fab fa-youtube"></i>
                </a>
              </li>
              <li className="text-center ">
                <a href="" target="blank">
                  <i class="w-10 h-10 bg-white   border     text-red-500 leading-10 text-xl rounded-full fab fa-google-plus-g"></i>
                </a>
              </li>
            </ul>
      </Drawer>
    </header>
  );
};

export default Headers;
