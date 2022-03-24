import React from "react";
import HeaderLayout from "../layout/HeaderLayout";
import SubHeaderLayout from "../layout/SubHeaderLayout"
import CardProject from '../../component/CardProjectComponent'
import { MdAdd } from 'react-icons/md'
import project from '../../data/project.json'
import image from '../../storage/image.json'
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
const Position = ({ title }: Props) => {
    return (<div className="w-9 hover:text-blue-500 cursor-pointer">
        <div className="border-2 hover:border-blue-500 w-8 h-8 text-[20px] p-1 border-dashed text-[#6B7280] bg-white  rounded-full">
            <MdAdd />
        </div>
        <h3 className="text-[10px] text-center">{title}</h3>
    </div>
    )
}


const HomePage = () => {
    const data = project.data.searchProject;
    const images = image;
    return (
        <HeaderLayout>
            <div className="mx-auto w-[98%]">
                <SubHeaderLayout />
                <div className="grid grid-cols-4 grid-flow-row gap-6 my-5 w-full">
                    {
                        data.map((pro, index) => {
                            var ramdom = Math.floor(Math.random() * 12);
                            return (
                                <CardProject title={pro?.name}
                                    src={images[ramdom]}
                                    avatar={'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'}
                                >
                                    <div className='mt-5 mx-1 w-full grid grid-cols-7 gap-y-4  grid-flow-row '>
                                        <Position title="Leader" />
                                        <Position title="BE" />
                                        <Position title="FE" />
                                        <Position title="Tester" />
                                        <Position title="Pm" />
                                        <Position title="Po" />
                                        <Position title="QA" />
                                        <Position title="DEV" />
                                        <Position title="DEV" />
                                        <Position title="BE" />
                                        <Position title="QA" />
                                    </div>
                                </CardProject>
                            )
                        })
                    }
                    {/* <CardProject  title='Project IT Training'
                        src={'https://www.weareplatinum.net/uploads/4/9/7/0/4970931/it-program-management_orig.jpg'}
                        avatar={'https://imageio.forbes.com/specials-images/imageserve/5f4ebe0c87612dab4f12a597/0x0.jpg?format=jpg&crop=3392,3395,x292,y592,safe&fit=crop'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://coachingskills.vn/wp-content/uploads/2020/06/Untitled-design-2-1.png'}
                        avatar={'https://baoquocte.vn/stores/news_dataimages/lananh/082020/07/15/in_article/ceo-facebook-mark-zuckerberg-lan-dau-gia-nhap-clb-100-ty-usd.jpg?rt=20200807154403'} >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>

                    <CardProject  title='Project IT Training'
                        src={'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2020-09/computer_programmer.jpg'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://img.timviec.com.vn/2020/04/software-engineer-la-gi1.jpg'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://www.herzing.edu/sites/default/files/styles/fp_960_640/public/2020-09/how-to-become-software-engineer.jpg.webp?itok=3WVOMgAJ'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://academy.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://static.ybox.vn/2018/8/5/1533867537739-developer.jpeg'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://kienthuclaptrinh.vn/wp-content/uploads/2020/10/7.jpg'} >
                             <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                        </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://coachingskills.vn/wp-content/uploads/2020/06/Untitled-design-2-1.png'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject>
                    <CardProject  title='Project IT Training'
                        src={'https://learn.canva.com/wp-content/uploads/2018/08/rawpixel-669610-unsplash-1.jpg'}
                    >
                        <div className='mt-5 mx-1 w-full grid grid-cols-7 grid-flow-row '>
                            <Position title="Leader" />
                            <Position title="BE" />
                            <Position title="FE" />
                            <Position title="Tester" />
                            <Position title="Pm" />
                            <Position title="Po" />
                            <Position title="QA" />
                            <Position title="DEV" />
                            <Position title="DEV" />
                            <Position title="BE" />
                            <Position title="QA" />
                        </div>
                    </CardProject> */}
                </div>
            </div>
        </HeaderLayout>
    )
}

export default HomePage