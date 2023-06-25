import React from 'react'
import useHomeState from '../../../hooks/state/useHomeState'
import Banners from './banners/Banners';
import Category from '../category/recommendCategory/RecommendCategory';
export const Hero = () => {
    const {banners,recommendationSubCategories}= useHomeState()
  return (
    <div className='container'>
      <Banners data={banners} />
      <Category data={recommendationSubCategories} title={"دسته بندی منتخب"} />
    </div>
  );
}
