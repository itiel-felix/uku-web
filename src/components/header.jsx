

function Header() {
    return (
        <header className="bg-black text-white flex w-full font-sans ">

            <div className="bg-white w-12 h-12  sm:h-16 sm:w-16 flex items-center justify-center rounded-full font-extrabold min-w-12 min-h-12 text-gray-700  sm:mr-4 mr-0 sm:ml-6  ml-3 sm:mt-3 mt-5 text-center text-overflow">
            </div>
            <nav className="mx-auto flex items-center justify-center lg:px-8" aria-label="Global">
                <div
                    className='flex  w-3/4 sm:w-auto bg-transparent px-6 py-3 rounded-xl outline outline-gray-600'>

                    <input type='text' placeholder='Search something...'
                        className='w-full text-sm lg:text-sm bg-transparent outline-none  text-white' />
                </div>
            </nav>
            <div className="bg-transparent items-center  pt-6 pb-6">
                <button className="bg-[#FFA629]  hover:bg-[#eb9621] text-white font-bold py-3 
                active:bg-[#be7b1c]
                sm:ml-16
                mr-2
                text-sm
                min-w-16
                rounded-xl">
                    Sign in
                </button>
            </div>
        </header>
    )
}

export default Header;