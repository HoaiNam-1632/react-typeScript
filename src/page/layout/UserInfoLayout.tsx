import React from "react";
import { Star, IconInfo } from "../../components/DetailUserComponent"
import { AiOutlineSetting } from 'react-icons/ai'
import {HiOutlineLogout} from 'react-icons/hi'
type Props = {
    title?: string;
}
const UserInfo = () => {
    return (
        <div className="bg-white">
            <div className="relative h-[8em]">
                <div className="w-full">
                    <img className="rounded-t-lg h-[76px] w-full"
                        src="https://nypost.com/wp-content/uploads/sites/2/2020/02/background-check.jpg?quality=80&strip=all" alt="" />
                </div>
                <div className="absolute top-5 left-20">
                    <img className="w-[109px] h-[109px] rounded-full"
                        src="https://imageio.forbes.com/specials-images/imageserve/5f4ebe0c87612dab4f12a597/0x0.jpg?format=jpg&crop=3392,3395,x292,y592,safe&fit=crop" alt="" />
                </div>
            </div>
            <div className="text-center space-y-2">
                <h2 className="text-[24px] text-cyan-700 font-[700]">BILL GATES</h2>
                <h3 className="text-cyan-500 text-[17px] font-[500]">Sub Leader</h3>
                <div className="text-[25px]">
                    <Star numberStar={6}
                        customClass="text-center ml-3" />
                </div>
            </div>
            <div className="text-center text-cyan-900 font-[500] space-y-2 space-x-5">
                <div className="ml-5 my-2">
                    <h3 className="text-left">
                        Self Ideas/Projects: 2
                    </h3>
                    <h4>+ Lorem isum rioe qou</h4>
                    <h4>+ Lorem isum rioe qou</h4>
                </div>
                <div>
                    <h3 className="text-left">
                        Joined Projects: 3
                    </h3>
                    <h4>+ Lorem isum rioe qou</h4>
                    <h4>+ Lorem isum rioe qou</h4>
                    <h4>+ Lorem isum rioe qou</h4>
                </div>
                <div>
                    <h3 className="text-left">
                        Language: English
                    </h3>
                    <h3 className="text-left">
                        All positions: BE, Sub-Leader
                    </h3>
                </div>
            </div>
            <div className="my-20">
                <div className="text-cyan-900 text-[14px] border-y-2 text-center">
                    <a href="/detailUser">
                        My Profile
                    </a>
                </div>
                <div className="grid grid-cols-2 text-center">
                    <div className="m-auto">
                        <a href="">
                            <IconInfo title={'Setting'} customClass={'text-gray-500 font-[500]'}>
                                <AiOutlineSetting />
                            </IconInfo>
                        </a>
                    </div>
                    <div className="m-auto">
                        <a href="">
                            <IconInfo title={'Log out'} customClass={'text-gray-500 font-[500]'}>
                                <HiOutlineLogout />
                            </IconInfo>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo