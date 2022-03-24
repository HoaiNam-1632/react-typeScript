import React from "react";
import { AiOutlineMore, AiOutlineLike, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { FaRegCommentDots, FaExternalLinkAlt } from 'react-icons/fa'

type Props = {
    src?: String
    avatar?: String
    title?: String
    content?: String
    children?: JSX.Element
    numberStar?: number
    category?: String
    time?: String
    position?: String
    customClass?: String
    colorText?: String
}
const CardProject = ({src, avatar, children, title}: Props) =>{
    return(
        <div className='shadow-md rounded-lg relative w-auto h-[421px] m-auto'>
            <a href="/detailProject">     
            <div className="bg-black  w-full h-[215px] rounded-lg text-white">
                <div className="font-[500] text-center top-[6em] left-[35%] z-[20] absolute flex space-x-2">
                <h5 className="">View Detail</h5>
                <span className="m-auto"><FaExternalLinkAlt /></span>
                </div>
            </div>
            <img className='w-full h-[215px] z-[30] rounded-lg absolute hover:opacity-[0.5] hover:z-[10] top-0'
                src={`${src}`}/>
            </a>
            
            <div className="flex w-auto">
                <img className='mt-1 ml-1 w-[32px] h-[32px] rounded-full'
                    src={`${avatar || 'https://smileeye.edu.vn/assets/images/photo_2021-07-14_10-53-20.jpg'}`}/>
                <a className='my-auto pl-2 rounded-full  text-[#0369A1] font-medium' >
                    {title}
                </a>
            </div>
            <div className="grid grid-cols-5 grid-flow-row gap-8 mt-2 px-2 text-[12px]">
                <div className="flex">
                    <i className="text-[18px] m-auto"> <AiOutlineLike /> </i>
                    <h4 className='m-auto'>100</h4>
                </div>
                <div className="flex">
                    <i className="text-[18px] m-auto"> <FaRegCommentDots /></i>
                    <h4 className='m-auto'>246</h4>
                </div>
                <div className="flex">
                    <i className="text-[18px] m-auto"> <AiOutlineHeart /></i>
                    <h4 className=''>380</h4>
                </div>
                <i className="text-[18px] m-auto"><AiOutlineShareAlt /></i>
                <i className="text-[18px] m-auto"><AiOutlineMore /></i>
            </div>
            {children}
        </div>
    )
}
export default CardProject