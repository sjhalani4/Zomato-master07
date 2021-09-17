import React, {useState} from 'react'
import {HiMenu} from 'react-icons/hi'
//components
import MenuListContainer from './MenuListContainer'
import {MdClose} from 'react-icons/md'

const FloatMenuBtn = () => {
    const [isClicked, setIsClicked] = useState(false);
      const toggleMenu = () => setIsClicked(prev=>!prev)

      

    return (
        <>
        <div className="fixed bottom-2 w-8/12 flex flex-col items-end gap-3 right-2 md:hidden">
            {isClicked&&<div className=" bg-white p-3 overflow-y-scroll h-48">
            <MenuListContainer/>
            </div>
            }

             <button onClick={toggleMenu} className="  text-white bg-yellow-900 flex gap-2 items-center px-3 py-2 rounded-full md:hidden">
                 {isClicked?<MdClose/> :<HiMenu/>} Menu
                 </button> 
                 </div>
               
        </>
    )
}

export default FloatMenuBtn;
