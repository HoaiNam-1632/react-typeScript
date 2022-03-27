type Props = {
    children?: JSX.Element;
};
export default function AuthComponent({children}: Props) {
    return (
        <div className="relative grid grid-cols-2 grid-flow-row ">
            <div className="flex justify-center">
                {children}
            </div>
            <div className="relative">
                <img className="object-fit overflow-auto"
                    src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhY3R8ZW58MHx8MHx8&w=1000&q=80" />
                <h3 className="absolute text-white font-[500] text-[50px] top-[7em] left-[80px]">PROJECT DESCRIPTION</h3>
            </div>
        </div>
    )
}

