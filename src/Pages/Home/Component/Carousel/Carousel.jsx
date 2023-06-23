import React from 'react'
import './style.scss'
import Forms from '../Form/Froms'
import { Carousel } from 'antd'
const Carousels = () => {
  return (
    <div className='carousel'>
        <div className='formTV' >
            <Forms/>
        </div>
        <Carousel autoplay >
        <div className='background_carousel'>
        <div className='item_carousel'>
            <img src="https://w.ladicdn.com/s1440x564/5aa6273ea81f66ca2eacc40b/slider-20220314095426.png" alt="#" />
        </div>
        <div className='content'>
            <h2 className='font-bold text-3xl text-white'>PHÒNG KHÁM NHI ĐỒNG 315</h2>
            <p className='text-white py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quae ratione eveniet aspernatur tempore culpa. Modi ipsum maxime optio. Eaque, illo. Ipsam harum vitae temporibus nostrum odio at est suscipit!</p>
            <a href="https://www.nhidong315.com/"><button className='font-semibold bg-sky-600 text-white p-2 px-5 rounded-xl text-lg mt-3 hover:bg-sky-700' > Đến Trang</button></a>
            
        </div>
        </div>
        <div className='background_carousel'>
        <div className='item_carousel'>
            <img src="https://w.ladicdn.com/s1440x651/5aa6273ea81f66ca2eacc40b/s0urgaxlc7ai8hsfbe1uybch5sbt5fdaj81glrxs-20211122074506.jpg" alt="#" />
        </div>
        <div className='content'>
            <h2 className='font-bold text-3xl text-white'>PHÒNG KHÁM TIÊM CHỦNG 315</h2>
            <p className='text-white py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quae ratione eveniet aspernatur tempore culpa. Modi ipsum maxime optio. Eaque, illo. Ipsam harum vitae temporibus nostrum odio at est suscipit!</p>
            <a href="https://www.tiemchungnhi315.com/"><button className='font-semibold bg-sky-600 text-white p-2 px-5 rounded-xl text-lg mt-3 hover:bg-sky-700' > Đến Trang</button></a>
            
        </div>
        </div>
        <div className='background_carousel'>
        <div className='item_carousel'>
            <img src="https://w.ladicdn.com/s1440x960/5aa6273ea81f66ca2eacc40b/72192-20221020084016-4shsh.jpg" alt="#" />
        </div>
        <div className='content'>
            <h2 className='font-bold text-3xl text-white'>PHÒNG KHÁM PHỤ SẢN 315</h2>
            <p className='text-white py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quae ratione eveniet aspernatur tempore culpa. Modi ipsum maxime optio. Eaque, illo. Ipsam harum vitae temporibus nostrum odio at est suscipit!</p>
            <a href="https://www.phusan315.com/"><button className='font-semibold bg-sky-600 text-white p-2 px-5 rounded-xl text-lg mt-3 hover:bg-sky-700' > Đến Trang</button></a>
            
        </div>
        </div>
        <div className='background_carousel'>
        <div className='item_carousel'>
            <img src="images/daKhoa.jpg" alt="#" />
        </div>
        <div className='content'>
            <h2 className='font-bold text-3xl text-white'>PHÒNG KHÁM ĐA KHOA QUỐC TẾ IVY HEALTH</h2>
            <p className='text-white py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quae ratione eveniet aspernatur tempore culpa. Modi ipsum maxime optio. Eaque, illo. Ipsam harum vitae temporibus nostrum odio at est suscipit!</p>
            <a href="https://www.ivyhealthvn.com/"><button className='font-semibold bg-sky-600 text-white p-2 px-5 rounded-xl text-lg mt-3 hover:bg-sky-700' > Đến Trang</button></a>
            
        </div>
        </div>
           
        </Carousel>
    </div>
  )
}

export default Carousels    