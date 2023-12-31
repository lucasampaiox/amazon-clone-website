import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {logo} from "../../assets/index"
import {allItems} from "../../constants/"
import HeaderBottom from './headerBottom';

const Header = () => {
  const [showAll, setShowAll] = useState(false)
 
  console.log(showAll)

  return (
    <div className='w-full sticky top-0 z-50'>
      <div className='w-full bg-amazon_blue text-white py-3 px-4 flex items-center'>
        <div className='headerHover'>
          <img className='w-24 mt-2' src={logo} alt='logo'></img>
        </div>

        <div className='headerHover'>
          <LocationOnOutlinedIcon/>
          <p className='text-sm font-light flex flex-col'>Delivery to <span className='text-sm font-semibold -mt-1 text-whiteText'>Norsk</span></p>
        </div>

        <div className='h-10 rounded-md flex flex-grow relative'>
        <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span><ArrowDropDownOutlinedIcon/></span></span>
        {showAll && (
          <div>
            <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
             
              {
                allItems.map((item) => (
                  <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200' key={item._id}>{item.title}</li>
                ))
              }
            </ul>
          </div>
        )}
          <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text'></input>
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'><SearchOutlinedIcon/></span>
          

        </div>

        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-sm text-lightText font-light '>Hello, sign in</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>Account & Lists{""}<span><ArrowDropDownOutlinedIcon/></span></p>
        </div>

        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-lightText font-light'>Returns</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>

        <div className='flex items-start justify-center headerHover relative'>
            <ShoppingCartOutlinedIcon/>
            <p className='text-xs font-semibold mt-3 text-whiteText '>Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center '>0</span></p>
        </div>
        

        

        
      </div>


      <HeaderBottom />
    </div>
  )
}

export default Header
