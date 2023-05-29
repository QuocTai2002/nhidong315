import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "./headerStyle.css";
const Headers = () => {
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  return (
    <div className="header ">
      <div className="container mx-auto w-3/5 flex items-center justify-between">
        <img
          src="images/logo_nhidong315.png"
          alt="nhidong315"
          className="w-24"
        />
        <div>
          <ul className="flex items-center justify-between gap-7">
            <li>
              <NavLink
                to="/"
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 ";
                }}
              >
                {t("Trang chủ")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 duration-300";
                }}
                to="/Doctor"
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
                {t("Thư viện")}
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
                to="/Q&A"
                className={(p) => {
                  if (p.isActive) return "text-sky-500";
                  return "hover:text-sky-500 duration-300";
                }}
              >
                {t("Hỏi đáp")}
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
                {t("Giới thiệu")}
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
            <li>
              <select name="option" id="1" onChange={changeLanguage}>
                <option value="vie">Việt Nam</option>
                <option value="eng">English</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headers;
