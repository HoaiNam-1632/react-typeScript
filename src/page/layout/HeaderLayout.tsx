import React from 'react'
import { BsList } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { IoMicCircleOutline } from 'react-icons/io5'
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineSetting, AiOutlineHome, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'

import UserInfo from './UserInfoLayout'
import CreateProjectLayout from './CreateProjectLayout'
import { useState } from "react";
import { Attributes } from 'react'

type Props = {
    icon?: JSX.Element;
    title?: string;
    href?: string;
    children?: JSX.Element;
    customClass?: string;
    onClick?: Event;
    outlineIcon?: Boolean
};


const DropDowMenu = ({ children }: Props) => {
    return (
        <div className='truncate'>
            <input type={'checkbox'} name="option" className="peer absolute top-0 opacity-0 rounded-full appearance-none  w-full  " />
            <div className={`peer-checked:mt-0 -mt-[15em]   duration-[420ms] truncate pl-5 text-[16px]`}>
                {children}
            </div>
        </div>
    )
}

const ListMenu = ({ icon, title, href, children, outlineIcon}: Props) => {
    const [iconDropDown, setIconDropDown] = useState(true);
    const toggleIconDropDown = () => {
        setIconDropDown(!iconDropDown);
    };
    return (
        <a href={href} className='flex h-[40px] mt-3  hover:bg-[#F6F9FB] hover:text-blue-600 relative   ' onClick={toggleIconDropDown}>
            <i className='my-auto pl-2 pr-2'>{icon}</i>
            <h3 className='my-auto font-[500]'>{title}</h3>
            { outlineIcon 
                ?
                <span className='absolute top-3 right-8'>{iconDropDown ? <AiOutlineDown /> : <AiOutlineUp />}</span>
                : 
                <span className=''></span>
            }
            {children}
        </a>
    )
}
const HeaderLayout = ({ children }: Props) => {
    const [menuShow, setMenuShow] = useState(false);
    const toggleMenu = () => {
        setMenuShow(!menuShow);
    };
    return (
        <div className='bg-slate-50 my-16 flex w-full'>
            <div className="w-full fixed top-0 left-0 right-0 z-[99]">
                <div id="taskbar" className="h-16 inline-flex w-full bg-white">
                    <button onClick={toggleMenu} className="text-[30px] my-auto px-5">
                        <BsList />
                    </button>
                    <a href='/'>
                        <img className="w-12 h-12 my-1 mx-5 ml-10"
                            src="https://smileeye.edu.vn/assets/images/photo_2021-07-14_10-53-20.jpg" />
                    </a>
                    <h3 className="text-center my-auto ml-[1em] text-[20px]">SmileEye</h3>
                    <input className="my-auto ml-20 pl-2 outline-none mr-0  w-[25em] h-[2.5em] rounded-l-lg border-[1px] " type={'text'} />
                    <span className="text-[20px] justify-center outline-none rounded-r-lg border-[1px] border-l-0 w-[40px] h-[40px] my-auto relative">
                        <button className="absolute  top-2 left-2" > <BiSearch /></button>
                    </span>
                    <span className="text-[35px] my-auto ml-5 mr-0"><IoMicCircleOutline /></span>
                    <button className="ml-10 mr-5  my-auto rounded-xl w-[12em] h-[3em] bg-orange-500 hover:bg-orange-400 text-white">+ New idea/project</button>
                    <span className="text-[35px] ml-4  my-auto border-2 rounded-full"><FaRegHandshake /></span>
                    <div className="my-auto mx-auto mr-9 flex cursor-pointer">
                        <img className="w-[40px] h-[40px] rounded-full "
                            src="https://imageio.forbes.com/specials-images/imageserve/5f4ebe0c87612dab4f12a597/0x0.jpg?format=jpg&crop=3392,3395,x292,y592,safe&fit=crop" />
                        <a className="text-center my-auto text-blue-600 font-[600] pl-2 ">BILL GATES</a>
                    </div>
                </div>
                <label>
                    <div className={`bg-black w-full h-full opacity-40 z-[99] fixed top-0 ${menuShow ? 'block' : 'block'} `}></div>
                    <div id="sideBar" className={`bg-white w-[20em] z-[99]  absolute ease-in-out duration-[420ms] top-0  ${menuShow ? 'left-0' : 'left-[-20em]'} `}>
                        <div className="flex relative">
                            <img className="w-12 h-12 my-auto mx-5 ml-2"
                                src="https://smileeye.edu.vn/assets/images/photo_2021-07-14_10-53-20.jpg" />
                            <h3 className="text-center my-auto ml-[1em] text-[20px]">SmileEye</h3>
                            <button
                                onClick={toggleMenu}
                                className=" top-2 right-5 absolute border-[1px] text-[20px] w-[30px] border-blue-400 rounded-lg h-[30px]">
                                <div className=' text-blue-400 m-auto ml-1'>
                                <AiOutlineClose />
                                </div>
                            </button>
                        </div>
                        <div className='block h-[40em] text-[20px] ml-2'>
                            <ListMenu icon={<AiOutlineHome />} title={'Home'} />
                            <label className='relative'>
                                    <ListMenu icon={<MdOutlineBusinessCenter />} title={'My Idea/Project'} outlineIcon={true}/>
                                <DropDowMenu>
                                    <div>
                                        <ListMenu title={'My Idea'} />
                                        <ListMenu title={'My Project'} />
                                        <ListMenu title={'Interested Project'} />
                                        <ListMenu title={'Joined Project'} />
                                    </div>
                                </DropDowMenu>
                            </label>
                            <ListMenu icon={<IoIosPeople />} title={'Admintration'} />
                            <label className='relative'>
                                <ListMenu icon={<AiOutlineSetting />} title={'Setting'} outlineIcon={true}/>
                                <DropDowMenu>
                                    <div>
                                        <ListMenu title={'Account'} />
                                        <ListMenu title={'Profile'} />
                                    </div>
                                </DropDowMenu>
                            </label>
                        </div>
                    </div>
                </label>
            </div>
            <div id="createProject" className=''>
                       <CreateProjectLayout/>
                </div>
            <div className='w-auto'>
                {children}
            </div>
            <label>
                <input type="checkbox" className='peer w-[10em] opacity-0 right-0 h-[3em] bg-black fixed top-0 z-[100] border-2' name="" id="" />
                <div className=' mx-0 peer-checked:mx-[130px]'></div>
                <div className='fixed top-16 right-0 w-0  invisible opacity peer-checked:right-1 peer-checked:w-auto peer-checked:visible  '>
                    <UserInfo />
                </div>
            </label>

        </div>
    )
}

export default HeaderLayout