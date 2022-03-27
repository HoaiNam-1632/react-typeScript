
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { BsFillCalendarMinusFill,  } from 'react-icons/bs'
import { FaRegClipboard } from 'react-icons/fa'
import { GoTerminal } from 'react-icons/go'

type Props = {
    src?: String
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

export const Star = ({ numberStar,  customClass }: Props) => {
    var number = numberStar || 0
    var yellowStar = []
    var blackStar = []
    for (var i = 1; i <= 10; i++) {
        if (i <= number) {
            yellowStar.push(<span className="text-yellow-400"> <AiFillStar /></span>)
        }
        else {
            blackStar.push(<span><AiOutlineStar /></span>)
        }
    }
    return (
        <div className={"flex "+ customClass}>
            {yellowStar}
            {blackStar}
        </div>
    )
}

export const Card = ({ colorText, customClass, content, children }: Props) => {
    return (
        <div className={"rounded-lg " + customClass}>
            {(children)
                ?
                children
                :
                <h3 className={"mt-2 text-[24px]  font-[500] " + colorText}>{content}</h3>
            }
        </div>
    )
}

export const GridProject = ({ title, content, src, children }: Props) => {
    return (
        <div className="w-[323px] text-center relative cursor-pointer">
            <div className="bg-black w-full h-[215px] rounded-lg absolute opacity-0 hover:opacity-[0.4]"></div>
            <img className="w-[323px] h-[215px] rounded-lg "
                src={`${src}`} alt="" />
            <h2 className="text-[24px] font-[600]">{title}</h2>
            {
                (children)
                    ?
                    children
                    :
                    <h3 className="text-left text-[16px]">
                        {content}
                    </h3>
            }
        </div>
    )
}
export const JoinProject = ({ category, time, position, numberStar, }: Props) => {
    return (
        <div className="grid grid-rows-4 grid-flow-col gap-1 text-[16px] text-left">
            <IconInfo title={'Category: ' + category}>
                <FaRegClipboard />
            </IconInfo>
            <IconInfo title={'Time: ' + time}>
                <BsFillCalendarMinusFill />
            </IconInfo>
            <IconInfo title={'Position: ' + position}>
                <GoTerminal />
            </IconInfo>
            <div className="m-auto text-[24px]">
                <Star numberStar={numberStar} />
            </div>
        </div>
    )
}
export const IconInfo = ({ title, children, colorText, customClass }: Props) => {
    return (
        <div className={"flex " + customClass}>
            <span className={"my-auto mr-2 " + colorText}>
                {children}
            </span>
           <span>{title}</span>
        </div>
    )
}

export const ListProject = ({ title, children }: Props) => {
    return (
        <div className="">
            <div className="m-auto mt-5 rounded-lg shadow-lg shadow-gray-400/50 bg-orange-400 w-[382px] h-[68px] ">
                <h2 className="text-[36px]  text-center text-white">{title}</h2>
            </div>
            {children}
        </div>
    )
}
