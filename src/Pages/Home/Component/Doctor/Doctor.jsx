import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
const Doctor = () => {
    const Navigate = useNavigate()
  return (
    <div className='doctor_container'>
    <div className=' container w-4/5 mx-auto max-[820px]:w-full' >
        <div className='text-center pb-12'>
            <h2 className='font-bold text-3xl text-white max-[820px]:text-2xl'>ĐỘI NGŨ BÁC SĨ</h2>
        </div>
        <div className='flex max-[391px]:flex-col max-[820px]:gap-4 items-center justify-around'>
            <div className='item bg-white w-64 max-[391px]:w-72 max-[820px]:w-44 rounded-lg flex flex-col items-center'>
                <div className='w-40 max-[391px]:w-44 max-[391px]:h-44 max-[820px]:w-32 max-[820px]:h-32 h-40 my-5 rounded-full overflow-hidden'>
                <img className='w-full' src="https://st.315healthcare.com/resource/doctorIntro/profile/avatar/20211025/bs_bao%20_quyen.jpg" alt="#" />
                </div>
                <div className='m-5 max-[820px]:m-2 max-[391px]:m-1'>
                    <h2 className='font-bold text-center max-[391px]:text-lg' >Thạc Sĩ - Bác sĩ.<br/> Lê Thanh Bảo Quyên</h2>
                    <p className='py-4'>Cựu Bs Bệnh viện Nhi Đồng 1</p>
                </div>

            </div>
            <div className='item bg-white w-64 max-[391px]:w-72 max-[820px]:w-44 rounded-lg flex flex-col items-center'>
                <div className='w-40 h-40 max-[391px]:w-44 max-[391px]:h-44 max-[820px]:w-32 max-[820px]:h-32 my-5 rounded-full overflow-hidden'>
                <img className='w-full' src="https://st.315healthcare.com/resource/doctorIntro/profile/avatar/20211025/bs_bao%20_quyen.jpg" alt="#" />
                </div>
                <div className='m-5 max-[820px]:m-2'>
                    <h2 className='font-bold text-center max-[391px]:text-lg' >Thạc Sĩ - Bác sĩ.<br/> Lê Thanh Bảo Quyên</h2>
                    <p className='py-4'>Cựu Bs Bệnh viện Nhi Đồng 1</p>
                </div>

            </div>
            <div className='item bg-white w-64 max-[391px]:w-72 max-[820px]:w-44 rounded-lg flex flex-col items-center'>
                <div className='w-40 h-40 max-[391px]:w-44 max-[391px]:h-44 max-[820px]:w-32 max-[820px]:h-32 my-5 rounded-full overflow-hidden'>
                <img className='w-full' src="https://st.315healthcare.com/resource/doctorIntro/profile/avatar/20211025/bs_bao%20_quyen.jpg" alt="#" />
                </div>
                <div className='m-5 max-[820px]:m-2'>
                    <h2 className='font-bold text-center max-[391px]:text-lg' >Thạc Sĩ - Bác sĩ.<br/> Lê Thanh Bảo Quyên</h2>
                    <p className='py-4'>Cựu Bs Bệnh viện Nhi Đồng 1</p>
                </div>

            </div>
            <div className='item bg-white w-64 max-[391px]:w-72 max-[820px]:w-44 rounded-lg flex flex-col items-center'>
                <div className='w-40 h-40 max-[391px]:w-44 max-[391px]:h-44 my-5 max-[820px]:w-32 max-[820px]:h-32 rounded-full overflow-hidden'>
                <img className='w-full' src="https://st.315healthcare.com/resource/doctorIntro/profile/avatar/20211025/bs_bao%20_quyen.jpg" alt="#" />
                </div>
                <div className='m-5 max-[820px]:m-2'>
                    <h2 className='font-bold text-center max-[391px]:text-lg' >Thạc Sĩ - Bác sĩ.<br/> Lê Thanh Bảo Quyên</h2>
                    <p className='py-4'>Cựu Bs Bệnh viện Nhi Đồng 1</p>
                </div>

            </div> 
        </div>
        <div className='text-right mt-12'>
        <button className=' text-white font-semibold text-lg' onClick={()=>{Navigate("/Doctor")}}  >Xem thêm . . .</button>
        </div>
        

    </div>
    </div>
   
  )
}

export default Doctor