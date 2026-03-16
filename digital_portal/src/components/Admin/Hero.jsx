import React from 'react';
import {Bell,LogOut} from 'lucide-react'

function Hero({title}) {
    return(
        <header className='flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6'>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <div className='flex items-center gap-6'>
                        <button className='relative p-2 rounded-full hover:bg-ray-100 dark:hover:bg-gray-800 transition-colors'>
                            <Bell className='h-5 w-5' />
                            <span className='absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full  bg-red-500 text-[10px] font-medium text-white flex items-center justify-center'>4</span>
                        </button>
                        <div className='flex items-center gap-3'>
                            <div className='h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-700 dark:text-teal-300 font-medium text-lg'>MA</div>
                            <div className='hidden sm:block'>
                                <p className='text-sm font-medium'>Marius</p>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>Administrator</p>                           
                                 </div>
                        </div>
                        <button className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-red-600 transition-colors'><LogOut className='w-5 h-5' /></button>
                    </div>
        </header>
    )
}

export default Hero;