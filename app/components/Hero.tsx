import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className='relative h-screen overflow-hidden'>
        <div className='absolute inset-0 w-full h-full'>
            {/* <div className='w-full h-full bg-fixed bg-cover bg-center z-0' style={{backgroundImage:'url("https://images.unsplash.com/photo-1726607102396-548750ce07f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8")'}}>
                
            </div> */}

            <div className='relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50'>
                <div className='text-center text-white flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-4xl font-bold md:text-6xl'>Cats <span className='text-orange-600'>Community</span></h1>
                    <p className='mt-4 text-xl md:text-2xl'>Find a Good vibe for this journey</p>

                    <Link href="/sign-in">
                      <button className="bg-orange-600 hover:bg-orange-600 text-white rounded-md p-3">start here!</button>
                    </Link>

                </div>

            </div>
        </div>
    </section>
  )
}
