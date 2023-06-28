import React, { useState } from "react";
import useProductState from "../../../hooks/state/useProductState";
const Description = () => {
  const { introduce } = useProductState();
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="col-span-1 md:col-span-3 relative bg-gray-200/50 shadow-xl p-4 rounded-xl">
      <h1 className="font-bold text-4xl p-4">توضیحات محصول</h1>
      <p
        className={`overflow-hidden  ${
          showMore ? "max-h-auto  " : "max-h-[70px]"
        }`}
      >
        {introduce !== null
          ? introduce
          : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}
      </p>
      <button
        onClick={() => setShowMore((prv) => !prv)}
        className="bg-blue-500/10 text-blue-500 p-2 mt-2 rounded-xl"
      >
        {showMore ? "مشاهده کمتر" : "مشاهده بیشتر"}
      </button>
      <span
        className={`absolute ${
          showMore ? "hidden" : "block"
        } bg-gray-50/50 bottom-16 left-0 right-0 w-full h-[20px] z-10 rounded-3xl `}
      ></span>
    </div>
  );
};

export default Description;
