import { IoLogoXing } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='max-w-7xl mx-auto px-3 py-3 sm:px-6 lg:px-8 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <IoLogoXing className='text-[48px] md:text-[50px] text-white' />
                <span className='hidden lg:flex font-semibold text-sm'>suyashtambitkar9@gmail.com</span>
            </div>

            <div>
                <Link to={"/about"}>
                    <button className="border-2 border-[#6b6ed1] hover:border-[#6b6ed1] bg-[#6b6ed1] rounded-full text-sm md:text-base px-4 py-1">About Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Navigation