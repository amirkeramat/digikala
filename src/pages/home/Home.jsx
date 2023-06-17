import React, { useEffect } from 'react'
import { fetchGetData } from '../../features/home/homeSlice'
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  useEffect(()=>{
    dispatch(fetchGetData("https://leverapi.f4rd1n.ir/api/digikala"));
  },[])
  const dispatch = useDispatch()
  const homeStore = useSelector(state=>state.homeStore)
  console.log(homeStore);
  return (
    <div>Home</div>
  )
}
