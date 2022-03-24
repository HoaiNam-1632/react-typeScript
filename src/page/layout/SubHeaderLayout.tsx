import React from "react";

type Props ={
    name?:string;
}
const ListTitle = ({name}: Props) =>{
  return (  
    <label className="relative  h-[45px] hover:text-blue-600">
         <input  className="peer absolute opacity-0 top-0" name="test" type={'radio'}/>
        <h3 className=" cursor-pointer peer-checked:text-blue-600">{name}</h3>
        <div className="bg-blue-500  w-0 peer-checked:w-full   peer-hover:w-full ease-in-out duration-300   h-[2px] absolute bottom-0" ></div>
    </label>
  )
}

const SubHeaderLayout = () => {
    return (
        <div className="border-b-[0.5px] border-gray-400 h-[60px] w-full mx-auto relative">
            <div className="py-4 text-center font-[500] text-gray-500 text-[18px] grid grid-cols-8 grid-flow-row gap-4">
               <ListTitle name={'All'}/>
                <ListTitle name={'Ideas'}/>
                <ListTitle name={'OnBoard'}/>
                <ListTitle name={'Running'}/>
                <ListTitle name={'Done'}/>
                <ListTitle name={'In Use'}/>
            </div>
        </div>
    )
}

export default SubHeaderLayout