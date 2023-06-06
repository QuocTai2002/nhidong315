import React, {useState} from 'react'
import { Tabs } from 'antd'
const MapTabs = () => {
    const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  
    const Quan = [
        {
            Quan:'Quận 1',
            chiNhanh:[{
                maPhongKHam:'4',
                linMap:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s',
                gioLamViet:'10:30',
                diaChi: '180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM'
            },
            {
                maPhongKHam:'5',
                linMap:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s',
                gioLamViet:'10:30',
                diaChi: '180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM'
            }]
        },
        {
            Quan:'Quận 3',
            chiNhanh:[{
                maPhongKHam:'6',
                linMap:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s',
                gioLamViet:'10:30',
                diaChi: '180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM'
            },
            {
                maPhongKHam:'7',
                linMap:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s',
                gioLamViet:'10:30',
                diaChi: '180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM'
            }]
        },
        {
            Quan:'Quận 2',
            chiNhanh:[{
                maPhongKHam:'8',
                linMap:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s',
                gioLamViet:'10:30',
                diaChi: '180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM'
            },
            {
                maPhongKHam:'9',
                linMap:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.97699570334!2d106.6960584!3d10.7925958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d61859fdb%3A0x2096daaab72db10d!2zTmhpIMSR4buTbmcgMzE1IFbDoCBUacOqbSBDaOG7p25n!5e0!3m2!1svi!2s!4v1686044326427!5m2!1svi!2s',
                gioLamViet:'10:30',
                diaChi: '180 Hải Thượng Lãn Ông, P.10, Q.5, TP.HCM'
            }]
        },
      ];
  return (
    <div className=''>
        <Tabs
         tabPosition={tabPosition}
        items={Quan?.map((item)=>(
            {
                key:item.Quan,
                label:item.Quan,
                children: <Tabs
                tabPosition={tabPosition}
                items={item.chiNhanh?.map((chiNhanh)=>(
                    {
                       key:chiNhanh.maPhongKHam,
                       label:<>
                       <h2 className='text-left'>Phòng Khám {chiNhanh.maPhongKHam} - Nhi Đồng 315</h2>
                       <h2 className='text-left'>Giờ làm việc: Sáng T2-CN: {chiNhanh.gioLamViet} <br /> Chiều T2-CN: {chiNhanh.gioLamViet} </h2>
                       <h2>Địa Chỉ Phòng Khám: {chiNhanh.diaChi}</h2>        
                       </>, 
                       children:<><iframe src={chiNhanh.linMap} width="500" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></>
                    }
                ))}
                />
            }
        ))}
        />
    </div>
  )
}

export default MapTabs