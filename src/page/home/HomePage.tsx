import React from "react";
import HeaderLayout from "../layout/HeaderLayout";
import SubHeaderLayout from "../layout/SubHeaderLayout"
import CardProject from '../../components/CardProjectComponent'
import { MdAdd } from 'react-icons/md'
import image from '../../storage/image.json'
import { useQuery, gql } from "@apollo/client";
import { ALL_PROJECT} from "../../app/graphql/queries/ProjectQueries"
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
const Position = ({ title, src }: Props) => {
    return (<div className="w-9 hover:text-blue-500 cursor-pointer">
        <div className="border-2 hover:border-blue-500 w-8 h-8 text-[20px] p-1 border-dashed text-[#6B7280] bg-white  rounded-full">
           { src ? <img src={`${src}`}/> : <MdAdd /> }
        </div>
        <h3 className="text-[10px] text-center">{title}</h3>
    </div>
    )
}


const HomePage = () => {
    const { loading, error, data } = useQuery(ALL_PROJECT,{
        variables: {  type:"idea" },
      });
    const allProject = (data) ? data?.searchProject : null;
    const images = image;
    return (
        <HeaderLayout>
            <div className="mx-auto w-[98%]">
                <SubHeaderLayout />
                <div className="grid grid-cols-4 grid-flow-row gap-6 my-5 w-full">
                    {
                        (allProject) ?
                        allProject.map((pro: any) => {
                            var ramdom = Math.floor(Math.random() * 12);
                            return (
                                <CardProject title={pro?.name}
                                    src={images[ramdom]}                                  
                                    // avatar={'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'}
                                    avatar={pro?.user?.avatar_attachment?.thumb}
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
                        : <div className="w-[1080px] text-center">No data</div>
                    }
                </div>
            </div>
        </HeaderLayout>
    )
}

export default HomePage