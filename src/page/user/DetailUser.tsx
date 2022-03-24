import HeaderLayout from "../layout/HeaderLayout";
import { BsFillCalendarMinusFill, BsTelephoneFill } from 'react-icons/bs'
import { IoMaleFemale } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { RiCheckboxBlankFill } from 'react-icons/ri'
import { Star, IconInfo, ListProject, JoinProject, GridProject, Card } from '../../component/DetailUserComponent'
const DetailUserPage = () => {
    return (
        <HeaderLayout>
            <div className="" >
                <div className="mx-10 flex">
                    <div>
                        <div className="w-50% border-b-4 h-[36em] border-[#FDBA74] p-4">
                            <div className="mx-20">
                                <img className="rounded-full w-[454px] h-[454px]"
                                    src="https://imageio.forbes.com/specials-images/imageserve/5f4ebe0c87612dab4f12a597/0x0.jpg?format=jpg&crop=3392,3395,x292,y592,safe&fit=crop" alt="" />
                            </div>
                            <div className="pt-4  text-[60px] flex m-auto ">
                                <Star numberStar={6} />
                            </div>
                        </div>
                        <div className="w-full">
                            <ListProject title={'Self Ideas/Projects'}>
                                <div className="grid grid-cols-2 grid-flow-row gap-4 my-5">
                                    <GridProject
                                        src={'https://coachingskills.vn/wp-content/uploads/2020/06/Untitled-design-2-1.png'}
                                        title={' Project IT Training'}
                                        content={`Arcu nulla feugiat blandit sit eget cras integer habitant.
                                             Mattis praesent vel, gravida scelerisque mi urna diam erat.
                                              Mauris fames.`} />
                                    <GridProject
                                        src={'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2020-09/computer_programmer.jpg'}
                                        title={'Soft Ware Engineer'}
                                        content={`Arcu nulla feugiat blandit sit eget cras integer habitant.
                                             Mattis praesent vel, gravida scelerisque mi urna diam erat.
                                              Mauris fames.`} />
                                </div>
                            </ListProject>
                            <ListProject title={'Joined Projects'}>
                                <div className="grid grid-cols-2 grid-flow-row gap-4 my-5">
                                    <GridProject
                                        src={'https://imageio.forbes.com/specials-images/imageserve/5fd9103fcdfffb8c55b74fb8/Smart-Female-IT-Programer-Working-on-Desktop-Computer-in-Data-Center-System-Control/960x0.jpg?fit=bounds&format=jpg&width=960'}
                                        title={'Soft Ware Engineer'}>
                                        <JoinProject
                                            category={'Web-app'}
                                            time={'20/01/2022 - 20/04/2022'}
                                            position={'Back End Developer'}
                                            numberStar={4}
                                        />
                                    </GridProject>
                                    <GridProject
                                        src={'https://img.timviec.com.vn/2020/04/software-engineer-la-gi1.jpg'}
                                        title={'Soft Ware Engineer'}>
                                        <JoinProject
                                            category={'Web-app'}
                                            time={'20/01/2022 - 20/04/2022'}
                                            position={'Back End Developer'}
                                            numberStar={2}
                                        />
                                    </GridProject>
                                    <GridProject
                                        src={'https://www.herzing.edu/sites/default/files/styles/fp_960_640/public/2020-09/how-to-become-software-engineer.jpg.webp?itok=3WVOMgAJ'}
                                        title={'Soft Ware Engineer'}>
                                        <JoinProject
                                            category={'Web-app'}
                                            time={'20/01/2022 - 20/04/2022'}
                                            position={'Back End Developer'}
                                            numberStar={6}
                                        />
                                    </GridProject>
                                    <GridProject
                                        src={'https://academy.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png'}
                                        title={'Soft Ware Engineer'}>
                                        <JoinProject
                                            category={'Web-app'}
                                            time={'20/01/2022 - 20/04/2022'}
                                            position={'Back End Developer'}
                                            numberStar={8}
                                        />
                                    </GridProject>
                                    <GridProject
                                        src={'https://static.ybox.vn/2018/8/5/1533867537739-developer.jpeg'}
                                        title={'Soft Ware Engineer'}>
                                        <JoinProject
                                            category={'Web-app'}
                                            time={'20/01/2022 - 20/04/2022'}
                                            position={'Back End Developer'}
                                            numberStar={3}
                                        />
                                    </GridProject>
                                    <GridProject
                                        src={'https://kienthuclaptrinh.vn/wp-content/uploads/2020/10/7.jpg'}
                                        title={'Soft Ware Engineer'}>
                                        <JoinProject
                                            category={'Web-app'}
                                            time={'20/01/2022 - 20/04/2022'}
                                            position={'Back End Developer'}
                                            numberStar={9}
                                        />
                                    </GridProject>
                                </div>
                            </ListProject>
                        </div>
                    </div>
                    <div>
                        <div className="border-b-4 border-[#FDBA74] mx-10 h-[36em] ">
                            <div className="text-[66px] text-[#0369A1] font-[600] ">
                                <h2>BILL GATES</h2>
                            </div>
                            <div className="text-[24px] mt-10">
                                <div className="text-[#2563EB] text-[40px]   font-[500]">
                                    <h3>BACK END DEVERLOPER</h3>
                                </div>
                                <div className="grid grid-cols-3 gap-3 py-5">
                                    <h4 className="flex">
                                        <span className="my-auto mr-2">
                                            <BsFillCalendarMinusFill />
                                        </span>
                                        01/01/1996
                                    </h4>
                                    <h4 className="flex">
                                        <span className="my-auto mr-2">
                                            <IoMaleFemale />
                                        </span>
                                        male
                                    </h4>
                                    <h4 className="flex">
                                        <span className="my-auto mr-2">
                                            <BsTelephoneFill />
                                        </span>
                                        0909 888 888
                                    </h4>
                                </div>
                                <div className="">
                                    <h4 className="flex mb-2">
                                        <span className="mt-2 mr-2">
                                            <GrMail />
                                        </span>
                                        christian.nguyen.96@gmail.com
                                    </h4>
                                    <h4 className="flex w-[420px] mt-4">
                                        <span className="my-2 mr-2">
                                            <FaMapMarkerAlt />
                                        </span>
                                        81, 6th street, Tan Phong Ward,
                                        district 7, Ho Chi Minh city.
                                    </h4>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 text-[14px] gap-3 mt-10 text-center">
                                <div className=" rounded-lg shadow-lg border-[1px] bg-white ">
                                    <h3>Self Ideas/Project</h3>
                                    <h3 className="text-[#0369A1] text-[30px] font-[600] ">2</h3>
                                </div>
                                <div className="rounded-lg shadow-lg border-[1px] bg-white ">
                                    <h3>Joined Project</h3>
                                    <h3 className="text-[#0369A1] text-[30px] font-[600] ">6</h3>
                                </div>
                                <div className="rounded-lg shadow-lg border-[1px] bg-white ">
                                    <h3>Framework</h3>
                                    <h3 className="text-[#0369A1] text-[30px] font-[600]">6</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full ml-10">
                            <ListProject title={'Plan'}>
                                <div className="w-[675px] text-[24px] font-[400] mt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cursus facilisis vel, tempus rhoncus. In quam nisl, eu pharetra in quam.
                                    Adipiscing a, sed adipiscing rhoncus, nulla.
                                    Aenean orci fermentum scelerisque risus tincidunt ut habitasse.
                                    Magna adipiscing urna donec enim. Pellentesque sed pretium vel purus.
                                </div>
                            </ListProject>
                            <ListProject title={'Language'}>
                                <div className="w-[675px] text-[24px] mx-auto mt-5">
                                    <div className="grid grid-cols-3 grid-flow-row text-center">
                                        <Card
                                            customClass={'bg-yellow-100 h-[57px] w-[160px]'}
                                            colorText={'text-yellow-800'}
                                            content={'Vietnamese'} />
                                        <Card
                                            customClass={'bg-green-100 h-[57px] w-[160px]'}
                                            colorText={'text-green-800'}
                                            content={'English'} />
                                        <Card
                                            customClass={'bg-blue-100 h-[57px] w-[160px]'}
                                            colorText={'text-blue-800'}
                                            content={'Japanese'} />
                                    </div>
                                </div>
                            </ListProject>
                            <ListProject title={'Programming Language'}>
                                <div className="w-[675px] text-[24px] mx-auto mt-5">
                                    <div className="grid grid-cols-3 grid-flow-row text-center">
                                        <Card customClass={'shadow w-[220px] mx-[10em]'}>
                                            <div className="grid grid-cols-1 gap-5 py-6">
                                                <IconInfo title={'PHP'}
                                                    customClass={'text-[#35B26F] text-[16px] mx-10 mt-2'}
                                                    colorText={'text-[#2E9960]'}>
                                                    <RiCheckboxBlankFill />
                                                </IconInfo>
                                                <IconInfo title={'HTML'}
                                                    customClass={'text-[#2563EB] text-[16px] mx-10 mt-2'}
                                                    colorText={'text-[#0284C7]'}>
                                                    <RiCheckboxBlankFill />
                                                </IconInfo>
                                                <IconInfo title={'JavaScript'}
                                                    customClass={'text-[#F2CE54] text-[16px] mx-10 mt-2'}
                                                    colorText={'text-[#CCAE47]'}>
                                                    <RiCheckboxBlankFill />
                                                </IconInfo>
                                                <IconInfo title={'CSS'}
                                                    customClass={'text-[#F2545D] text-[16px] mx-10 mt-2'}
                                                    colorText={'text-[#CC474E]'}>
                                                    <RiCheckboxBlankFill />
                                                </IconInfo>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </ListProject>
                            <ListProject title={'Framework'}>
                                <div className="w-[675px] text-[24px] mt-5">
                                    <div className="grid grid-cols-3 grid-flow-row text-center">
                                        <Card
                                            customClass={'bg-gray-100 h-[50px] w-[143px]'}
                                            colorText={'text-black'}
                                            content={'NoteJS'} />
                                        <Card
                                            customClass={'bg-red-100 h-[50px] w-[143px]'}
                                            colorText={'text-red-800'}
                                            content={'Spring'} />
                                        <Card
                                            customClass={'bg-yellow-100 h-[50px] w-[143px]'}
                                            colorText={'text-yellow-800'}
                                            content={'CakePHP'} />
                                    </div>
                                    <div className="grid grid-cols-3 grid-flow-row text-center mt-5 ml-16">
                                        <Card
                                            customClass={'bg-green-100 h-[50px] w-[143px]'}
                                            colorText={'text-green-800'}
                                            content={'.NET'} />
                                        <Card
                                            customClass={'bg-blue-100 h-[50px] w-[143px]'}
                                            colorText={'text-blue-800'}
                                            content={'Laravel'} />
                                        <Card
                                            customClass={'bg-purple-100 h-[50px] w-[143px]'}
                                            colorText={'text-purple-800'}
                                            content={'Tailwind'} />
                                    </div>
                                </div>
                            </ListProject>
                            <ListProject title={'Self Introduction'}>
                                <div className="w-[675px] mt-5">
                                    <h3 className="text-[24px] font-[400]">
                                        At arcu nullam scelerisque sed quisque. Sodales tellus adipiscing cursus odio adipiscing.
                                        Adipiscing tempor id aenean tristique. Nunc eget commodo id nec nisl in semper.
                                        Elit suscipit lacus donec augue. Quam vestibulum, fringilla ornare massa duis.
                                        Neque sagittis, turpis feugiat lectus etiam. Tortor massa semper quisque vitae, sed.
                                        Tristique sit neque faucibus nibh donec felis. Volutpat dolor lectus donec turpis.
                                    </h3>
                                </div>
                            </ListProject>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderLayout>
    )
}

export default DetailUserPage