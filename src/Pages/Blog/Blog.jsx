import React, {useEffect} from 'react'
import LayoutWeb from '../../HOCs/LayoutWeb'
import { List } from 'antd'
import Froms from '../Home/Component/Form/Froms'
import { useNavigate } from 'react-router-dom'
const data = [{
    title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
    text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
{
  title:'Viêm Xoang gây nên những biến chứng nghiêm trọng gì',
  text: 'Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp [...]					'
},
]
const position = 'bottom'
const align = 'start'
const Blog = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
 const Navigate = useNavigate()
  return (
    <LayoutWeb>
         <section className='mt-16'>
          <div className='py-12 w-4/5 container mx-auto flex gap-5'>
            <div className='w-4/5'>
              <List 
                
                 itemLayout="vertical"
                 size="large"
                 pagination={{
                  position,
                  align,
                   onChange: (page) => {
                     console.log(page);
                   },
                   pageSize: 10,
                   
                 }}
                 dataSource={data}
                 renderItem={(item) => (
                  <List.Item
                    key={item.title}
                  >
                    <div className='flex gap-5'>
                    <div className='w-80' >
                        <img src="https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/gfgf-01.png" alt="#" />
                    </div>
                      <div >
                        <h2 className='font-semibold text-xl py-5'>{item.title}</h2>
                        <p className='text-base'>{item.text}</p>
                        <button className='border-2 rounded-lg px-2 font-semibold border-blue-500 text-blue-500 my-10' onClick={()=>{Navigate('/blog/content')}}>Xem chi tiết</button>
                      </div>
                      
                    </div>
                    
                  </List.Item>
                )}
              />
            </div>
            <div className='w-1/5' style={{backgroundColor:'#f5f5f5'}}>
              <Froms/>
            </div>
          </div>
         </section>
    </LayoutWeb>
   
  )
}

export default Blog