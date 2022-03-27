import HeaderLayout from "../layout/HeaderLayout";
import SubHeaderLayout from "../layout/SubHeaderLayout"
import { AiOutlineMore, AiOutlineLike, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { MdAdd, MdAttachFile } from 'react-icons/md'
import {DetailProject} from '../../app/graphql/queries/ProjectQueries'
import { useQuery, gql } from "@apollo/client";
type Props = {
    position?: String
    title?: String
    content?: String
    src?: String
    children?: JSX.Element
}
const AssignPosition = ({ position, src }: Props) => {
    return (
        <div className="w-9 hover:text-blue-500 cursor-pointer">
              { src 
              ? <img src={`${src}`} className=" w-8 h-8 hover:border-2 hover:border-blue-500  text-[#6B7280] bg-white  rounded-full"/>
              :
                <div className="border-2 hover:border-blue-500 w-8 h-8 text-[20px] p-1 border-dashed text-[#6B7280] bg-white  rounded-full">
                <MdAdd /> 
                </div>
            }
            <h3 className="text-[10px] text-center">{position}</h3>
        </div>
    )
}
const ListInfo = ({ title, content, children }: Props) => {
    return (
        <tr className="h-[5em] border-b-[1px]">
            <td className="w-[220px] ">{title}</td>
            <td className="w-auto" colSpan={(children) ? 0 : 2}>{content}</td>
            {children}
        </tr>

    )
}

const Attachments = ({ title, content, children }: Props) => {
    return (
        <div className="relative p-2 border-b-2  flex">
            <div className="my-auto"><MdAttachFile /></div>
            <h4 className="">{title}</h4>
            <h4 className="text-indigo-600 hover:text-indigo-400 cursor-pointer absolute right-2 top-2">view</h4>
        </div>
    )
}

const DetailProjectPage =  () => {
    const detailProject = DetailProject()
    
    return (
        <HeaderLayout>
            <div className="pt-5 ml-3 w-auto ">
                <div className="flex">
                    <div className="w-[90%] mx-2 ">
                        <img className="h-[600px] rounded-lg"
                            src="https://konfinity-assets.s3.ap-south-1.amazonaws.com/blog/developer+vs+engineer.png" />
                        <div className="flex relative  py-2">
                            <h2 className="text-[#0C4A6E] text-[25px] "> {detailProject?.name}</h2>
                            <div className="grid grid-cols-5 absolute right-0 m-auto  grid-flow-row gap-8 px-2 text-[20px]">
                                <div className="flex ">
                                    <i className="m-auto hover:text-blue-400"> <AiOutlineLike /> </i>
                                    <h4 className='m-auto'>100</h4>
                                </div>
                                <div className="flex">
                                    <i className="m-auto hover:text-blue-400"> <FaRegCommentDots /></i>
                                    <h4 className='m-auto'>246</h4>
                                </div>
                                <div className="flex">
                                    <i className="m-auto hover:text-red-400"> <AiOutlineHeart /></i>
                                    <h4 className=''>380</h4>
                                </div>
                                <i className="m-auto"><AiOutlineShareAlt /></i>
                                <i className=" m-auto"><AiOutlineMore /></i>
                            </div>
                        </div>
                        <div className="flex  border-t-2 ">
                            <img className='my-auto w-[40px] h-[40px] rounded-full '
                                src='https://vcdn-vnexpress.vnecdn.net/2021/05/17/c63e9e030f06b15d6f90eb4e7a8131-8418-7213-1621222868.jpg' />
                            <div className="my-auto mx-2 w-full">
                                <h4 className="">{detailProject?.user?.name}</h4>
                                <a href="" className="text-[12px] text-[#6B7280] pb-[40em]">view profile</a>
                            </div>
                            <div className="flex mr-[10%] space-x-3">
                                <h3 className="m-auto ">Member:</h3>
                                <div className="m-auto grid grid-cols-7 grid-flow-row gap-8 py-1">
                                    {   
                                        (detailProject?.members)
                                        ?
                                        detailProject?.members.map((member:any) =>{
                                           return( <AssignPosition src={member?.memberUser?.avatar_attachment?.thumb}  position={member?.position} /> )                              
                                        })
                                        :<div></div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="border-t-2  py-4">
                            <h2 className="text-[30px] m-auto">Project Information</h2>
                        </div>
                        <div className="border-t-[1px]">
                            <table className="w-full">
                                <ListInfo title={'Main author name'} content={detailProject?.user?.name}>
                                    <td className="pl-[8px]">
                                        <h2 className="mx-auto ">{detailProject?.user?.email}</h2>
                                        <h2 className="mx-auto py-2">{detailProject?.user?.phone_number}</h2>
                                    </td>
                                </ListInfo>
                                <ListInfo title={'Co-author name'} content={'Margot Foster'}>
                                    <td className="pl-[8px]">
                                        <h2 className="mx-auto ">janecooper.admin.01@gmail.com</h2>
                                        <h2 className="mx-auto py-2">0909 888 888</h2>
                                    </td>
                                </ListInfo>
                                <ListInfo title={'Category'} content={detailProject?.category} />
                                <ListInfo title={'Salary'} content={detailProject?.salary?.money+" "+detailProject?.salary?.iso_code || ""} />
                                <ListInfo title={'Tuition'} content={detailProject?.budget?.money+" "+detailProject?.budget?.iso_code || ""} />
                                <ListInfo title={'Time to do:'} content={'From: 01/01/2022 to: 30/03/2022'} />
                                <ListInfo title={'Framework:'} content={'Laravel, Tailwind'} />
                                <ListInfo title={'Programing Language:'} content={'React Native, Java'} />
                                <ListInfo title={'Main description'} content={detailProject?.description} />
                                <ListInfo title={'Attachments'}>
                                    <td className="py-20" colSpan={2}>
                                        <div className="border-2 -translate-x-[8em] rounded-lg ">
                                            {                                       
                                                (detailProject?.attachments)
                                                ?
                                                detailProject?.attachments?.other.map((att: any) => {
                                                     return  <Attachments title={att.thumb} />
                                                })
                                                :
                                                <div></div>
                                            }
                                        </div>
                                    </td>
                                </ListInfo>
                            </table>
                        </div>
                    </div>
                    <div className="grid mx-2 grid-rows-3 gap-2 w-[400px] h-full">
                        <img className="w-[300px] h-[195px] rounded-lg"
                            src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80" />
                        <img className="w-[300px] h-[195px] rounded-lg"
                            src="https://coachingskills.vn/wp-content/uploads/2020/06/Untitled-design-2-1.png" />
                        <img className="w-[300px] h-[195px] rounded-lg"
                            src="https://learn.canva.com/wp-content/uploads/2018/08/rawpixel-669610-unsplash-1.jpg" />
                    </div>
                </div>

            </div>
        </HeaderLayout>
    )
}

export default DetailProjectPage
