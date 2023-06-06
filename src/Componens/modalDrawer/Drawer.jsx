import React, { useState } from "react";
import {Tooltip} from 'antd'
import "./style.scss";
const Drawer = () => {
  const [value, setValue] = useState(true);
  const onChange = () => {
    value ? setValue(false) : setValue(true);
  };
  return (
    <div>
       <button className={value ? 'button_drawer':'button_drawer active'} onClick={onChange}>
          <i class="fa fa-angle-double-right"></i>
      </button>
       <div className={value ? 'container_drawer' : 'container_drawer active' }> 
     <div className="content_drawer">
        <ul className="text-center">
          <li>
            <Tooltip title='Zalo' placement="left" color="blue">
              <a href=""> <i class="fa fa-phone"></i></a>
            </Tooltip>
           
          </li>
          <li>
            <Tooltip title='Facebook' placement="left" color="blue">
              <a href=""> <i class="fab fa-facebook-f"></i></a>
            </Tooltip>
           
          </li>
          <li>
            <Tooltip title='Hổ Trợ' placement="left" color="blue">
              <a href=""> <i class="fa fa-headset"></i></a>
              <img src="" alt="" />
            </Tooltip>
          
          </li>
        </ul>
      </div> 
    </div>
    </div>
   
  );
};
export default Drawer;
