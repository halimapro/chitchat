import React from 'react'
import registrationimg from '../../assets/registration.png'

const Registration = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 flex justify-end'>
      <div className='mt-[225px] mr-[69px]'>
       <h1 className='font-nunito font-bold text-[34px] text-[#11175D]'>Get started with easily register</h1>
       <p className='font-nunito text-[20px] text-[#808080] mt-[13px]'>Free register and you can enjoy it</p>
       <div className='relative mt-[60px]'>
        <input type="text" className='w-96 py-[26px] px-[50px] border-2 border-black rounded-lg'/>
        <p className='absolute top-[-20px] left-[32px] font-nunito text-[13px] text-[#11175D] mt-[13px] tracking-[1px] px-[18px] bg-white'>Email Address</p>
       </div>
       <div className='relative mt-[60px]'>
        <input type="text" className='w-96 py-[26px] px-[50px] border-2  border-black rounded-lg'/>
        <p className='absolute top-[-20px] left-[32px] font-nunito text-[13px] text-[#11175D] mt-[13px] tracking-[1px] px-[18px] bg-white'>Ful Name</p>
       </div>
       <div className='relative mt-[60px]'>
        <input type="text" className='w-96 py-[26px] px-[50px] border-2  border-black rounded-lg'/>
        <p className='absolute top-[-20px] left-[32px] font-nunito text-[13px] text-[#11175D] mt-[13px] tracking-[1px] px-[18px] bg-white'>Password</p>
       </div>
       <div className='bg-primary mt-5 w-96 py-[20px] text-center rounded-full mt-[50pxcd chitchat]'>
        <a href=""className='font-nunito text-[20px] text-[#808080] mt-[13px]'>Sign up</a>
       </div>
       </div>
       </div>
      <div className='w-1/2'>
      <img className='w-full h-screen object-cover' src={registrationimg} alt="" />
      </div>  
      </div>
       )
}

export default Registration
