import logo from '../assets/image/logo.png'
import icon from '../assets/image/icon.svg'
import mobile from '../assets/image/mobile.png'
const Header = () => {
    return (
        
        <div className="flex justify-between px-7 items-center">
            
            <div className=' hidden md:block' >
                <img src={logo} alt="" />
            </div>

            <div className='flex '>
            <div className='mt-2'>
                <button className='flex md:hidden cursor-pointer border border-[#0070BA]  rounded-full px-3 py-3 text-center  '> 
                    <img src={icon} alt="" className='w-[20px] h-fit' /> 
                <span className='ml-3  text-[10px] h-[12px] font-bold align-middle text-[#0070BA]'>Menu</span>
                </button>
            </div>
            <div className='ml-[70px]'>
                <img src={mobile} alt="" className='md:hidden block w-[56px] h-[50px]' />
            </div>
            </div>
  

            <div className=" hidden  md:block justify-center ">
                <span className='mr-8'>PERSONAL</span>
                <span className='ml-5'>BUSINESS</span>
                <span className='ml-5'>PARTNERS AND DEVELOPERS</span>
            </div>
            <div className=" flex gap-6 ">
                <span className='border border-[#0070BA] rounded-full px-5 py-2 h-fit md:mt-2'>Log in</span>
                <span className='border border-[#0070BA] bg-[#0070BA] h-fit px-5 py-2 rounded-full text-white text-center mt-2 hidden md:block'>Sign up</span>
            </div>
            
            


        </div>
        


    )


}
export default Header;