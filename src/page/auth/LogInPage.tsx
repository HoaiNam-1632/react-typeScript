import AuthComponent from '../../components/AuthComponent'
import InputPassword from '../../components/inputComponent'
const LogInPage = () => {
    return (
        <AuthComponent>
             <div className="block w-[460px] h-full pt-[90px] relative">
                 <div className="flex text-center place-content-center">
                   <img className="w-[100px] h-[100px]"
                        src="https://smileeye.edu.vn/assets/images/photo_2021-07-14_10-53-20.jpg" />
                    <h1 className="pt-8 pl-8  text-center font-bold text-[25px]">Login</h1>
                </div>
                <div className="p-2 text-[14px] grid grid-cols-1 grid-flow-row  gap-4">
                    <h3>Email</h3>
                    <input className="border-[1px] pl-2 w-full h-[40px] rounded-md" type={'text'} placeholder={'example@gmail.com'} name={'username'} />
                    <h3>Password</h3>
                    <InputPassword/>
                    <h5 className="text-gray-500 text-center">Forgot password? <a className="text-blue-500" href="">Click here</a></h5>
                    <div className="text-center">
                        <button className="text-white md:font-bold text-center w-[120px] h-[40px] rounded-md bg-blue-500">Log in</button>
                    </div>
                </div>
                <div className="pt-52">
                    <h4 className="text-center">Don't have an account? <a className="text-blue-500" href="/register">Register!</a> </h4>
                </div>
            </div> 
            </AuthComponent>
    )
}

export default LogInPage