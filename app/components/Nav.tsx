import catsdev from '@/public/catsdev.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { IoLogoOctocat } from "react-icons/io";


export default function Nav() {


  return (
    <nav className="h-[80px] w-full border-b border-b-gray-300 flex justify-between items-center p-5">
    
    <Link href="/">
         <div className='flex gap-2 items-center'>
           <Image src={catsdev} width={80} height={80} alt="logo navigateur" />
           <h1 className='text-white text-3xl font-bold'><span className='text-orange-500'>C</span>ats <span className='text-orange-500'>D</span>ev</h1>
           
         </div>
       
    </Link>


    <Link href="/sign-in">
      <button className="w-8 h-8 bg-orange-500 hover:bg-orange-600
                         text-white p-2 rounded-full flex items-center justify-center">
      
        <IoLogoOctocat/>
       
                        
       

      </button>
    
    </Link>

    </nav>
  )
}
