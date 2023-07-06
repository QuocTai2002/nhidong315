import React from 'react'
import './style.scss'
import * as heThongPhongKham from '../../../../Data/heThong315healthcare'
const Service = () => {
  return (
   <>
   <div className= 'service_container py-12 max-[820px]:py-2 max-[820px]:w-full container mx-auto w-4/5 '>
    <div className='title text-center pb-12'>
        <h2 className='font-bold text-3xl max-[391px]:text-2xl'>CÁC THƯƠNG HIỆU CỦA 315 HEALTHCARE</h2>
    </div>
    <div className='max-[391px]:block flex justify-center items-center gap-5'>
    <div className='flex flex-col gap-5 w-1/2 max-[391px]:w-full' >
    {heThongPhongKham.heThongPhongKham_01?.map(items => 
          <div className='item flex items-center justify-center max-[391px]:mx-2'>
          <img className='w-40' src={items.logo} alt={items.logo} />
          <div className='content'>
              <h2 className='font-semibold text-lg'>{items.name}</h2>
              <p>{items.Text}</p>
          </div>
          </div>
        )}
    </div>
    <div className='flex flex-col gap-5 w-1/2 max-[391px]:w-full' >
    {heThongPhongKham.heThongPhongKham_02?.map(items => 
          <div className=' item flex items-center justify-center max-[391px]:mx-2'>
          <img className='w-36' src={items.logo} alt={items.logo} />
          <div className='content'>
              <h2 className='font-semibold text-lg'>{items.name}</h2>
              <p>{items.Text}</p>
          </div>
          </div>
        )}
    
    </div>
    </div>

   </div>
   </>
  )
}

export default Service