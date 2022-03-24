import {BsEyeSlash ,BsEye } from 'react-icons/bs'
import { useState } from "react";

export default function InputPassword(){
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
    return (
        <div className='relative h-auto'>
        <input className="border-[1px] pl-2 w-full h-[40px] rounded-md" placeholder={'password'} 
        type={passwordShown ? "text" : "password"} name={'password'} />
         <button onClick={togglePassword} className="absolute right-2 top-3">
             {passwordShown ? <BsEye/> : <BsEyeSlash/>}</button>
        </div>
    )
}