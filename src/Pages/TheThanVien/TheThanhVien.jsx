import React, { useEffect } from "react";
import LayoutWeb from "../../HOCs/LayoutWeb";
import { Tabs } from "antd";
import { useParams } from "react-router-dom";

const background_img =
  "https://reliablebackgroundscreening.com/wp-content/uploads/2021/08/The-Importance-of-Healthcare-Background-Checks.jpg";
const items = [
  {
    key: "NhiDong",
    label: (
      <>
        <button className="font-bold text-lg bg-nhiDong-315 text-white px-2 rounded">
          THẺ THÀNH VIÊN NHI
        </button>
      </>
    ),
    children: (
      <>
        <div className="flex justify-around mt-5">
          <div
            className="rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
            style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
          >
            <div className="w-80">
              <div style={{ backgroundColor: "#048dd7" }} className="py-3">
                <h2 className="text-center text-white font-semibold text-xl py-3">
                  THẺ THÀNH VIÊN
                </h2>
                <div className="flex justify-center">
                  <img
                    src="https://315healthcare.com/images/home/member.png"
                    alt="#"
                  />
                </div>
              </div>

              <div className="text-center mt-2">
                <p className="line-through font-semibold text-lg">
                  1.590.000đ/năm
                </p>
                <p className="font-semibold text-xl">1.000.000 đ/năm</p>
              </div>
              <ul className="px-5 mt-4">
                <li className="flex border-b-2 pb-2">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">4 lần khám sức khỏe định kỳ</p>
                </li>
                <li className="flex border-b-2 pb-2">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Trọn năm dịch vụ khám bệnh tại các phòng khám 315
                  </p>
                </li>
                <li className="flex border-b-2 pb-2">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                    chủng
                  </p>
                </li>
                <li className="flex items-center py-2">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Khám dinh dưỡng với bác sĩ dinh dưỡng
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center py-5 mt-24">
              <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
                Đăng kí
              </button>
            </div>
          </div>
          <div
            className="rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
            style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
          >
            <div className="w-80">
              <div style={{ backgroundColor: "#b6b7bb" }} className="py-3">
                <h2 className="text-center text-white font-semibold text-xl py-3">
                  THẺ BẠC
                </h2>
                <div className="flex justify-center">
                  <img
                    src="https://315healthcare.com/images/home/silver.png"
                    alt="#"
                  />
                </div>
              </div>

              <div className="text-center mt-2">
                <p className="line-through font-semibold text-lg">
                  2.090.000đ/năm
                </p>
                <p className="font-semibold text-xl">1.500.000 đ/năm</p>
              </div>
              <ul className="px-5 mt-4">
                <li className="flex border-b-2 pb-2 ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">4 lần khám sức khỏe định kỳ</p>
                </li>
                <li className="flex border-b-2 pb-2  ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Trọn năm dịch vụ khám bệnh tại các phòng khám 315
                  </p>
                </li>
                <li className="flex border-b-2  pb-2 ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                    chủng
                  </p>
                </li>
                <li className="flex border-b-2 pb-2 ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Khám dinh dưỡng với bác sĩ dinh dưỡng
                  </p>
                </li>
                <li className="flex border-b-2 pb-2  ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Thêm suất khám bệnh cho 1 bé khác trong gia đình
                  </p>
                </li>
                <li className="flex">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Giảm 100% xét nghiệm nhóm máu cho 2 bé
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center py-5 ">
              <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
                Đăng kí
              </button>
            </div>
          </div>
          <div
            className="  rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
            style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
          >
            <div className="w-80">
              <div style={{ backgroundColor: "#a37b19" }} className="py-3">
                <h2 className="text-center text-white font-semibold text-xl py-3">
                  THẺ VÀNG
                </h2>
                <div className="flex justify-center">
                  <img
                    src="https://315healthcare.com/images/home/gold.png"
                    alt="#"
                  />
                </div>
              </div>
              <div className="text-center mt-2">
                {/* <p className='line-through font-semibold text-lg'>1.590.000đ/năm</p> */}
                <p className="font-semibold text-xl pt-7">5.000.000 đ/năm</p>
              </div>
              <ul className="px-5 mt-4">
                <li className="flex border-b-2 pb-2  ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">4 lần khám sức khỏe định kỳ</p>
                </li>
                <li className="flex border-b-2 pb-2  ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Trọn năm dịch vụ khám bệnh tại các phòng khám 315
                  </p>
                </li>
                <li className="flex border-b-2 pb-2  ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                    chủng
                  </p>
                </li>
                <li className="flex border-b-2 pb-2  ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Khám dinh dưỡng với bác sĩ dinh dưỡng
                  </p>
                </li>
                <li className="flex border-b-2 pb-2  ">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Khám ưu tiên, thêm suất khám bệnh cho 1 bé khác trong gia
                    đình
                  </p>
                </li>
                <li className="flex">
                  <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
                  <p className="text-base">
                    Giảm 100% Xét nghiệm nhóm máu cho cả gia đình (4 thành viên)
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center py-5">
              <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
                Đăng kí
              </button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "PhuSan",
    label: (
      <>
        <button className="font-bold text-lg bg-phuSan-315 text-white  px-2 rounded ">
          THẺ THÀNH VIÊN SẢN
        </button>
      </>
    ),
    children:  
    <>
    <div className="flex justify-around mt-5">
      <div
        className="rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
        style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
      >
        <div className="w-80">
          <div style={{ backgroundColor: "#048dd7" }} className="py-3">
            <h2 className="text-center text-white font-semibold text-xl py-3">
              THẺ THÀNH VIÊN
            </h2>
            <div className="flex justify-center">
              <img
                src="https://315healthcare.com/images/home/member.png"
                alt="#"
              />
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="line-through font-semibold text-lg">
              1.590.000đ/năm
            </p>
            <p className="font-semibold text-xl">1.000.000 đ/năm</p>
          </div>
          <ul className="px-5 mt-4">
            <li className="flex border-b-2 pb-2">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">4 lần khám sức khỏe định kỳ</p>
            </li>
            <li className="flex border-b-2 pb-2">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm dịch vụ khám bệnh tại các phòng khám 315
              </p>
            </li>
            <li className="flex border-b-2 pb-2">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                chủng
              </p>
            </li>
            <li className="flex items-center py-2">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Khám dinh dưỡng với bác sĩ dinh dưỡng
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-5 mt-24">
          <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
            Đăng kí
          </button>
        </div>
      </div>
      <div
        className="rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
        style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
      >
        <div className="w-80">
          <div style={{ backgroundColor: "#b6b7bb" }} className="py-3">
            <h2 className="text-center text-white font-semibold text-xl py-3">
              THẺ BẠC
            </h2>
            <div className="flex justify-center">
              <img
                src="https://315healthcare.com/images/home/silver.png"
                alt="#"
              />
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="line-through font-semibold text-lg">
              2.090.000đ/năm
            </p>
            <p className="font-semibold text-xl">1.500.000 đ/năm</p>
          </div>
          <ul className="px-5 mt-4">
            <li className="flex border-b-2 pb-2 ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">4 lần khám sức khỏe định kỳ</p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm dịch vụ khám bệnh tại các phòng khám 315
              </p>
            </li>
            <li className="flex border-b-2  pb-2 ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                chủng
              </p>
            </li>
            <li className="flex border-b-2 pb-2 ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Khám dinh dưỡng với bác sĩ dinh dưỡng
              </p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Thêm suất khám bệnh cho 1 bé khác trong gia đình
              </p>
            </li>
            <li className="flex">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Giảm 100% xét nghiệm nhóm máu cho 2 bé
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-5 ">
          <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
            Đăng kí
          </button>
        </div>
      </div>
      <div
        className="  rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
        style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
      >
        <div className="w-80">
          <div style={{ backgroundColor: "#a37b19" }} className="py-3">
            <h2 className="text-center text-white font-semibold text-xl py-3">
              THẺ VÀNG
            </h2>
            <div className="flex justify-center">
              <img
                src="https://315healthcare.com/images/home/gold.png"
                alt="#"
              />
            </div>
          </div>
          <div className="text-center mt-2">
            {/* <p className='line-through font-semibold text-lg'>1.590.000đ/năm</p> */}
            <p className="font-semibold text-xl pt-7">5.000.000 đ/năm</p>
          </div>
          <ul className="px-5 mt-4">
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">4 lần khám sức khỏe định kỳ</p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm dịch vụ khám bệnh tại các phòng khám 315
              </p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                chủng
              </p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Khám dinh dưỡng với bác sĩ dinh dưỡng
              </p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Khám ưu tiên, thêm suất khám bệnh cho 1 bé khác trong gia
                đình
              </p>
            </li>
            <li className="flex">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Giảm 100% Xét nghiệm nhóm máu cho cả gia đình (4 thành viên)
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-5">
          <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
            Đăng kí
          </button>
        </div>
      </div>
    </div>
  </>,
  },
  {
    key: "DaKhoa",
    label: (
      <>
        <button className="font-bold text-lg bg-daKhoa-315 text-white  px-2 rounded ">
          THẺ THÀNH VIÊN ĐA KHOA
        </button>
      </>
    ),
    children:  
    <>
    <div className="flex justify-around mt-5">
      <div
        className="rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
        style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
      >
        <div className="w-80">
          <div style={{ backgroundColor: "#048dd7" }} className="py-3">
            <h2 className="text-center text-white font-semibold text-xl py-3">
              THẺ THÀNH VIÊN
            </h2>
            <div className="flex justify-center">
              <img
                src="https://315healthcare.com/images/home/member.png"
                alt="#"
              />
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="line-through font-semibold text-lg">
              1.590.000đ/năm
            </p>
            <p className="font-semibold text-xl">1.000.000 đ/năm</p>
          </div>
          <ul className="px-5 mt-4">
            <li className="flex border-b-2 pb-2">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">4 lần khám sức khỏe định kỳ</p>
            </li>
            <li className="flex border-b-2 pb-2">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm dịch vụ khám bệnh tại các phòng khám 315
              </p>
            </li>
            <li className="flex border-b-2 pb-2">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                chủng
              </p>
            </li>
            <li className="flex items-center py-2">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Khám dinh dưỡng với bác sĩ dinh dưỡng
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-5 mt-24">
          <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
            Đăng kí
          </button>
        </div>
      </div>
      <div
        className="rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
        style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
      >
        <div className="w-80">
          <div style={{ backgroundColor: "#b6b7bb" }} className="py-3">
            <h2 className="text-center text-white font-semibold text-xl py-3">
              THẺ BẠC
            </h2>
            <div className="flex justify-center">
              <img
                src="https://315healthcare.com/images/home/silver.png"
                alt="#"
              />
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="line-through font-semibold text-lg">
              2.090.000đ/năm
            </p>
            <p className="font-semibold text-xl">1.500.000 đ/năm</p>
          </div>
          <ul className="px-5 mt-4">
            <li className="flex border-b-2 pb-2 ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">4 lần khám sức khỏe định kỳ</p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm dịch vụ khám bệnh tại các phòng khám 315
              </p>
            </li>
            <li className="flex border-b-2  pb-2 ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                chủng
              </p>
            </li>
            <li className="flex border-b-2 pb-2 ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Khám dinh dưỡng với bác sĩ dinh dưỡng
              </p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Thêm suất khám bệnh cho 1 bé khác trong gia đình
              </p>
            </li>
            <li className="flex">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Giảm 100% xét nghiệm nhóm máu cho 2 bé
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-5 ">
          <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
            Đăng kí
          </button>
        </div>
      </div>
      <div
        className="  rounded-xl overflow-hidden bg-white border-2 duration-300 hover:border-dashed hover:border-orange-500 hover:scale-105"
        style={{ boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)" }}
      >
        <div className="w-80">
          <div style={{ backgroundColor: "#a37b19" }} className="py-3">
            <h2 className="text-center text-white font-semibold text-xl py-3">
              THẺ VÀNG
            </h2>
            <div className="flex justify-center">
              <img
                src="https://315healthcare.com/images/home/gold.png"
                alt="#"
              />
            </div>
          </div>
          <div className="text-center mt-2">
            {/* <p className='line-through font-semibold text-lg'>1.590.000đ/năm</p> */}
            <p className="font-semibold text-xl pt-7">5.000.000 đ/năm</p>
          </div>
          <ul className="px-5 mt-4">
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">4 lần khám sức khỏe định kỳ</p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm dịch vụ khám bệnh tại các phòng khám 315
              </p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Trọn năm khám sàng lọc trước tiêm chùng và khám lại sau tiêm
                chủng
              </p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Khám dinh dưỡng với bác sĩ dinh dưỡng
              </p>
            </li>
            <li className="flex border-b-2 pb-2  ">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Khám ưu tiên, thêm suất khám bệnh cho 1 bé khác trong gia
                đình
              </p>
            </li>
            <li className="flex">
              <i class="text-green-500 mr-4 text-lg fa fa-check"></i>
              <p className="text-base">
                Giảm 100% Xét nghiệm nhóm máu cho cả gia đình (4 thành viên)
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center py-5">
          <button className="font-semibold text-xl bg-title-315 text-white px-8 py-1 rounded-lg duration-500 hover:-translate-y-2">
            Đăng kí
          </button>
        </div>
      </div>
    </div>
  </>,
  },
];
const TheThanhVien = () => {
    let {title} = useParams();
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  return (
    <>
      <LayoutWeb>
        <section
          className="mt-16"
          style={{ 
            backgroundImage: `url(${background_img})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
        }}
        >
          <div style={{backgroundColor:'rgb(0 ,0, 0,.4)'}}>
            <div className="py-12 w-4/5 container mx-auto">
              <h2 className="text-center font-bold text-3xl pb-5 text-nhiDong-315">
                THẺ THÀNH VIÊN 315
              </h2>
              <Tabs centered items={items} defaultActiveKey={title} />
            </div>
          </div>
        </section>
      </LayoutWeb>
    </>
  );
};

export default TheThanhVien;
