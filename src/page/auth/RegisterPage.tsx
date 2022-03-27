import AuthComponent from '../../components/AuthComponent'
import InputPassword from '../../components/inputComponent'
const RegisterPage = () => {
    return (
        <AuthComponent>
            <div className="block w-[460px] h-full pt-[90px] relative">
                <div className="flex text-center place-content-center">
                    <img className="w-[100px] h-[100px]"
                        src="https://smileeye.edu.vn/assets/images/photo_2021-07-14_10-53-20.jpg" />
                    <h1 className="pt-8 pl-8  text-center font-bold text-[25px]">Login</h1>
                </div>
                <div className="p-2 text-[14px] grid grid-cols-1 grid-flow-row  gap-4">
                    <h3>Name</h3>
                    <input className="border-[1px] pl-2 w-full h-[40px] rounded-md" type={'text'} placeholder={'kelvin'} name={'username'} />
                    <h3>Email</h3>
                    <input className="border-[1px] pl-2 w-full h-[40px] rounded-md" type={'text'} placeholder={'example@gmail.com'} name={'username'} />
                    <h3>Phone</h3>
                    <input className="border-[1px] pl-2 w-full h-[40px] rounded-md" type={'text'} placeholder={'095682927893'} name={'username'} />
                    <h3>Password</h3>
                    <InputPassword/>
                    <h3>Confirm Password</h3>
                    <InputPassword/>
                   <div className='flex'>
                    <label>
                        <input type={'checkbox'} name="option" className="peer bg-gray-400 rounded-full appearance-none  w-10 h-5 checked:bg-blue-500" />
                        <div className="peer-checked:translate-x-[1.3rem] ease-in-out duration-300  w-4 h-4 bg-white rounded-full -translate-y-[23.5px] translate-x-[10%]" ></div>
                    </label>
                    <h5 className="text-gray-500 text-ellipsis pl-2">News and features updates, as well as occasional company announcements.</h5>
                    </div>
                    <div className="text-center">
                        <button className="text-white md:font-bold text-center w-[120px] h-[40px] rounded-md bg-blue-500">Register</button>
                    </div>
                </div>
                <div className="pt-20">
                    <h4 className="text-center">Already have an account? <a className="text-blue-500" href="/logIn">Log in</a> </h4>
                </div>
            </div>
        </AuthComponent>
    )
}

export default RegisterPage