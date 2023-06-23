import React, { useEffect } from "react";
import LayoutWeb from "../../HOCs/LayoutWeb";

const Content = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <LayoutWeb>
      <section className="mt-16 py-12 w-4/5 container mx-auto">
        <h2 className="font-semibold text-xl py-2">
          Viêm xoang gây nên những biến chứng nghiêm trọng gì
        </h2>
        <p className="text-base">
          Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi
          là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp ở
          các khoang mũi. Khi này trong mũi sẽ có sự phù nề và sưng tấy khiến
          cho các chất dịch nhầy, lỏng ở niêm mạc mũi sẽ tiết ra nhiều và sẽ ảnh
          hưởng đến các tác nhân và làm nên tình trạng tắc nghẽn tại các khoang.
        </p>
        <h2 className="font-semibold text-xl py-2">Viêm xoang là gì </h2>
        <p className="text-base">
          Viêm xoang là một dạng bệnh thường xuất hiện ở nhiều người và được gọi
          là viêm xoang mũi. Tình trạng viêm nhiễm của các lớp viêm mạc hô hấp ở
          các khoang mũi. Khi này trong mũi sẽ có sự phù nề và sưng tấy khiến
          cho các chất dịch nhầy, lỏng ở niêm mạc mũi sẽ tiết ra nhiều và sẽ ảnh
          hưởng đến các tác nhân và làm nên tình trạng tắc nghẽn tại các khoang.
        </p>
        <img
          src="https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/gfgf-01.png"
          alt="#"
        />
        <p>
          Bệnh lý viêm xoang ở người bệnh sẽ chia thành: <br />
          <br /> Viêm xoang cấp tính: lúc này viêm xoang sẽ được hình thành bởi
          quá trình nhiễm trùng đường hô hấp trên. Triệu chứng này sẽ thường
          giống với bệnh cảm lạnh, cảm cúm. Chính vì vậy người bệnh sẽ thường
          chủ quan và không thực hiện biện pháp thăm khám. Bệnh thường hết trong
          khoảng thời gian từ hai đến bốn tuần
          <br /> Viêm xoang mãn tính: khi bệnh lý kéo dài quá 12 tuần thì đây có
          thể là dấu hiệu cho thấy được tình trạng viêm xoang đã chuyển sang mãn
          tính 
          <br />
          Viêm xoang bán gấp: giai đoạn này sẽ chuyển biến tiếp theo của
          bệnh lý cấp tính. Đây cũng là thời gian mà các triệu chứng của viêm
          xoang được xem là nhẹ nhất. Người bệnh thường sẽ hết trong khoảng 12
          tuần đổ lại
        </p>
        <h2 className="font-semibold text-xl py-2">Những nguyên nhân gây nên viêm xoang</h2>
        <img src="https://nhanhauclinic.com.vn/wp-content/uploads/2023/06/u46ertr-01.png" alt="#" />
      </section>
    </LayoutWeb>
  );
};

export default Content;
