import React from "react";

import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

const MainHeader = ({ darkMode, changeDarkMode }) => {
    return (
        <nav className="w-full relative py-2 bg-white shadow-lg text-gray-600 dark:bg-slate-700 dark:text-slate-200 rounded-md alk-sanet">
            <div className="container mx-auto">
                <div className=" w-full flex flex-col lg:flex-row">
                    <div className="flex justify-between lg:flex-row px-3 py-2">
                        <a href="javascript:;" className="flex w-full items-center ml-2 text-lg">
                            Examinator
                        </a>
                        <button data-collapse-toggle="header-navbar" type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="header-navbar" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden s left-0 absolute bg-white dark:bg-slate-700 lg:static top-[95%] w-full lg:flex p-2 lg:pl-11 shadow-xl lg:shadow-none rounded-b-lg" id="header-navbar">
                        <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4 lg:mr-5">
                            <li>
                                <a href="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">მთავარი</a>
                            </li>
                            <li>
                                <a href="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">ჩვენს შესახებ</a>
                            </li>
                            <li>
                                <a href="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">პირობები</a>
                            </li>
                            <li>
                                <a href="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">სერვისი</a>
                            </li>
                            <li>
                                <a href="javascript:;" className="flex items-center w-full justify-between text-lg hover:text-gray-400 dark:hover:text-slate-100 mb-2 md:mb-0">დაგვიკავშირდით</a>
                            </li>
                        </ul>
                        <div className='flex align-center w-fit mx-auto my-3 lg:my-0 lg:mx-0 lg:mr-3'>
                            <label htmlFor='ch' className="relative inline-flex items-center cursor-pointer">
                                <input id='ch' type="checkbox" checked={darkMode} className="sr-only peer" onChange={changeDarkMode} />
                                <div className={`
                                    w-20 h-9 bg-white dark:bg-slate-300 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.1)] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500
                                `}></div>
                                <span className={`
                                    absolute w-8 h-8  top-[2px] left-[2px] peer-checked:left-[14px] rounded-full peer transition-all duration-500 peer-checked:translate-x-full
                                    flex items-center justify-center
                                    text-amber-500
                                    peer-checked:text-slate-800
                                    text-2xl
                                `}>{darkMode ? <FaCloudMoon /> : <FaCloudSun />}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default MainHeader;
