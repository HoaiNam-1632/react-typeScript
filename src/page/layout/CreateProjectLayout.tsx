import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { FaStarOfLife } from 'react-icons/fa'
import { MdAdd } from 'react-icons/md'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { AiOutlineClose, AiOutlineSetting, AiOutlineHome, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

import {useState} from 'react'
type Props = {
    icon?: JSX.Element;
    title?: string;
    href?: string;
    children?: JSX.Element;
    customClass?: string;
    height?: string;
    width?: string;
    placeHolder?: string;
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
const FormInput = ({ title, children }: Props) => {
    return (
        <div className='border-t-[2px]'>
            <div className='grid grid-cols-3 my-5'>
                <h3 className=''>{title}</h3>
                <label className=''>
                    {children}
                </label>
            </div>
        </div>
    )
}

const InputAuthor = () => {
    return (
        <div className='flex space-x-3 w-[803px]'>
            <input
                className="peer w-[389px]  h-[38px] border-[2px] rounded-lg pl-2"
                name="test" type={'text'}
                placeholder='Chistian Nguyen'
            />
            <div className='space-y-3'>
                <div className='flex space-x-6 '>
                    <h3 className='m-auto'>Email</h3>
                    <span className='m-auto text-red-600 text-[8px]'><FaStarOfLife /></span>
                    <input
                        className="peer w-[327.92px] h-[38px] border-[2px] rounded-lg pl-2"
                        name="test" type={'text'}
                        placeholder='you@example.com'
                    />
                </div>
                <div className='flex space-x-4'>
                    <h3 className='m-auto'>Phone</h3>
                    <span className='m-auto text-red-600 text-[8px]'><FaStarOfLife /></span>
                    <input
                        className="peer w-[327.92px]  h-[38px] border-[2px] rounded-lg pl-2"
                        name="test" type={'text'}
                        placeholder='0987654321'
                    />
                </div>
            </div>
        </div>
    )
}

const Input = ({width, height, placeHolder}: Props) => {
    return (
        <div className={`flex space-x-3 w-[${width || '803px'}]`}>
            <input className={`peer w-full h-[${height || '38px'}] border-[2px] rounded-lg`} 
                name="test" type={'text'} 
                placeholder={placeHolder || ''}/>
        </div>
    )
}

const CreateProjectLayout = ({ children }: Props) => {
    return (
        <div className='bg-white w-[1280px]  absolute top-20 left-20 z-[99] block'>
            <div className='mx-auto w-[1216px] space-y-2 '>
                <div className='mt-5'>
                    <h3 className='text-[#0369A1] text-[16px] font-[600]'>Project Information </h3>
                </div>
                <div className='w-full h-[62px] rounded-lg text-[20px] text-[#0369A1] text-center bg-[#E0F2FE] flex space-x-4'>
                    <span className='text-[24px] my-auto ml-5'><BsInfoCircle /></span>
                    <h3 className='my-auto'>
                        Congratulations for having a great project. Please
                        <a className='font-[700] cursor-pointer underline  underline-offset-8'> see Pitch Deck sample here </a>
                        for well-prepared.
                    </h3>
                </div>
                <FormInput title='Type'>
                    <div>
                        <div className='flex space-x-3'>
                            <input className="peer my-auto" name="test" type={'radio'} />
                            <h3 className=" cursor-pointer peer-checked:text-blue-600">Project</h3>
                        </div>
                        <div className='flex space-x-3'>
                            <input className="peer my-auto" name="test" type={'radio'} />
                            <h3 className=" cursor-pointer peer-checked:text-blue-600">Idea</h3>
                        </div>
                    </div>
                </FormInput>
                <FormInput title='Idea/Project name'>
                    <div className='flex space-x-3 w-[803px]'>
                        <input className="peer w-full  h-[38px] border-[2px] rounded-lg" name="test" type={'text'} />
                    </div>
                </FormInput>
                <FormInput title='Main author name'>
                    <InputAuthor />
                </FormInput>
                <FormInput title='Co-author name'>
                    <div className=''>
                        <InputAuthor />
                        <button className='w-[124px] h-[38px] border-2 rounded-full mt-[5em]  -translate-x-[25em] flex'>
                            <span className='my-auto mx-1'><MdAdd /></span>
                            <h4 className='my-auto'>Co-author</h4>
                        </button>
                    </div>
                </FormInput>
                <FormInput title='Main description'>
                    {/* <Input width='803px' height='121px'/> */}
                    <div className='flex space-x-3 w-[803px]'>
                        <textarea className="peer w-full h-[121px] border-[2px] rounded-lg pl-2" name="test" />
                    </div>
                </FormInput>
                <FormInput title='Category (website, adon, extension, app, other...)'>
                        <Input/>
                </FormInput>
                <FormInput title='Programming Language'>
                        <Input/>
                </FormInput>
                <FormInput title='Framework'>
                        <Input/>
                </FormInput>
                <FormInput title='Time to do'>
                        <Input width='390px' />
                </FormInput>
                <FormInput title='Budget'>
                    <div className='flex'>
                        <Input width='390px'/>
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
                    </div>
                </FormInput>
            </div>
        </div>
    )
}
export default CreateProjectLayout