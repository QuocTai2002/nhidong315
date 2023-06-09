import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
const Introduce = () => {
  const Navigate = useNavigate()
  return (
    <>
    <div className='background_introduce py-12 max-[391px]:py-4'>
        <div className='max-[391px]:w-11/12 max-[391px]:translate-x-2 container w-4/5 mx-auto flex max-[820px]:block' >
        <div className='img w-1/2 max-[820px]:w-full'>
            <img  src="https://315healthcare.com/images/home/intro.png" alt="#" />
        </div>
        <div className=' content w-1/2 max-[820px]:w-full max-[820px]:py-4'>
            <div className='p-5'>
            <h2 className='font-bold text-3xl pb-5 max-[820px]:text-center max-[391px]:text-2xl'>GIỚI THIỆU VỀ HỆ THỐNG 315</h2>
            <p>Hệ Thống Phòng Khám Nhi Đồng 315 cung cấp dịch vụ nhi khoa toàn diện bao gồm: khám bệnh (khám tổng quát và khám chuyên khoa); dịch vụ xét nghiệm, tiêm ngừa; tư vấn dinh dưỡng, theo dõi sự tăng trưởng và phát triển của trẻ từ sơ sinh, nhũ nhi đến độ tuổi nhi đồng, thiếu niên (dưới 14 tuổi).<br/>
   
            </p>
            <p className='mt-14 max-[391px]:mt-2'>Khi khám chữa bệnh cho bé tại Hệ Thống Phòng Khám Nhi Đồng 315, các bác sĩ sẽ trực tiếp tư vấn các bài kiểm tra tổng quát, giải thích cặn kẽ kết quả xét nghiệm, chẩn đoán và có những can thiệp y học cần thiết cho bé. Giúp ba mẹ hiểu rõ tình trạng bệnh và cách điều trị để bố mẹ có thể chăm sóc bé một cách tốt nhất.</p>
            </div>
            <button onClick={()=>{Navigate('/Introduce')}} className='text p-2 font-bold  ml-5 text-white rounded-lg'>Xem Thêm</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Introduce